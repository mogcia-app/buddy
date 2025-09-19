import React from "react";
import Script from "next/script";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function KitchenContact() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-green-600 via-teal-600 to-green-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-green-200 tracking-wider uppercase">Kitchen & Restaurant Contact</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-8">
            厨房委託業・飲食事業
            <span className="block font-medium">お問い合わせ</span>
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            介護施設の厨房運営、企業食堂の運営、レストラン事業でお困りのことがございましたら、<br className="hidden md:block" />
            専門スタッフが丁寧にご相談をお受けいたします。
          </p>
        </div>
      </section>

      {/* 専門サービス紹介 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">対応可能なサービス</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-600 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-3xl border border-green-100/50">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">厨房運営管理</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                介護施設・企業食堂の厨房運営を一括代行。調理から配膳まで、トータルサポートいたします。
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-3xl border border-teal-100/50">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">栄養管理・献立作成</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                管理栄養士による栄養バランスを考えた献立作成と、食事制限対応も承ります。
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100/50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">衛生管理・HACCP対応</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                徹底した衛生管理とHACCP対応で、安全で安心な食事環境を提供いたします。
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl border border-orange-100/50">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">コスト削減提案</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                食材調達から人件費まで、トータルコストの最適化をご提案いたします。
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border border-purple-100/50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">スタッフ派遣・研修</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                経験豊富な調理スタッフの派遣と、既存スタッフの研修も承ります。
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-3xl border border-yellow-100/50">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">レストラン経営サポート</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                メニュー開発から店舗運営まで、レストラン事業の総合的なサポートを提供します。
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
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-600 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              厨房運営・飲食事業に関するご相談は、専門スタッフが無料でお受けいたします
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="山田 太郎"
                  />
                  <div data-formrun-show-if-error="お名前" className="text-red-500 text-sm mt-1">お名前を入力してください</div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    施設名・会社名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="施設名・会社名"
                    data-formrun-required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="○○介護施設 / ○○株式会社"
                  />
                  <div data-formrun-show-if-error="施設名・会社名" className="text-red-500 text-sm mt-1">施設名・会社名を入力してください</div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="03-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="facility-type" className="block text-sm font-medium text-gray-700 mb-2">
                    施設・事業の種類 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="facility-type"
                    name="facility-type"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">選択してください</option>
                    <option value="nursing-home">介護施設・老人ホーム</option>
                    <option value="hospital">病院・クリニック</option>
                    <option value="corporate-cafeteria">企業食堂・社員食堂</option>
                    <option value="school">学校・教育機関</option>
                    <option value="restaurant">レストラン・飲食店</option>
                    <option value="catering">ケータリング事業</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    ご希望のサービス <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" name="service" value="kitchen-management" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-sm text-gray-700">厨房運営管理</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" name="service" value="nutrition-management" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-sm text-gray-700">栄養管理・献立作成</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" name="service" value="hygiene-management" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-sm text-gray-700">衛生管理・HACCP</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" name="service" value="cost-reduction" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-sm text-gray-700">コスト削減提案</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" name="service" value="staff-dispatch" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-sm text-gray-700">スタッフ派遣・研修</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" name="service" value="restaurant-support" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-sm text-gray-700">レストラン経営サポート</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    ご予算（月額）
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">選択してください</option>
                    <option value="under-50">50万円未満</option>
                    <option value="50-100">50万円〜100万円</option>
                    <option value="100-200">100万円〜200万円</option>
                    <option value="200-500">200万円〜500万円</option>
                    <option value="over-500">500万円以上</option>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="現在の課題や、ご希望のサービス内容について詳しくお聞かせください。&#10;&#10;例：&#10;・現在の厨房運営で困っていること&#10;・食事の質向上について&#10;・コスト削減の相談&#10;・スタッフ不足の解決策　など"
                  ></textarea>
                  <div data-formrun-show-if-error="お問い合わせ" className="text-red-500 text-sm mt-1">お問い合わせ内容を入力してください</div>
                </div>

                <div>
                  <label className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      name="個人情報利用同意" 
                      data-formrun-required
                      className="mt-1 rounded border-gray-300 text-green-600 focus:ring-green-500" 
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
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 px-6 rounded-xl font-medium text-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
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
      <section className="py-20 bg-gradient-to-br from-green-600 via-teal-600 to-green-700 text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-light mb-12">お急ぎの場合はお電話ください</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-4">厨房委託業専用ダイヤル</h4>
              <p className="text-2xl font-light mb-2">0952-97-6705</p>
              <p className="text-green-200 text-sm">平日 9:00〜18:00</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-4">メールでのお問い合わせ</h4>
              <p className="text-lg mb-2">buddy@sunny.ocn.ne.jp</p>
              <p className="text-green-200 text-sm">24時間受付</p>
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
