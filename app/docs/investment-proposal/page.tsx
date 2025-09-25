"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download, TrendingUp, DollarSign, Award } from "lucide-react"
import Link from "next/link"
import { generatePDF } from "@/utils/generatePDF"

export default function InvestmentProposal() {
  const handleDownloadPDF = async () => {
    await generatePDF('investment-proposal-content', '블루체인부산_투자제안서.pdf')
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 mb-8 text-indigo-600 hover:text-indigo-700 transition">
            <ArrowLeft className="w-5 h-5" />
            <span>메인으로 돌아가기</span>
          </Link>

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">투자 제안서</h1>
              <p className="text-gray-600">블루체인 부산 투자 기회</p>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
              <Download className="w-5 h-5" />
              PDF 다운로드
            </button>
          </div>

          {/* PDF로 변환될 컨텐츠 영역 */}
          <div id="investment-proposal-content">
            {/* 핵심 투자 포인트 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl p-6 text-white"
            >
              <TrendingUp className="w-8 h-8 mb-3 opacity-80" />
              <h3 className="text-3xl font-bold mb-1">210억원</h3>
              <p className="text-sm opacity-90">목표 투자 유치 규모</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white"
            >
              <DollarSign className="w-8 h-8 mb-3 opacity-80" />
              <h3 className="text-3xl font-bold mb-1">35%</h3>
              <p className="text-sm opacity-90">예상 연간 수익률</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white"
            >
              <Award className="w-8 h-8 mb-3 opacity-80" />
              <h3 className="text-3xl font-bold mb-1">3.5년</h3>
              <p className="text-sm opacity-90">투자 회수 기간</p>
            </motion.div>
          </div>

          {/* Executive Summary */}
          <section className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Executive Summary</h2>

            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                <strong>블루체인 부산(Ocean Reward)</strong>는 부산시 블록체인 규제자유특구에서 운영되는
                세계 최초의 블록체인 기반 해양 환경 보호 플랫폼입니다.
              </p>

              <div className="bg-indigo-50 rounded-xl p-6 my-6">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">핵심 투자 가치</h3>
                <ul className="space-y-2">
                  <li>✓ 정부 공식 인증 사업 (독점적 라이선스)</li>
                  <li>✓ 85만 동백전 사용자 즉시 접근 가능</li>
                  <li>✓ ESG 투자 트렌드 부합</li>
                  <li>✓ 명확한 수익 모델과 성장 전략</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 시장 기회 */}
          <section className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">시장 기회</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold mb-3">시장 규모</h3>
                <div className="space-y-2 text-gray-700">
                  <p>• 국내 해양환경 시장: <strong>2조원/년</strong></p>
                  <p>• 글로벌 블록체인 시장: <strong>연평균 73.2% 성장</strong></p>
                  <p>• 부산시 특구 예산: <strong>1,000억원</strong></p>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold mb-3">타겟 시장</h3>
                <div className="space-y-2 text-gray-700">
                  <p>• 1차: 부산 시민 <strong>260만명</strong></p>
                  <p>• 2차: 연간 관광객 <strong>1,500만명</strong></p>
                  <p>• 3차: 전국 확장 <strong>5,000만명</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="font-semibold text-yellow-900">시장 진입 타이밍</p>
              <p className="text-gray-700">2025년 블록체인 규제 완화 + ESG 의무화 = 최적의 시장 진입 시기</p>
            </div>
          </section>

          {/* 비즈니스 모델 */}
          <section className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">수익 모델</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                <h4 className="font-bold text-blue-900 mb-2">직접 수익</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• 거래 수수료 0.5%</li>
                  <li>• 프리미엄 월 9,900원</li>
                  <li>• NFT 판매</li>
                </ul>
                <p className="text-2xl font-bold text-blue-600 mt-3">40억/년</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                <h4 className="font-bold text-green-900 mb-2">간접 수익</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• 데이터 판매</li>
                  <li>• 광고 수익</li>
                  <li>• 제휴 수수료</li>
                </ul>
                <p className="text-2xl font-bold text-green-600 mt-3">20억/년</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
                <h4 className="font-bold text-purple-900 mb-2">정부 지원</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• 부산시 보조금</li>
                  <li>• 환경부 지원</li>
                  <li>• 블록체인 특구</li>
                </ul>
                <p className="text-2xl font-bold text-purple-600 mt-3">18억/년</p>
              </div>
            </div>

            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600 mb-2">3년차 예상 총 매출</p>
              <p className="text-4xl font-bold text-gray-900">80억원</p>
            </div>
          </section>

          {/* 투자 계획 */}
          <section className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">투자 계획</h2>

            <div className="space-y-6">
              {/* Funding Rounds */}
              <div>
                <h3 className="text-xl font-bold mb-4">펀딩 라운드</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-xl">
                    <div>
                      <p className="font-bold">Seed Round</p>
                      <p className="text-sm text-gray-600">2025 Q1</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-indigo-600">10억원</p>
                      <p className="text-sm text-gray-600">지분 15%</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                    <div>
                      <p className="font-bold">Series A</p>
                      <p className="text-sm text-gray-600">2025 Q4</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">50억원</p>
                      <p className="text-sm text-gray-600">지분 20%</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                    <div>
                      <p className="font-bold">Series B</p>
                      <p className="text-sm text-gray-600">2026 Q4</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-purple-600">150억원</p>
                      <p className="text-sm text-gray-600">지분 25%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 자금 사용 계획 */}
              <div>
                <h3 className="text-xl font-bold mb-4">자금 사용 계획</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                        40%
                      </div>
                      <p className="text-sm font-semibold">기술 개발</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                        30%
                      </div>
                      <p className="text-sm font-semibold">마케팅</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                        20%
                      </div>
                      <p className="text-sm font-semibold">운영</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                        10%
                      </div>
                      <p className="text-sm font-semibold">예비</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 경쟁 우위 */}
          <section className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">경쟁 우위</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold mb-1">정부 독점 라이선스</h4>
                    <p className="text-sm text-gray-600">부산시 블록체인 특구 공식 사업자</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold mb-1">즉시 사용 가능한 인프라</h4>
                    <p className="text-sm text-gray-600">동백전 85만 사용자 연동</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold mb-1">검증된 팀</h4>
                    <p className="text-sm text-gray-600">블록체인/환경 분야 전문가</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold mb-1">명확한 수익 모델</h4>
                    <p className="text-sm text-gray-600">다각화된 수익 구조</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-bold mb-1">ESG 트렌드</h4>
                    <p className="text-sm text-gray-600">임팩트 투자 대상</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-bold mb-1">확장성</h4>
                    <p className="text-sm text-gray-600">전국/글로벌 확장 가능</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Exit Strategy */}
          <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-6">Exit Strategy</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <h4 className="font-bold mb-2">M&A</h4>
                <p className="text-sm opacity-90">글로벌 환경 기업 인수</p>
                <p className="text-2xl font-bold mt-2">500억원+</p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <h4 className="font-bold mb-2">IPO</h4>
                <p className="text-sm opacity-90">2030년 코스닥 상장</p>
                <p className="text-2xl font-bold mt-2">1,000억원+</p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <h4 className="font-bold mb-2">Protocol</h4>
                <p className="text-sm opacity-90">완전 탈중앙화</p>
                <p className="text-2xl font-bold mt-2">토큰 가치 상승</p>
              </div>
            </div>
          </section>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">투자 문의</h3>
            <p className="mb-6 opacity-90">블루체인 부산과 함께 미래를 만들어가세요</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDownloadPDF}
                className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                투자 제안서 다운로드
              </button>
              <a
                href="mailto:huiseong5278@gmail.com"
                className="px-8 py-3 bg-white/20 backdrop-blur border-2 border-white rounded-xl font-semibold hover:bg-white/30 transition inline-flex items-center justify-center gap-2"
              >
                투자 상담 신청
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}