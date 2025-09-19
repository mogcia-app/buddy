import { NextResponse } from 'next/server';
import { getNewsById, updateNews, deleteNews } from '../../../../lib/firestore';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const newsItem = await getNewsById(id);

    if (!newsItem) {
      return NextResponse.json(
        { success: false, message: 'お知らせが見つかりません' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: newsItem
    });
  } catch (error) {
    console.error('お知らせの取得エラー:', error);
    return NextResponse.json(
      { success: false, message: 'お知らせの取得に失敗しました' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();

    // バリデーション
    if (!body.title || !body.content || !body.excerpt || !body.category) {
      return NextResponse.json(
        { success: false, message: '必須フィールドが不足しています' },
        { status: 400 }
      );
    }

    const updateData = {
      title: body.title,
      content: body.content,
      excerpt: body.excerpt,
      category: body.category,
      isImportant: body.isImportant || false,
      publishedAt: new Date(body.publishedAt || Date.now()),
      author: body.author || '管理者'
    };

    const success = await updateNews(id, updateData);
    
    if (success) {
      return NextResponse.json({
        success: true,
        message: 'お知らせが更新されました'
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'お知らせの更新に失敗しました' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('お知らせの更新エラー:', error);
    return NextResponse.json(
      { success: false, message: 'お知らせの更新に失敗しました' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const success = await deleteNews(id);
    
    if (success) {
      return NextResponse.json({
        success: true,
        message: 'お知らせが削除されました'
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'お知らせの削除に失敗しました' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('お知らせの削除エラー:', error);
    return NextResponse.json(
      { success: false, message: 'お知らせの削除に失敗しました' },
      { status: 500 }
    );
  }
}
