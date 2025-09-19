import React from "react";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function ContactThanks() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* サンクスメッセージ */}
      <section className="py-32 bg-gradient-to-br from-green-50 via-white to-indigo-50 relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/10 to-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-green-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
          {/* 成功アイコン */}
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-green-700 tracking-wider uppercase">Thank You</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light leading-tight text-gray-900 mb-8">
            お問い合わせ
            <span className="block font-medium bg-gradient-to-r from-green-700 to-indigo-800 bg-clip-text text-transparent">
              ありがとうございます
            </span>
          </h1>
          
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-green-600 to-transparent mx-auto mb-8"></div>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              この度は、株式会社バディにお問い合わせいただき、<br className="hidden md:block" />
              誠にありがとうございます。
            </p>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-100/50">
              <div className="space-y-4 text-gray-700">
                <p className="font-medium text-lg">ご連絡について</p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span><strong>1営業日以内</strong>に担当者よりご返答いたします</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span>お急ぎの場合は、お電話でもお気軽にお問い合わせください</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span>メールが届かない場合は、迷惑メールフォルダをご確認ください</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 連絡先情報 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">お急ぎの場合はお電話ください</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-600 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 代表電話 */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-8 rounded-3xl border border-gray-100/50 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">代表電話</h3>
              <p className="text-2xl font-light text-indigo-600 mb-2">0952-97-6705</p>
              <p className="text-gray-500 text-sm">平日 9:00〜18:00</p>
            </div>

            {/* 厨房委託業専用 */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-3xl border border-green-100/50 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">厨房委託業専用</h3>
              <p className="text-2xl font-light text-green-600 mb-2">0952-97-6705</p>
              <p className="text-gray-500 text-sm">平日 9:00〜18:00</p>
            </div>

            {/* デジタル事業専用 */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-3xl border border-indigo-100/50 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">デジタル事業専用</h3>
              <p className="text-2xl font-light text-indigo-600 mb-2">0952-97-6705</p>
              <p className="text-gray-500 text-sm">平日 9:00〜18:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* 次のアクション */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-12">その他のページもご覧ください</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/about"
              className="group bg-white p-6 rounded-3xl border border-gray-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">会社概要</h4>
              <p className="text-gray-600 text-sm">私たちの理念と歩み</p>
            </Link>

            <Link 
              href="/kitchen-management"
              className="group bg-white p-6 rounded-3xl border border-gray-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">厨房委託業</h4>
              <p className="text-gray-600 text-sm">安全で美味しい食事を提供</p>
            </Link>

            <Link 
              href="/ai-solutions"
              className="group bg-white p-6 rounded-3xl border border-gray-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">AI業務改善</h4>
              <p className="text-gray-600 text-sm">最新技術で効率化をサポート</p>
            </Link>

            <Link 
              href="/sdgs"
              className="group bg-white p-6 rounded-3xl border border-gray-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">社会への取り組み</h4>
              <p className="text-gray-600 text-sm">持続可能な社会の実現へ</p>
            </Link>

            <Link 
              href="/recruit"
              className="group bg-white p-6 rounded-3xl border border-gray-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">採用情報</h4>
              <p className="text-gray-600 text-sm">一緒に働く仲間を募集中</p>
            </Link>

            <Link 
              href="/"
              className="group bg-white p-6 rounded-3xl border border-gray-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m0 0h4m0 0h3a1 1 0 001-1V10M9 21h6" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">トップページ</h4>
              <p className="text-gray-600 text-sm">サービス一覧をご覧ください</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
