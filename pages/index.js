'use client';

import { useState, useEffect } from 'react';

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
      description: "Begin with established coins like Bitcoin (BTC) or Ethereum (ETH). Think of these as the 'blue chips' of the crypto world.",
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
      title: "Start Learning & Exploring",
      description: "The crypto world is vast! Start exploring different projects, learn about DeFi, NFTs, and find communities that match your interests.",
      icon: "🌍",
      tips: [
        "Join educational crypto communities",
        "Follow reputable sources for news",
        "Take your time - there's no rush to learn everything"
      ]
    }
  ];

  const beginnerFriendlyCoins = [
    {
      name: "Bitcoin (BTC)",
      description: "The original cryptocurrency - digital gold",
      why: "Proven track record, widespread adoption",
      risk: "Low"
    },
    {
      name: "Ethereum (ETH)",
      description: "The foundation for most decentralized apps",
      why: "Strong developer community, multiple use cases",
      risk: "Low-Medium"
    },
    {
      name: "Solana (SOL)",
      description: "High-speed blockchain for fast transactions",
      why: "Fast and cheap transactions, growing ecosystem",
      risk: "Medium"
    },
    {
      name: "Cardano (ADA)",
      description: "Research-driven blockchain platform",
      why: "Strong academic backing, methodical development",
      risk: "Medium"
    }
  ];

  const commonMistakes = [
    "Investing based on hype without research",
    "Not securing recovery phrases properly",
    "Trying to day trade without experience",
    "Falling for 'get rich quick' schemes",
    "Sharing private keys with anyone"
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      {/* Fixed Background Animation */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 sm:-left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-10 sm:-right-20 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/15 rounded-full filter blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 w-full">
        {/* HERO SECTION - Fixed for mobile */}
        <section className={`min-h-screen w-full flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full max-w-6xl mx-auto text-center">
            
            {/* Attention-Grabbing Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-gray-900 font-bold text-xs sm:text-sm mb-6 animate-pulse">
              Limited Time: Free Access to Crypto Masterclass
            </div>

            {/* Main Headline - Static Text */}
            <div className="mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                  Unlock
                </span>
                <br />
                <span className="text-cyan-400 border-b-2 sm:border-b-4 border-cyan-400 pb-1 sm:pb-2 text-2xl sm:text-4xl md:text-7xl">
                  Financial Freedom
                </span>
              </h1>
            </div>

            {/* Subheadline with Emotional Hook */}
            <p className="text-lg sm:text-xl md:text-4xl text-gray-300 mb-6 font-light">
              While others watch from the sidelines,{" "}
              <span className="text-cyan-400 font-semibold">
                smart beginners are building real wealth
              </span>{" "}
              with cryptocurrency
            </p>

            {/* Pain Points */}
            <div className="w-full max-w-3xl mx-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 text-left">
                {[
                  {
                    icon: "😰",
                    text: "Tired of living paycheck to paycheck?"
                  },
                  {
                    icon: "⏰",
                    text: "Working 40+ hours with nothing to show?"
                  },
                  {
                    icon: "🏖️",
                    text: "Dreaming of retirement before 50?"
                  }
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3 bg-gray-800/50 p-3 sm:p-4 rounded-xl border border-gray-700">
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
                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-2 border-gray-900 flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-sm sm:text-base">4,287+ Students</div>
                  <div className="text-cyan-400 text-xs sm:text-sm">Already started their journey</div>
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
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-cyan-500/30 mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                  What You Get for FREE:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-left">
                  {[
                    "Step-by-Step Crypto Buying Guide",
                    "Portfolio Building Strategies",
                    "Risk Management Techniques",
                    "24/7 Community Support",
                    "Live Q&A Sessions",
                    "Market Analysis Updates"
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
                    YES! I Want Financial Freedom - Start FREE Training
                  </span>
                </a>
                <p className="text-gray-400 text-xs sm:text-sm">
                  You&apos;ll be redirected to join our Telegram group for free access
                </p>

                <button 
                  onClick={() => document.getElementById('steps').scrollIntoView({ behavior: 'smooth' })}
                  className="px-4 sm:px-8 py-3 sm:py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 w-full border border-gray-600 text-xs sm:text-base"
                >
                  I&apos;m Not Sure - Show Me How It Works First
                </button>

                {/* Urgency Timer */}
                <div className="text-center mt-3 sm:mt-4">
                  <div className="inline-flex items-center space-x-1 sm:space-x-2 bg-red-500/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-red-500/30">
                    <span className="animate-pulse text-sm">⏰</span>
                    <span className="text-red-400 text-xs sm:text-sm font-medium">
                      Limited spots available!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8 opacity-70">
              {[
                { icon: "🔒", text: "No Credit Card" },
                { icon: "⏱️", text: "30-Day Free" },
                { icon: "💬", text: "24/7 Support" },
                { icon: "↩️", text: "Cancel Anytime" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg sm:text-2xl mb-1 sm:mb-2">{item.icon}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof - Success Stories */}
        <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Real People, Real Results
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
              {[
                {
                  name: "Sarah K.",
                  role: "Former Teacher",
                  result: "Made $3,200 in 3 months",
                  quote: "I went from zero crypto knowledge to making my first profitable trade in just 2 weeks!",
                  avatar: "👩‍🏫"
                },
                {
                  name: "Mike R.",
                  role: "College Student",
                  result: "Earns $500/month passive",
                  quote: "The community helped me avoid costly beginner mistakes. Paid for my entire semester!",
                  avatar: "👨‍🎓"
                },
                {
                  name: "Lisa & Tom",
                  role: "Working Parents",
                  result: "$15k portfolio in 6 months",
                  quote: "We're building our kids' college fund through crypto. Life-changing education!",
                  avatar: "👨‍👩‍👧"
                }
              ].map((story, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="text-2xl sm:text-3xl mr-3 sm:mr-4">{story.avatar}</div>
                    <div>
                      <h4 className="font-bold text-white text-sm sm:text-base">{story.name}</h4>
                      <p className="text-cyan-400 text-xs sm:text-sm">{story.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm italic">&quot;{story.quote}&quot;</p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                    <p className="text-green-400 font-bold text-xs sm:text-sm">{story.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
              {[
                { number: "5", label: "Simple Steps" },
                { number: "$20", label: "Minimum Start" },
                { number: "30", label: "Minutes Setup" },
                { number: "0%", label: "Experience Needed" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 sm:p-6 bg-gray-800/50 rounded-xl sm:rounded-2xl border border-gray-700 backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Steps */}
        <section id="steps" className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Your 5-Step Crypto Starter Guide
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {learningSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 transition-all duration-500 hover:border-blue-500/30 ${
                    currentStep === index ? 'ring-2 ring-blue-500/50' : ''
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-base sm:text-lg">
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
                        <h4 className="text-xs sm:text-sm font-semibold text-cyan-400 mb-1 sm:mb-2">Important Tips:</h4>
                        <ul className="space-y-1">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-center text-xs sm:text-sm text-gray-300">
                              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full mr-2 sm:mr-3"></span>
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

            {/* Step Navigation */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-1 sm:space-x-2">
              {learningSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentStep === index
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 w-6 sm:w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FOMO Section */}
        <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
              What Happens If You Don&apos;t Start Today?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mb-8">
              <div className="bg-red-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-red-500/20">
                <div className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">The Cost of Waiting</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4">What You&apos;ll Miss</h3>
                <ul className="space-y-2 sm:space-y-3 text-left text-xs sm:text-sm md:text-base">
                  {[
                    "Miss the next crypto bull run",
                    "Watch others profit while you hesitate",
                    "Stay stuck in the 9-5 rat race",
                    "Lose purchasing power to inflation",
                    "Regret not starting earlier"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-red-300">
                      <span className="mr-2 sm:mr-3">❌</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-green-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-500/20">
                <div className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">The Reward of Starting</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4">What You&apos;ll Gain</h3>
                <ul className="space-y-2 sm:space-y-3 text-left text-xs sm:text-sm md:text-base">
                  {[
                    "Catch the next 10x opportunity",
                    "Build wealth while you sleep",
                    "Gain financial independence",
                    "Learn valuable future skills",
                    "Join the 1% who act instead of watch"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-green-300">
                      <span className="mr-2 sm:mr-3">✅</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Beginner-Friendly Coins */}
        <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Good Starting Coins for Beginners
            </h2>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {beginnerFriendlyCoins.map((coin, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-white">{coin.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      coin.risk === 'Low' ? 'bg-green-500/20 text-green-400' :
                      coin.risk === 'Low-Medium' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {coin.risk} Risk
                    </span>
                  </div>
                  <p className="text-gray-300 mb-3 text-xs sm:text-sm md:text-base">{coin.description}</p>
                  <div className="text-xs sm:text-sm text-cyan-400">
                    <strong>Why start here:</strong> {coin.why}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes to Avoid */}
        <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Common Beginner Mistakes to Avoid
            </h2>

            <div className="grid gap-3 sm:gap-4">
              {commonMistakes.map((mistake, index) => (
                <div key={index} className="flex items-start bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-700 p-3 sm:p-4">
                  <span className="text-red-400 mr-2 sm:mr-3 mt-0.5 sm:mt-1 text-sm">❌</span>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base">{mistake}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Objection Handling */}
        <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Common Concerns - Addressed
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  objection: "I don't have enough money to start",
                  response: "You can begin with just $20! Many of our most successful students started with small amounts. The key is learning the process first."
                },
                {
                  objection: "Crypto seems too complicated",
                  response: "We break everything down into simple, bite-sized lessons. Our community members range from 18 to 75 years old - if they can learn, so can you!"
                },
                {
                  objection: "I'm worried about scams and losing money",
                  response: "That&apos;s exactly why you need proper education! We teach you how to spot scams and protect your investments from day one."
                },
                {
                  objection: "I don't have time to learn this",
                  response: "Our lessons take 10-15 minutes per day. Most students complete the core training during their lunch break or commute."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700">
                  <div className="flex items-start">
                    <div className="bg-red-500/20 rounded-lg p-2 sm:p-3 mr-3 sm:mr-4">
                      <span className="text-red-400 font-bold text-sm">?</span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-2">{item.objection}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm md:text-base">{item.response}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Reversal Section */}
        <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-green-500/20">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full mb-4 sm:mb-6 text-xl sm:text-2xl">
                ✅
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Zero Risk. Maximum Reward.
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {[
                  {
                    icon: "💰",
                    title: "100% Free Access",
                    desc: "No hidden fees, no credit card required"
                  },
                  {
                    icon: "🛡️",
                    title: "No Investment Needed",
                    desc: "Learn first, invest when you&apos;re ready"
                  },
                  {
                    icon: "⏰",
                    title: "Cancel Anytime",
                    desc: "Leave the group whenever you want"
                  },
                  {
                    icon: "🎯",
                    title: "Proven Methods",
                    desc: "Strategies that actually work for beginners"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 text-left">
                    <div className="text-xl sm:text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-white text-sm sm:text-base">{item.title}</h4>
                      <p className="text-gray-300 text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <p className="text-yellow-300 font-semibold text-xs sm:text-sm md:text-base">
                  Warning: The only risk is NOT starting. Every day you wait, you&apos;re missing potential opportunities in the crypto market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Frequently Asked Questions
            </h2>

            <div className="grid gap-4 sm:gap-6">
              {[
                {
                  question: "How much money do I need to start?",
                  answer: "You can start with as little as $20! Many beginners start with $50-100 to learn the process without significant risk."
                },
                {
                  question: "Is cryptocurrency safe?",
                  answer: "Yes, when you follow security best practices. The technology itself is secure, but users need to be careful about scams and properly secure their wallets."
                },
                {
                  question: "How long does it take to learn?",
                  answer: "You can make your first purchase in under 30 minutes. Understanding the broader ecosystem takes time, but we break it down into manageable lessons."
                },
                {
                  question: "What if I lose my password?",
                  answer: "This is why your recovery phrase is crucial! It&apos;s the only way to restore access to your wallet if you forget your password or lose your device."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA with Scarcity */}
        <section className="w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/30 to-cyan-900/30">
          <div className="w-full max-w-4xl mx-auto text-center">
            
            {/* Live Counter */}
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-3 sm:space-x-4">
                <div className="flex items-center">
                  <span className="animate-pulse text-red-400 mr-1 sm:mr-2 text-sm">🔥</span>
                  <span className="text-red-400 font-bold text-xs sm:text-sm">LIVE:</span>
                </div>
                <div className="text-white text-xs sm:text-sm md:text-base">
                  <span className="font-bold">47 people</span> joined in the last hour
                </div>
                <div className="text-yellow-400 text-xs sm:text-sm md:text-base">
                  Only <span className="font-bold">23 spots</span> remaining today
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-cyan-500/30 relative overflow-hidden">
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Your Financial Future Starts Now
              </h2>
              
              <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join <span className="text-cyan-400 font-bold">4,287+ beginners</span> who&apos;ve already taken control of their financial destiny. 
                What are you waiting for?
              </p>

              {/* Benefits Recap */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
                {[
                  "Free Access",
                  "24/7 Support", 
                  "Proven Results",
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
                START MY FREE CRYPTO JOURNEY NOW
              </a>
              <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
                You&apos;ll be redirected to join our Telegram group for instant free access
              </p>

              <p className="text-gray-400 text-xs sm:text-sm">
                Instant access • No credit card required
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}