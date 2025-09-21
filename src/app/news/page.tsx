'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  isImportant: boolean;
  author: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = filter === 'all' ? '/api/news' : `/api/news?category=${filter}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.success) {
          setNews(data.data);
        }
      } catch (error) {
        console.error('お知らせの取得エラー:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [filter]);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'announcement':
        return 'お知らせ';
      case 'update':
        return '更新情報';
      case 'event':
        return 'イベント';
      default:
        return category;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          {/* ページヘッダー */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-6">
              <div className="w-4 h-4 bg-black rounded-full mr-4 animate-pulse"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">NEWS</h1>
            </div>
            <p className="text-lg text-gray-600">お知らせ一覧</p>
          </div>

          {/* フィルター */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                すべて
              </button>
              <button
                onClick={() => setFilter('announcement')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'announcement'
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                お知らせ
              </button>
              <button
                onClick={() => setFilter('update')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'update'
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                更新情報
              </button>
              <button
                onClick={() => setFilter('event')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'event'
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                イベント
              </button>
            </div>
          </div>

          {/* お知らせ一覧 */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
              <p className="text-gray-600">読み込み中...</p>
            </div>
          ) : news.length > 0 ? (
            <div className="space-y-6">
              {news.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {item.isImportant && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          重要
                        </span>
                      )}
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {getCategoryLabel(item.category)}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(item.publishedAt).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-gray-700 transition-colors">
                    {item.title}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {item.excerpt}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">お知らせがありません</h3>
              <p className="text-gray-600">
                {filter === 'all' ? 'まだお知らせが投稿されていません。' : `${getCategoryLabel(filter)}のお知らせはありません。`}
              </p>
            </div>
          )}

          {/* 戻るリンク */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              トップページに戻る
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
