import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";

export default function AISolutions() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ページヘッダー */}
      <section className="relative py-32 overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/pexels-googledeepmind-17483868.jpg"
            alt="未来的な技術の背景"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-indigo-50/90"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-indigo-700 tracking-wider uppercase">AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light leading-tight text-gray-900 mb-8">
          AIで業務を革新する
            
          </h1>
          
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            最新のAI技術を活用した業務効率化ツールの開発・導入支援。<br className="hidden md:block" />
            データ分析、自動化、チャットボットなど、お客様のビジネスに合わせたAIソリューションを提供します。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact/general" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-medium text-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              AI導入のご相談
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="#services" className="inline-flex items-center px-8 py-4 bg-white/70 backdrop-blur-sm text-gray-700 rounded-2xl font-medium text-lg border border-gray-200/50 hover:bg-white/90 hover:border-indigo-300/50 transition-all duration-300 hover:scale-105">
              サービス詳細
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* AIソリューション一覧 */}
      <section id="services" className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-indigo-700 tracking-wider uppercase">AI Solutions</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">AIソリューション一覧</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              お客様の業務課題に合わせて、最適なAIソリューションをご提案いたします
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* データ分析AI */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100/50 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">データ分析AI</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                膨大なデータから有益な洞察を抽出し、
                ビジネス判断をサポートするAIツールを開発します。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></div>
                  売上予測・需要予測
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></div>
                  顧客行動分析
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></div>
                  レポート自動生成
                </li>
              </ul>
            </div>

            {/* 業務自動化AI */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100/50 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">業務自動化AI</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                繰り返し作業や定型業務を自動化し、
                人的リソースをより価値の高い業務に集中できるようサポートします。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></div>
                  RPA（ロボティック・プロセス・オートメーション）
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></div>
                  文書処理自動化
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></div>
                  ワークフロー最適化
                </li>
              </ul>
            </div>

            {/* チャットボット・AI接客 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100/50 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-700 to-violet-700 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">チャットボット・AI接客</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                24時間対応可能なAIチャットボットで、
                顧客サポートの品質向上と効率化を実現します。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></div>
                  FAQ自動応答
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></div>
                  商品・サービス案内
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></div>
                  予約・注文受付
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Signal. - SNS運用自動化ツール */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-indigo-700 tracking-wider uppercase">Featured Product</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">
              <span className="block">
                <span className="text-black font-bold">Signal</span><span style={{color: '#ff8a15'}}>.</span>
              </span>
              <span className="block font-light mt-2">SNS運用自動化ツール</span>
            </h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SNS運用の90%を自動化する革新的なAIツール。コンテンツ制作から投稿、分析まで一貫してサポート
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* 左側：Signal.の特徴 */}
            <div className="space-y-6">
              <h4 className="text-2xl md:text-3xl font-light text-gray-900">
                <span className="text-black font-bold">Signal</span><span style={{color: '#ff8a15'}}>.</span>の革新性
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                従来のSNS運用で時間のかかる作業を90%自動化。AIが最適なコンテンツを生成し、
                最適なタイミングで投稿、さらに効果分析までAIが一貫して行います。
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-1">AIコンテンツ生成</h5>
                    <p className="text-gray-600 text-sm">ブランドに合った投稿文を自動生成</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-1">目標進捗の可視化</h5>
                    <p className="text-gray-600 text-sm">AIが運用計画から達成率を予想してグラフで表示</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-700 to-violet-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5m14 14H5" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-1">各SNS特化AI</h5>
                    <p className="text-gray-600 text-sm">プラットフォーム別に最適化されたAI機能</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-800 to-violet-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-1">AIフィードバック</h5>
                    <p className="text-gray-600 text-sm">投稿パフォーマンスを分析して改善提案を生成</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右側：Signal.の効果 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50/50 p-8 md:p-12 rounded-xl border border-gray-100/50">
                <div className="text-center mb-8">
                    <h5 className="text-xl font-light text-gray-900 mb-2">
                      <span className="text-black font-bold">Signal</span><span style={{color: '#ff8a15'}}>.</span>の効果
                    </h5>
                  <div className="w-12 h-px bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center p-6 bg-white/60 rounded-lg border border-white/50">
                    <div className="text-3xl font-light text-indigo-700 mb-2">90%</div>
                    <div className="text-sm text-gray-600">SNS運用作業を自動化</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/60 rounded-lg border border-white/50">
                      <div className="text-2xl font-light text-gray-900 mb-1">-80%</div>
                      <div className="text-xs text-gray-600">運用時間削減</div>
                    </div>
                    <div className="text-center p-4 bg-white/60 rounded-lg border border-white/50">
                      <div className="text-2xl font-light text-gray-900 mb-1">+150%</div>
                      <div className="text-xs text-gray-600">エンゲージメント向上</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/60 rounded-lg border border-white/50">
                      <div className="text-2xl font-light text-gray-900 mb-1">24/7</div>
                      <div className="text-xs text-gray-600">自動運用</div>
                    </div>
                    <div className="text-center p-4 bg-white/60 rounded-lg border border-white/50">
                      <div className="text-2xl font-light text-gray-900 mb-1">-70%</div>
                      <div className="text-xs text-gray-600">運用コスト削減</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 装飾要素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-400/20 to-violet-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-violet-400/15 to-indigo-500/15 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Signal.の機能詳細 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h5 className="text-lg font-medium text-gray-900 mb-3">AI投稿生成</h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                ブランドトーンに合った魅力的な投稿文を自動生成。
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h5 className="text-lg font-medium text-gray-900 mb-3">目標までの進捗グラフ</h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                運用計画を立てるとAIが逆算して
                達成率を予想し、視覚的にグラフで表示。
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h5 className="text-lg font-medium text-gray-900 mb-3">高度な分析・レポート</h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                エンゲージメント、リーチ、コンバージョンを詳細分析。
                改善提案も自動で生成します。
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5m14 14H5" />
                </svg>
              </div>
              <h5 className="text-lg font-medium text-gray-900 mb-3">各SNSに特化したAI</h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                Instagram、Twitter、Facebook、TikTokなど
                各プラットフォームの特性に最適化されたAI機能。
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h5 className="text-lg font-medium text-gray-900 mb-3">AIフィードバック</h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                投稿ごとにAIが改善点や伸ばすべきところを分析し、
                具体的な改善提案を自動生成。
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 p-6 rounded-lg border border-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h5 className="text-lg font-medium text-gray-900 mb-3">定型文一括管理</h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                よく使うハッシュタグ、キャプション、定型文を
                データベースで一括管理し、簡単に呼び出し可能。
              </p>
            </div>
          </div>

          {/* Signal.詳細リンク */}
          <div className="text-center mt-16">
            <a 
              href="https://www.sgnalapp.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-3xl font-medium text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <span className="text-white font-bold">Signal</span><span className="text-white">.</span>について詳しく見る
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* AIがもたらす効果 */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-indigo-700 tracking-wider uppercase">AI Benefits</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">AIがもたらす効果</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AI導入により、業務効率化と品質向上を同時に実現できます
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">業務効率化</h4>
                  <p className="text-gray-600">
                    繰り返し作業の自動化により、業務効率を大幅に向上。
                    人的リソースをより価値の高い業務に集中できます。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">品質向上</h4>
                  <p className="text-gray-600">
                    AIによる高精度な分析と判断により、
                    ヒューマンエラーを削減し、サービス品質を向上させます。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-700 to-violet-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">コスト削減</h4>
                  <p className="text-gray-600">
                    自動化による人件費削減と、
                    効率化による時間コスト削減を実現します。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50/50 p-8 md:p-12 rounded-3xl border border-gray-100/50 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <h5 className="text-xl font-light text-gray-900 mb-2">導入効果</h5>
                  <div className="w-12 h-px bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center p-6 bg-white/60 rounded-2xl border border-white/50">
                    <div className="text-3xl font-light text-indigo-700 mb-2">40%</div>
                    <div className="text-sm text-gray-600">業務効率向上</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/60 rounded-2xl border border-white/50">
                      <div className="text-2xl font-light text-gray-900 mb-1">30%</div>
                      <div className="text-xs text-gray-600">コスト削減</div>
                    </div>
                    <div className="text-center p-4 bg-white/60 rounded-2xl border border-white/50">
                      <div className="text-2xl font-light text-gray-900 mb-1">95%</div>
                      <div className="text-xs text-gray-600">精度向上</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 装飾要素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-400/20 to-violet-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-violet-400/15 to-indigo-500/15 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 対応業界・業務 */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-indigo-700 tracking-wider uppercase">Target Industries</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">対応業界・業務</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              様々な業界・業務でAI導入実績があり、お客様の課題に最適なソリューションを提供します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50/50 p-8 rounded-3xl border border-gray-100/50 group-hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">製造業</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  生産管理、品質管理、予知保全などの製造プロセス最適化
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50/50 p-8 rounded-3xl border border-gray-100/50 group-hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">小売・EC</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  在庫管理、需要予測、レコメンドエンジンなどの販売支援
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50/50 p-8 rounded-3xl border border-gray-100/50 group-hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-700 to-violet-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">サービス業</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  顧客管理、予約システム、サービス品質向上支援
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50/50 p-8 rounded-3xl border border-gray-100/50 group-hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-800 to-violet-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">事務・管理</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  書類処理、データ入力、スケジュール管理などの事務業務自動化
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 導入プロセス */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-indigo-700 tracking-wider uppercase">Implementation Process</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">導入プロセス</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              お問い合わせから運用開始まで、段階的で安心なプロセスでSignal.導入をサポートします
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-16">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">お問い合わせ</h5>
              <p className="text-sm text-gray-600">フォームからお気軽にご相談ください</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">ヒアリング</h5>
              <p className="text-sm text-gray-600">運用状況やご要望を詳しくヒアリング</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-700 to-violet-700 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">ご契約</h5>
              <p className="text-sm text-gray-600">最適なプランでご契約手続きを完了</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-800 to-violet-800 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">AIカスタマイズ</h5>
              <p className="text-sm text-gray-600">御社のSNS戦略に合わせてAIをカスタマイズ</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-900 to-violet-900 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">引き渡し</h5>
              <p className="text-sm text-gray-600">カスタマイズ完了後、ツールをお引き渡し</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">6</span>
                </div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">運用開始</h5>
              <p className="text-sm text-gray-600">継続的なサポートと共にSNS運用を開始</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact/general" className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-3xl font-medium text-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1">
              AI導入のご相談・お見積り
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* AIの未来 */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-indigo-100/20 to-violet-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-violet-100/15 to-indigo-100/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium text-indigo-700 tracking-wider uppercase">Future of AI</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-gray-900 mb-8">
              AIと共に歩む
              <span className="block font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mt-4">
                ビジネスの未来
              </span>
            </h2>
            
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-12"></div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-16">
              AI技術は日々進化し、ビジネスの可能性を無限に広げています。<br className="hidden md:block" />
              私たちは、お客様と共にAIの可能性を探求し、<br className="hidden md:block" />
              ビジネスの新たな価値創造をサポートいたします。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左側：AIパートナーとして */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50/50 p-8 rounded-2xl border border-gray-100/50 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-light text-gray-900">AIパートナーとして</h4>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  私たちは単なるAIツールの提供者ではありません。
                  お客様のビジネスを深く理解し、AIの力でどのような価値を創造できるかを
                  一緒に考える「AIパートナー」として、長期的な関係を築いていきます。
                </p>
                
                <div className="bg-indigo-50/50 p-6 border-l-4 border-indigo-600">
                  <p className="text-indigo-800 font-medium italic text-center">
                    「AIは魔法ではありません。しかし、正しく活用すれば、<br className="hidden md:block" />
                    ビジネスに革新的な変化をもたらす強力なツールです。」
                  </p>
                </div>
              </div>
            </div>

            {/* 右側：AI技術の進化 */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 p-6 rounded-xl border border-gray-100/50 backdrop-blur-sm group hover:border-indigo-300/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-gray-900 mb-2">次世代AI技術</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      機械学習、自然言語処理、画像認識など最新のAI技術を駆使し、
                      従来では不可能だった高度な自動化を実現
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-violet-50/30 p-6 rounded-xl border border-gray-100/50 backdrop-blur-sm group hover:border-violet-300/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-gray-900 mb-2">継続的な進化</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      お客様の利用データから学習し、AIが継続的に進化。
                      使えば使うほど、より精度の高い提案を実現
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-pink-50/30 p-6 rounded-xl border border-gray-100/50 backdrop-blur-sm group hover:border-pink-300/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-gray-900 mb-2">投資対効果の最大化</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      AI導入により、人的コストを削減しながら
                      品質向上と効率化を同時に実現し、ROIを最大化
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30 p-6 rounded-xl border border-gray-100/50 backdrop-blur-sm group hover:border-emerald-300/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-gray-900 mb-2">競争優位性の確立</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      AI活用により、競合他社との差別化を図り、
                      市場での優位性を確立し、持続的な成長を実現
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 未来へのメッセージ */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50/50 p-12 rounded-3xl border border-gray-100/50 backdrop-blur-sm max-w-5xl mx-auto">
              <h4 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
                未来は、
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent font-bold">
                  AIと共に創る
                </span>
              </h4>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                テクノロジーの力で、ビジネスの可能性を無限に広げる。<br className="hidden md:block" />
                Signal.から始まる、あなたのAI活用ジャーニーを一緒に歩みませんか？
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact/general" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-medium text-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                  AI導入のご相談
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a 
                  href="https://www.sgnalapp.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl font-medium text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                >
                  <span className="text-white font-bold">Signal</span><span className="text-white">.</span>を体験する
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection 
        title="AI業務改善についてお気軽にご相談ください"
        description="AI技術を活用した業務効率化でお困りのことがございましたら、専門スタッフが丁寧にご相談をお受けいたします。現状分析・効果予測は無料です。"
        ctaText="AI導入のお問い合わせ"
        ctaHref="/contact/general"
      />
      <Footer />
    </div>
  );
}