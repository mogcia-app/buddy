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

      {/* アクセス・地図情報 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">Access</span>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mt-4 mb-8">
              アクセス
            </h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* 左側：アクセス情報 */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-6">所在地</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">住所</p>
                    <p className="text-gray-900 font-medium">
                      〒840-0023<br />
                      佐賀県佐賀市本庄町大字袋123番地8
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 text-sm mb-1">電話番号</p>
                    <p className="text-gray-900 font-medium">0952-97-6705</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 text-sm mb-1">営業時間</p>
                    <p className="text-gray-900 font-medium">平日 9:00〜18:00</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">交通アクセス</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0V7" />
                    </svg>
                    <p>JR佐賀駅から車で約15分</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p>佐賀大和ICから車で約10分</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p>駐車場完備</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 右側：Googleマップ */}
            <div className="relative">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.4!2d130.2985!3d33.2635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541a1a1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2z5L2Q6LOA55yM5L2Q6LOA5biC5pys5bqE55S65aSn5a2X6KKL!5e0!3m2!1sja!2sjp!4v1632123456789!5m2!1sja!2sjp"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="株式会社バディ 所在地"
                  className="w-full h-96"
                ></iframe>
              </div>
              
              <div className="mt-4 text-center">
                <a 
                  href="https://maps.google.com/?q=佐賀県佐賀市本庄町大字袋123番地8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Googleマップで開く
                </a>
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