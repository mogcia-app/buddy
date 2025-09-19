// Firestore データ型定義

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: 'announcement' | 'update' | 'event';
  isImportant: boolean;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  author: string;
  slug: string;
}

export interface BlogItem {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: 'business' | 'technology' | 'food' | 'tips';
  tags: string[];
  featured: boolean;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  author: string;
  readTime: number;
  slug: string;
  imageUrl?: string;
}

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  role: 'admin' | 'editor' | 'viewer';
  createdAt: Date;
  lastLoginAt: Date;
}

// Firestore コレクション名
export const COLLECTIONS = {
  NEWS: 'news',
  BLOG: 'blog',
  USERS: 'users'
} as const;

// カテゴリ定義
export const NEWS_CATEGORIES = {
  announcement: 'お知らせ',
  update: '更新情報',
  event: 'イベント'
} as const;

export const BLOG_CATEGORIES = {
  business: 'ビジネス',
  technology: 'テクノロジー',
  food: '食',
  tips: 'Tips'
} as const;
