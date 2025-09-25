"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download, Coins, TrendingUp, Shield, Users } from "lucide-react"
import Link from "next/link"
import { generatePDF } from "@/utils/generatePDF"

export default function TokenEconomy() {
  const handleDownloadPDF = async () => {
    await generatePDF('token-economy-content', '블루체인부산_토큰이코노미.pdf')
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 mb-8 text-purple-600 hover:text-purple-700 transition">
            <ArrowLeft className="w-5 h-5" />
            <span>메인으로 돌아가기</span>
          </Link>

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">토큰 이코노미 설계서</h1>
              <p className="text-gray-600">CLEAN/OCEAN 이중 토큰 시스템</p>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">
              <Download className="w-5 h-5" />
              PDF 다운로드
            </button>
          </div>

          {/* PDF로 변환될 컨텐츠 영역 */}
          <div id="token-economy-content">
            {/* 토큰 개요 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">CLEAN Token</h3>
                <Coins className="w-8 h-8 opacity-80" />
              </div>
              <p className="mb-4 opacity-90">활동 보상 토큰 (Utility Token)</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="opacity-80">총 발행량</span>
                  <span className="font-semibold">10,000,000,000 CLN</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">표준</span>
                  <span className="font-semibold">BEP-20</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">가치</span>
                  <span className="font-semibold">1 CLN = 1 KRW</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">OCEAN Token</h3>
                <Shield className="w-8 h-8 opacity-80" />
              </div>
              <p className="mb-4 opacity-90">거버넌스 토큰 (Governance Token)</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="opacity-80">총 발행량</span>
                  <span className="font-semibold">1,000,000,000 OCN</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">표준</span>
                  <span className="font-semibold">BEP-20</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">초기 가격</span>
                  <span className="font-semibold">$0.01</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 토큰 획득 방법 */}
          <section className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-green-500" />
              CLEAN 토큰 획득 방법
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-4 text-gray-800">기본 보상</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">해양쓰레기 1kg 수거</span>
                    <span className="font-bold text-blue-600">100 CLN</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">분리수거 인증</span>
                    <span className="font-bold text-blue-600">20 CLN</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">교육 프로그램 참여</span>
                    <span className="font-bold text-blue-600">50 CLN</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">친구 초대</span>
                    <span className="font-bold text-blue-600">30 CLN</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-gray-800">특별 보상</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-orange-200">
                    <p className="font-semibold text-orange-900 mb-1">주말 보너스</p>
                    <p className="text-sm text-gray-700">모든 활동 1.5배 보상</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                    <p className="font-semibold text-blue-900 mb-1">특별 구역</p>
                    <p className="text-sm text-gray-700">오염 심각 지역 2배 보상</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <p className="font-semibold text-green-900 mb-1">단체 활동</p>
                    <p className="text-sm text-gray-700">참여 인원 × 10 CLN 추가</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 토큰 분배 */}
          <section className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-purple-500" />
              OCEAN 토큰 분배
            </h2>

            <div className="mb-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                    30%
                  </div>
                  <p className="text-sm font-semibold">생태계 보상</p>
                  <p className="text-xs text-gray-500">300M OCN</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                    25%
                  </div>
                  <p className="text-sm font-semibold">투자자</p>
                  <p className="text-xs text-gray-500">250M OCN</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                    20%
                  </div>
                  <p className="text-sm font-semibold">팀 & 어드바이저</p>
                  <p className="text-xs text-gray-500">200M OCN</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                    15%
                  </div>
                  <p className="text-sm font-semibold">재단 준비금</p>
                  <p className="text-xs text-gray-500">150M OCN</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                    10%
                  </div>
                  <p className="text-sm font-semibold">마케팅</p>
                  <p className="text-xs text-gray-500">100M OCN</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="font-semibold text-yellow-900 mb-2">락업 기간</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 팀 & 어드바이저: 2년 (6개월 클리프)</li>
                <li>• 투자자: 1년 (3개월 클리프)</li>
                <li>• 재단 준비금: 3년 선형 해제</li>
              </ul>
            </div>
          </section>

          {/* 스테이킹 보상 */}
          <section className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">스테이킹 보상</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-blue-500 transition">
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-blue-600">8%</p>
                  <p className="text-sm text-gray-600">APY</p>
                </div>
                <p className="font-semibold mb-2">3개월 스테이킹</p>
                <p className="text-sm text-gray-600">CLEAN 5% 보너스</p>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-green-500 transition">
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-green-600">15%</p>
                  <p className="text-sm text-gray-600">APY</p>
                </div>
                <p className="font-semibold mb-2">6개월 스테이킹</p>
                <p className="text-sm text-gray-600">CLEAN 10% 보너스</p>
              </div>

              <div className="border-2 border-purple-200 rounded-xl p-4 hover:border-purple-500 transition bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-purple-600">25%</p>
                  <p className="text-sm text-gray-600">APY</p>
                </div>
                <p className="font-semibold mb-2">1년 스테이킹</p>
                <p className="text-sm text-gray-600">CLEAN 20% 보너스 + NFT</p>
              </div>
            </div>
          </section>

          {/* 로드맵 */}
          <section className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">토큰 이코노미 로드맵</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Phase 1: 초기 (0-6개월)</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 10,000명 사용자 확보</li>
                    <li>• 일일 거래량 1억 CLN</li>
                    <li>• 5개 주요 파트너십</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Phase 2: 성장 (6-12개월)</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 50,000명 사용자</li>
                    <li>• 일일 거래량 5억 CLN</li>
                    <li>• DEX 상장</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Phase 3: 확장 (12-24개월)</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 200,000명 사용자</li>
                    <li>• 일일 거래량 20억 CLN</li>
                    <li>• CEX 상장 (빗썸, 업비트)</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Phase 4: 성숙 (24개월+)</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 500,000명+ 사용자</li>
                    <li>• 타 지역 확장</li>
                    <li>• 글로벌 파트너십</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          </div>

          {/* 하단 CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">전체 토큰 이코노미 백서를 확인하세요</h3>
            <p className="mb-6 opacity-90">더 자세한 기술적 내용과 경제 모델을 PDF로 제공합니다</p>
            <button
              onClick={handleDownloadPDF}
              className="px-8 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2">
              <Download className="w-5 h-5" />
              토큰 이코노미 백서 다운로드
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}