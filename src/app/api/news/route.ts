import { NextResponse } from 'next/server';
import { getNews, getNewsByCategory, createNews } from '../../../lib/firestore';
import { NewsItem } from '../../../types/firebase';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = searchParams.get('limit');
    const important = searchParams.get('important');

    let news: NewsItem[] = [];

    // カテゴリフィルタ
    if (category && ['announcement', 'update', 'event'].includes(category)) {
      news = await getNewsByCategory(category);
    } else {
      news = await getNews();
    }

    // 重要なお知らせのみ
    if (important === 'true') {
      news = news.filter(item => item.isImportant);
    }

    // 件数制限
    if (limit) {
      const limitNum = parseInt(limit);
      news = news.slice(0, limitNum);
    }

    return NextResponse.json({
      success: true,
      data: news,
      total: news.length
    });
  } catch (error) {
    console.error('お知らせの取得エラー:', error);
    return NextResponse.json(
      { success: false, message: 'お知らせの取得に失敗しました' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // バリデーション
    if (!body.title || !body.content || !body.excerpt || !body.category) {
      return NextResponse.json(
        { success: false, message: '必須フィールドが不足しています' },
        { status: 400 }
      );
    }

    const newsData = {
      title: body.title,
      content: body.content,
      excerpt: body.excerpt,
      category: body.category,
      isImportant: body.isImportant || false,
      publishedAt: new Date(body.publishedAt || Date.now()),
      author: body.author || '管理者'
    };

    const id = await createNews(newsData);
    
    if (id) {
      return NextResponse.json({
        success: true,
        message: 'お知らせが作成されました',
        id
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'お知らせの作成に失敗しました' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('お知らせの作成エラー:', error);
    return NextResponse.json(
      { success: false, message: 'お知らせの作成に失敗しました' },
      { status: 500 }
    );
  }
}
