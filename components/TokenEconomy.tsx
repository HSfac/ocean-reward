"use client"

import { motion } from "framer-motion"
import { Coins, TrendingUp, Users, Lock } from "lucide-react"
import { useState } from "react"

export default function TokenEconomy() {
  const [wasteAmount, setWasteAmount] = useState(10)
  const [wasteType, setWasteType] = useState("plastic")
  const [location, setLocation] = useState("beach")

  const calculateReward = () => {
    const typeMultiplier = {
      plastic: 1.0,
      net: 2.5,
      microplastic: 3.0
    }[wasteType]

    const locationMultiplier = {
      beach: 1.0,
      remote: 1.5,
      protected: 2.0
    }[location]

    return Math.round(wasteAmount * typeMultiplier * locationMultiplier * 100)
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            듀얼 토큰 <span className="text-gradient">이코노미</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <span className="font-bold">CLEAN 토큰</span>과 <span className="font-bold">OCEAN 토큰</span>으로 구성된 지속가능한 경제 모델
          </p>
          <p className="text-sm text-gray-500 mt-2">
            알고리즘 기반 가격 안정화 + 기업 ESG 후원 기반 재원 확보
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">CLEAN 토큰</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <div>
                  <span className="font-medium">수거 활동 리워드용 유틸리티 토큰</span>
                  <p className="text-xs text-gray-500 mt-1">부산 특구 내에서만 발행</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <div>
                  <span className="font-medium">동백전 1:1 교환 가능</span>
                  <p className="text-xs text-gray-500 mt-1">85만명 기존 사용자 활용</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <div>
                  <span className="font-medium">알고리즘 기반 가격 안정화</span>
                  <p className="text-xs text-gray-500 mt-1">30-40% 국고 지원 보장</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <div>
                  <span className="font-medium">일일 발행량 제한으로 인플레이션 방지</span>
                  <p className="text-xs text-gray-500 mt-1">최대 10만 CLEAN/일</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">OCEAN 토큰</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <div>
                  <span className="font-medium">플랫폼 거버넌스 참여권</span>
                  <p className="text-xs text-gray-500 mt-1">정책 결정 투표권</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <div>
                  <span className="font-medium">스테이킹으로 추가 리워드 획듍</span>
                  <p className="text-xs text-gray-500 mt-1">연 15-20% APY</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <div>
                  <span className="font-medium">NFT 마켓플레이스 우선 접근권</span>
                  <p className="text-xs text-gray-500 mt-1">환경 배지 NFT 거래</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <div>
                  <span className="font-medium">기업 파트너십 수익 배분</span>
                  <p className="text-xs text-gray-500 mt-1">ESG 후원금 10% 배분</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">리워드 계산기</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm opacity-90 mb-2">수거량 (kg)</label>
              <input
                type="range"
                min="1"
                max="50"
                value={wasteAmount}
                onChange={(e) => setWasteAmount(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-center mt-2 font-semibold">{wasteAmount}kg</p>
            </div>

            <div>
              <label className="block text-sm opacity-90 mb-2">쓰레기 종류</label>
              <select
                value={wasteType}
                onChange={(e) => setWasteType(e.target.value)}
                className="w-full px-4 py-2 rounded-lg text-gray-700"
              >
                <option value="plastic">플라스틱 (1.0x)</option>
                <option value="net">어망 (2.5x)</option>
                <option value="microplastic">미세플라스틱 (3.0x)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm opacity-90 mb-2">수거 위치</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 rounded-lg text-gray-700"
              >
                <option value="beach">해수욕장 (1.0x)</option>
                <option value="remote">외딴 지역 (1.5x)</option>
                <option value="protected">보호구역 (2.0x)</option>
              </select>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
            <p className="text-sm opacity-90 mb-2">예상 리워드</p>
            <p className="text-4xl font-bold">{calculateReward().toLocaleString()} CLEAN</p>
            <p className="text-sm opacity-90 mt-2">≈ {calculateReward().toLocaleString()}원</p>
            <p className="text-xs opacity-75 mt-1">동백전으로 즉시 사용 가능</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}