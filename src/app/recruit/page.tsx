// app/recruit/page.tsx などに配置（ルートはお好みで）
// もし1ページ内のセクションにしたい場合は <section id="recruit"> だけ抜き出してTOPに入れてOK

'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Recruit() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ヒーロー */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-gray-100 text-gray-800 text-sm font-semibold px-4 py-2 mb-6">
            採用情報
          </span>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">「食」で地域を支える仲間を募集しています</h1>
          <div className="w-20 h-px bg-gray-300 mx-auto my-8 mt-4"></div>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            介護施設の厨房を、&ldquo;安心・安全・あたたかさ&rdquo;で満たす仕事。<br className="hidden md:inline" />
            経験者はもちろん、未経験の方も丁寧にサポートします。
          </p>
          <a
            href="#positions"
            className="inline-flex items-center justify-center mt-8 bg-gray-900 px-8 py-4 text-lg font-medium text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            募集中の職種を見る
          </a>
        </div>
      </section>

      {/* セクションID（ナビの #recruit で飛ぶ） */}
      <section id="recruit" className="sr-only" aria-hidden />

      {/* 会社の想い / 働く環境 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-6">私たちの想い</h2>
            <div className="w-16 h-px bg-gray-300 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">安心・安全を最優先</h3>
              <p className="text-gray-600 leading-relaxed">衛生基準の徹底、アレルギー配慮、栄養バランスを大切に。高齢者の方に寄り添った食事提供を行います。</p>
            </div>
            <div className="bg-white p-8 shadow-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">チームで支える厨房</h3>
              <p className="text-gray-600 leading-relaxed">調理・栄養・衛生の専門スタッフが連携。新人には先輩がついて育成します。</p>
            </div>
            <div className="bg-white p-8 shadow-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">働きやすいシフト</h3>
              <p className="text-gray-600 leading-relaxed">希望シフトの調整可。ライフスタイルに合わせた勤務形態をご相談ください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 募集中の職種 */}
      <section id="positions" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-6">募集中の職種</h2>
            <div className="w-16 h-px bg-gray-300 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 調理スタッフ */}
            <article className="border border-gray-200 p-8 shadow-lg bg-white">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">正社員 / パート</span>
                <span className="text-xs text-gray-500">未経験OK</span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-gray-900">調理スタッフ（介護施設向け）</h3>
              <p className="mt-2 text-gray-600">
                献立に沿った調理・盛付・配膳・食器洗浄など。衛生基準に沿って、安全でおいしい食事づくりをお願いします。
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div><dt className="text-gray-500">勤務地</dt><dd className="font-medium text-gray-800">東京都内 各施設（応相談）</dd></div>
                <div><dt className="text-gray-500">勤務時間</dt><dd className="font-medium text-gray-800">6:00〜19:00 の間でシフト制</dd></div>
                <div><dt className="text-gray-500">給与</dt><dd className="font-medium text-gray-800">月給◯◯万円〜 / 時給◯◯◯◯円〜</dd></div>
                <div><dt className="text-gray-500">応募資格</dt><dd className="font-medium text-gray-800">学歴不問・未経験歓迎</dd></div>
              </dl>
              <ul className="mt-4 text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>エプロン・帽子支給 / まかないあり</li>
                <li>交通費支給 / 社会保険完備（条件による）</li>
                <li>HACCPに準拠した衛生管理の研修あり</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/contact#contact" className="bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800 transition">応募する</a>
                <a href="/contact" className="border border-gray-900 px-6 py-3 text-gray-900 font-medium hover:bg-gray-50 transition">まずは相談</a>
              </div>
            </article>

            {/* 栄養士・管理栄養士 */}
            <article className="border border-gray-200 p-8 shadow-lg bg-white">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">正社員 / 契約</span>
                <span className="text-xs text-gray-500">資格保有者歓迎</span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-gray-900">栄養士・管理栄養士</h3>
              <p className="mt-2 text-gray-600">
                献立作成、栄養価計算、アレルギー・嚥下対応、衛生指導など。ご利用者の健康状態に合わせた食事設計を行います。
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div><dt className="text-gray-500">勤務地</dt><dd className="font-medium text-gray-800">本社 / 各施設</dd></div>
                <div><dt className="text-gray-500">勤務時間</dt><dd className="font-medium text-gray-800">9:00〜18:00（応相談）</dd></div>
                <div><dt className="text-gray-500">給与</dt><dd className="font-medium text-gray-800">月給◯◯万円〜（経験・資格を考慮）</dd></div>
                <div><dt className="text-gray-500">応募資格</dt><dd className="font-medium text-gray-800">栄養士 / 管理栄養士</dd></div>
              </dl>
              <ul className="mt-4 text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>研修制度 / 資格手当</li>
                <li>産休・育休制度（実績あり）</li>
                <li>リモート相談や時短勤務も応相談</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/contact#contact" className="bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800 transition">応募する</a>
                <a href="/contact" className="border border-gray-900 px-6 py-3 text-gray-900 font-medium hover:bg-gray-50 transition">まずは相談</a>
              </div>
            </article>

            {/* 衛生管理 / 品質管理 */}
            <article className="border border-gray-200 p-8 shadow-lg bg-white md:col-span-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">パート / 契約</span>
                <span className="text-xs text-gray-500">経験者優遇</span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-gray-900">衛生管理・品質管理スタッフ</h3>
              <p className="mt-2 text-gray-600">
                衛生チェック、温度管理、帳票管理、指導・巡回など。安全な厨房運営の要を担うポジションです。
              </p>
              <dl className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div><dt className="text-gray-500">勤務地</dt><dd className="font-medium text-gray-800">各施設（直行直帰可）</dd></div>
                <div><dt className="text-gray-500">勤務時間</dt><dd className="font-medium text-gray-800">シフト制（週3〜応相談）</dd></div>
                <div><dt className="text-gray-500">給与</dt><dd className="font-medium text-gray-800">時給◯◯◯◯円〜</dd></div>
                <div><dt className="text-gray-500">資格</dt><dd className="font-medium text-gray-800">食品衛生責任者 等あれば尚可</dd></div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/contact#contact" className="bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800 transition">応募する</a>
                <a href="/contact" className="border border-gray-900 px-6 py-3 text-gray-900 font-medium hover:bg-gray-50 transition">まずは相談</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 福利厚生・働くメリット */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-6">働くメリット</h2>
            <div className="w-16 h-px bg-gray-300 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '充実の研修制度', text: 'HACCPや衛生管理、嚥下・アレルギー対応など、実務で役立つ研修を用意。未経験でも安心してスタートできます。' },
              { title: '柔軟なシフト', text: '時短・週3日〜などライフスタイルに合わせた働き方が可能。家庭や学業との両立を応援します。' },
              { title: '安心のサポート体制', text: '各施設に担当者がつき、困りごとをすぐ相談できる体制を整えています。' },
            ].map((b, i) => (
              <div key={i} className="bg-white p-8 shadow-lg border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 選考フロー */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-6">選考フロー</h2>
            <div className="w-16 h-px bg-gray-300 mx-auto" />
          </div>
          <ol className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { n: '1', t: '応募' , d: 'フォーム or お電話' },
              { n: '2', t: '面談' , d: 'ご希望・条件の確認' },
              { n: '3', t: '見学' , d: '職場見学・体験（任意）' },
              { n: '4', t: '内定' , d: 'シフト調整・入社手続き' },
            ].map((s, i) => (
              <li key={i} className="border border-gray-200 px-6 py-8 shadow-lg bg-white">
                <div className="mx-auto flex h-10 w-10 items-center justify-center bg-gray-900 font-medium text-white">{s.n}</div>
                <h3 className="mt-3 font-medium text-gray-900">{s.t}</h3>
                <p className="mt-1 text-sm text-gray-600">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <a href="/contact#contact" className="inline-flex items-center justify-center bg-gray-900 px-8 py-4 text-lg font-medium text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              まずは応募・相談する
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-6">よくあるご質問</h2>
            <div className="w-16 h-px bg-gray-300 mx-auto" />
          </div>

          <div className="space-y-4">
            {[
              { q: '未経験でも応募できますか？', a: 'はい。先輩スタッフが業務の流れや衛生基準を丁寧にお教えします。まずはできる範囲から始めていただけます。' },
              { q: 'シフトはどの程度柔軟ですか？', a: '週3〜、時短勤務や時間帯のご相談が可能です。ご家庭や学業との両立を応援しています。' },
              { q: '資格は必要ですか？', a: '調理スタッフは不問。栄養士・管理栄養士は資格保有者を想定していますが、補助業務からのスタートもご相談可能です。' },
              { q: '勤務地の希望は出せますか？', a: '通勤時間やご希望エリアを考慮して決定します。面談でご相談ください。' },
            ].map((item, i) => (
              <details key={i} className="group border border-gray-200 bg-white p-6 open:shadow-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2">
                  <span className="text-base md:text-lg font-medium text-gray-900">{item.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition">⌄</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 最終CTA */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-200 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">一緒に&ldquo;安心とあたたかさ&rdquo;を届けませんか？</h2>
          <div className="w-20 h-px bg-gray-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">応募前のご相談もお気軽に。担当者が丁寧にご案内します。</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact#contact" className="bg-gray-900 px-8 py-4 text-lg font-medium text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">応募・相談する</a>
            <a href="/contact" className="border border-gray-900 px-8 py-4 text-lg font-medium text-gray-900 transition hover:bg-gray-50">お問い合わせページへ</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}