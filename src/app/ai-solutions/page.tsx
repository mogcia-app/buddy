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
            AI業務改善ツール
            <span className="block font-medium bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              AIで業務を革新する
            </span>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* AIがもたらす効果 */}
      <section className="py-32 bg-white">
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
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-indigo-700 tracking-wider uppercase">Implementation Process</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">導入プロセス</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              業務分析から運用まで、段階的で安心なプロセスでAI導入をサポートします
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">業務分析</h5>
              <p className="text-sm text-gray-600">現在の業務フローを詳細に分析し、課題を抽出</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">AI設計</h5>
              <p className="text-sm text-gray-600">課題に最適なAIソリューションを設計・開発</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-700 to-violet-700 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">テスト導入</h5>
              <p className="text-sm text-gray-600">小規模でのテスト運用により効果を検証</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-800 to-violet-800 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">本格導入</h5>
              <p className="text-sm text-gray-600">全社的な導入とスタッフ研修を実施</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-900 to-violet-900 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">運用・改善</h5>
              <p className="text-sm text-gray-600">継続的な効果測定と最適化を実施</p>
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

      {/* 成功事例 */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-indigo-700 tracking-wider uppercase">Success Stories</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">成功事例</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              実際にAI導入をされたお客様の成功事例をご紹介します
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 製造業 */}
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 p-8 rounded-3xl border border-gray-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">製造業C株式会社</h4>
                  <p className="text-sm text-gray-600">生産管理AI導入</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                「生産ライン最適化AIを導入したことで、生産効率が40%向上しました。
                品質管理も自動化され、不良品率が大幅に減少。
                データに基づく予測により、計画的な生産が可能になり、
                コストも30%削減できました。ROIは期待以上の結果です。」
              </p>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-indigo-700 font-medium">製造業</p>
            </div>

            {/* サービス業 */}
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 p-8 rounded-3xl border border-gray-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">サービス業D社</h4>
                  <p className="text-sm text-gray-600">チャットボット導入</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                「24時間対応のAIチャットボットを導入したことで、顧客満足度が大幅に向上しました。
                よくある質問への自動応答により、スタッフの負担も軽減。
                夜間や休日でもお客様対応ができるようになり、
                ビジネス機会の損失を防げています。」
              </p>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-indigo-700 font-medium">サービス業</p>
            </div>
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
        
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-indigo-700 tracking-wider uppercase">Future of AI</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-900 mb-8">
            AIと共に歩む
            <span className="block font-medium bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              ビジネスの未来
            </span>
          </h2>
          
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-12"></div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-16">
            AI技術は日々進化し、ビジネスの可能性を無限に広げています。<br className="hidden md:block" />
            私たちは、お客様と共にAIの可能性を探求し、<br className="hidden md:block" />
            ビジネスの新たな価値創造をサポートいたします。
          </p>
          
          <div className="bg-gradient-to-br from-slate-50 to-indigo-50/50 p-8 md:p-12 rounded-3xl border border-gray-100/50 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-light text-gray-900 mb-4">AIパートナーとして</h4>
              <div className="w-16 h-px bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mb-6"></div>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              私たちは単なるAIツールの提供者ではありません。
              お客様のビジネスを深く理解し、AIの力でどのような価値を創造できるかを
              一緒に考える「AIパートナー」として、長期的な関係を築いていきます。
            </p>
            
            <div className="bg-indigo-50/50 rounded-2xl p-6 border-l-4 border-indigo-600">
              <p className="text-indigo-800 font-medium italic">
                「AIは魔法ではありません。しかし、正しく活用すれば、
                ビジネスに革新的な変化をもたらす強力なツールです。」
              </p>
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
