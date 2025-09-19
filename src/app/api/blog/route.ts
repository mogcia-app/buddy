import { NextResponse } from 'next/server';
import { getBlog, getBlogByCategory, getFeaturedBlog, createBlog } from '../../../lib/firestore';
import { BlogItem } from '../../../types/firebase';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = searchParams.get('limit');
    const featured = searchParams.get('featured');

    let blog: BlogItem[] = [];

    // 注目記事のみ
    if (featured === 'true') {
      blog = await getFeaturedBlog();
    }
    // カテゴリフィルタ
    else if (category && ['business', 'technology', 'food', 'tips'].includes(category)) {
      blog = await getBlogByCategory(category);
    } else {
      blog = await getBlog();
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
    const body = await request.json();
    
    // バリデーション
    if (!body.title || !body.content || !body.excerpt || !body.category) {
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

    const id = await createBlog(blogData);
    
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
      { success: false, message: 'ブログ記事の作成に失敗しました' },
      { status: 500 }
    );
  }
}