import { NextResponse } from 'next/server';
import { getBlogById, updateBlog, deleteBlog } from '../../../../lib/firestore';


export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blogItem = await getBlogById(id);

    if (!blogItem) {
      return NextResponse.json(
        { success: false, message: 'ブログ記事が見つかりません' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: blogItem
    });
  } catch (error) {
    console.error('ブログの取得エラー:', error);
    return NextResponse.json(
      { success: false, message: 'ブログの取得に失敗しました' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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
      featured: body.featured || false,
      readTime: body.readTime || 5,
      author: body.author || '管理者',
      imageUrl: body.imageUrl
    };

    const success = await updateBlog(id, updateData);
    
    if (success) {
      return NextResponse.json({
        success: true,
        message: 'ブログ記事が更新されました'
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'ブログ記事の更新に失敗しました' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('ブログの更新エラー:', error);
    return NextResponse.json(
      { success: false, message: 'ブログ記事の更新に失敗しました' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const success = await deleteBlog(id);
    
    if (success) {
      return NextResponse.json({
        success: true,
        message: 'ブログ記事が削除されました'
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'ブログ記事の削除に失敗しました' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('ブログの削除エラー:', error);
    return NextResponse.json(
      { success: false, message: 'ブログ記事の削除に失敗しました' },
      { status: 500 }
    );
  }
}
