import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Sitemap() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-slate-600 via-gray-600 to-slate-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-8">
            サイトマップ
            <span className="block font-medium text-3xl md:text-4xl mt-4">Sitemap</span>
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-slate-100 max-w-4xl mx-auto leading-relaxed">
            株式会社バディのウェブサイトの<br className="hidden md:block" />
            全ページ一覧をご覧いただけます。
          </p>
        </div>
      </section>

      {/* サイトマップ内容 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* メインページ */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-200 pb-4">
                メインページ
              </h2>
              <div className="space-y-6">
                <div>
                  <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                    ホーム
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">株式会社バディのトップページ</p>
                </div>
                <div>
                  <Link href="/about" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                    会社概要
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">会社情報、代表挨拶、企業理念</p>
                </div>
                <div>
                  <Link href="/sdgs" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                    社会への取り組み
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">SDGs、社会貢献活動</p>
                </div>
                <div>
                  <Link href="/recruit" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                    採用情報
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">求人情報、採用に関するお知らせ</p>
                </div>
              </div>
            </div>

            {/* 事業内容 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-200 pb-4">
                事業内容
              </h2>
              <div className="space-y-8">
                {/* 食関連事業 */}
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4">食関連事業</h3>
                  <div className="space-y-4 pl-4">
                    <div>
                      <Link href="/kitchen-management" className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors">
                        厨房委託業
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">介護施設・企業食堂の厨房運営</p>
                    </div>
                    <div>
                      <Link href="/restaurant" className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors">
                        飲食事業
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">レストラン・ケータリングサービス</p>
                    </div>
                  </div>
                </div>

                {/* デジタル事業 */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">デジタル事業</h3>
                  <div className="space-y-4 pl-4">
                    <div>
                      <Link href="/web-development" className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors">
                        Web制作
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">Webサイト制作・デザイン</p>
                    </div>
                    <div>
                      <Link href="/sns-management" className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors">
                        SNS運用代行
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">SNSマーケティング・運用代行</p>
                    </div>
                    <div>
                      <Link href="/ai-solutions" className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors">
                        AI業務改善ツール
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">AI技術・業務効率化ツール</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* お問い合わせ */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-200 pb-4">
                お問い合わせ
              </h2>
              <div className="space-y-6">
                <div>
                  <Link href="/contact" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                    お問い合わせ（総合）
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">全般的なお問い合わせ</p>
                </div>
                <div>
                  <Link href="/contact/kitchen" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                    厨房委託業・飲食事業のお問い合わせ
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">食関連事業専用窓口</p>
                </div>
                <div>
                  <Link href="/contact/digital" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                    デジタル事業のお問い合わせ
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">Web制作・SNS運用・AI関連専用窓口</p>
                </div>
                <div>
                  <Link href="/contact/general" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                    総合お問い合わせ
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">どのような内容でもお気軽に</p>
                </div>
               
              </div>
            </div>

            {/* その他のページ */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-200 pb-4">
                その他のページ
              </h2>
              <div className="space-y-6">
                <div>
                  <Link href="/privacy-policy" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                    プライバシーポリシー
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">個人情報保護方針</p>
                </div>
                <div>
                  <Link href="/terms-of-service" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                    利用規約
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">サービス利用規約</p>
                </div>
                <div>
                  <Link href="/sitemap" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                    サイトマップ
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">このページ</p>
                </div>
              </div>
            </div>
          </div>

          {/* 外部リンク */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              外部リンク
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-4">SNS・外部サイト</h3>
                <div className="space-y-4">
                  <div>
                    <a 
                      href="https://www.instagram.com/buddy_style2929/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors inline-flex items-center"
                    >
                      公式Instagram
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <p className="text-gray-600 text-sm mt-1">@buddy_style2929</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-600 mb-4">連絡先情報</h3>
                <div className="space-y-2 text-gray-600">
                  <p>〒840-0023</p>
                  <p>佐賀県佐賀市本庄町大字袋123番地8</p>
                  <p>TEL: 0952-97-6705</p>
                  <p>Email: buddy@sunny.ocn.ne.jp</p>
                </div>
              </div>
            </div>
          </div>

          {/* 最終更新日 */}
          <div className="text-center text-gray-500 text-sm mt-16 pt-8 border-t border-gray-200">
            <p>最終更新日：2025年9月20日</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
