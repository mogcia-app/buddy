import { NextResponse } from 'next/server';
import { getBlog, getBlogByCategory, getFeaturedBlog, createBlog } from '../../../lib/firestore';
import { BlogItem } from '../../../types/firebase';

export async function GET(request: Request) {
  try {
    console.log('=== ブログAPI開始 ===');
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = searchParams.get('limit');
    const featured = searchParams.get('featured');
    console.log('パラメータ:', { category, limit, featured });

    let blog: BlogItem[] = [];

    // Firestoreからデータを取得
    console.log('Firestoreからブログデータを取得');
    try {
      // 注目記事のみ
      if (featured === 'true') {
        blog = await getFeaturedBlog();
      }
      // カテゴリフィルタ
      else if (category && ['kitchen', 'restaurant', 'web', 'sns', 'ai', 'other'].includes(category)) {
        blog = await getBlogByCategory(category);
      } else {
        blog = await getBlog();
      }
      console.log('取得したブログ件数:', blog.length);
    } catch (firestoreError) {
      console.log('Firestoreエラー:', firestoreError);
      // Firestoreエラーの場合は空配列を返す
      blog = [];
    }

    // 件数制限
    if (limit) {
      const limitNum = parseInt(limit);
      blog = blog.slice(0, limitNum);
    }

    return NextResponse.json({
      success: true,
      data: blog,
      total: blog.length
    });
  } catch (error) {
    console.error('ブログの取得エラー:', error);
    return NextResponse.json(
      { success: false, message: 'ブログの取得に失敗しました' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    console.log('=== ブログ作成API開始 ===');
    const body = await request.json();
    console.log('受信データ:', body);
    
    // バリデーション
    if (!body.title || !body.content || !body.excerpt || !body.category) {
      console.log('バリデーションエラー:', { 
        title: !!body.title, 
        content: !!body.content, 
        excerpt: !!body.excerpt, 
        category: !!body.category 
      });
      return NextResponse.json(
        { success: false, message: '必須フィールドが不足しています' },
        { status: 400 }
      );
    }

    const blogData = {
      title: body.title,
      content: body.content,
      excerpt: body.excerpt,
      category: body.category,
      tags: body.tags || [],
      featured: body.featured || false,
      readTime: body.readTime || 5,
      publishedAt: new Date(body.publishedAt || Date.now()),
      author: body.author || '管理者',
      imageUrl: body.imageUrl
    };
    
    console.log('Firestoreに送信するデータ:', blogData);

    const id = await createBlog(blogData);
    console.log('Firestore作成結果:', id);
    
    if (id) {
      return NextResponse.json({
        success: true,
        message: 'ブログ記事が作成されました',
        id
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'ブログ記事の作成に失敗しました' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('ブログの作成エラー:', error);
    return NextResponse.json(
      { success: false, message: `ブログ記事の作成に失敗しました: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}