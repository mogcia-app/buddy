'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  isImportant: boolean;
}

export default function Home() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news?limit=3');
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
  }, []);
  return (
    <div className="min-h-screen">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
        {/* スマホ用背景画像 */}
        <div className="absolute inset-0 lg:hidden">
        <Image
            src="/pexels-pavel-danilyuk-8112186.jpg"
            alt="モダン建築の背景"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
          {/* スマホ用オーバーレイ */}
          <div className="absolute inset-0 bg-white/60"></div>
        </div>
        
        {/* PC用斜め分割背景 */}
        <div className="hidden lg:block absolute inset-0">
          {/* 左側白背景 */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-white"></div>
          
          {/* 右側黒背景 */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-black"></div>
          
          {/* 斜めの境界線 */}
          <div className="absolute inset-0 bg-black" style={{clipPath: 'polygon(60% 0%, 100% 0%, 100% 100%, 40% 100%)'}}></div>
      </div>

        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          {/* スマホ版 - 縦並びレイアウト */}
          <div className="lg:hidden text-center py-12">
            {/* キャッチコピー */}
            <h1 className="text-3xl md:text-4xl font-light leading-tight text-gray-900 mb-6 animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              ビジネスの
              <span className="block font-medium">総合パートナー</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-6 font-light leading-relaxed animate-fade-in-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
              として共に成長する
            </p>
            
            <h2 className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
              厨房委託から最新のAI技術まで、多角的なソリューションで<br />
              お客様の事業成長をサポートします
            </h2>

            
            {/* CTAボタン */}
            <div className="flex flex-col gap-4 animate-fade-in-up opacity-0" style={{animationDelay: '1.0s', animationFillMode: 'forwards'}}>
              <Link href="/contact" className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300">
                無料相談を始める
              </Link>
              <Link href="#services" className="px-8 py-4 bg-transparent text-gray-900 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-all duration-300">
                サービス一覧
              </Link>
            </div>
        </div>
        
          {/* PC版 - 横並びレイアウト */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* 左側 - メインコンテンツ */}
            <div className="text-left">
              {/* キャッチコピー */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-900 mb-8 animate-fade-in-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                ビジネスの
                <span className="block font-medium">総合パートナー</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light leading-relaxed animate-fade-in-up opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                として共に成長する
              </p>
              
              <h2 className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed animate-fade-in-up opacity-0" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
                厨房委託から最新のAI技術まで、多角的なソリューションで<br className="hidden md:block" />
                お客様の事業成長をサポートします
              </h2>

              {/* CTAボタン */}
              <div className="flex flex-col sm:flex-row gap-4 justify-start animate-fade-in-up opacity-0" style={{animationDelay: '1.0s', animationFillMode: 'forwards'}}>
                <Link href="/contact" className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300">
                  無料相談を始める
                </Link>
                <Link href="#services" className="px-8 py-4 bg-transparent text-gray-900 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                  サービス一覧
                </Link>
              </div>
              </div>
              
            {/* 右側 - アニメーション化されたB Dロゴ */}
            <div className="flex items-center justify-end">
              <div className="relative">
                {/* B D ロゴ */}
                <div className="flex items-center space-x-2 md:space-x-4">
                  <div className="text-[200px] lg:text-[250px] font-bold text-white leading-none transform scale-x-[-1] animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                    B
                  </div>
                  <div className="text-[200px] lg:text-[250px] font-bold text-white leading-none animate-fade-in-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                    D
                  </div>
                </div>
                
                {/* 小さな「BUDDY」テキスト */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm font-medium text-white/80 tracking-[0.3em] animate-fade-in-up opacity-0" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
                  BUDDY
                </div>
              </div>
            </div>
                </div>
                
          {/* スクロールインジケーター - 中央下 */}
          <div className="absolute bottom24 left-1/2 transform -translate-x-1/2 animate-fade-in-up opacity-0" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
            <div className="text-center">
              <p className="text-sm text-gray-500 tracking-wider uppercase mb-4 animate-pulse">SCROLL</p>
              <div className="w-px h-16 bg-gray-300 mx-auto animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* サービスセクション - GIGカード風 */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-4 h-4 bg-black rounded-full mr-4 animate-pulse"></div>
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900">SERVICE</h2>
                <p className="text-lg text-gray-500 mt-2">サービス</p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
              食から始まった私たちの事業は、今やAI技術まで幅広い領域をカバー。<br className="hidden md:block" />
              お客様の課題に対して、最適なソリューションを提供します。
            </p>
          </div>

          {/* サービスカード */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
           
            {/* Web制作 */}
            <Link href="/web-development" className="group block animate-fade-in-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <div className="bg-white border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 relative">
                <div className="mb-6 flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Webサイト制作・デザイン</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Web制作</h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">WEB<br />CREATIVE</p>
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Webメディアサイト戦略、デザイン、CMS設計、運用体制の構築、アクセス解析、データ分析、インフラ設計など、メディアサイトの制作に必要なサービスを総合的にご支援します。
                </p>
                <div className="mt-6 relative h-48 overflow-hidden">
                  <Image
                    src="/pexels-tranmautritam-326503.jpg"
                    alt="Web制作のワークスペース"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>

            {/* SNS運用代行 */}
            <Link href="/sns-management" className="group block animate-fade-in-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
              <div className="bg-white border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 relative">
                <div className="mb-6 flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">SNSマーケティング・運用代行</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">SNS運用代行</h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">SNS<br />MARKETING</p>
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  SEOコンサルティング、アクセス解析、ヒューリスティック分析、競合調査、コンバージョンコンサルティング、SNSマーケティングなど、コンサルティング及び実行をおこないます。
                </p>
                <div className="mt-6 relative h-48 overflow-hidden">
                  <Image
                    src="/pexels-asphotograpy-887751.jpg"
                    alt="スマートフォンでのSNS運用"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>

             {/* 厨房委託業 */}
             <Link href="/kitchen-management" className="group block animate-fade-in-up opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
              <div className="bg-white border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 relative">
                <div className="mb-6 flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">介護施設の運営サポート</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">厨房委託業</h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">KITCHEN<br />MANAGEMENT</p>
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  介護施設での厨房運営をトータルサポート。栄養管理から衛生管理まで、プロフェッショナルが安心・安全な食事づくりをお手伝いします。
                </p>
                <div className="mt-6 relative h-48 overflow-hidden">
                  <Image
                    src="/pexels-ella-olsson-572949-1640777.jpg"
                    alt="新鮮な野菜と健康的な食事"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>

            {/* 飲食事業 */}
            <Link href="/restaurant" className="group block animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <div className="bg-white border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 relative">
                <div className="mb-6 flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">レストラン・ケータリングサービス</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">飲食事業</h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">RESTAURANT</p>
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  レストラン運営やケータリングサービスを通じて、美味しい食事体験を提供。イベントや企業向けサービスも承ります。
                </p>
                <div className="mt-6 relative h-48 overflow-hidden">
                  <Image
                    src="/pexels-janetrangdoan-892649.jpg"
                    alt="美味しいヘルシーボウル料理"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>


            {/* AI業務改善ツール */}
            <Link href="/ai-solutions" className="group block md:col-span-2 animate-fade-in-up opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
              <div className="bg-white border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 relative">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="absolute top-0 right-0 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300 lg:hidden">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-2">AI技術・業務効率化ツール</p>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">AI業務改善ツール</h3>
                      <p className="text-sm text-gray-500 uppercase tracking-wider">AI SOLUTIONS</p>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                    最新のAI技術を活用し企業の課題解決や業務改善に繋がるサービスをご提案いたします。
                    </p>
                  </div>
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src="/pexels-googledeepmind-17483868.jpg"
                      alt="AI技術と脳のネットワーク"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 hidden lg:block">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center animate-fade-in-up opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
            <Link href="/about" className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300">
              VIEW MORE
            </Link>
          </div>
        </div>
      </section>

      {/* お知らせセクション */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="mb-16 animate-fade-in-up opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
            <div className="flex items-center mb-8">
              <div className="w-4 h-4 bg-black rounded-full mr-4 animate-pulse"></div>
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900">NEWS</h2>
                <p className="text-lg text-gray-500 mt-2">ニュース</p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
              最新のお知らせをお届けします。
            </p>
          </div>

          <div className="flex items-center justify-between mb-8 animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">お知らせ</h3>
            <Link 
              href="/news" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              すべて見る →
            </Link>
          </div>

          {loading ? (
            <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden animate-fade-in-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
                <p className="text-gray-600">読み込み中...</p>
              </div>
            </div>
          ) : news.length > 0 ? (
            <div className="space-y-4 animate-fade-in-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              {news.map((item, index) => (
                <div key={item.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {item.isImportant && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mr-2">
                            重要
                          </span>
                        )}
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {item.category === 'announcement' ? 'お知らせ' : 
                           item.category === 'update' ? '更新情報' : 'イベント'}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.excerpt}</p>
                    </div>
                    <div className="ml-4 text-sm text-gray-500">
                      {new Date(item.publishedAt).toLocaleDateString('ja-JP')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden animate-fade-in-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-600">お知らせはありません</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* STRENGTHセクション - バディの強み */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="mb-16 animate-fade-in-up opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
            <div className="flex items-center mb-8">
              <div className="w-4 h-4 bg-black rounded-full mr-4 animate-pulse"></div>
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900">STRENGTH</h2>
                <p className="text-lg text-gray-500 mt-2">強み</p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
              食から始まったバディだからこそ提供できる、他にはない強みがあります。<br className="hidden md:block" />
              多角的な事業展開により、お客様の様々なニーズにワンストップで対応いたします。
            </p>
          </div>

          {/* 強みカードエリア */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
            <div className="bg-white p-8 h-70 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  {/* 食の安心・安全アイコン */}
                  <Image
                    src="/16545_color.svg"
                    alt="食の安心・安全"
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">食の安心・安全</h3>
                <p className="text-gray-700 leading-relaxed">
                  厨房委託業で培った「安心・安全」への想いを、全ての事業に活かしています。
                </p>
              </div>
            </div>
            <div className="bg-white p-8 h-70 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  {/* 一気通貫サービスアイコン */}
                  <Image
                    src="/11772 (1).svg"
                    alt="一気通貫サービス"
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">一気通貫サービス</h3>
                <p className="text-gray-700 leading-relaxed">
                  厨房運営からAI技術まで、幅広い事業領域をカバー。複数の課題を一社で解決できる総合力が強みです。
                </p>
              </div>
            </div>
            <div className="bg-white p-8 h-70 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  {/* 真のパートナーシップアイコン */}
                  <Image
                    src="/17053_color.svg"
                    alt="真のパートナーシップ"
                    width={90}
                    height={90}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">真のパートナーシップ</h3>
                <p className="text-gray-700 leading-relaxed">
                  単なる業務委託ではなく、お客様の「バディ」として長期的な成功を共に目指します。
                </p>
              </div>
            </div>
          </div>

          <div className="text-center animate-fade-in-up opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
            <Link href="/about" className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300">
              詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUTセクション - GIG風 */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
            <div className="flex items-center mb-8">
              <div className="w-4 h-4 bg-black rounded-full mr-4 animate-pulse"></div>
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900">ABOUT</h2>
                <p className="text-lg text-gray-500 mt-2">アバウト</p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              バディは「食」から始まった会社です。厨房委託業や飲食事業で培った「安心・安全」への想いを基盤に、<br className="hidden md:block" />
              Web制作、SNS運用、AI技術まで事業領域を拡げています。
            </p>
            <h3 className="text-2xl md:text-4xl text-gray-900 mb-8 font-light leading-relaxed">
              多様な事業を通じて<br />
              お客様の真の「バディ」として<br />
              共に成長し続けます
            </h3>
            <div className="space-y-4">
              <Link href="/about" className="block text-gray-900 font-medium hover:text-gray-700 hover:translate-x-2 transition-all duration-300">
                会社概要 COMPANY
              </Link>
              <Link href="/recruit" className="block text-gray-900 font-medium hover:text-gray-700 hover:translate-x-2 transition-all duration-300">
                採用情報 RECRUIT
              </Link>
              <Link href="/contact" className="block text-gray-900 font-medium hover:text-gray-700 hover:translate-x-2 transition-all duration-300">
                お問い合わせ CONTACT
              </Link>
            </div>
          </div>
            <div className="relative h-96 overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-500 animate-fade-in-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <Image
                src="/pexels-fauxels-3184635.jpg"
                alt="ビジネスパートナーシップ"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/25"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ブログセクション */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="mb-16 animate-fade-in-up opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
            <div className="flex items-center mb-8">
              <div className="w-4 h-4 bg-black rounded-full mr-4 animate-pulse"></div>
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900">BLOG</h2>
                <p className="text-lg text-gray-500 mt-2">ブログ</p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
              事業の最新情報や業界のトレンドをお届けします。
            </p>
          </div>

          <div className="flex items-center justify-between mb-8 animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">ブログ</h3>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              すべて見る →
            </Link>
          </div>

          <div className="relative animate-fade-in-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            {/* 左矢印 */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* 右矢印 */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
              {/* ブログカード1 - ビジネス */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-video bg-gray-100 relative">
                  <div className="flex items-center justify-center h-full">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                      ビジネス
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    飲食店経営の成功ポイント
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    飲食店経営において成功するためのポイントを立地選びからマーケティングまで解説します。
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      2024/1/15
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      6分
                    </div>
                  </div>
                </div>
              </div>

              {/* ブログカード2 - テクノロジー */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-video bg-gray-100 relative">
                  <div className="flex items-center justify-center h-full">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                      テクノロジー
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    AI技術で業務効率化を実現する方法
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    AI技術を活用した業務効率化の方法と注意点について解説します。
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      2024/1/12
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      8分
                    </div>
                  </div>
                </div>
              </div>

              {/* ブログカード3 - 食 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-video bg-gray-100 relative">
                  <div className="flex items-center justify-center h-full">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-medium">
                      食
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    厨房委託業で培った「安心・安全」の想い
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    厨房委託業で培った「安心・安全」への想いを、全ての事業に活かしています。
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      2024/1/10
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      5分
                    </div>
                  </div>
                </div>
              </div>

              {/* ブログカード4 - ビジネス */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-video bg-gray-100 relative">
                  <div className="flex items-center justify-center h-full">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                      ビジネス
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    真のパートナーシップとは何か
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    単なる業務委託ではなく、お客様の「バディ」として長期的な成功を共に目指します。
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      2024/1/8
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      7分
                    </div>
                  </div>
                </div>
              </div>

              {/* ブログカード5 - テクノロジー */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-video bg-gray-100 relative">
                  <div className="flex items-center justify-center h-full">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                      テクノロジー
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    Webサイト制作で重要なUXデザインの考え方
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    Webサイト制作におけるUXデザインの重要性と改善ポイントについて解説します。
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      2024/1/5
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      9分
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECRUITセクション - GIG風 */}
      <section className="py-32 relative overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <Image
            src="/pexels-pixabay-260689.jpg"
            alt="オフィス背景"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 animate-fade-in-up opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
            <div className="flex justify-center items-center mb-8">
            
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900">RECRUIT</h2>
                <p className="text-lg text-gray-500 mt-2">リクルート</p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              食から始まり、デジタル領域まで幅広く事業を展開するバディでは、<br className="hidden md:block" />
              多様な分野で活躍できる環境とチャレンジの機会を提供しています。
            </p>
            <h3 className="text-2xl md:text-3xl text-gray-900 mb-8 font-light">
              厨房運営からAI技術まで、様々な事業を通じて<br />
              お客様の真の「バディ」として共に成長する仲間を募集しています
            </h3>
            <Link href="/recruit" className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300">
              採用情報を見る
            </Link>
          </div>

         
        </div>
      </section>

     

      <ContactSection />
      <Footer />
    </div>
  );
}