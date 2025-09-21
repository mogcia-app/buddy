'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";

export default function Restaurant() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ページヘッダー */}
      <section className="relative py-32 overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/pexels-janetrangdoan-892649.jpg"
            alt="美味しい料理の背景"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'center center' }}
          />
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-emerald-50/90"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-emerald-700 tracking-wider uppercase">Restaurant Business</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light leading-tight text-gray-900 mb-8">
            飲食事業
            <span className="block font-medium bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              美味しい食体験をお届け
            </span>
          </h1>
          
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            レストラン運営やケータリングサービスを通じて、美味しい食事体験を提供。<br className="hidden md:block" />
            イベントや企業向けサービスも承ります。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact/general" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-medium text-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              飲食事業のご相談
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="#services" className="inline-flex items-center px-8 py-4 bg-white/70 backdrop-blur-sm text-gray-700 rounded-2xl font-medium text-lg border border-gray-200/50 hover:bg-white/90 hover:border-emerald-300/50 transition-all duration-300 hover:scale-105">
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
              <span className="text-sm font-medium text-emerald-700 tracking-wider uppercase">Our Services</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">サービス内容</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              多様な飲食サービスで、お客様に特別な食体験をお届けします
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* レストラン運営 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100/50 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">レストラン運営</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                地域に愛される飲食店の運営から始まった私たちの原点。
                お客様に愛される味と空間を提供いたします。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></div>
                  メニュー開発・調理指導
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></div>
                  店舗運営サポート
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></div>
                  スタッフ研修・教育
                </li>
              </ul>
            </div>

            {/* ケータリングサービス */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100/50 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">ケータリングサービス</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                企業イベント、パーティー、会議など、
                様々なシーンに合わせたケータリングサービスを提供いたします。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></div>
                  企業イベント・パーティー
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></div>
                  会議・セミナー向け軽食
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></div>
                  オーダーメイドメニュー
                </li>
              </ul>
            </div>

            {/* イベント料理 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100/50 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-700 to-teal-700 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">イベント料理</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                結婚式、歓送迎会、記念パーティーなど、
                特別な日を彩る心に残る料理をご提供いたします。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></div>
                  結婚式・記念パーティー
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></div>
                  歓送迎会・懇親会
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></div>
                  季節のイベント料理
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

        {/* 私たちの強み */}
        <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-emerald-700 tracking-wider uppercase">Our Strengths</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">私たちの強み</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              飲食店経営で培った経験と技術で、お客様に最高の食体験をお届けします
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">愛される味づくり</h4>
                  <p className="text-gray-600">
                    飲食店経営で培った「お客様に愛される味」を追求。
                    素材の良さを活かした、心に残る美味しさをお届けします。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">柔軟な対応力</h4>
                  <p className="text-gray-600">
                    小規模なパーティーから大型イベントまで、
                    お客様のニーズに合わせて柔軟に対応いたします。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-700 to-teal-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">安全・安心への配慮</h4>
                  <p className="text-gray-600">
                    厨房委託業で培った衛生管理と安全基準を、
                    飲食事業にも活かし、安心してお召し上がりいただけます。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-emerald-50/50 p-8 md:p-12 rounded-3xl border border-gray-100/50 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <h5 className="text-xl font-light text-gray-900 mb-2">サービス実績</h5>
                  <div className="w-12 h-px bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center p-6 bg-white/60 rounded-2xl border border-white/50">
                    <div className="text-2xl font-light text-emerald-700 mb-2">多数の実績</div>
                    <div className="text-sm text-gray-600">イベント対応</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/60 rounded-2xl border border-white/50">
                      <div className="text-2xl font-light text-gray-900 mb-1">98%</div>
                      <div className="text-xs text-gray-600">満足度</div>
                    </div>
                    <div className="text-center p-4 bg-white/60 rounded-2xl border border-white/50">
                      <div className="text-2xl font-light text-gray-900 mb-1">24時間</div>
                      <div className="text-xs text-gray-600">対応可能</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 装飾要素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-teal-400/15 to-emerald-500/15 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 対応シーン */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-emerald-700 tracking-wider uppercase">Event Scenes</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">対応シーン</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              様々なシーンに合わせた最適な料理とサービスをご提供します
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-50 to-emerald-50/50 p-8 rounded-3xl border border-gray-100/50 group-hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">結婚式・披露宴</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  人生の特別な日を彩る、心に残る美味しい料理でお祝いをサポート
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-50 to-emerald-50/50 p-8 rounded-3xl border border-gray-100/50 group-hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">企業イベント</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  歓送迎会、忘年会、新年会など、企業の大切なイベントをサポート
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-50 to-emerald-50/50 p-8 rounded-3xl border border-gray-100/50 group-hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-700 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">会議・セミナー</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ビジネス会議やセミナーでの軽食・お弁当など、効率的な食事提供
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-50 to-emerald-50/50 p-8 rounded-3xl border border-gray-100/50 group-hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-800 to-teal-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">プライベート</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  家族のお祝い、友人との集まりなど、プライベートなシーンにも対応
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 私たちのこだわり */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-emerald-100/20 to-teal-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-teal-100/15 to-emerald-100/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-emerald-700 tracking-wider uppercase">Our Commitment</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">私たちのこだわり</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              飲食店経営で培った「美味しさ」への追求と「おもてなし」の心を大切にしています
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100/50 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">厳選素材</h4>
              <p className="text-gray-600 leading-relaxed">
                新鮮で質の高い食材を厳選し、
                素材本来の美味しさを最大限に引き出します。
              </p>
            </div>

            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100/50 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">おもてなしの心</h4>
              <p className="text-gray-600 leading-relaxed">
                お客様お一人お一人に心を込めて、
                特別な時間を演出いたします。
              </p>
            </div>

            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100/50 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-700 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">創造性</h4>
              <p className="text-gray-600 leading-relaxed">
                お客様のご要望に合わせて、
                オリジナルメニューの開発も承ります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 導入プロセス */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-emerald-700 tracking-wider uppercase">Service Process</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">サービスの流れ</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              お問い合わせから当日まで、丁寧にサポートいたします
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">ご相談・ヒアリング</h5>
              <p className="text-sm text-gray-600">イベント内容、人数、ご予算などを詳しくお聞きします</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">メニュー提案</h5>
              <p className="text-sm text-gray-600">シーンに合わせた最適なメニューをご提案いたします</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-700 to-teal-700 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">準備・調理</h5>
              <p className="text-sm text-gray-600">当日に向けて丁寧に準備し、心を込めて調理いたします</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-800 to-teal-800 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">配送・サービス</h5>
              <p className="text-sm text-gray-600">時間通りに配送し、温かい状態でお届けいたします</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact/general" className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-3xl font-medium text-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1">
              飲食事業のご相談・お見積り
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 実際の提供料理 */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-emerald-700 tracking-wider uppercase">Our Dishes</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">実際の提供料理</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              実際にご提供している料理の一例をご紹介します。お客様のご要望に合わせてカスタマイズも可能です。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 抹茶フレンチトースト */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/3.jpg"
                  alt="抹茶フレンチトースト"
                  width={600}
                  height={400}
                  className="w-full h-80 mb-6 object-cover"
                />
                
                {/* 装飾要素 */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-emerald-400/15 to-teal-500/15 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-900 mb-3">抹茶のフレンチトースト</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  京都産の上質な抹茶を使用した、和の香りが楽しめる特別なフレンチトースト。
                  ふわふわの食感と抹茶の深い味わいが絶妙にマッチした、贅沢な一品です。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">抹茶</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">京都産</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">和スイーツ</span>
                </div>
              </div>
            </div>

            {/* チョコバナナ */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/4.jpg"
                  alt="チョコバナナ"
                  width={600}
                  height={400}
                  className="w-full h-80 mb-6 object-cover"
                />
                
                {/* 装飾要素 */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-emerald-400/15 to-teal-500/15 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-900 mb-3">チョコバナナのフレンチトースト</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  甘いバナナと濃厚なチョコレートソースが絶妙にマッチした人気のフレンチトースト。
                  ふわふわの食感と甘い香りで、子供から大人まで愛される特別なデザートです。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">チョコレート</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">バナナ</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">人気デザート</span>
                </div>
              </div>
            </div>

              {/* フルーツフレンチトースト */}
              <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/8.jpg"
                  alt="フルーツフレンチトースト"
                  width={600}
                  height={400}
                  className="w-full h-80 mb-6 object-cover"
                />
                
                {/* 装飾要素 */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-emerald-600/15 to-teal-700/15 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-900 mb-3">フルーツフレンチトースト</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  季節のフレッシュフルーツをたっぷりのせた、贅沢なフレンチトースト。
                  ふわふわの食感と自然な甘みが絶妙にマッチした、見た目も華やかなスイーツです。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">フルーツ</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">季節限定</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">華やか</span>
                </div>
              </div>
            </div>

            {/* ナッツのフレンチトースト */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/9.jpg"
                  alt="ナッツのフレンチトースト"
                  width={600}
                  height={400}
                  className="w-full h-80 mb-6 object-cover"
                />
                
                {/* 装飾要素 */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-emerald-500/15 to-teal-600/15 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-900 mb-3">ナッツのフレンチトースト</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  香ばしいナッツをたっぷりトッピングした、食感豊かなフレンチトースト。
                  カリッとした食感とナッツの風味が楽しめる、栄養価の高いスイーツです。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">ナッツ</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">香ばしい</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">食感豊か</span>
                </div>
              </div>
            </div>

            {/* チーズ照り焼きチキンと日替わりクラフトビール */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/5.jpg"
                  alt="チーズ照り焼きチキンと日替わりクラフトビール"
                  width={600}
                  height={400}
                  className="w-full h-80 mb-6 object-cover"
                />
                
                {/* 装飾要素 */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-emerald-500/15 to-teal-600/15 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-900 mb-3">チーズ照り焼きチキンと日替わりクラフトビール</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  特製照り焼きソースで焼き上げたジューシーなチキンに、とろけるチーズをトッピング。
                  毎日変わる厳選クラフトビールとの相性は抜群で、贅沢なひとときをお楽しみいただけます。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">照り焼き</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">クラフトビール</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">日替わり</span>
                </div>
              </div>
            </div>

            {/* 地元イベント出店の様子 */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/6.jpg"
                  alt="地元イベント出店の様子"
                  width={600}
                  height={400}
                  className="w-full h-80 mb-6 object-cover"
                />
                
                {/* 装飾要素 */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-emerald-500/15 to-teal-600/15 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-900 mb-3">地元イベント出店の様子</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  地域のお祭りやイベントでの出店活動の様子です。
                  地元の皆様との交流を大切にし、温かい雰囲気の中で美味しい料理をお届けしています。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">地域密着</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">イベント出店</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">地域交流</span>
                </div>
              </div>
            </div>

            {/* サラダとスープのランチ */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/7.jpg"
                  alt="サラダとスープのランチ"
                  width={600}
                  height={400}
                  className="w-full h-80 mb-6 object-cover"
                />
                
                {/* 装飾要素 */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-emerald-600/15 to-teal-700/15 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-900 mb-3">サラダとスープのランチ</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  新鮮なサラダと心温まるスープを組み合わせたヘルシーなランチセット。
                  体に優しく、栄養バランスを考えた軽やかでありながら満足感のある一品です。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">ランチセット</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">ヘルシー</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">体に優しい</span>
                </div>
              </div>
            </div>

          

            {/* チュリトス */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/10.jpg"
                  alt="チュリトス"
                  width={600}
                  height={400}
                  className="w-full h-80 mb-6 object-cover"
                />
                
                {/* 装飾要素 */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-emerald-600/15 to-teal-700/15 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-900 mb-3">チュリトス</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  外はカリッと、中はふんわりとした食感が楽しめるスペイン発祥の人気スイーツ。
                  シナモンシュガーをたっぷりまぶした、温かくて甘い至福のデザートです。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">スペイン風</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">シナモン</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">温かいデザート</span>
                </div>
              </div>
            </div>

            {/* サムライサラダ */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/11.jpg"
                  alt="サムライサラダ"
                  width={600}
                  height={400}
                  className="w-full h-80 mb-6 object-cover"
                />
                
                {/* 装飾要素 */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-emerald-500/15 to-teal-600/15 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-900 mb-3">サムライサラダ</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  ボリューム満点の肉料理がメインのパワフルサラダ。
                  新鮮野菜と旨味たっぷりの肉類で、満足感のある一皿です。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">ボリューム満点</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">肉料理</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">パワフル</span>
                </div>
              </div>
            </div>

            {/* シーザーサラダ */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/12.jpg"
                  alt="シーザーサラダ"
                  width={600}
                  height={400}
                  className="w-full h-80 mb-6 object-cover"
                />
                
                {/* 装飾要素 */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-emerald-600/15 to-teal-700/15 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-900 mb-3">シーザーサラダ</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  クリーミーなドレッシングと新鮮野菜の定番サラダ。
                  パルメザンチーズとクルトンで、贅沢な味わいをお楽しみください。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">クラシック</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">チーズ</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">クリーミー</span>
                </div>
              </div>
            </div>

            {/* ブッダサラダ */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/13.jpg"
                  alt="ブッダサラダ"
                  width={600}
                  height={400}
                  className="w-full h-80 mb-6 object-cover"
                />
                
                {/* 装飾要素 */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-emerald-700/15 to-teal-800/15 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-900 mb-3">ブッダサラダ</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  色とりどりの野菜と豆類がたっぷり入ったヘルシーサラダ。
                  栄養バランスを考えた、体に優しい一品です。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">ヘルシー</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">豆類</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">栄養満点</span>
                </div>
              </div>
            </div>

            {/* コリアンパルガット */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/14.jpg"
                  alt="コリアンパルガット"
                  width={600}
                  height={400}
                  className="w-full h-80 mb-6 object-cover"
                />
                
                {/* 装飾要素 */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-emerald-500/15 to-teal-600/15 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-900 mb-3">コリアンパルガット</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  韓国風の海鮮とキムチがメインのスパイシーサラダ。
                  エビと海苔、新鮮野菜で本格的な韓国の味をお楽しみください。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">韓国風</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">海鮮</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">スパイシー</span>
                </div>
              </div>
            </div>

            {/* ブッダサブサラダ */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/15.jpg"
                  alt="ブッダサブサラダ"
                  width={600}
                  height={400}
                  className="w-full h-80 mb-6 object-cover"
                />
                
                {/* 装飾要素 */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-emerald-600/15 to-teal-700/15 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-900 mb-3">ブッダサブサラダ</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  柔らかな牛肉と新鮮野菜の絶妙なバランス。
                  もやしと彩り豊かな野菜で、食べ応えのある一品です。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">牛肉</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">食べ応え</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">バランス</span>
                </div>
              </div>
            </div>

            {/* スパイシーメキシカンサラダ */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/16.jpg"
                  alt="スパイシーメキシカンサラダ"
                  width={600}
                  height={400}
                  className="w-full h-80 mb-6 object-cover"
                />
                
                {/* 装飾要素 */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-emerald-700/15 to-teal-800/15 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-900 mb-3">スパイシーメキシカンサラダ</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  ソーセージとゆで卵、アボカドが入ったメキシカンスタイル。
                  スパイシーな味付けで、エキゾチックな味わいをお楽しみください。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">メキシカン</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">アボカド</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">スパイシー</span>
                </div>
              </div>
            </div>

            {/* チキン&ビーンズサラダ */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/17.jpg"
                  alt="チキン&ビーンズサラダ"
                  width={600}
                  height={400}
                  className="w-full h-80 mb-6 object-cover"
                />
                
                {/* 装飾要素 */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-emerald-500/15 to-teal-600/15 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-900 mb-3">チキン&ビーンズサラダ</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  グリルチキンと豆類がメインのプロテインたっぷりサラダ。
                  健康的で満足感のある、栄養バランス抜群の一品です。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">チキン</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">プロテイン</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">健康的</span>
                </div>
              </div>
            </div>

            {/* シチリアンサラダ */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/18.jpg"
                  alt="シチリアンサラダ"
                  width={600}
                  height={400}
                  className="w-full h-80 mb-6 object-cover"
                />
                
                {/* 装飾要素 */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-emerald-600/15 to-teal-700/15 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-900 mb-3">シチリアンサラダ</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  きのこと新鮮野菜、ゆで卵のイタリアンスタイルサラダ。
                  シチリア風の味付けで、地中海の風味をお楽しみください。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">イタリアン</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">きのこ</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">地中海風</span>
                </div>
              </div>
            </div>

            {/* スペシャルサラダボウル */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/19.jpg"
                  alt="スペシャルサラダボウル"
                  width={600}
                  height={400}
                  className="w-full h-80 mb-6 object-cover"
                />
                
                {/* 装飾要素 */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-emerald-700/15 to-teal-800/15 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-900 mb-3">スペシャルサラダボウル</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  シェフ特製のスペシャルサラダボウル。
                  厳選された食材を使用した、当店自慢の特別な一品です。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">シェフ特製</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">特別</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">厳選食材</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* お客様の声 */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-emerald-700 tracking-wider uppercase">Customer Voice</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">お客様の声</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              実際にご利用いただいたお客様からの声をご紹介します
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 企業イベント */}
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30 p-8 rounded-3xl border border-gray-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">忘年会ケータリング利用</h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                「忘年会でケータリングをお願いしました。
                料理のクオリティが非常に高く、参加者からも大好評でした。
                準備から片付けまでスムーズで、安心してお任せできました。
                来年もぜひお願いしたいと思います。」
              </p>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-emerald-700 font-medium">企業イベント</p>
            </div>

            {/* プライベートイベント */}
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30 p-8 rounded-3xl border border-gray-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">結婚式ケータリング利用</h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                「息子の結婚式でケータリングをお願いしました。
                ゲストの皆様から『料理が本当に美味しい』とたくさんお褒めの言葉をいただきました。
                見た目も美しく、写真映えもして、思い出に残る素晴らしい結婚式になりました。
                心から感謝しています。」
              </p>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-emerald-700 font-medium">プライベートイベント</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection 
        title="飲食事業についてお気軽にご相談ください"
        description="レストラン運営やケータリングサービスについて、どんなことでもお気軽にご相談ください。お客様のご要望に合わせた最適なプランをご提案いたします。"
        ctaText="飲食事業のお問い合わせ"
        ctaHref="/contact/general"
      />
      <Footer />
    </div>
  );
}
