"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download, FileText, TrendingUp, Users, Target } from "lucide-react"
import Link from "next/link"
import { generatePDF } from "@/utils/generatePDF"

export default function BusinessPlan() {
  const handleDownloadPDF = async () => {
    await generatePDF('business-plan-content', '블루체인부산_사업계획서.pdf')
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 mb-8 text-blue-600 hover:text-blue-700 transition">
            <ArrowLeft className="w-5 h-5" />
            <span>메인으로 돌아가기</span>
          </Link>

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">사업 계획서</h1>
              <p className="text-gray-600">블루체인 부산 프로젝트 상세 사업 계획</p>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              <Download className="w-5 h-5" />
              PDF 다운로드
            </button>
          </div>

          {/* PDF로 변환될 컨텐츠 영역 */}
          <div id="business-plan-content">
            {/* 핵심 지표 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">80억원</h3>
              <p className="text-gray-600">2027년 예상 매출</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-green-100"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">50만명</h3>
              <p className="text-gray-600">3년 내 목표 사용자</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">1,000톤</h3>
              <p className="text-gray-600">연간 수거 목표</p>
            </motion.div>
          </div>

          {/* 목차 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">목차</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "1. 사업 개요",
                "2. 시장 분석",
                "3. 비즈니스 모델",
                "4. 경쟁 우위",
                "5. 실행 계획",
                "6. 재무 계획",
                "7. 팀 구성",
                "8. 리스크 관리",
                "9. ESG 임팩트",
                "10. 결론"
              ].map((item, index) => (
                <a
                  key={index}
                  href={`#section-${index + 1}`}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition"
                >
                  <FileText className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700 hover:text-blue-600">{item}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 본문 내용 */}
          <div className="prose prose-lg max-w-none">
            <section id="section-1" className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">1. 사업 개요</h2>

              <h3 className="text-xl font-bold mb-4 text-gray-800">1.1 프로젝트명</h3>
              <p className="text-gray-600 mb-6">
                <strong>블루체인 부산</strong> (BlueChain Busan)
              </p>

              <h3 className="text-xl font-bold mb-4 text-gray-800">1.2 비전</h3>
              <p className="text-gray-600 mb-6">
                블록체인 기술을 활용한 지속가능한 해양 환경 보호 생태계 구축
              </p>

              <h3 className="text-xl font-bold mb-4 text-gray-800">1.3 미션</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 해양쓰레기 문제 해결을 위한 시민 참여 플랫폼 구축</li>
                <li>• 블록체인 기반 투명한 보상 시스템 운영</li>
                <li>• 부산시 블록체인 규제자유특구 선도 모델 구축</li>
              </ul>
            </section>

            <section id="section-2" className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">2. 시장 분석</h2>

              <h3 className="text-xl font-bold mb-4 text-gray-800">2.1 해양쓰레기 현황</h3>
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-blue-900">7,100톤</p>
                    <p className="text-gray-600">부산시 연간 해양쓰레기</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-900">60억원</p>
                    <p className="text-gray-600">연간 처리 비용</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-900">70%</p>
                    <p className="text-gray-600">육상 유입 비율</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-800">2.2 시장 규모</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• 국내 해양환경 관리 시장: 연간 2조원 규모</li>
                <li>• 블록체인 시장: 2025년까지 연평균 73.2% 성장 전망</li>
                <li>• 부산 블록체인 특구 예산: 1,000억원</li>
              </ul>

              <h3 className="text-xl font-bold mb-4 text-gray-800">2.3 타겟 시장</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">1차</span>
                  <div>
                    <p className="font-semibold">부산 시민 260만명</p>
                    <p className="text-sm text-gray-500">직접 참여 가능한 핵심 사용자층</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">2차</span>
                  <div>
                    <p className="font-semibold">부산 방문 관광객 연간 1,500만명</p>
                    <p className="text-sm text-gray-500">관광 연계 프로그램 참여</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">3차</span>
                  <div>
                    <p className="font-semibold">전국 해안 도시 확장</p>
                    <p className="text-sm text-gray-500">울산, 경남, 전남 등 순차 확대</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="section-3" className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">3. 비즈니스 모델</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                  <h4 className="font-bold text-blue-900 mb-3">직접 수익</h4>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• 거래 수수료 0.5%</li>
                    <li>• 프리미엄 서비스</li>
                    <li>• NFT 판매</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                  <h4 className="font-bold text-green-900 mb-3">간접 수익</h4>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• 데이터 판매</li>
                    <li>• 광고 수익</li>
                    <li>• 제휴 수수료</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                  <h4 className="font-bold text-purple-900 mb-3">정부 지원</h4>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• 부산시 보조금</li>
                    <li>• 환경부 지원금</li>
                    <li>• 블록체인 특구</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-6" className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">6. 재무 계획</h2>

              <h3 className="text-xl font-bold mb-4 text-gray-800">3개년 재무 전망</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border p-3 text-left">구분</th>
                      <th className="border p-3 text-right">2025년</th>
                      <th className="border p-3 text-right">2026년</th>
                      <th className="border p-3 text-right">2027년</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">매출</td>
                      <td className="border p-3 text-right font-semibold">5억원</td>
                      <td className="border p-3 text-right font-semibold">25억원</td>
                      <td className="border p-3 text-right font-semibold">80억원</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3">비용</td>
                      <td className="border p-3 text-right">20억원</td>
                      <td className="border p-3 text-right">30억원</td>
                      <td className="border p-3 text-right">45억원</td>
                    </tr>
                    <tr>
                      <td className="border p-3">순익</td>
                      <td className="border p-3 text-right text-red-600">-15억원</td>
                      <td className="border p-3 text-right text-red-600">-5억원</td>
                      <td className="border p-3 text-right text-green-600 font-bold">35억원</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border p-3">누적 사용자</td>
                      <td className="border p-3 text-right">5만명</td>
                      <td className="border p-3 text-right">20만명</td>
                      <td className="border p-3 text-right">50만명</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="font-semibold text-yellow-900">손익분기점 (BEP)</p>
                <p className="text-gray-700">2026년 Q4 예상 • 투자 회수 기간 3.5년</p>
              </div>
            </section>
            </div>
          </div>

          {/* 하단 CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white text-center mt-12"
          >
            <h3 className="text-2xl font-bold mb-4">전체 사업 계획서를 다운로드하세요</h3>
            <p className="mb-6 opacity-90">더 자세한 내용은 PDF 문서에서 확인하실 수 있습니다</p>
            <button
              onClick={handleDownloadPDF}
              className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2">
              <Download className="w-5 h-5" />
              사업 계획서 다운로드 (PDF)
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}