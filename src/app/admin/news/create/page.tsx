'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNews() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: 'announcement',
    isImportant: false
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          publishedAt: new Date().toISOString(),
          author: '管理者'
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('お知らせが作成されました！');
        router.push('/admin/news');
      } else {
        alert(`エラー: ${result.message}`);
      }
    } catch (error) {
      console.error('エラー:', error);
      alert('お知らせの作成に失敗しました');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">新しいお知らせ</h1>
              <p className="text-gray-600">お知らせを作成します</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => router.back()}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 基本情報 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">基本情報</h2>
            
            <div className="space-y-6">
              {/* タイトル */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  タイトル <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="お知らせのタイトルを入力してください"
                />
              </div>

              {/* カテゴリ */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  カテゴリ <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="announcement">お知らせ</option>
                  <option value="update">更新情報</option>
                  <option value="event">イベント</option>
                </select>
              </div>

              {/* 重要度 */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isImportant"
                  name="isImportant"
                  checked={formData.isImportant}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isImportant" className="ml-2 block text-sm text-gray-900">
                  重要なお知らせとして表示する
                </label>
              </div>
            </div>
          </div>

          {/* 内容 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">内容</h2>
            
            <div className="space-y-6">
              {/* 概要 */}
              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                  概要 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="お知らせの概要を入力してください（一覧表示で使用されます）"
                />
              </div>

              {/* 本文 */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  本文 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={12}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="お知らせの詳細内容を入力してください"
                />
                <p className="mt-2 text-sm text-gray-500">
                  改行は自動的に反映されます。
                </p>
              </div>
            </div>
          </div>

          {/* プレビュー */}
          {formData.title && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">プレビュー</h2>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    formData.category === 'announcement' ? 'bg-blue-100 text-blue-800' :
                    formData.category === 'update' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {formData.category === 'announcement' ? 'お知らせ' :
                     formData.category === 'update' ? '更新情報' : 'イベント'}
                  </span>
                  {formData.isImportant && (
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
                      重要
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{formData.title}</h3>
                <p className="text-gray-600 mb-4">{formData.excerpt}</p>
                <div className="text-gray-800 whitespace-pre-wrap">{formData.content}</div>
              </div>
            </div>
          )}

          {/* 送信ボタン */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              キャンセル
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? '作成中...' : 'お知らせを作成'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
