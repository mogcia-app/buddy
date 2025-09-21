import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";

export default function WebDevelopment() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ページヘッダー */}
      <section className="relative py-32 overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/pexels-tranmautritam-326503.jpg"
            alt="モダンなデザインの背景"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/85 to-blue-50/90"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-blue-700 tracking-wider uppercase">Web Development</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light leading-tight text-gray-900 mb-8">
            HP作成・Web制作
            <span className="block font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              デジタルで未来を創る
            </span>
          </h1>
          
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            企業のブランドイメージを向上させるWebサイト制作。<br className="hidden md:block" />
            レスポンシブデザインからECサイトまで幅広く対応いたします。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact/general" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-medium text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              Web制作のご相談
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="#services" className="inline-flex items-center px-8 py-4 bg-white/70 backdrop-blur-sm text-gray-700 rounded-2xl font-medium text-lg border border-gray-200/50 hover:bg-white/90 hover:border-blue-300/50 transition-all duration-300 hover:scale-105">
              サービス詳細
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* サービス内容 */}
      <section id="services" className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-blue-700 tracking-wider uppercase">Our Services</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">サービス内容</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              お客様のご要望に合わせて、使いやすく美しいWebサイトを制作いたします
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* コーポレートサイト */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 md:p-8 rounded-3xl border border-gray-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">コーポレートサイト</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                企業の信頼性とブランド価値を高める、
                プロフェッショナルなコーポレートサイトを制作いたします。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  ブランディング設計
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  レスポンシブデザイン
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  SEO対策・アクセス解析
                </li>
              </ul>
            </div>

            {/* ECサイト */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 md:p-8 rounded-3xl border border-gray-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">ECサイト・オンラインショップ</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                売上向上を目指すECサイトの構築から運用まで、
                トータルでサポートいたします。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  決済システム導入
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  在庫管理システム
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  売上分析・改善提案
                </li>
              </ul>
            </div>

            {/* ランディングページ */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 md:p-8 rounded-3xl border border-gray-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">ランディングページ</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                コンバージョン率向上を目的とした、
                効果的なランディングページを制作いたします。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  コンバージョン最適化
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  A/Bテスト実施
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  広告連携・分析
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 私たちの取り組み */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-blue-700 tracking-wider uppercase">Our Approach</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">私たちの取り組み</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              お客様のビジネスを理解し、目的に合った最適なWebサイトをお作りします
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* 左側：私たちの想い */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Web制作への想い</h4>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  多角事業を展開する中で培った「お客様の立場に立つ」姿勢を、Web制作にも活かしています。
                  技術だけでなく、ビジネスの成功を第一に考えたサイト作りを心がけています。
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-gray-900 mb-2">お客様目線での設計</h5>
                    <p className="text-gray-600 text-sm">
                      飲食店や厨房管理の現場経験を活かし、実際に使いやすいサイトを設計します。
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-gray-900 mb-2">継続的なサポート</h5>
                    <p className="text-gray-600 text-sm">
                      制作後も継続的にサポート。更新や改善のご相談もお気軽にどうぞ。
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-gray-900 mb-2">ビジネス成果重視</h5>
                    <p className="text-gray-600 text-sm">
                      見た目だけでなく、集客や売上向上につながるサイト作りを目指します。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右側：私たちの約束 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 p-8 md:p-12 rounded-3xl border border-gray-100/50 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <h5 className="text-xl font-light text-gray-900 mb-2">私たちの約束</h5>
                  <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center p-6 bg-white/60 rounded-2xl border border-white/50">
                    <div className="text-2xl font-light text-blue-700 mb-2">丁寧なヒアリング</div>
                    <div className="text-sm text-gray-600">お客様のご要望を詳しくお聞きします</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/60 rounded-2xl border border-white/50">
                      <div className="text-xl font-light text-gray-900 mb-1">安心価格</div>
                      <div className="text-xs text-gray-600">明確な料金体系</div>
                    </div>
                    <div className="text-center p-4 bg-white/60 rounded-2xl border border-white/50">
                      <div className="text-xl font-light text-gray-900 mb-1">迅速対応</div>
                      <div className="text-xs text-gray-600">スピーディな制作</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 装飾要素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-indigo-400/15 to-blue-500/15 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 私たちの強み */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-blue-700 tracking-wider uppercase">Our Strengths</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">私たちの強み</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              技術力とデザイン力、そしてビジネス理解を組み合わせた総合的なアプローチ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100/50 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">最新技術</h4>
              <p className="text-gray-600 leading-relaxed">
                React、Next.js、TypeScriptなど、
                最新の技術スタックで高性能なサイトを構築。
              </p>
            </div>

            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100/50 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">デザイン力</h4>
              <p className="text-gray-600 leading-relaxed">
                ユーザビリティとブランディングを両立した、
                美しく使いやすいデザインを提供。
              </p>
            </div>

            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100/50 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">ビジネス理解</h4>
              <p className="text-gray-600 leading-relaxed">
                多角事業の経験を活かし、
                お客様のビジネスを深く理解したサイト設計。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 制作プロセス */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-blue-700 tracking-wider uppercase">Development Process</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">制作プロセス</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              企画から運用まで、段階的で透明性のあるプロセスで進めます
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">企画・要件定義</h5>
              <p className="text-sm text-gray-600">目的とターゲットを明確にし、最適な戦略を立案</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">デザイン設計</h5>
              <p className="text-sm text-gray-600">ブランドに合った美しいデザインを設計</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">開発・実装</h5>
              <p className="text-sm text-gray-600">最新技術を使用してサイトを構築</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-800 to-indigo-800 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">テスト・公開</h5>
              <p className="text-sm text-gray-600">品質チェック後、本番環境に公開</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">運用・保守</h5>
              <p className="text-sm text-gray-600">継続的な改善とセキュリティ対応</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact/general" className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl font-medium text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
              Web制作のご相談・お見積り
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-blue-700 tracking-wider uppercase">Benefits</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">Web制作のメリット</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Webサイトを持つことで得られる具体的なメリットをご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Web制作のメリット */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 rounded-3xl border border-gray-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">信頼性の向上</h4>
                  <p className="text-sm text-gray-600">プロフェッショナルなWebサイト</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                「しっかりとしたWebサイトがあることで、お客様からの信頼度が大きく向上しました。
                24時間いつでも情報を提供できるようになり、営業効率も格段にアップ。
                スマートフォン対応で、若い世代のお客様からのお問い合わせも増えています。
                投資以上の価値を実感しています。」
              </p>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-blue-700 font-medium">企業サイト導入</p>
            </div>

            {/* 集客効果 */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 rounded-3xl border border-gray-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">集客力の向上</h4>
                  <p className="text-sm text-gray-600">オンライン集客の強化</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                「Webサイトを作ってから、新規のお客様からのお問い合わせが大幅に増加しました。
                特に検索からの流入が多く、地域での認知度も上がったと感じています。
                お客様が事前に情報を確認できるので、商談もスムーズに進むようになりました。
                作って本当に良かったです。」
              </p>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-blue-700 font-medium">集客向上効果</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection 
        title="Web制作についてお気軽にご相談ください"
        description="コーポレートサイト、ECサイト、ランディングページなど、どのようなWebサイト制作でもお気軽にご相談ください。お客様のビジネス成功をデジタルでサポートいたします。"
        ctaText="Web制作のお問い合わせ"
        ctaHref="/contact/general"
      />
      <Footer />
    </div>
  );
}
