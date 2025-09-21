'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import AdminProtected from '../../../../../components/AdminProtected';
import Image from 'next/image';
import { uploadBlogImage } from '../../../../../lib/storage';

function EditBlog() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: 'kitchen',
    featured: false,
    readTime: 5,
    imageUrl: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  const fetchBlogItem = useCallback(async () => {
    try {
      const response = await fetch(`/api/blog/${id}`);
      const data = await response.json();
      
      if (data.success) {
        const blogItem = data.data;
        setFormData({
          title: blogItem.title,
          content: blogItem.content,
          excerpt: blogItem.excerpt,
          category: blogItem.category,
          featured: blogItem.featured,
          readTime: blogItem.readTime,
          imageUrl: blogItem.imageUrl || ''
        });
      } else {
        alert('ブログ記事が見つかりません');
        router.push('/admin/blog');
      }
    } catch (error) {
      console.error('エラー:', error);
      alert('ブログ記事の取得に失敗しました');
      router.push('/admin/blog');
    } finally {
      setLoading(false);
    }
  }, [id, router]);

  useEffect(() => {
    fetchBlogItem();
  }, [fetchBlogItem]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      // 画像がある場合はFirebase Storageにアップロード
      let imageUrl = formData.imageUrl;
      if (imageFile) {
        console.log('画像アップロード開始...');
        imageUrl = await uploadBlogImage(imageFile);
        console.log('画像アップロード完了:', imageUrl);
      }

      const response = await fetch(`/api/blog/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          imageUrl,
          author: '管理者'
        }),
      });
      
      const result = await response.json();

      if (result.success) {
        alert('ブログ記事が更新されました！');
        router.push('/admin/blog');
      } else {
        alert(`エラー: ${result.message}`);
      }
    } catch (error) {
      console.error('エラー:', error);
      alert('ブログ記事の更新に失敗しました');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              type === 'number' ? parseInt(value) || 0 : value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB制限
        alert('画像サイズは5MB以下にしてください');
        return;
      }
      
      setImageFile(file);
      
      // プレビュー用のURL作成
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">ブログ記事を読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ブログ記事編集</h1>
              <p className="text-gray-600">ブログ記事を編集</p>
            </div>
            <Link 
              href="/admin/blog"
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              一覧に戻る
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 基本情報 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">基本情報</h2>
              
              {/* タイトル */}
              <div className="mb-6">
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
                  placeholder="ブログ記事のタイトルを入力してください"
                />
              </div>

              {/* カテゴリ */}
              <div className="mb-6">
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
                  <option value="kitchen">厨房委託</option>
                  <option value="restaurant">飲食</option>
                  <option value="web">HP作成</option>
                  <option value="sns">SNS運用</option>
                  <option value="ai">AI開発</option>
                  <option value="other">その他</option>
                </select>
              </div>

              {/* 読了時間 */}
              <div className="mb-6">
                <label htmlFor="readTime" className="block text-sm font-medium text-gray-700 mb-2">
                  読了時間（分）
                </label>
                <input
                  type="number"
                  id="readTime"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleChange}
                  min="1"
                  max="60"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* 注目記事 */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">
                  注目記事として表示する
                </label>
              </div>
            </div>

            {/* サムネイル */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">サムネイル画像</h2>
              
              {/* 現在の画像 */}
              {formData.imageUrl && !imagePreview && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">現在の画像</p>
                  <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={formData.imageUrl}
                      alt="現在の画像"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                  新しい画像ファイル
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="mt-2 text-sm text-gray-500">
                  JPG, PNG, GIF形式（最大5MB）
                </p>
              </div>

              {/* 画像プレビュー */}
              {imagePreview && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">新しい画像プレビュー</p>
                  <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={imagePreview}
                      alt="プレビュー"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              {/* URL直接入力 */}
              <div className="mt-4">
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  または画像URL
                </label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
          </div>

          {/* 内容 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">内容</h2>
            
            {/* 概要 */}
            <div className="mb-6">
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
                placeholder="ブログ記事の概要を入力してください（一覧表示で使用されます）"
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
                rows={15}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="ブログ記事の詳細内容を入力してください"
              />
              <p className="mt-2 text-sm text-gray-500">
                改行は自動的に反映されます。
              </p>
            </div>
          </div>

          {/* プレビュー */}
          {formData.title && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">プレビュー</h2>
              <div className="border border-gray-200 rounded-lg p-6">
                {(imagePreview || formData.imageUrl) && (
                  <div className="relative h-48 mb-4 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={imagePreview || formData.imageUrl}
                      alt="サムネイル"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                    {formData.category === 'kitchen' ? '厨房委託' :
                     formData.category === 'restaurant' ? '飲食' :
                     formData.category === 'web' ? 'HP作成' :
                     formData.category === 'sns' ? 'SNS運用' :
                     formData.category === 'ai' ? 'AI開発' : 'その他'}
                  </span>
                  {formData.featured && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      注目
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{formData.title}</h3>
                <p className="text-gray-600 mb-4">{formData.excerpt}</p>
                <div className="text-gray-800 whitespace-pre-wrap">{formData.content}</div>
                <div className="mt-4 text-sm text-gray-500">
                  読了時間: {formData.readTime}分
                </div>
              </div>
            </div>
          )}

          {/* 送信ボタン */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
            >
              キャンセル
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {saving ? '更新中...' : 'ブログ記事を更新'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function EditBlogPage() {
  return (
    <AdminProtected>
      <EditBlog />
    </AdminProtected>
  );
}
