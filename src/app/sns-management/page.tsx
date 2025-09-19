import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";

export default function SNSManagement() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ページヘッダー */}
      <section className="relative py-32 overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/pexels-asphotograpy-887751.jpg"
            alt="クリエイティブな背景"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-purple-50/90"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-purple-700 tracking-wider uppercase">SNS Management</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light leading-tight text-gray-900 mb-8">
            SNS運用代行
            <span className="block font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ソーシャルで繋がる未来
            </span>
          </h1>
          
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Instagram、Facebook、TwitterなどのSNSアカウントの運用代行。<br className="hidden md:block" />
            コンテンツ制作から分析まで一貫してサポートします。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact/general" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-medium text-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              SNS運用のご相談
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="#services" className="inline-flex items-center px-8 py-4 bg-white/70 backdrop-blur-sm text-gray-700 rounded-2xl font-medium text-lg border border-gray-200/50 hover:bg-white/90 hover:border-purple-300/50 transition-all duration-300 hover:scale-105">
              サービス詳細
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 対応SNSプラットフォーム */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-purple-700 tracking-wider uppercase">Platforms</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">対応SNSプラットフォーム</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              主要なSNSプラットフォームに対応し、それぞれの特性を活かした運用を行います
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Instagram */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-50 to-purple-50/50 p-8 rounded-3xl border border-gray-100/50 group-hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.989.013 6.77.072 5.56.132 4.806.333 4.17.63c-.74.319-1.13.497-1.582.926-.452.429-.74.81-1.058 1.552-.297.636-.498 1.39-.558 2.59-.06 1.22-.072 1.626-.072 5.247 0 3.621.013 4.027.072 5.248.06 1.2.261 1.954.558 2.59.318.741.606 1.123 1.058 1.552.452.429.842.607 1.582.926.636.297 1.39.498 2.59.558 1.22.06 1.626.072 5.248.072 3.621 0 4.027-.013 5.248-.072 1.2-.06 1.954-.261 2.59-.558.741-.319 1.13-.497 1.582-.926.452-.429.74-.811 1.058-1.552.297-.636.498-1.39.558-2.59.06-1.22.072-1.626.072-5.248 0-3.621-.013-4.027-.072-5.248-.06-1.2-.262-1.954-.558-2.59-.318-.741-.606-1.123-1.058-1.552-.452-.429-.841-.607-1.582-.926-.636-.297-1.39-.498-2.59-.558C16.027.013 15.621.001 12.017.001h0zm0 2.158c3.556 0 3.97.013 5.373.072 1.297.06 2.004.264 2.472.44.622.242 1.067.53 1.532.996.465.466.753.91.996 1.532.176.468.38 1.175.44 2.472.059 1.402.072 1.817.072 5.373 0 3.556-.013 3.97-.072 5.373-.06 1.297-.264 2.004-.44 2.472-.242.622-.53 1.067-.996 1.532-.466.465-.91.753-1.532.996-.468.176-1.175.38-2.472.44-1.402.059-1.817.072-5.373.072-3.556 0-3.97-.013-5.373-.072-1.297-.06-2.004-.264-2.472-.44-.622-.242-1.067-.53-1.532-.996-.465-.466-.753-.91-.996-1.532-.176-.468-.38-1.175-.44-2.472-.059-1.402-.072-1.817-.072-5.373 0-3.556.013-3.97.072-5.373.06-1.297.264-2.004.44-2.472.242-.622.53-1.067.996-1.532.466-.465.91-.753 1.532-.996.468-.176 1.175-.38 2.472-.44 1.402-.059 1.817-.072 5.373-.072l0 0zm0 3.67c-3.707 0-6.717 3.01-6.717 6.717 0 3.707 3.01 6.717 6.717 6.717 3.707 0 6.717-3.01 6.717-6.717 0-3.707-3.01-6.717-6.717-6.717zm0 11.076c-2.407 0-4.359-1.952-4.359-4.359 0-2.407 1.952-4.359 4.359-4.359 2.407 0 4.359 1.952 4.359 4.359 0 2.407-1.952 4.359-4.359 4.359zm6.584-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Instagram</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ビジュアル重視のコンテンツで、ブランドの魅力を視覚的に訴求
                </p>
              </div>
            </div>

            {/* Facebook */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-50 to-purple-50/50 p-8 rounded-3xl border border-gray-100/50 group-hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Facebook</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  幅広い年齢層にリーチし、コミュニティとの深いつながりを構築
                </p>
              </div>
            </div>

            {/* Twitter/X */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-50 to-purple-50/50 p-8 rounded-3xl border border-gray-100/50 group-hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Twitter/X</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  リアルタイムな情報発信で、フォロワーとの活発な交流を促進
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-50 to-purple-50/50 p-8 rounded-3xl border border-gray-100/50 group-hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-800 to-pink-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">LinkedIn</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ビジネス向けコンテンツで、企業の専門性と信頼性をアピール
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* サービス内容 */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-purple-700 tracking-wider uppercase">Our Services</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">サービス内容</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              戦略立案からコンテンツ制作、分析まで、SNS運用のすべてをサポートします
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* コンテンツ制作 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100/50 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">コンテンツ制作</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                魅力的な投稿画像、動画、キャプションを制作。
                ブランドの世界観を表現したクリエイティブをお届けします。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                  画像・動画制作
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                  キャプション作成
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                  ハッシュタグ戦略
                </li>
              </ul>
            </div>

            {/* 戦略・企画 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100/50 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">戦略・企画</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                ターゲット分析からコンテンツ戦略まで、
                効果的なSNS運用の戦略を立案いたします。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                  ターゲット分析
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                  コンテンツ戦略立案
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                  投稿スケジュール管理
                </li>
              </ul>
            </div>

            {/* 分析・改善 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100/50 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">分析・改善</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                投稿のパフォーマンスを詳細に分析し、
                継続的な改善でエンゲージメント向上を図ります。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                  エンゲージメント分析
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                  フォロワー分析
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                  改善提案・実施
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 運用実績・効果 */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-purple-700 tracking-wider uppercase">Results & Performance</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">運用実績・効果</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              データに基づいた戦略的な運用で、確実な成果をお届けします
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">フォロワー増加率</h4>
                  <p className="text-gray-600">
                    平均月間フォロワー増加率15%を実現。
                    質の高いフォロワーを着実に獲得します。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">エンゲージメント向上</h4>
                  <p className="text-gray-600">
                    いいね、コメント、シェア数の大幅向上。
                    ブランドとの深いつながりを構築します。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">売上・認知度向上</h4>
                  <p className="text-gray-600">
                    SNSからの流入増加により、
                    売上向上とブランド認知度拡大を実現します。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-purple-50/50 p-8 md:p-12 rounded-3xl border border-gray-100/50 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <h5 className="text-xl font-light text-gray-900 mb-2">運用実績</h5>
                  <div className="w-12 h-px bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center p-6 bg-white/60 rounded-2xl border border-white/50">
                    <div className="text-3xl font-light text-purple-700 mb-2">50+</div>
                    <div className="text-sm text-gray-600">運用アカウント</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/60 rounded-2xl border border-white/50">
                      <div className="text-2xl font-light text-gray-900 mb-1">15%</div>
                      <div className="text-xs text-gray-600">月間成長率</div>
                    </div>
                    <div className="text-center p-4 bg-white/60 rounded-2xl border border-white/50">
                      <div className="text-2xl font-light text-gray-900 mb-1">24/7</div>
                      <div className="text-xs text-gray-600">監視体制</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 装飾要素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-pink-400/15 to-purple-500/15 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 運用プロセス */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-purple-700 tracking-wider uppercase">Management Process</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">運用プロセス</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              戦略的で継続的なSNS運用で、ブランドの成長をサポートします
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">戦略立案</h5>
              <p className="text-sm text-gray-600">ブランド分析とターゲット設定、投稿戦略を策定</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">コンテンツ制作</h5>
              <p className="text-sm text-gray-600">魅力的な画像・動画・テキストコンテンツを制作</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">投稿・運用</h5>
              <p className="text-sm text-gray-600">最適なタイミングで投稿し、コミュニケーションを管理</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-800 to-pink-800 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">分析・改善</h5>
              <p className="text-sm text-gray-600">データ分析に基づく継続的な改善と戦略調整</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact/general" className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl font-medium text-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1">
              SNS運用のご相談・お見積り
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
              <span className="text-sm font-medium text-purple-700 tracking-wider uppercase">Customer Voice</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">お客様の声</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              実際にSNS運用代行をご利用いただいているお客様からの声をご紹介します
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 美容サロン */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 p-8 rounded-3xl border border-gray-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">美容サロン Bella</h4>
                  <p className="text-sm text-gray-600">Instagram・Facebook運用</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                「SNS運用をお任せしてから、新規のお客様が大幅に増加しました。
                投稿内容もとてもおしゃれで、サロンの雰囲気が伝わると評判です。
                フォロワー数も3ヶ月で2倍になり、予約も順調に入るようになりました。
                プロにお任せして本当に良かったです。」
              </p>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-purple-700 font-medium">美容・サロン業界</p>
            </div>

            {/* 地域密着型企業 */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 p-8 rounded-3xl border border-gray-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">株式会社地域商店</h4>
                  <p className="text-sm text-gray-600">Instagram・Twitter運用</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                「地域のお客様とのつながりを深めたくてSNS運用をお願いしました。
                地域に根ざしたコンテンツを作ってくださり、地元の方々からの反応が格段に良くなりました。
                イベント告知の効果も高く、来店客数が20%増加しています。」
              </p>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-purple-700 font-medium">地域密着型企業</p>
            </div>
          </div>
        </div>
      </section>

      {/* SNSマーケティングの重要性 */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-100/15 to-purple-100/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-purple-700 tracking-wider uppercase">Why SNS Marketing</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-900 mb-8">
            なぜ今
            <span className="block font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              SNSマーケティングなのか
            </span>
          </h2>
          
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-12"></div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-16">
            現代のマーケティングにおいて、SNSは欠かせないツールとなっています。<br className="hidden md:block" />
            お客様との直接的なコミュニケーションを通じて、ブランドの価値を伝え、<br className="hidden md:block" />
            長期的な関係性を築くことができます。
          </p>
          
          {/* 統計データ */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100/50">
              <div className="text-3xl md:text-4xl font-light text-purple-700 mb-2">80%</div>
              <div className="text-sm text-gray-600">の消費者がSNSで商品を発見</div>
            </div>
            
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100/50">
              <div className="text-3xl md:text-4xl font-light text-purple-700 mb-2">3倍</div>
              <div className="text-sm text-gray-600">従来広告よりも高いエンゲージメント</div>
            </div>
            
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100/50">
              <div className="text-3xl md:text-4xl font-light text-purple-700 mb-2">24/7</div>
              <div className="text-sm text-gray-600">いつでもお客様とつながれる</div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection 
        title="SNS運用についてお気軽にご相談ください"
        description="Instagram、Facebook、TwitterなどのSNS運用でお困りのことがございましたら、専門スタッフが丁寧にご相談をお受けいたします。現状分析・戦略提案は無料です。"
        ctaText="SNS運用のお問い合わせ"
        ctaHref="/contact/general"
      />
      <Footer />
    </div>
  );
}
