'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AdminProtected from '../../../components/AdminProtected';

interface BlogItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  featured: boolean;
  imageUrl?: string;
  author: string;
  readTime: number;
}

function BlogList() {
  const [blog, setBlog] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const response = await fetch('/api/blog');
      const data = await response.json();
      if (data.success) {
        setBlog(data.data);
      }
    } catch (error) {
      console.error('ブログ取得エラー:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('このブログ記事を削除しますか？')) return;

    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      
      if (data.success) {
        alert('ブログ記事が削除されました');
        fetchBlog(); // リストを再取得
      } else {
        alert(`エラー: ${data.message}`);
      }
    } catch (error) {
      console.error('削除エラー:', error);
      alert('ブログ記事の削除に失敗しました');
    }
  };

  const filteredBlog = blog.filter(item => {
    const matchesFilter = filter === 'all' || item.category === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'kitchen': return '厨房委託';
      case 'restaurant': return '飲食';
      case 'web': return 'HP作成';
      case 'sns': return 'SNS運用';
      case 'ai': return 'AI開発';
      case 'other': return 'その他';
      default: return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'kitchen': return 'bg-green-100 text-green-800';
      case 'restaurant': return 'bg-orange-100 text-orange-800';
      case 'web': return 'bg-blue-100 text-blue-800';
      case 'sns': return 'bg-purple-100 text-purple-800';
      case 'ai': return 'bg-indigo-100 text-indigo-800';
      case 'other': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-6 space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">ブログ管理</h1>
              <p className="text-sm sm:text-base text-gray-600">ブログ記事の管理</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/admin/blog/create"
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                新規作成
              </Link>
              <Link 
                href="/admin"
                className="px-4 py-2 text-sm bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-center"
              >
                管理画面に戻る
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* フィルターと検索 */}
        <div className="mb-6 flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              すべて
            </button>
              <button
                onClick={() => setFilter('kitchen')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'kitchen' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                厨房委託
              </button>
              <button
                onClick={() => setFilter('restaurant')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'restaurant' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                飲食
              </button>
              <button
                onClick={() => setFilter('web')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'web' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                HP作成
              </button>
              <button
                onClick={() => setFilter('sns')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'sns' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                SNS運用
              </button>
              <button
                onClick={() => setFilter('ai')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'ai' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                AI開発
              </button>
              <button
                onClick={() => setFilter('other')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'other' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                その他
              </button>
          </div>
          
          <div className="flex-1">
            <input
              type="text"
              placeholder="ブログ記事を検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* ブログ一覧 */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">読み込み中...</p>
          </div>
        ) : filteredBlog.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlog.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
                {/* サムネイル */}
                {item.imageUrl && (
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {getCategoryLabel(item.category)}
                    </span>
                    {item.featured && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        注目
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{new Date(item.publishedAt).toLocaleDateString('ja-JP')}</span>
                    <span>{item.readTime}分で読める</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link
                      href={`/admin/blog/${item.id}/edit`}
                      className="flex-1 px-3 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      編集
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                    >
                      削除
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">ブログ記事がありません</h3>
            <p className="text-gray-600 mb-4">
              {filter === 'all' ? 'まだブログ記事が投稿されていません。' : `${getCategoryLabel(filter)}のブログ記事はありません。`}
            </p>
            <Link
              href="/admin/blog/create"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              最初のブログ記事を作成
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BlogListPage() {
  return (
    <AdminProtected>
      <BlogList />
    </AdminProtected>
  );
}
