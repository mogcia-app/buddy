'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";

export default function KitchenManagement() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const dishes = [
    {
      src: "/1.jpg",
      alt: "介護施設の行事食",
      title: "介護施設の行事食",
      description: "季節の行事に合わせた特別な御膳。栄養バランスを考慮しながら、見た目にも美しく、食べやすい形で提供しています。",
      tags: ["行事食", "栄養管理", "季節感"]
    },
    {
      src: "/2.jpg", 
      alt: "敬老会メニューの天ぷらバイキング",
      title: "敬老会天ぷらバイキング",
      description: "敬老会などの特別なイベントでは、揚げたての天ぷらバイキングを開催。利用者様に喜んでいただける華やかなイベント料理です。",
      tags: ["イベント料理", "バイキング", "揚げたて"]
    },
    {
      src: "/20-1.png",
      alt: "日常の栄養バランス食", 
      title: "日常の栄養バランス食",
      description: "毎日の食事では、栄養バランスを重視した健康的なメニューを提供。食べやすく、美味しく、栄養価の高い食事を心がけています。",
      tags: ["栄養バランス", "日常食", "健康管理"],
      
    },
    {
      src: "/kondate2.png",
      alt: "お正月の特別御膳",
      title: "季節の特別御膳", 
      description: "お正月やお祝いの日には、季節感溢れる特別な御膳をご提供。美しい盛り付けと伝統的な味付けで、特別な日を彩ります。",
      tags: ["季節メニュー", "伝統料理", "特別な日対応"]
    },
    {
      src: "/kondate1.png",
      alt: "特別なデザート・ケーキ",
      title: "特別なデザート",
      description: "誕生日やイベントには、華やかで美味しいデザートをご用意。利用者様の笑顔と喜びを第一に考えた、心のこもった手作りデザートです。",
      tags: ["手作りデザート", "イベント対応", "個別対応"]
    }
  ];

  const cardsPerView = 3;
  const maxSlide = Math.max(0, dishes.length - cardsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* ページヘッダー */}
      <section className="relative py-32 overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/pexels-ella-olsson-572949-1640777.jpg"
            alt="新鮮な野菜と栄養バランスの良い食事"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'center center' }}
          />
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-orange-50/90"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-orange-700 tracking-wider uppercase">Kitchen Management</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light leading-tight text-gray-900 mb-8">
            厨房委託業
            <span className="block font-medium bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              安心・安全な食事づくり
            </span>
          </h1>
          
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            介護施設の厨房運営をトータルサポート。栄養管理から衛生管理まで、<br className="hidden md:block" />
            プロフェッショナルが安心・安全な食事づくりをお手伝いします。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact/kitchen" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl font-medium text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              厨房委託のご相談
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="#services" className="inline-flex items-center px-8 py-4 bg-white/70 backdrop-blur-sm text-gray-700 rounded-2xl font-medium text-lg border border-gray-200/50 hover:bg-white/90 hover:border-orange-300/50 transition-all duration-300 hover:scale-105">
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
              <span className="text-sm font-medium text-orange-700 tracking-wider uppercase">Our Services</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">サービス内容</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              厨房運営の全般を管理し、安全で美味しい食事を提供いたします
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 厨房運営管理 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100/50 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">厨房運営管理</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                調理スタッフの配置から食材発注、献立作成まで、
                厨房運営の全般を管理いたします。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                  スタッフ配置・管理
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                  食材発注・在庫管理
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                  献立作成・調理指導
                </li>
              </ul>
            </div>

            {/* 栄養管理 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100/50 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">栄養管理</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                管理栄養士による献立作成と栄養バランスの管理で、
                高齢者の健康維持をサポートします。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                  栄養バランス計算
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                  アレルギー対応
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                  嚥下食・介護食対応
                </li>
              </ul>
            </div>

            {/* 衛生管理 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100/50 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-700 to-red-700 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">衛生管理</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                HACCP基準に基づく衛生管理システムで、
                安全で清潔な厨房環境を維持いたします。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                  HACCP基準準拠
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                  定期的な衛生点検
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                  スタッフ衛生教育
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 実際の提供料理 */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-orange-700 tracking-wider uppercase">Our Dishes</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">実際の提供料理</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              季節感を大切にした美しい盛り付けと、栄養バランスを考慮した献立をご提供しています
            </p>
          </div>

          {/* 料理写真カードスライダー */}
          <div className="relative">
            {/* 左矢印 */}
            {currentSlide > 0 && (
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
              >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            )}
            
            {/* 右矢印 */}
            {currentSlide < maxSlide && (
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
              >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            )}
            
            {/* カードコンテナ */}
            <div className="overflow-hidden mx-12">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)` }}
              >
                {dishes.map((dish, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-slate-50 to-gray-50/30 p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
                      <div className="relative">
                        <Image
                          src={dish.src}
                          alt={dish.alt}
                          width={600}
                          height={400}
                          className="w-full h-80 mb-6 object-cover"
                        />
                        
                        {/* 装飾要素 */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-400/15 to-red-500/15 rounded-full blur-xl"></div>
                      </div>
                      
                      <div className="text-center">
                        <h4 className="text-xl font-medium text-gray-900 mb-3">{dish.title}</h4>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {dish.description}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {dish.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* ドット インジケーター */}
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: maxSlide + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-orange-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 料理の特徴 */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-gray-50/30 rounded-2xl border border-gray-100/50">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">季節感を大切に</h4>
              <p className="text-gray-600 text-sm">
                四季折々の食材を使用し、季節の移ろいを食事で感じていただけます
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-gray-50/30 rounded-2xl border border-gray-100/50">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">美しい盛り付け</h4>
              <p className="text-gray-600 text-sm">
                見た目にも美しく、食欲をそそる盛り付けで食事の時間を楽しく演出
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-gray-50/30 rounded-2xl border border-gray-100/50">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-700 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">特別な日への配慮</h4>
              <p className="text-gray-600 text-sm">
                誕生日、記念日、季節行事など、特別な日にはそれに相応しい特別メニューを
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 対応施設 */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-orange-700 tracking-wider uppercase">Target Facilities</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">対応施設</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              介護施設と企業食堂に特化し、それぞれの特性に合わせた専門的なサービスを提供します
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-50 to-gray-50/50 p-8 rounded-3xl border border-gray-100/50 group-hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-4">介護施設</h4>
                <div className="space-y-2 text-gray-600">
                  <p className="text-sm">特別養護老人ホーム</p>
                  <p className="text-sm">有料老人ホーム</p>
                  <p className="text-sm">デイサービスセンター</p>
                  <p className="text-sm">グループホーム</p>
                  <p className="text-sm">ショートステイ施設</p>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-50 to-gray-50/50 p-8 rounded-3xl border border-gray-100/50 group-hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-700 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-4">企業食堂</h4>
                <div className="space-y-2 text-gray-600">
                  <p className="text-sm">オフィス社員食堂</p>
                  <p className="text-sm">工場食堂</p>
                  <p className="text-sm">病院職員食堂</p>
                  <p className="text-sm">学校給食</p>
                  <p className="text-sm">その他法人向け給食</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 品質保証・認証 */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-orange-700 tracking-wider uppercase">Quality Assurance</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">品質保証・認証</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              厳格な品質管理と各種認証により、安全で安心な食事をお届けします
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">HACCP基準準拠</h4>
                  <p className="text-gray-600">
                    食品安全管理の国際基準であるHACCP（ハサップ）に準拠した
                    衛生管理システムを導入しています。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">定期的な品質監査</h4>
                  <p className="text-gray-600">
                    定期的な内部監査と外部監査により、
                    継続的な品質向上を図っています。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-700 to-red-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">専門資格保有スタッフ</h4>
                  <p className="text-gray-600">
                    管理栄養士、調理師、食品衛生責任者など、
                    専門資格を持つスタッフが対応いたします。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50/50 p-8 md:p-12 rounded-3xl border border-gray-100/50 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <h5 className="text-xl font-light text-gray-900 mb-2">品質指標</h5>
                  <div className="w-12 h-px bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center p-6 bg-white/60 rounded-2xl border border-white/50">
                    <div className="text-3xl font-light text-orange-700 mb-2">100%</div>
                    <div className="text-sm text-gray-600">HACCP基準達成</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/60 rounded-2xl border border-white/50">
                      <div className="text-2xl font-light text-gray-900 mb-1">0</div>
                      <div className="text-xs text-gray-600">食中毒事故</div>
                    </div>
                    <div className="text-center p-4 bg-white/60 rounded-2xl border border-white/50">
                      <div className="text-2xl font-light text-gray-900 mb-1">98%</div>
                      <div className="text-xs text-gray-600">満足度</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 装飾要素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-orange-600/20 to-red-700/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 導入プロセス */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-orange-700 tracking-wider uppercase">Implementation Process</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">導入プロセス</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              お問い合わせから運用開始まで、段階的で安心なプロセスで進めます
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">現地調査・ヒアリング</h5>
              <p className="text-sm text-gray-600">施設の現状確認と詳細なご要望をお聞きします</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">提案・見積作成</h5>
              <p className="text-sm text-gray-600">最適なプランと詳細なお見積りをご提案いたします</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-700 to-red-700 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-transparent"></div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">スタッフ研修・準備</h5>
              <p className="text-sm text-gray-600">専門スタッフの研修と厨房環境の整備を行います</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-800 to-red-800 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
              </div>
              <h5 className="font-medium text-gray-900 mb-2">運用開始・定期監査</h5>
              <p className="text-sm text-gray-600">サービス開始後も定期的な監査とサポートを継続</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact/kitchen" className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-3xl font-medium text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1">
              厨房委託のご相談・お見積り
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 私たちの想い */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-indigo-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-100/15 to-indigo-100/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左側：写真 */}
            <div className="relative">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-4 border border-gray-100/50">
                <Image
                  src="/名称未設定のデザイン.png"
                  alt="利用者様の笑顔"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full h-80"
                />
              </div>
              
              {/* 装飾要素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-400/20 to-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-400/15 to-indigo-500/15 rounded-full blur-xl"></div>
            </div>

            {/* 右側：メッセージ */}
            <div className="space-y-8">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-sm font-medium text-orange-700 tracking-wider uppercase">Our Heart</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                  この笑顔のために
                  <span className="block font-medium bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    私たちは働いています
                  </span>
                </h3>
                <div className="w-16 h-px bg-gradient-to-r from-orange-500 to-red-500 mb-8"></div>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  私たちが最も大切にしているのは、利用者様の笑顔です。
                  美味しい食事を召し上がっていただいた時の嬉しそうな表情、
                  「今日のお食事も美味しかったよ」という温かいお言葉。
                </p>
                
                <p>
                  それらすべてが、私たちの仕事への原動力となっています。
                  単に食事を提供するだけでなく、利用者様お一人お一人の
                  健康と幸せを支える大切な役割を担っていることを、
                  私たちは深く理解しています。
                </p>
                
                <div className="bg-orange-50/50 rounded-2xl p-6 border-l-4 border-orange-600">
                  <p className="text-orange-800 font-medium">
                    「食事は生きる喜び。その喜びをお届けすることが、
                    私たちの使命です。」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-orange-700 tracking-wider uppercase">Customer Voice</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">お客様の声</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              実際にご利用いただいているお客様からの声をご紹介します
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 老人ホーム側（施設運営者）の声 */}
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 p-8 rounded-3xl border border-gray-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">某有料老人ホーム</h4>
                  
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                「バディさんにお任せしてから、食事の品質が格段に向上し、入居者様からの満足度も大幅にアップしました。
                衛生管理も徹底されており、安心してお任せできます。
                管理栄養士さんによる栄養バランスの管理で、入居者様の健康状態も良好に保たれています。
                スタッフの皆さんも親切で、施設との連携もスムーズです。」
              </p>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-orange-700 font-medium">施設運営者の声</p>
            </div>

            {/* 利用者様の声 */}
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 p-8 rounded-3xl border border-gray-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">入居者様からの声</h4>
                  <p className="text-sm text-gray-600">老人ホームご利用者様より</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <div className="bg-white/60 p-4 rounded-2xl border border-gray-100/50">
                  <p className="italic">
                    「お食事がまるで家庭の味のようで、とても落ち着きます。
                    昔懐かしい煮物の味や、優しい味付けで心がほっとします。
                    ここに来てから、食事の時間が一番の楽しみになりました。」
                  </p>
                  <p className="text-sm text-gray-500 mt-2">- （85歳）</p>
                </div>
                
                <div className="bg-white/60 p-4 rounded-2xl border border-gray-100/50">
                  <p className="italic">
                    「スタッフの皆さんがとても親切で、まるで家族のようです。
                    お誕生日にはケーキでお祝いしてくださって、
                    家族に囲まれているような温かい気持ちになりました。」
                  </p>
                  <p className="text-sm text-gray-500 mt-2">- （78歳）</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-orange-700 font-medium mt-2">利用者様の声</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection 
        title="厨房委託についてお気軽にご相談ください"
        description="介護施設や企業食堂の厨房運営でお困りのことがございましたら、専門スタッフが丁寧にご相談をお受けいたします。現地調査・お見積りは無料です。"
        ctaText="厨房委託のお問い合わせ"
        ctaHref="/contact/kitchen"
      />
      <Footer />
    </div>
  );
}

