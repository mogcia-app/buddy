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
    console.log('=== お知らせ作成API開始 ===');
    
    const body = await request.json();
    console.log('受信データ:', body);
    
    // バリデーション
    if (!body.title || !body.excerpt || !body.category) {
      return NextResponse.json(
        { success: false, message: '必須フィールドが不足しています' },
        { status: 400 }
      );
    }

    const newsData = {
      title: body.title,
      content: body.content || body.excerpt, // contentがない場合はexcerptを使用
      excerpt: body.excerpt,
      category: body.category,
      isImportant: body.isImportant || false,
      publishedAt: new Date(body.publishedAt || Date.now()),
      author: body.author || '管理者'
    };
    
    console.log('Firestoreに作成するデータ:', newsData);
    
    const id = await createNews(newsData);
    console.log('Firestore作成結果ID:', id);
    
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
