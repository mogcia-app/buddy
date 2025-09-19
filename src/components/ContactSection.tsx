import React from 'react';
import Link from 'next/link';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  phone?: string;
  phoneHours?: string;
  email?: string;
  emailHours?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export default function ContactSection({
  description = "どのような事業でお困りでも、専門スタッフが丁寧にご相談をお受けいたします。まずはお気軽にお声がけください。",
  phone = "0952-97-6705",
  phoneHours = "平日 9:00〜18:00",
  email = "buddy@sunny.ocn.ne.jp",
  emailHours = "24時間受付",
  ctaText = "無料相談・お見積り依頼",
  ctaHref = "/contact/general",
  className = ""
}: ContactSectionProps) {
  return (
    <section 
      id="contact" 
      className={`py-32 bg-gray-900 text-white ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">CONTACT</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* 連絡先カード */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* 電話 */}
          <div className="bg-white p-8 hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">お電話でのお問い合わせ</h3>
              <p className="text-2xl font-bold text-gray-900 mb-2">{phone}</p>
              <p className="text-gray-600 text-sm">{phoneHours}</p>
            </div>
          </div>
          
          {/* メール */}
          <div className="bg-white p-8 hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 animate-fade-in-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">メールでのお問い合わせ</h3>
              <p className="text-lg text-gray-900 mb-2">{email}</p>
              <p className="text-gray-600 text-sm">{emailHours}</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center animate-fade-in-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
          <Link 
            href={ctaHref} 
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium hover:bg-gray-50 hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            {ctaText}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
