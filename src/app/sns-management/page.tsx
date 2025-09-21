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
            Instagram、TikTok、YouTube、TwitterなどのSNSアカウントの運用代行。<br className="hidden md:block" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

            {/* TikTok */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-50 to-purple-50/50 p-8 rounded-3xl border border-gray-100/50 group-hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">TikTok</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  若い世代に人気の短動画プラットフォームで、バイラル効果を狙った投稿
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

            {/* YouTube */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-50 to-purple-50/50 p-8 rounded-3xl border border-gray-100/50 group-hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-800 to-pink-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">YouTube</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  動画コンテンツで深い情報発信と、長期的なファン獲得を実現
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* コンテンツ制作 */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 md:p-8 rounded-3xl border border-gray-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 md:p-8 rounded-3xl border border-gray-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 md:p-8 rounded-3xl border border-gray-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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

      {/* SNS運用代行の必要性 */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-purple-700 tracking-wider uppercase">Why SNS Management</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">SNS運用代行の必要性</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              忙しい経営者様に代わって、効果的なSNS運用をお手伝いします
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">時間の節約</h4>
                  <p className="text-gray-600">
                    毎日の投稿やコメント対応など、時間のかかるSNS運用を代行。
                    本業に集中していただけます。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">専門知識の活用</h4>
                  <p className="text-gray-600">
                    各プラットフォームの特性を理解した専門的な運用で、
                    効果的な結果を実現します。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">継続的な成長</h4>
                  <p className="text-gray-600">
                    一貫したブランディングと戦略的な投稿で、
                    長期的なフォロワー獲得と売上向上を目指します。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-purple-50/50 p-8 md:p-12 rounded-3xl border border-gray-100/50 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <h5 className="text-xl font-light text-gray-900 mb-2">こんなお悩みありませんか？</h5>
                  <div className="w-12 h-px bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center p-6 bg-white/60 rounded-2xl border border-white/50">
                    <div className="text-lg font-light text-gray-900 mb-2">投稿が続かない</div>
                    <div className="text-sm text-gray-600">忙しくて更新できない</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/60 rounded-2xl border border-white/50">
                      <div className="text-lg font-light text-gray-900 mb-1">何を投稿すれば</div>
                      <div className="text-xs text-gray-600">コンテンツに悩む</div>
                    </div>
                    <div className="text-center p-4 bg-white/60 rounded-2xl border border-white/50">
                      <div className="text-lg font-light text-gray-900 mb-1">効果が見えない</div>
                      <div className="text-xs text-gray-600">成果が分からない</div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

      {/* SNS運用の重要性 */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-purple-700 tracking-wider uppercase">Importance</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">SNS運用の重要性</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              現代のビジネスにおいて、SNSは欠かせないマーケティングツールです
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 顧客との接点拡大 */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">顧客との接点拡大</h4>
                  <p className="text-sm text-gray-600">24時間365日の情報発信</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                SNSを活用することで、従来の営業時間を超えて、24時間いつでもお客様との接点を持つことができます。
                特に若い世代へのアプローチには必須のツールとなっており、
                新規顧客獲得の重要なチャネルとして機能します。
              </p>
              <div className="flex justify-center">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">新規顧客獲得</span>
              </div>
            </div>

            {/* ブランド認知度向上 */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">ブランド認知度向上</h4>
                  <p className="text-sm text-gray-600">口コミ・拡散効果</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                SNSの拡散力を活用することで、従来の広告では難しい自然な口コミを生み出すことができます。
                ユーザー同士のシェアやコメントにより、ブランドの認知度が飛躍的に向上し、
                信頼性の高いマーケティング効果を得ることができます。
              </p>
              <div className="flex justify-center">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">口コミ効果</span>
              </div>
            </div>

            {/* コスト効率の良いマーケティング */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-700 to-pink-700 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">コスト効率</h4>
                  <p className="text-sm text-gray-600">低コスト高効果</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                従来の広告と比較して、SNSマーケティングは低コストで高い効果を期待できます。
                特にターゲティング精度が高く、無駄のない集客が可能です。
              </p>
              <div className="flex justify-center">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">低コスト</span>
              </div>
            </div>

            {/* リアルタイムコミュニケーション */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-800 to-pink-800 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">双方向コミュニケーション</h4>
                  <p className="text-sm text-gray-600">リアルタイム交流</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                お客様との直接的な対話を通じて、リアルな声を聞き、
                サービス改善や商品開発に活かすことができます。
              </p>
              <div className="flex justify-center">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">顧客の声</span>
              </div>
            </div>

            {/* データ分析・改善 */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-900 to-pink-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">データ分析・改善</h4>
                  <p className="text-sm text-gray-600">効果測定可能</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                SNSプラットフォームの詳細な分析データにより、
                投稿の効果を数値で確認し、継続的な改善が可能です。
              </p>
              <div className="flex justify-center">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">効果測定</span>
              </div>
            </div>

            {/* 競合他社との差別化 */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">競合他社との差別化</h4>
                  <p className="text-sm text-gray-600">独自性の表現</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                競合他社がSNSを活用している中、取り組まないことは機会損失。
                独自の魅力を発信して差別化を図ることが重要です。
              </p>
              <div className="flex justify-center">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">差別化</span>
              </div>
            </div>

            {/* SEO効果 */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">検索エンジン効果</h4>
                  <p className="text-sm text-gray-600">SEO向上</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                SNSからの外部リンクやブランド名の言及により、
                検索エンジンでの順位向上にも効果があります。
              </p>
              <div className="flex justify-center">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">SEO効果</span>
              </div>
            </div>

            {/* 顧客ロイヤリティ向上 */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">顧客ロイヤリティ向上</h4>
                  <p className="text-sm text-gray-600">継続的な関係構築</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                定期的な情報発信と交流により、お客様との長期的な関係を構築。
                リピート率向上と顧客生涯価値の最大化を実現します。
              </p>
              <div className="flex justify-center">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">リピート率向上</span>
              </div>
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
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            デジタル化が急速に進む現代において、SNSマーケティングは単なる「あったら良い」ツールから、<br className="hidden md:block" />
            ビジネス成功に「欠かせない」戦略的ツールへと変化しています。<br className="hidden md:block" />
            特にコロナ禍以降、消費者行動が大きく変化し、オンラインでの情報収集と購買が主流となりました。
          </p>

          {/* 時代背景の説明 */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-light text-gray-900">消費者行動の変化</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm leading-relaxed">
                      <strong>情報収集の変化:</strong> 商品購入前に、80%以上の消費者がSNSで情報収集を行う時代
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm leading-relaxed">
                      <strong>信頼性の重視:</strong> 企業の公式情報よりも、実際のユーザーの投稿や口コミを重視
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm leading-relaxed">
                      <strong>体験重視:</strong> 商品・サービスの「体験」や「ストーリー」を求める傾向が強化
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-light text-gray-900">ビジネス環境の変化</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm leading-relaxed">
                      <strong>競争の激化:</strong> 同業他社がSNSマーケティングに力を入れる中、取り組まないリスク
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm leading-relaxed">
                      <strong>広告費の高騰:</strong> 従来の広告手法のコストが上昇し、SNSの費用対効果が相対的に向上
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm leading-relaxed">
                      <strong>地域ビジネスの機会:</strong> 地域密着型企業こそ、SNSでの親近感ある発信が効果的
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 統計データと具体的な理由 */}
          <div className="space-y-16">
          {/* 統計データ */}
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 text-center mb-12">数字で見るSNSマーケティングの影響力</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-100/50">
                  <div className="text-3xl md:text-4xl font-light text-purple-700 mb-2">85%</div>
              <div className="text-sm text-gray-600">の消費者がSNSで商品を発見</div>
            </div>
            
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-100/50">
                  <div className="text-3xl md:text-4xl font-light text-purple-700 mb-2">5倍</div>
              <div className="text-sm text-gray-600">従来広告よりも高いエンゲージメント</div>
            </div>
            
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-100/50">
                  <div className="text-3xl md:text-4xl font-light text-purple-700 mb-2">70%</div>
                  <div className="text-sm text-gray-600">がSNSで企業をフォロー</div>
                </div>

                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-100/50">
                  <div className="text-3xl md:text-4xl font-light text-purple-700 mb-2">3.2時間</div>
                  <div className="text-sm text-gray-600">日本人の平均SNS利用時間</div>
                </div>

                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-100/50">
                  <div className="text-3xl md:text-4xl font-light text-purple-700 mb-2">60%</div>
                  <div className="text-sm text-gray-600">がSNS経由で購入経験あり</div>
                </div>

                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-100/50">
                  <div className="text-3xl md:text-4xl font-light text-purple-700 mb-2">-40%</div>
                  <div className="text-sm text-gray-600">従来広告の効果低下率</div>
                </div>

                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-100/50">
                  <div className="text-3xl md:text-4xl font-light text-purple-700 mb-2">90%</div>
                  <div className="text-sm text-gray-600">の企業がSNS活用を検討</div>
                </div>

                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-100/50">
              <div className="text-3xl md:text-4xl font-light text-purple-700 mb-2">24/7</div>
              <div className="text-sm text-gray-600">いつでもお客様とつながれる</div>
                </div>
              </div>
            </div>

            {/* 具体的な理由 */}
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 text-center mb-12">今すぐ始めるべき理由</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">機会損失のリスク</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    競合他社がSNSで顧客を獲得している間、取り組まないことは大きな機会損失。
                    後から追いつくのは困難です。
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">早期参入の優位性</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    まだSNSに本格参入していない業界では、早期に始めることで
                    圧倒的な先行者利益を得られます。
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">低予算でも効果大</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    大企業と同じ土俵で戦える数少ないマーケティング手法。
                    創意工夫次第で大きな成果を得られます。
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">世代を超えた影響力</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    若者だけでなく、中高年層のSNS利用も急増。
                    全世代にアプローチできる媒体となりました。
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">測定可能な効果</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    従来の広告と違い、詳細なデータ分析により
                    投資対効果を明確に把握できます。
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">即座に開始可能</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    大規模な設備投資は不要。アカウント開設から
                    すぐにマーケティング活動を開始できます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection 
        title="SNS運用についてお気軽にご相談ください"
        description="Instagram、TikTok、YouTube、TwitterなどのSNS運用でお困りのことがございましたら、専門スタッフが丁寧にご相談をお受けいたします。現状分析・戦略提案は無料です。"
        ctaText="SNS運用のお問い合わせ"
        ctaHref="/contact/general"
      />
      <Footer />
    </div>
  );
}
