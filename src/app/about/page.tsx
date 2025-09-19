import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ページヘッダー */}
      <section className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/15 to-blue-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-indigo-700 tracking-wider uppercase">About Us</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light leading-tight text-gray-900 mb-8">
            株式会社
            <span className="font-medium bg-gradient-to-r from-indigo-700 to-blue-800 bg-clip-text text-transparent">
              バディ
            </span>
            について
          </h1>
          
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-indigo-600 to-transparent mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            私たちは、多様な事業領域でお客様のビジネスをサポートする総合パートナーです。<br className="hidden md:block" />
            飲食店経営から始まり、厨房委託業、Web制作、SNS運用、AI業務改善まで、<br className="hidden md:block" />
            幅広いソリューションでお客様の成長を支えています。
          </p>
        </div>
      </section>

      {/* 代表メッセージ */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/5 w-80 h-80 bg-gradient-to-r from-indigo-50/40 to-blue-50/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/5 w-96 h-96 bg-gradient-to-r from-blue-50/30 to-indigo-50/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左側：代表者画像エリア */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50/50 rounded-3xl p-12 border border-gray-100/50">
                {/* 代表者画像プレースホルダー */}
                <div className="w-48 h-48 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-full mx-auto mb-8 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-medium text-gray-900 mb-2">代表取締役</h4>
                  <p className="text-lg text-indigo-700 font-medium mb-6">北村 慎也</p>
                  
                  <div className="bg-white/70 rounded-2xl p-6 border border-indigo-200/50">
                    <p className="text-indigo-800 font-medium italic text-sm leading-relaxed">
                      「私たちは、お客様の成功が私たちの成功。
                      真のパートナーとして、末永くお付き合いいただけるよう、
                      日々努力を重ねてまいります。」
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 装飾要素 */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-indigo-400/20 to-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-400/15 to-indigo-500/15 rounded-full blur-xl"></div>
            </div>

            {/* 右側：メッセージ */}
            <div className="space-y-8">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-sm font-medium text-indigo-700 tracking-wider uppercase">Message</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                  お客様の
                  <span className="font-medium bg-gradient-to-r from-indigo-700 to-blue-800 bg-clip-text text-transparent">
                    「バディ」
                  </span>
                  として
                </h3>
                <div className="w-16 h-px bg-gradient-to-r from-indigo-600 to-blue-700 mb-8"></div>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  株式会社バディは、飲食店の経営からスタートした会社です。
                  お客様に美味しい料理を提供し、笑顔になっていただく瞬間に、
                  「食」を通じて人と人をつなぐ仕事の素晴らしさを実感してきました。
                </p>
                
                <p>
                  飲食店経営で培った経験を活かし、次に厨房委託業へと展開しました。
                  介護施設や企業の食堂で、より多くの方々に安全で美味しい食事を提供することで、
                  「食」への想いをさらに深めることができました。
                </p>
                
                <p>
                  その後、お客様から「Webサイトも作ってもらえないか」「SNSの運用も手伝って欲しい」
                  といったご相談をいただくようになりました。そこで気づいたのは、
                  お客様が求めているのは「何でも相談できる信頼できるパートナー」だということです。
                </p>
                
                <p>
                  「バディ」という社名には、お客様と対等な関係で、
                  共に課題を解決し、共に成長していきたいという想いを込めました。
                  飲食店経営から厨房委託業で培った「安全・品質へのこだわり」と「人を想う心」を、
                  すべての事業の根幹に置き、お客様のビジネス成功をサポートしてまいります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 企業理念 */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-gradient-to-r from-indigo-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-indigo-700 tracking-wider uppercase">Our Philosophy</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-900 mb-8">
            事業を通して
            <span className="block font-medium bg-gradient-to-r from-indigo-700 to-blue-800 bg-clip-text text-transparent">
              あなたの「バディ」になる
            </span>
          </h2>
          
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-indigo-600 to-transparent mx-auto mb-12"></div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-16">
            私たちは単なるサービス提供者ではありません。<br className="hidden md:block" />
            お客様のビジネスに寄り添い、共に歩み、共に成長する真のパートナー。<br className="hidden md:block" />
            それが株式会社バディの存在意義です。
          </p>
          
          {/* 理念カード */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100/50 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Partnership</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                お客様と対等な関係を築き、共にビジネスの成功を目指します
              </p>
            </div>
            
            <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100/50 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Safety & Quality</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                厨房委託で培った安全・品質への徹底したこだわりを全事業に活かします
              </p>
            </div>
            
            <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100/50 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-700 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Innovation</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                伝統的な手法に最新技術を融合し、新たな価値を創造し続けます
              </p>
            </div>
            
            <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100/50 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Heart & Care</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                食を通して培った「人を想う心」をすべてのサービスの根幹にします
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 会社詳細情報 */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-indigo-700 tracking-wider uppercase">Company Details</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">会社詳細</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-600 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">私たちの強み</h4>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  多角的なビジネス展開により、お客様のあらゆるニーズに対応できる総合力が私たちの最大の強みです。
                  飲食店経営から始まった実践的な経験と、最新技術への積極的な取り組みにより、
                  従来の枠を超えたソリューションを提供しています。
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-900 mb-1">多角的なビジネスソリューション</h6>
                    <p className="text-gray-600 text-sm">5つの事業領域で複数の専門分野を一社で対応</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-900 mb-1">実践的な経験と最新技術の融合</h6>
                    <p className="text-gray-600 text-sm">現場で培った知見とAI・デジタル技術の組み合わせ</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-900 mb-1">長期的なパートナーシップ</h6>
                    <p className="text-gray-600 text-sm">単発の取引ではなく、継続的な関係性を重視</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50/50 p-8 md:p-12 rounded-3xl border border-gray-100/50 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <h5 className="text-xl font-light text-gray-900 mb-2">会社概要</h5>
                  <div className="w-12 h-px bg-gradient-to-r from-indigo-600 to-blue-700 mx-auto"></div>
                </div>
                
                <div className="space-y-6 text-left">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                    <span className="text-gray-600 font-medium">会社名</span>
                    <span className="text-gray-900">株式会社バディ</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                    <span className="text-gray-600 font-medium">設立</span>
                    <span className="text-gray-900">2020年4月</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                    <span className="text-gray-600 font-medium">代表取締役</span>
                    <span className="text-gray-900">北村 慎也</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                    <span className="text-gray-600 font-medium">所在地</span>
                    <span className="text-gray-900 text-sm">〒840-0023<br />佐賀県佐賀市本庄町大字袋123番地8</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                    <span className="text-gray-600 font-medium">事業内容</span>
                    <span className="text-gray-900 text-sm">厨房委託業、飲食事業、Web制作、SNS運用、AI業務改善</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600 font-medium">従業員数</span>
                    <span className="text-gray-900">25名</span>
                  </div>
                </div>
              </div>
              
              {/* 装飾要素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-500/20 to-blue-600/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 事業展開の歴史 */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-indigo-700 tracking-wider uppercase">Our History</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">事業展開の歴史</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-600 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              飲食店経営から始まり、お客様のニーズに応えながら事業を拡大してきました
            </p>
          </div>

          {/* タイムライン */}
          <div className="relative">
            {/* 中央線 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-200 via-indigo-400 to-indigo-600"></div>
            
            <div className="space-y-16">
              {/* 2018年 - 飲食店経営 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="text-xl font-medium text-gray-900 mb-2">2018年</h4>
                    <h5 className="text-lg font-medium text-indigo-700 mb-3">飲食店経営スタート</h5>
                    <p className="text-gray-600 text-sm">
                      地域に愛される飲食店として営業開始。
                      お客様の笑顔を見ることの喜びを知る。
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-full flex items-center justify-center relative z-10">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2020年 - 厨房委託業 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center relative z-10">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="text-xl font-medium text-gray-900 mb-2">2020年</h4>
                    <h5 className="text-lg font-medium text-indigo-700 mb-3">厨房委託業への展開</h5>
                    <p className="text-gray-600 text-sm">
                      介護施設の厨房運営を受託開始。
                      より多くの方々に安全で美味しい食事を提供。
                    </p>
                  </div>
                </div>
              </div>

              {/* 2022年 - Web制作・SNS */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="text-xl font-medium text-gray-900 mb-2">2022年</h4>
                    <h5 className="text-lg font-medium text-indigo-700 mb-3">Web制作・SNS運用開始</h5>
                    <p className="text-gray-600 text-sm">
                      お客様からの要望に応え、デジタル領域へ進出。
                      総合的なビジネスサポートを開始。
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-700 to-blue-800 rounded-full flex items-center justify-center relative z-10">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2024年 - AI業務改善 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-full flex items-center justify-center relative z-10">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="text-xl font-medium text-gray-900 mb-2">2024年</h4>
                    <h5 className="text-lg font-medium text-indigo-700 mb-3">AI業務改善ツール提供開始</h5>
                    <p className="text-gray-600 text-sm">
                      最新のAI技術を活用した業務効率化ツールの開発・提供を開始。
                      真の総合ビジネスパートナーへ。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
