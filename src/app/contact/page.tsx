import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-indigo-200 tracking-wider uppercase">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-8">
            お問い合わせ
            <span className="block font-medium">窓口選択</span>
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-indigo-100 max-w-4xl mx-auto leading-relaxed">
            より専門的で迅速なサポートのため、事業別の専門窓口をご用意しております。<br className="hidden md:block" />
            お困りの内容に最も近い窓口をお選びください。
          </p>
        </div>
      </section>

      {/* 窓口選択 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">専門窓口を選択してください</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-600 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              各分野の専門スタッフが、より詳しく迅速にサポートいたします
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* 厨房委託業・飲食事業 */}
            <Link 
              href="/contact/kitchen"
              className="group bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-3xl border border-green-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">厨房委託業・飲食事業</h3>
              <ul className="text-gray-600 text-sm space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  介護施設・企業食堂の厨房運営
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  栄養管理・献立作成
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  衛生管理・HACCP対応
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  レストラン経営サポート
                </li>
              </ul>
              <div className="text-center">
                <span className="inline-flex items-center text-green-700 font-medium group-hover:text-green-800">
                  専門窓口へ進む
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* デジタル事業 */}
            <Link 
              href="/contact/digital"
              className="group bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-3xl border border-indigo-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">デジタル事業</h3>
              <ul className="text-gray-600 text-sm space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Webサイト制作・リニューアル
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  SNS運用代行・マーケティング
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  AI業務改善ツール・自動化
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  システム開発・保守
                </li>
              </ul>
              <div className="text-center">
                <span className="inline-flex items-center text-indigo-700 font-medium group-hover:text-indigo-800">
                  専門窓口へ進む
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* 総合お問い合わせ */}
            <Link 
              href="/contact/general"
              className="group bg-gradient-to-br from-slate-50 to-gray-50 p-8 rounded-3xl border border-slate-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block md:col-span-2 lg:col-span-1"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">総合お問い合わせ</h3>
              <ul className="text-gray-600 text-sm space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
                  どの事業か分からない場合
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
                  複数事業にまたがるご相談
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
                  業務提携・採用について
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
                  その他のお問い合わせ
                </li>
              </ul>
              <div className="text-center">
                <span className="inline-flex items-center text-slate-700 font-medium group-hover:text-slate-800">
                  総合窓口へ進む
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 緊急時の連絡先 */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">お急ぎの場合</h3>
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100/50">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">代表電話</h4>
                <p className="text-xl text-indigo-600 font-medium mb-1">0120-XXX-XXX</p>
                <p className="text-gray-500 text-sm">平日 9:00〜18:00</p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">代表メール</h4>
                <p className="text-lg text-indigo-600 font-medium mb-1">info@buddy-corp.com</p>
                <p className="text-gray-500 text-sm">24時間受付</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
