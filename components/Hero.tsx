"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import ParticleBackground from "./ParticleBackground"
import Link from "next/link"

export default function Hero() {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-ocean-animated">
      <ParticleBackground />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Floating Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 opacity-30 rounded-full mix-blend-multiply filter blur-3xl blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 opacity-30 rounded-full mix-blend-multiply filter blur-3xl blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 opacity-30 rounded-full mix-blend-multiply filter blur-3xl blob animation-delay-4000"></div>

        {/* Animated Waves */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-32 bg-white/10"
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ clipPath: "polygon(0 50%, 100% 30%, 100% 100%, 0 100%)" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-24 bg-white/5"
          animate={{ x: [100, 0, 100] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ clipPath: "polygon(0 60%, 100% 40%, 100% 100%, 0 100%)" }}
        />
      </div>

      <div className="relative z-10 section-padding text-center text-white max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <motion.div
              className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-lg font-semibold text-yellow-300">블루체인 부산 (BlueChain Busan)</span>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              깨끗한 바다,
              <span className="block mt-2 text-gradient-animated text-8xl">블록체인이 만드는 미래</span>
            </motion.h1>
          </div>

          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            해양쓰레기를 수거하고 <span className="font-bold">토큰으로 보상받는</span>
            <br />부산시 공식 <span className="font-bold text-yellow-300">블록체인 규제자유특구</span> 리워드 시스템
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg shadow-2xl relative overflow-hidden"
              onClick={scrollToNext}
            >
              <span className="relative z-10">프로젝트 살펴보기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <Link
              href="/docs/investment-proposal"
              className="inline-block"
            >
              <motion.div
                whileHover={{ scale: 1.08, borderColor: "#fff" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 glass border-2 border-white/50 text-white rounded-full font-bold text-lg backdrop-blur-md hover:bg-white/20 transition-all duration-300"
              >
                투자 제안서 보기
              </motion.div>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-3xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold mb-2 text-yellow-300">7,100톤</h3>
              <p className="text-sm opacity-90">연간 해양쓰레기 수거량</p>
              <p className="text-xs opacity-70 mt-1">처리비용 60억원/년</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass rounded-3xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold mb-2 text-yellow-300">1,000억원</h3>
              <p className="text-sm opacity-90">블록체인 혁신펀드</p>
              <p className="text-xs opacity-70 mt-1">부산시 전용 지원금</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass rounded-3xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold mb-2 text-yellow-300">85만명</h3>
              <p className="text-sm opacity-90">동백전 사용자</p>
              <p className="text-xs opacity-70 mt-1">즉시 토큰 교환 가능</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={scrollToNext}
        >
          <ArrowDown className="w-8 h-8 text-white/80" />
        </motion.div>
      </div>
    </section>
  )
}