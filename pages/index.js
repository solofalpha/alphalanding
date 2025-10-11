'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';


export default function CryptoLearningLanding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const learningSteps = [
    {
      step: 1,
      title: "Get Your Digital Wallet",
      description: "A crypto wallet is your personal bank for digital assets. Download trusted wallets like MetaMask, Trust Wallet, or Phantom from official app stores.",
      icon: "👛",
      tips: [
        "Always download from official sources",
        "Choose a strong, unique password",
        "Write down your recovery phrase and store it safely"
      ]
    },
    {
      step: 2,
      title: "Choose Your First Exchange",
      description: "Start with user-friendly exchanges like Coinbase, Binance, or Kraken. These are like digital stock markets for cryptocurrencies.",
      icon: "🏪",
      tips: [
        "Coinbase is great for absolute beginners",
        "Enable two-factor authentication immediately",
        "Start with small amounts to learn the process"
      ]
    },
    {
      step: 3,
      title: "Buy Your First Crypto",
      // FIX 1: Replaced single quotes around 'blue chips' with &apos;
      description: "Begin with established coins like Bitcoin (BTC) or Ethereum (ETH). Think of these as the &apos;blue chips&apos; of the crypto world.",
      icon: "💰",
      tips: [
        "BTC & ETH are the safest starting points",
        "Dollar-cost average (buy small amounts regularly)",
        "Never invest more than you can afford to lose"
      ]
    },
    {
      step: 4,
      title: "Secure Your Investment",
      description: "Learn basic security practices to protect your digital assets. Security is your responsibility in crypto.",
      icon: "🔒",
      tips: [
        "Use hardware wallets for large amounts",
        "Never share private keys or recovery phrases",
        "Beware of phishing sites and scams"
      ]
    },
    {
      step: 5,
      title: "Spot 50x-100x Potential Coins",
      description: "Learn the exact framework to identify early-stage projects with massive growth potential before they explode.",
      icon: "🚀",
      tips: [
        "Analyze tokenomics and team background",
        "Identify strong community engagement",
        "Spot partnerships and real-world utility"
      ]
    }
  ];

  const massiveGainCoins = [
    {
      name: "Early-Stage Gems",
      description: "Coins with $10M-$50M market cap that can 50x",
      examples: "Like early Solana, Avalanche, Polygon",
      potential: "50x-100x Potential"
    },
    {
      name: "DeFi Protocols",
      description: "Decentralized finance projects solving real problems",
      examples: "Lending, borrowing, yield farming platforms",
      potential: "30x-80x Potential"
    },
    {
      name: "AI & Metaverse Tokens",
      description: "Next-generation technology projects",
      examples: "AI infrastructure, virtual world tokens",
      potential: "50x-100x+ Potential"
    },
    {
      name: "Layer 2 Solutions",
      description: "Scaling solutions for major blockchains",
      examples: "Rollups, sidechains, scaling protocols",
      potential: "20x-60x Potential"
    }
  ];

  const successStories = [
    {
      name: "Mike R.",
      role: "College Student",
      result: "Turned $500 into $25,000",
      quote: "Spotted an AI crypto gem early and caught a 50x move!",
      avatar: "👨‍🎓",
      timeframe: "6 months"
    },
    {
      name: "Sarah K.",
      role: "Teacher",
      result: "$1,000 → $78,000",
      quote: "Learned to identify low-cap gems before major listings",
      avatar: "👩‍🏫",
      timeframe: "9 months"
    },
    {
      name: "David T.",
      role: "Freelancer",
      result: "$2,000 → $120,000",
      quote: "Mastered the art of timing entry points on emerging tech",
      avatar: "👨‍💻",
      timeframe: "1 year"
    }
  ];

  const commonMistakes = [
    "Buying at all-time highs due to FOMO",
    "Not taking profits on 10x-20x gains",
    "Ignoring tokenomics and team credentials",
    "Chasing hype without fundamental analysis",
    "Selling too early on 5x gains missing 50x+ moves"
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      
      {/* ========================================================================
        FACEBOOK PIXEL CODE INSERTED HERE USING NEXT/HEAD
        ========================================================================
      */}
      <Head>
        {/* Meta Pixel Code */} 
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1396011548652691');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1396011548652691&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </Head>

      {/* Fixed Background Animation */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 sm:-left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-10 sm:-right-20 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/15 rounded-full filter blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 w-full">
        {/* SUPERCHARGED HERO SECTION */}
        <section className={`min-h-screen w-full flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full max-w-6xl mx-auto text-center">
            
            {/* Attention-Grabbing Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-gray-900 font-bold text-xs sm:text-sm mb-6 animate-pulse">
              🚀 Discover How to Spot 50x-100x Crypto Gems
            </div>

            {/* Main Headline - Static Text */}
            <div className="mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                  Find Crypto Gems
                </span>
                <br />
                <span className="text-green-400 border-b-2 sm:border-b-4 border-green-400 pb-1 sm:pb-2 text-2xl sm:text-4xl md:text-7xl">
                  Before They 100x
                </span>
              </h1>
            </div>

            {/* Subheadline with Emotional Hook */}
            <p className="text-lg sm:text-xl md:text-4xl text-gray-300 mb-6 font-light">
              While 95% of investors buy the hype,{" "}
              <span className="text-green-400 font-semibold">
                our students learn to spot 50x-100x opportunities
              </span>{" "}
              before major pumps
            </p>

            {/* Massive Gains Proof */}
            <div className="w-full max-w-3xl mx-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 text-left">
                {[
                  {
                    icon: "📈",
                    text: "$500 → $25,000 in 6 months"
                  },
                  {
                    icon: "💎",
                    text: "Spot gems before CEX listings"
                  },
                  {
                    icon: "⚡",
                    text: "Learn to time 50x entry points"
                  }
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3 bg-gray-800/50 p-3 sm:p-4 rounded-xl border border-green-500/30">
                    <span className="text-xl sm:text-2xl">{point.icon}</span>
                    <span className="text-gray-300 text-xs sm:text-base">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="flex -space-x-2 sm:-space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full border-2 border-gray-900 flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-sm sm:text-base">4,287+ Students</div>
                  <div className="text-green-400 text-xs sm:text-sm">Already spotting 10x+ opportunities</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 sm:space-x-2 text-yellow-400">
                {"★★★★★".split('').map((star, i) => (
                  <span key={i} className="text-lg sm:text-xl">{star}</span>
                ))}
                <span className="text-white ml-1 sm:ml-2 text-xs sm:text-base">4.9/5 from 892 reviews</span>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="w-full max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-green-500/30 mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                  You&apos;ll Learn How To:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-left">
                  {[
                    "Spot coins before 50x-100x moves",
                    "Analyze tokenomics for massive gains",
                    "Time entries at perfect moments",
                    "Identify strong teams & partnerships",
                    "Avoid rug pulls and scams",
                    "Take profits strategically"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs sm:text-sm">✓</span>
                      </div>
                      <span className="text-gray-300 text-xs sm:text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Urgency CTA Buttons */}
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="https://t.me/+LAVc0V_XYN9mZDFk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-base sm:text-lg md:text-xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative">
                    🔥 YES! Show Me How to Find 50x-100x Coins
                  </span>
                </a>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Join our FREE Telegram group for instant access to crypto gem analysis
                </p>

                <button 
                  onClick={() => document.getElementById('success').scrollIntoView({ behavior: 'smooth' })}
                  className="px-4 sm:px-8 py-3 sm:py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 w-full border border-gray-600 text-xs sm:text-base"
                >
                  Show Me Real Student Results First
                </button>

                {/* Urgency Timer */}
                <div className="text-center mt-3 sm:mt-4">
                  <div className="inline-flex items-center space-x-1 sm:space-x-2 bg-red-500/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-red-500/30">
                    <span className="animate-pulse text-sm">⏰</span>
                    <span className="text-red-400 text-xs sm:text-sm font-medium">
                      Next 50x opportunity analysis dropping in 24 hours!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8 opacity-70">
              {[
                { icon: "🔍", text: "Gem Analysis" },
                { icon: "📊", text: "Real-time Alerts" },
                { icon: "💬", text: "24/7 Support" },
                { icon: "🎯", text: "Proven Methods" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg sm:text-2xl mb-1 sm:mb-2">{item.icon}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MASSIVE GAINS PROOF SECTION */}
        <section id="success" className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
              Real Students, Massive Gains
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-500/30">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="text-2xl sm:text-3xl mr-3 sm:mr-4">{story.avatar}</div>
                    <div>
                      <h4 className="font-bold text-white text-sm sm:text-base">{story.name}</h4>
                      <p className="text-green-400 text-xs sm:text-sm">{story.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm italic">&quot;{story.quote}&quot;</p>
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                    <p className="text-green-400 font-bold text-xs sm:text-sm">{story.result}</p>
                    <p className="text-green-300 text-xs">in {story.timeframe}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 50x-100x POTENTIAL COINS */}
        <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
              {/* FIX 2: Replaced You'll with You&apos;ll */}
              Types of 50x-100x Opportunities You&apos;ll Learn to Spot
            </h2>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {massiveGainCoins.map((coin, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-green-500/30 p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-white">{coin.name}</h3>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30">
                      {coin.potential}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-3 text-xs sm:text-sm md:text-base">{coin.description}</p>
                  <div className="text-xs sm:text-sm text-green-400">
                    <strong>Examples:</strong> {coin.examples}
                  </div>
                </div>
              ))}
            </div>

            {/* Potential ROI Visualization */}
            <div className="mt-8 bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-500/30">
              <h3 className="text-lg sm:text-xl font-bold text-center text-white mb-4">
                What These Gains Could Mean For You:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { amount: "$100", potential: "$5,000 - $10,000", label: "Small Start" },
                  { amount: "$500", potential: "$25,000 - $50,000", label: "Part-time Job" },
                  { amount: "$1,000", potential: "$50,000 - $100,000", label: "Life Changing" },
                  { amount: "$2,500", potential: "$125,000 - $250,000", label: "Early Retirement" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="text-green-400 font-bold text-sm">{item.amount}</div>
                    <div className="text-white text-xs sm:text-sm font-bold">{item.potential}</div>
                    <div className="text-gray-400 text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Learning Steps - Updated for 50x Focus */}
        <section id="steps" className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
              Your Path to Finding 50x-100x Crypto Gems
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {learningSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 transition-all duration-500 hover:border-green-500/30 ${
                    currentStep === index ? 'ring-2 ring-green-500/50' : ''
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-base sm:text-lg">
                          {step.step}
                        </div>
                        <div className="text-2xl sm:text-3xl">{step.icon}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{step.title}</h3>
                      <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm md:text-base">{step.description}</p>
                      
                      {/* Tips */}
                      <div className="mb-3 sm:mb-4">
                        <h4 className="text-xs sm:text-sm font-semibold text-green-400 mb-1 sm:mb-2">Key Insights:</h4>
                        <ul className="space-y-1">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-center text-xs sm:text-sm text-gray-300">
                              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-2 sm:mr-3"></span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes to Avoid */}
        <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
              Why 95% Miss 50x Opportunities
            </h2>

            <div className="grid gap-3 sm:gap-4">
              {commonMistakes.map((mistake, index) => (
                <div key={index} className="flex items-start bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-red-500/30 p-3 sm:p-4">
                  <span className="text-red-400 mr-2 sm:mr-3 mt-0.5 sm:mt-1 text-sm">❌</span>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base">{mistake}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA with Scarcity */}
        <section className="w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900/30 to-emerald-900/30">
          <div className="w-full max-w-4xl mx-auto text-center">
            
            {/* Live Counter */}
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-3 sm:space-x-4">
                <div className="flex items-center">
                  <span className="animate-pulse text-red-400 mr-1 sm:mr-2 text-sm">🔥</span>
                  <span className="text-red-400 font-bold text-xs sm:text-sm">ALERT:</span>
                </div>
                <div className="text-white text-xs sm:text-sm md:text-base">
                  <span className="font-bold">3 potential 50x gems</span> being analyzed right now
                </div>
                <div className="text-yellow-400 text-xs sm:text-sm md:text-base">
                  Next analysis drops in: <span className="font-bold">24 hours</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-green-500/30 relative overflow-hidden">
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Your First 50x Opportunity Awaits
              </h2>
              
              <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join <span className="text-green-400 font-bold">4,287+ investors</span> who are learning to spot life-changing crypto opportunities. 
                Don&apos;t watch from the sidelines.
              </p>

              {/* Benefits Recap */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
                {[
                  "50x Analysis",
                  "Gem Alerts", 
                  "Real-time Calls",
                  "Zero Risk"
                ].map((benefit, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-2 sm:p-3">
                    <div className="text-green-400 text-xs sm:text-sm font-bold">{benefit}</div>
                  </div>
                ))}
              </div>

              {/* Final CTA Button */}
              <a
                href="https://t.me/+LAVc0V_XYN9mZDFk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full max-w-md px-4 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-base sm:text-lg md:text-xl mb-3 sm:mb-4"
              >
                🚀 GET INSTANT ACCESS TO 50X GEM ANALYSIS
              </a>
              <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
                Join our FREE Telegram group - Next potential 50x coin analysis dropping soon!
              </p>

              <p className="text-gray-400 text-xs sm:text-sm">
                Free access • Live gem analysis • Proven framework
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}