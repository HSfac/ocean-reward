"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download, Code, Shield, Cpu, GitBranch } from "lucide-react"
import Link from "next/link"
import { generatePDF } from "@/utils/generatePDF"

export default function Whitepaper() {
  const handleDownloadPDF = async () => {
    await generatePDF('whitepaper-content', '블루체인부산_백서.pdf')
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
              <h1 className="text-4xl font-bold text-gray-900 mb-2">기술 백서</h1>
              <p className="text-gray-600">블루체인 부산 Whitepaper v1.0</p>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">
              <Download className="w-5 h-5" />
              PDF 다운로드
            </button>
          </div>

          {/* PDF로 변환될 컨텐츠 영역 */}
          <div id="whitepaper-content">
            {/* 핵심 기술 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">BEP-20</h3>
              <p className="text-sm text-gray-600">토큰 표준</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">PoA</h3>
              <p className="text-sm text-gray-600">활동 증명</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-green-100"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">AI 검증</h3>
              <p className="text-sm text-gray-600">자동 인증</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Layer 2</h3>
              <p className="text-sm text-gray-600">확장성</p>
            </motion.div>
          </div>

          {/* 본문 내용 */}
          <div className="space-y-8">
            {/* Abstract */}
            <section className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Abstract</h2>
              <p className="text-gray-700 leading-relaxed">
                블루체인 부산(Ocean Reward)은 블록체인 기술을 활용하여 해양 환경 보호 활동에 대한 투명하고 효율적인 보상 시스템을 구축합니다.
                이중 토큰 시스템(CLEAN/OCEAN)을 통해 활동 보상과 거버넌스를 분리하고,
                활동 증명(Proof of Activity) 알고리즘으로 부정행위를 방지합니다.
                부산시 블록체인 규제자유특구의 제도적 지원과 동백전 연동을 통해 실용적인 토큰 이코노미를 실현합니다.
              </p>
            </section>

            {/* 기술 아키텍처 */}
            <section className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">기술 아키텍처</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">1. 블록체인 레이어</h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">메인체인</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Binance Smart Chain (BEP-20)</li>
                          <li>• 초당 160 TPS</li>
                          <li>• 3초 블록 생성</li>
                          <li>• 낮은 가스비 ($0.01~0.05)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Layer 2 솔루션</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Polygon 사이드체인</li>
                          <li>• 초당 7,000 TPS</li>
                          <li>• 거의 무료 트랜잭션</li>
                          <li>• 일일 정산</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">2. 스마트 컨트랙트</h3>
                  <div className="bg-purple-50 rounded-xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Token Contract</h4>
                        <p className="text-sm text-gray-600">ERC-20 표준 구현</p>
                        <p className="text-xs text-gray-500 mt-1">Mint, Burn, Transfer</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Reward Contract</h4>
                        <p className="text-sm text-gray-600">보상 분배 로직</p>
                        <p className="text-xs text-gray-500 mt-1">Activity Validation</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Governance Contract</h4>
                        <p className="text-sm text-gray-600">DAO 투표 시스템</p>
                        <p className="text-xs text-gray-500 mt-1">Proposal, Voting</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">3. 활동 증명 알고리즘 (PoA)</h3>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div>
                          <p className="font-semibold">GPS 위치 검증</p>
                          <p className="text-sm text-gray-600">지오펜싱 기술로 활동 지역 확인</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div>
                          <p className="font-semibold">AI 이미지 분석</p>
                          <p className="text-sm text-gray-600">쓰레기 수거 전후 사진 자동 검증</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <div>
                          <p className="font-semibold">시간 기반 검증</p>
                          <p className="text-sm text-gray-600">활동 시간 패턴 분석</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                        <div>
                          <p className="font-semibold">커뮤니티 검증</p>
                          <p className="text-sm text-gray-600">상호 검증 시스템</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 토큰 이코노미 */}
            <section className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">토큰 이코노미</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-blue-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">CLEAN Token</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 유틸리티 토큰</li>
                    <li>• 총 발행량: 10,000,000,000 CLN</li>
                    <li>• 1 CLN = 1 KRW 페깅</li>
                    <li>• 일일 발행 한도: 0.1%</li>
                    <li>• 반감기: 2년</li>
                  </ul>
                </div>

                <div className="border-2 border-purple-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-900">OCEAN Token</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 거버넌스 토큰</li>
                    <li>• 총 발행량: 1,000,000,000 OCN</li>
                    <li>• 초기 가격: $0.01</li>
                    <li>• 스테이킹 APY: 최대 25%</li>
                    <li>• 베스팅 기간: 2년</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6">
                <h4 className="font-bold mb-3">토큰 플로우</h4>
                <div className="text-center">
                  <p className="text-sm text-gray-700">
                    활동 → CLEAN 획득 → 사용/교환 → 수수료 발생 → 50% 소각 + 50% 재투자
                  </p>
                </div>
              </div>
            </section>

            {/* 보안 */}
            <section className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">보안 및 감사</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-3">보안 기능</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Multi-sig Wallet (3/5 서명)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Time Lock (48시간 지연)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Emergency Pause 기능</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Rate Limiting</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3">감사 현황</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="font-semibold text-green-900">CertiK</p>
                      <p className="text-sm text-gray-600">스마트 컨트랙트 감사 (예정)</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="font-semibold text-blue-900">SlowMist</p>
                      <p className="text-sm text-gray-600">보안 감사 (예정)</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="font-semibold text-purple-900">KISA</p>
                      <p className="text-sm text-gray-600">국내 규제 준수 확인</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 로드맵 */}
            <section className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">기술 로드맵</h2>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Q1 2025</h3>
                    <span className="text-sm opacity-90">개발</span>
                  </div>
                  <p className="text-sm opacity-90">스마트 컨트랙트 개발, 테스트넷 배포</p>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Q2 2025</h3>
                    <span className="text-sm opacity-90">출시</span>
                  </div>
                  <p className="text-sm opacity-90">메인넷 런칭, 앱 출시, 초기 사용자 확보</p>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Q3 2025</h3>
                    <span className="text-sm opacity-90">확장</span>
                  </div>
                  <p className="text-sm opacity-90">DEX 상장, Layer 2 통합, NFT 마켓플레이스</p>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Q4 2025</h3>
                    <span className="text-sm opacity-90">고도화</span>
                  </div>
                  <p className="text-sm opacity-90">DAO 전환, CEX 상장, 크로스체인 브릿지</p>
                </div>
              </div>
            </section>
            </div>
          </div>

          {/* 하단 CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center mt-12"
          >
            <h3 className="text-2xl font-bold mb-4">전체 기술 백서 다운로드</h3>
            <p className="mb-6 opacity-90">더 자세한 기술 사양과 구현 세부사항을 확인하세요</p>
            <button
              onClick={handleDownloadPDF}
              className="px-8 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2">
              <Download className="w-5 h-5" />
              Whitepaper PDF 다운로드
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}