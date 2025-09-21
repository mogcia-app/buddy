import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* シンプルなページヘッダー */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="mb-8">
            <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">Company</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light leading-tight text-gray-900 mb-8">
            会社概要
          </h1>
          
          <div className="section-divider mb-8"></div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            食から始まり、デジタル領域まで幅広く事業を展開する株式会社バディの会社情報をご紹介します。
          </p>
        </div>
      </section>

      {/* 会社情報テーブル */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center py-4 border-b border-gray-100">
                  <div className="w-full md:w-1/3">
                    <span className="text-gray-600 font-medium">会社名</span>
                  </div>
                  <div className="w-full md:w-2/3 mt-2 md:mt-0">
                    <span className="text-gray-900 font-medium">株式会社バディ</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center py-4 border-b border-gray-100">
                  <div className="w-full md:w-1/3">
                    <span className="text-gray-600 font-medium">住所</span>
                  </div>
                  <div className="w-full md:w-2/3 mt-2 md:mt-0">
                    <div className="text-gray-900">
                      <p>〒840-0023</p>
                      <p>佐賀県佐賀市本庄町大字袋123番地8</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center py-4 border-b border-gray-100">
                  <div className="w-full md:w-1/3">
                    <span className="text-gray-600 font-medium">代表者</span>
                  </div>
                  <div className="w-full md:w-2/3 mt-2 md:mt-0">
                    <span className="text-gray-900 font-medium">北村 慎也</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center py-4 border-b border-gray-100">
                  <div className="w-full md:w-1/3">
                    <span className="text-gray-600 font-medium">電話</span>
                  </div>
                  <div className="w-full md:w-2/3 mt-2 md:mt-0">
                    <span className="text-gray-900 font-medium">0952-97-6705</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center py-4 border-b border-gray-100">
                  <div className="w-full md:w-1/3">
                    <span className="text-gray-600 font-medium">設立</span>
                  </div>
                  <div className="w-full md:w-2/3 mt-2 md:mt-0">
                    <span className="text-gray-900 font-medium">2020年4月</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center py-4 border-b border-gray-100">
                  <div className="w-full md:w-1/3">
                    <span className="text-gray-600 font-medium">資本金</span>
                  </div>
                  <div className="w-full md:w-2/3 mt-2 md:mt-0">
                    <span className="text-gray-900 font-medium">1,000万円</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row py-4 border-b border-gray-100">
                  <div className="w-full md:w-1/3">
                    <span className="text-gray-600 font-medium">事業内容</span>
                  </div>
                  <div className="w-full md:w-2/3 mt-2 md:mt-0">
                    <div className="text-gray-900 space-y-1">
                      <p>厨房委託業</p>
                      <p>飲食事業</p>
                      <p>Web制作・デザイン</p>
                      <p>SNS運用代行</p>
                      <p>AI業務改善ツール開発</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center py-4">
                  <div className="w-full md:w-1/3">
                    <span className="text-gray-600 font-medium">従業員数</span>
                  </div>
                  <div className="w-full md:w-2/3 mt-2 md:mt-0">
                    <span className="text-gray-900 font-medium">25名</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 代表メッセージ - シンプル版 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">Message</span>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mt-4 mb-8">
              代表メッセージ
            </h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-gray-700 to-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">代表取締役</h3>
              <p className="text-lg text-gray-700 font-medium">北村 慎也</p>
            </div>
            
            <div className="max-w-3xl mx-auto">
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
                
                <div className="bg-white rounded-lg p-6 border-l-4 border-black mt-8">
                  <p className="text-gray-800 font-medium italic">
                    「バディ」という社名には、お客様と対等な関係で、
                    共に課題を解決し、共に成長していきたいという想いを込めました。
                    飲食店経営から厨房委託業で培った「安全・品質へのこだわり」と「人を想う心」を、
                    すべての事業の根幹に置き、お客様のビジネス成功をサポートしてまいります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 採用情報リンク */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <p className="text-gray-600 mb-6">私たちと一緒に働きませんか？</p>
          <a href="/recruit" className="btn btn-primary">
            採用情報はこちら
          </a>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}