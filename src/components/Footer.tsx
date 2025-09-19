import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 mb-12">
          {/* 会社情報 */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/buddylogo.png"
                alt="株式会社バディ ロゴ"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-xl font-bold">株式会社バディ</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              食から始まったバディは、厨房委託業からAI技術まで多角的な事業を展開。
              お客様の真の「バディ」として、共に成長し続けます。
            </p>
            <div className="text-sm text-gray-400">
              <p className="mb-1">〒840-0023</p>
              <p className="mb-3">佐賀県佐賀市本庄町大字袋123番地8</p>
              <p className="mb-1">TEL: 0952-97-6705</p>
              <p>Email: buddy@sunny.ocn.ne.jp</p>
            </div>
          </div>

          {/* 食関連事業 */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-green-400">Food Business</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/kitchen-management" className="text-gray-300 hover:text-white transition-colors">
                  厨房委託業
                </Link>
              </li>
              <li>
                <Link href="/restaurant" className="text-gray-300 hover:text-white transition-colors">
                  飲食事業
                </Link>
              </li>
            </ul>
          </div>

          {/* デジタル事業 */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-400">Digital Business</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/web-development" className="text-gray-300 hover:text-white transition-colors">
                  Web制作
                </Link>
              </li>
              <li>
                <Link href="/sns-management" className="text-gray-300 hover:text-white transition-colors">
                  SNS運用代行
                </Link>
              </li>
              <li>
                <Link href="/ai-solutions" className="text-gray-300 hover:text-white transition-colors">
                  AI業務改善ツール
                </Link>
              </li>
            </ul>
          </div>

          {/* 企業情報 */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/recruit" className="text-gray-300 hover:text-white transition-colors">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        </div>

       
        {/* コピーライト */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; 2025 株式会社バディ. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                利用規約
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                サイトマップ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
