'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [menuCloseTimeout, setMenuCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/buddylogo.png"
              alt="株式会社バディ ロゴ"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <div className="flex flex-col">
              <h1 className="text-[15px] sm:text-2xl font-bold text-gradient-primary">株式会社バディ</h1>
            </div>
          </Link>

          {/* PCナビ */}
          <nav className="hidden md:flex space-x-8 items-center">
            {/* 事業内容ドロップダウン */}
            <div 
              className="relative"
              onMouseEnter={() => {
                if (menuCloseTimeout) {
                  clearTimeout(menuCloseTimeout);
                  setMenuCloseTimeout(null);
                }
                setIsServicesOpen(true);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => {
                  setIsServicesOpen(false);
                }, 300); // 300ms遅延
                setMenuCloseTimeout(timeout);
              }}
            >
              <button className="text-gray-700 hover:text-black transition-colors font-medium flex items-center">
                事業内容
                <svg className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* メガメニュー */}
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] max-w-[90vw] bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100/50 p-8 z-50 hidden md:block"
                  onMouseEnter={() => {
                    if (menuCloseTimeout) {
                      clearTimeout(menuCloseTimeout);
                      setMenuCloseTimeout(null);
                    }
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => {
                      setIsServicesOpen(false);
                    }, 300);
                    setMenuCloseTimeout(timeout);
                  }}
                >
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">事業内容</h3>
                    <p className="text-sm text-gray-600">食からデジタルまで、多角的なソリューションをご提供</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {/* 左列 - 食関連事業 */}
                    <div className="space-y-4">
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">食関連事業</div>
                      
                      <Link href="/kitchen-management" className="group block p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16l2 8H4l-2-8zM6 1v3M10 1v3M14 1v3"/>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 mb-1">厨房委託業</div>
                            <div className="text-sm text-gray-600 mb-2">介護施設・企業食堂の運営サポート</div>
                            <div className="text-xs text-gray-500">栄養管理から衛生管理まで、プロがサポート</div>
                          </div>
                        </div>
                      </Link>
                      
                      <Link href="/restaurant" className="group block p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors">
                            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 mb-1">飲食事業</div>
                            <div className="text-sm text-gray-600 mb-2">レストラン・ケータリングサービス</div>
                            <div className="text-xs text-gray-500">美味しい食事体験をお届け</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    
                    {/* 右列 - デジタル事業 */}
                    <div className="space-y-4">
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Digital Business</div>
                      
                      <Link href="/web-development" className="group block p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 mb-1">Web制作</div>
                            <div className="text-sm text-gray-600 mb-2">Webサイト制作・デザイン</div>
                            <div className="text-xs text-gray-500">戦略立案から運用まで一気通貫</div>
                          </div>
                        </div>
                      </Link>
                      
                      <Link href="/sns-management" className="group block p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 mb-1">SNS運用代行</div>
                            <div className="text-sm text-gray-600 mb-2">SNSマーケティング・運用代行</div>
                            <div className="text-xs text-gray-500">コンサルティング及び実行支援</div>
                          </div>
                        </div>
                      </Link>
                      
                      <Link href="/ai-solutions" className="group block p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-indigo-200 transition-colors">
                            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 mb-1">AI業務改善ツール</div>
                            <div className="text-sm text-gray-600 mb-2">AI技術・業務効率化ツール</div>
                            <div className="text-xs text-gray-500">最新技術で課題解決をサポート</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                    <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      全ての事業について詳しく見る →
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/sdgs" className="text-gray-700 hover:text-black transition-colors font-medium">社会への取り組み</Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors font-medium">会社概要</Link>
            <Link href="/recruit" className="btn btn-secondary">採用情報</Link>
            <Link href="/contact" className="btn btn-primary">お問い合わせ</Link>
            <a 
              href="https://www.instagram.com/buddy_style2929/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-110"
              aria-label="公式Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {/* モバイル事業内容 */}
              <div className="space-y-2">
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 transition-colors py-2 font-medium"
                >
                  事業内容
                  <svg className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileServicesOpen && (
                  <div className="space-y-2 pl-4">
                    <Link 
                      href="/kitchen-management" 
                      className="block text-gray-700 hover:text-gray-900 transition-colors py-2 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      厨房委託業
                    </Link>
                    <Link 
                      href="/restaurant" 
                      className="block text-gray-700 hover:text-gray-900 transition-colors py-2 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      飲食事業
                    </Link>
                    <Link 
                      href="/web-development" 
                      className="block text-gray-700 hover:text-gray-900 transition-colors py-2 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      HP作成・Web制作
                    </Link>
                    <Link 
                      href="/sns-management" 
                      className="block text-gray-700 hover:text-gray-900 transition-colors py-2 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      SNS運用代行
                    </Link>
                    <Link 
                      href="/ai-solutions" 
                      className="block text-gray-700 hover:text-gray-900 transition-colors py-2 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      AI業務改善ツール
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                href="/sdgs" 
                className="text-gray-700 hover:text-gray-900 transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                社会への取り組み
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-gray-900 transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                会社概要
              </Link>
              <Link 
                href="/recruit" 
                className="inline-block px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white rounded-lg transition-all duration-300 font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                採用情報
              </Link>
              <Link 
                href="/contact" 
                className="inline-block px-4 py-2 bg-black text-white hover:bg-gray-800 rounded-lg transition-all duration-300 font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
              <a 
                href="https://www.instagram.com/buddy_style2929/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>公式Instagram</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}