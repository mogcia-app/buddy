import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";

export default function SDGs() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ページヘッダー */}
      <section className="relative py-32 overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <Image
            src="/pexels-googledeepmind-18069518.jpg"
            alt="AI技術による持続可能な未来"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-blue-900/50 to-green-800/60"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-green-200 tracking-wider uppercase">Social Responsibility</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light leading-tight text-white mb-8">
            社会への
            <span className="font-medium bg-gradient-to-r from-green-300 to-blue-200 bg-clip-text text-transparent">
              取り組み
            </span>
          </h1>
          
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            株式会社バディは、持続可能な社会の実現に向けて、<br className="hidden md:block" />
            事業活動を通じて社会課題の解決に取り組んでいます。<br className="hidden md:block" />
            SDGsの理念に基づき、地域社会と環境への責任を果たしてまいります。
          </p>
        </div>
      </section>

      {/* SDGs取り組み概要 */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/5 w-80 h-80 bg-gradient-to-r from-green-50/40 to-blue-50/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/5 w-96 h-96 bg-gradient-to-r from-blue-50/30 to-green-50/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-green-700 tracking-wider uppercase">Our Commitment</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">
              持続可能な
              <span className="font-medium bg-gradient-to-r from-green-700 to-blue-800 bg-clip-text text-transparent">
                未来への責任
              </span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-600 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              私たちは「食」を通じて培った「人を想う心」を基盤に、<br className="hidden md:block" />
              環境保護、地域貢献、働きがいのある職場づくりに取り組んでいます。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左側：取り組み方針 */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                  私たちの
                  <span className="font-medium bg-gradient-to-r from-green-700 to-blue-800 bg-clip-text text-transparent">
                    アプローチ
                  </span>
                </h3>
                <div className="w-16 h-px bg-gradient-to-r from-green-600 to-blue-700 mb-8"></div>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  株式会社バディは、環境負荷の軽減と地域社会への貢献を重要な使命と考えています。
                  小さな会社だからこそできる、身近で実践的な取り組みから始めています。
                </p>
                
                <p>
                  デジタル技術を活用した業務効率化により、紙資源の節約やリモートワークによるCO2削減に取り組んでいます。
                  また、地域の中小企業様のデジタル化支援を通じて、地域全体の生産性向上に貢献しています。
                </p>
                
                <p>
                  社員一人ひとりが働きがいを感じられる職場環境づくりにも注力し、
                  資格取得支援など、継続的な成長をサポートする制度を整備しています。
                </p>
              </div>
            </div>

            {/* 右側：SDGsアイコンエリア */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-blue-50/50 rounded-3xl p-8 md:p-12 border border-gray-100/50">
                <div className="text-center mb-8">
                  <h4 className="text-xl font-medium text-gray-900 mb-4">重点取り組み目標</h4>
                  <div className="w-12 h-px bg-gradient-to-r from-green-600 to-blue-700 mx-auto"></div>
                </div>
                
                {/* SDGsアイコンプレースホルダー */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {/* SDG 3: 健康と福祉 */}
                  <div className="bg-white/70 rounded-2xl p-4 border border-green-200/50 text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <p className="text-xs text-gray-700 font-medium">健康と福祉</p>
                  </div>
                  
                  {/* SDG 8: 働きがいと経済成長 */}
                  <div className="bg-white/70 rounded-2xl p-4 border border-red-200/50 text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">8</span>
                    </div>
                    <p className="text-xs text-gray-700 font-medium">働きがい</p>
                  </div>
                  
                  {/* SDG 11: 住み続けられるまちづくり */}
                  <div className="bg-white/70 rounded-2xl p-4 border border-orange-200/50 text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">11</span>
                    </div>
                    <p className="text-xs text-gray-700 font-medium">まちづくり</p>
                  </div>
                  
                  {/* SDG 12: つくる責任つかう責任 */}
                  <div className="bg-white/70 rounded-2xl p-4 border border-yellow-200/50 text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">12</span>
                    </div>
                    <p className="text-xs text-gray-700 font-medium">責任ある消費</p>
                  </div>
                  
                  {/* SDG 13: 気候変動 */}
                  <div className="bg-white/70 rounded-2xl p-4 border border-green-200/50 text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-700 to-green-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">13</span>
                    </div>
                    <p className="text-xs text-gray-700 font-medium">気候変動</p>
                  </div>
                  
                  {/* SDG 17: パートナーシップ */}
                  <div className="bg-white/70 rounded-2xl p-4 border border-blue-200/50 text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">17</span>
                    </div>
                    <p className="text-xs text-gray-700 font-medium">パートナーシップ</p>
                  </div>
                </div>
                
                <div className="bg-white/50 rounded-2xl p-4 border border-green-200/30">
                  <p className="text-green-800 font-medium text-sm text-center leading-relaxed">
                    「バディ」として、お客様と共に<br />
                    持続可能な未来を築きます
                  </p>
                </div>
              </div>
              
              {/* 装飾要素 */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-400/15 to-green-500/15 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 具体的な取り組み */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-gradient-to-r from-green-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-r from-blue-100/20 to-green-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-green-700 tracking-wider uppercase">Our Actions</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">具体的な取り組み</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-600 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              各事業領域において、持続可能な社会の実現に向けた具体的な活動を推進しています
            </p>
          </div>
          
          {/* 取り組みカード */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {/* 環境への取り組み */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100/50 hover:bg-white/80 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4 text-center">環境への取り組み</h4>
              <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  オフィスでのペーパーレス化推進（月間用紙使用量30%削減）
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  リモートワーク導入による通勤CO2削減
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  LED照明への切り替えによる省エネ化
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  クラウドサービス活用によるサーバー電力削減
                </li>
              </ul>
            </div>
            
                  
            {/* 働きがい */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100/50 hover:bg-white/80 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4 text-center">働きがいの創出</h4>
              <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  フレックスタイム制度による柔軟な働き方
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  技術書購入支援・資格取得支援制度
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  定期的な1on1ミーティングでキャリア支援
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  健康診断費用全額負担・メンタルヘルスケア
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 数値で見る取り組み */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-green-700 tracking-wider uppercase">Impact in Numbers</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">数値で見る取り組み</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-600 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              私たちの取り組みが生み出している具体的な成果をご紹介します
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-100/50 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-light text-green-700 mb-4">30<span className="text-2xl">%</span></div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">ペーパーレス化率</h4>
                <p className="text-gray-600 text-sm">デジタル化推進により用紙使用量を削減</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-100/50 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-light text-blue-700 mb-4">2<span className="text-2xl">年</span></div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">LED照明使用歴</h4>
                <p className="text-gray-600 text-sm">省エネ照明で電力消費を削減</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-100/50 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-light text-purple-700 mb-4">100<span className="text-2xl">%</span></div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">リモートワーク率</h4>
                <p className="text-gray-600 text-sm">柔軟な働き方で通勤CO2を削減</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-100/50 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-light text-orange-700 mb-4">24<span className="text-2xl">h</span></div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">フレックス制度</h4>
                <p className="text-gray-600 text-sm">柔軟な働き方で生産性向上を実現</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 今後の目標 */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-gradient-to-r from-green-50/40 to-blue-50/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-gradient-to-r from-blue-50/30 to-green-50/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-green-700 tracking-wider uppercase">Future Goals</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">
              2030年に向けた
              <span className="font-medium bg-gradient-to-r from-green-700 to-blue-800 bg-clip-text text-transparent">
                目標
              </span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-600 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SDGs達成年である2030年に向けて、より大きなインパクトを創出していきます
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左側：目標リスト */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">2025</span>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-900 mb-2">ペーパーレス化50%達成</h6>
                    <p className="text-gray-600 text-sm">オフィス業務の更なるデジタル化を推進</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">2027</span>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-900 mb-2">地域企業支援20社</h6>
                    <p className="text-gray-600 text-sm">IT相談会を通じた支援企業数を拡大</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">2030</span>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-900 mb-2">完全ペーパーレス化</h6>
                    <p className="text-gray-600 text-sm">全業務プロセスのデジタル化を完了</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右側：ビジョンカード */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-blue-50/50 rounded-3xl p-8 md:p-12 border border-gray-100/50">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-light text-gray-900 mb-4">2030年ビジョン</h4>
                  <div className="w-12 h-px bg-gradient-to-r from-green-600 to-blue-700 mx-auto"></div>
                </div>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg font-medium text-center text-gray-800">
                    「持続可能な地域社会の創造者」
                  </p>
                  
                  <p className="text-center">
                    私たちは2030年までに、事業を通じて地域社会の持続可能な発展に貢献する
                    リーディングカンパニーを目指します。
                  </p>
                  
                    <div className="bg-white/50 rounded-2xl p-6 border border-green-200/30">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-light text-green-700 mb-1">50社</div>
                          <p className="text-xs text-gray-600">支援企業数</p>
                        </div>
                        <div>
                          <div className="text-2xl font-light text-blue-700 mb-1">80%</div>
                          <p className="text-xs text-gray-600">ペーパーレス化率</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              
              {/* 装飾要素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-600/20 to-green-700/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
