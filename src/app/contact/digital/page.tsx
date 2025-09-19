import React from "react";
import Script from "next/script";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function DigitalContact() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-indigo-200 tracking-wider uppercase">Digital Solutions Contact</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-8">
            デジタル事業
            <span className="block font-medium">お問い合わせ</span>
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-indigo-100 max-w-4xl mx-auto leading-relaxed">
            Web制作、SNS運用、AI業務改善ツールなど、<br className="hidden md:block" />
            デジタル領域でのお困りごとは、専門チームが丁寧にサポートいたします。
          </p>
        </div>
      </section>

      {/* 専門サービス紹介 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">対応可能なサービス</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-600 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100/50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Webサイト制作</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                コーポレートサイト、ECサイト、ランディングページまで、目的に応じた最適なWebサイトを制作します。
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border border-purple-100/50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">SNS運用代行</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Instagram、Facebook、Twitter、TikTokなど、各SNSの特性を活かした戦略的な運用を代行します。
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-3xl border border-indigo-100/50">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">AI業務改善ツール</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ChatGPT活用、データ分析、業務自動化など、AI技術を使った業務効率化をサポートします。
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-3xl border border-green-100/50">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">SEO・マーケティング</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                検索エンジン最適化、Google広告、SNS広告など、デジタルマーケティング全般をサポートします。
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl border border-orange-100/50">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">システム開発・保守</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                業務システム、予約システム、在庫管理システムなど、カスタムシステムの開発・保守を行います。
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-3xl border border-yellow-100/50">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">研修・コンサルティング</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                デジタルツールの使い方研修、DX推進コンサルティングなど、人材育成もサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">お気軽にお問い合わせください</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-600 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              デジタル事業に関するご相談は、専門スタッフが無料でお受けいたします
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100/50">
              <form className="formrun space-y-6" action="https://form.run/api/v1/r/fiuyrd8uqjprxgdbqylv96kg" method="post">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="お名前"
                    data-formrun-required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="山田 太郎"
                  />
                  <div data-formrun-show-if-error="お名前" className="text-red-500 text-sm mt-1">お名前を入力してください</div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    会社名・屋号 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="会社名・屋号"
                    data-formrun-required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="○○株式会社 / ○○商店"
                  />
                  <div data-formrun-show-if-error="会社名・屋号" className="text-red-500 text-sm mt-1">会社名・屋号を入力してください</div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="03-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="business-type" className="block text-sm font-medium text-gray-700 mb-2">
                    業種・事業内容 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="business-type"
                    name="business-type"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">選択してください</option>
                    <option value="restaurant">飲食店・レストラン</option>
                    <option value="retail">小売業・EC事業</option>
                    <option value="manufacturing">製造業</option>
                    <option value="healthcare">医療・介護</option>
                    <option value="education">教育・研修</option>
                    <option value="real-estate">不動産</option>
                    <option value="consulting">コンサルティング</option>
                    <option value="service">サービス業</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    ご希望のサービス <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" name="service" value="web-development" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-gray-700">Webサイト制作</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" name="service" value="sns-management" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-gray-700">SNS運用代行</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" name="service" value="ai-tools" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-gray-700">AI業務改善ツール</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" name="service" value="seo-marketing" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-gray-700">SEO・マーケティング</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" name="service" value="system-development" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-gray-700">システム開発・保守</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" name="service" value="consulting" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-gray-700">研修・コンサルティング</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    希望開始時期
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">選択してください</option>
                    <option value="immediate">すぐに</option>
                    <option value="within-month">1ヶ月以内</option>
                    <option value="within-3months">3ヶ月以内</option>
                    <option value="within-6months">6ヶ月以内</option>
                    <option value="flexible">時期は相談したい</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    ご予算
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">選択してください</option>
                    <option value="under-10">10万円未満</option>
                    <option value="10-30">10万円〜30万円</option>
                    <option value="30-50">30万円〜50万円</option>
                    <option value="50-100">50万円〜100万円</option>
                    <option value="100-300">100万円〜300万円</option>
                    <option value="over-300">300万円以上</option>
                    <option value="consultation">要相談</option>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="現在の課題や、ご希望のサービス内容について詳しくお聞かせください。&#10;&#10;例：&#10;・新しいWebサイトを作りたい&#10;・SNSでの集客を強化したい&#10;・業務効率化のためのAI活用について相談したい&#10;・現在のサイトのSEO改善をしたい　など"
                  ></textarea>
                  <div data-formrun-show-if-error="お問い合わせ" className="text-red-500 text-sm mt-1">お問い合わせ内容を入力してください</div>
                </div>

                <div>
                  <label className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      name="個人情報利用同意" 
                      data-formrun-required
                      className="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" 
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
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-medium text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  無料相談を申し込む
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
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-light mb-12">お急ぎの場合はお電話ください</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-4">デジタル事業専用ダイヤル</h4>
              <p className="text-2xl font-light mb-2">0952-97-6705</p>
              <p className="text-indigo-200 text-sm">平日 9:00〜18:00</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-4">メールでのお問い合わせ</h4>
              <p className="text-lg mb-2">フォームをご利用ください</p>
              <p className="text-indigo-200 text-sm">24時間受付</p>
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
