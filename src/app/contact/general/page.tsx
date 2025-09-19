import React from "react";
import Script from "next/script";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function GeneralContact() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-slate-600 via-gray-600 to-slate-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-slate-200 tracking-wider uppercase">General Contact</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-8">
            総合
            <span className="block font-medium">お問い合わせ</span>
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-slate-100 max-w-4xl mx-auto leading-relaxed">
            どのような事業でお困りでも、まずはお気軽にご相談ください。<br className="hidden md:block" />
            専門スタッフが最適なソリューションをご提案いたします。
          </p>
        </div>
      </section>

      {/* サービス選択ガイド */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">お困りごとに応じて専門窓口もご利用いただけます</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              より専門的なご相談をお求めの場合は、事業別の専門窓口もご用意しております
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* 厨房委託業・飲食事業 */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-3xl border border-green-100/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">厨房委託業・飲食事業</h3>
                  <p className="text-gray-600 text-sm">専門窓口でのご相談</p>
                </div>
              </div>
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
              <a 
                href="/contact/kitchen" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl font-medium hover:from-green-700 hover:to-teal-700 transition-all duration-300"
              >
                厨房委託業専用窓口へ
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* デジタル事業 */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-3xl border border-indigo-100/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">デジタル事業</h3>
                  <p className="text-gray-600 text-sm">専門窓口でのご相談</p>
                </div>
              </div>
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
              <a 
                href="/contact/digital" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-300"
              >
                デジタル事業専用窓口へ
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">総合お問い合わせフォーム</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              どのような内容でも、まずはお気軽にご相談ください
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100/50">
              <form className="formrun space-y-6" action="https://form.run/api/v1/r/14wyo9q1lhd96ecsdndkl2l4" method="post">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="お名前"
                    data-formrun-required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                    placeholder="山田 太郎"
                  />
                  <div data-formrun-show-if-error="お名前" className="text-red-500 text-sm mt-1">お名前を入力してください</div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    会社名・施設名・屋号
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="会社名・施設名・屋号"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                    placeholder="○○株式会社 / ○○介護施設"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="メールアドレス"
                      data-formrun-type="email"
                      data-formrun-required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                      placeholder="example@email.com"
                    />
                    <div data-formrun-show-if-error="メールアドレス" className="text-red-500 text-sm mt-1">メールアドレスを正しく入力してください</div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      お電話番号
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="お電話番号"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                      placeholder="03-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry-type" className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせの種類 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="inquiry-type"
                    name="inquiry-type"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">選択してください</option>
                    <option value="kitchen-management">厨房委託業・飲食事業について</option>
                    <option value="web-development">Webサイト制作について</option>
                    <option value="sns-management">SNS運用代行について</option>
                    <option value="ai-solutions">AI業務改善ツールについて</option>
                    <option value="partnership">業務提携・協力について</option>
                    <option value="recruitment">採用・求人について</option>
                    <option value="press">取材・メディア関連</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    緊急度
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">選択してください</option>
                    <option value="urgent">緊急（当日中に回答希望）</option>
                    <option value="high">高（3日以内に回答希望）</option>
                    <option value="normal">普通（1週間以内に回答希望）</option>
                    <option value="low">低（時間に余裕がある）</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="how-found" className="block text-sm font-medium text-gray-700 mb-2">
                    弊社をどちらでお知りになりましたか？
                  </label>
                  <select
                    id="how-found"
                    name="how-found"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">選択してください</option>
                    <option value="google-search">Google検索</option>
                    <option value="sns">SNS（Instagram、Facebook、Twitter）</option>
                    <option value="referral">知人・取引先からの紹介</option>
                    <option value="advertisement">広告</option>
                    <option value="event">イベント・展示会</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="お問い合わせ"
                    rows={6}
                    data-formrun-required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                    placeholder="お問い合わせ内容を詳しくお聞かせください。&#10;&#10;例：&#10;・どのようなサービスをお求めですか？&#10;・現在抱えている課題について&#10;・ご予算や希望時期について&#10;・その他、ご質問やご要望など"
                  ></textarea>
                  <div data-formrun-show-if-error="お問い合わせ" className="text-red-500 text-sm mt-1">お問い合わせ内容を入力してください</div>
                </div>

                <div>
                  <label className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      name="個人情報利用同意" 
                      data-formrun-required
                      className="mt-1 rounded border-gray-300 text-slate-600 focus:ring-slate-500" 
                    />
                    <span className="text-sm text-gray-700">
                      <span className="text-red-500">*</span> 個人情報の取り扱いに同意します。<br />
                      お送りいただいた内容は、厳重に管理し、営業目的以外には使用いたしません。
                    </span>
                  </label>
                  <div data-formrun-show-if-error="個人情報利用同意" className="text-red-500 text-sm mt-1">同意してください</div>
                </div>

                {/* FormRunのボット対策 */}
                <div className="_formrun_gotcha" style={{position: 'absolute', height: '1px', width: '1px', overflow: 'hidden'}}>
                  <label htmlFor="_formrun_gotcha">If you are a human, ignore this field</label>
                  <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex={-1} />
                </div>

                <button
                  type="submit"
                  data-formrun-error-text="未入力の項目があります"
                  data-formrun-submitting-text="送信中..."
                  className="w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white py-4 px-6 rounded-xl font-medium text-lg hover:from-slate-700 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  お問い合わせを送信する
                </button>

                <p className="text-center text-sm text-gray-500">
                  通常1営業日以内にご返答いたします。
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 連絡先情報 */}
      <section className="py-20 bg-gradient-to-br from-slate-600 via-gray-600 to-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-light mb-12">その他の連絡方法</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-4">代表電話</h4>
              <p className="text-2xl font-light mb-2">0952-97-6705</p>
              <p className="text-slate-200 text-sm">平日 9:00〜18:00</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-4">メール</h4>
              <p className="text-lg mb-2">buddy@sunny.ocn.ne.jp</p>
              <p className="text-slate-200 text-sm">24時間受付</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-4">所在地</h4>
              <p className="text-lg mb-2">〒840-0023<br />佐賀県佐賀市本庄町大字袋123番地8</p>
              <p className="text-slate-200 text-sm">※訪問は事前予約制</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* FormRunスクリプト */}
      <Script src="https://sdk.form.run/js/v2/formrun.js" />
    </div>
  );
}
