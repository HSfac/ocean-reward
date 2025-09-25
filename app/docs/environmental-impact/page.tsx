"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download, Leaf, Globe, Fish, TreePine } from "lucide-react"
import Link from "next/link"
import { generatePDF } from "@/utils/generatePDF"

export default function EnvironmentalImpact() {
  const handleDownloadPDF = async () => {
    await generatePDF('environmental-impact-content', '블루체인부산_환경영향분석.pdf')
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 mb-8 text-green-600 hover:text-green-700 transition">
            <ArrowLeft className="w-5 h-5" />
            <span>메인으로 돌아가기</span>
          </Link>

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">환경 영향 분석 보고서</h1>
              <p className="text-gray-600">블루체인 부산의 환경적 임팩트와 지속가능성</p>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
              <Download className="w-5 h-5" />
              PDF 다운로드
            </button>
          </div>

          {/* PDF로 변환될 컨텐츠 영역 */}
          <div id="environmental-impact-content">
            {/* 핵심 환경 지표 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-green-100"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">1,000톤</h3>
              <p className="text-sm text-gray-600">연간 수거 목표</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">300톤</h3>
              <p className="text-sm text-gray-600">CO₂ 절감 효과</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-100"
            >
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <Fish className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">85%</h3>
              <p className="text-sm text-gray-600">해양 생물 보호</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <TreePine className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">10만명</h3>
              <p className="text-sm text-gray-600">환경 교육 참여</p>
            </motion.div>
          </div>

          {/* 본문 내용 */}
          <div className="space-y-8">
            {/* 환경 문제 현황 */}
            <section className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">1. 해양쓰레기 문제 현황</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="font-bold text-red-900 mb-3">현재 상황</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 연간 7,100톤 해양쓰레기 발생</li>
                    <li>• 처리 비용 60억원/년</li>
                    <li>• 해양 생태계 파괴 가속화</li>
                    <li>• 미세플라스틱 오염 심화</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold text-green-900 mb-3">블루체인 부산 솔루션</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 시민 참여 인센티브 제공</li>
                    <li>• 실시간 수거 활동 추적</li>
                    <li>• 투명한 보상 시스템</li>
                    <li>• 지속가능한 순환 경제</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="font-semibold text-yellow-900 mb-1">긴급성</p>
                <p className="text-gray-700">2030년까지 해양쓰레기를 50% 감축하지 못하면 해양 생태계 회복 불가능 지점 도달</p>
              </div>
            </section>

            {/* 예상 환경 효과 */}
            <section className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">2. 예상 환경 효과</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold mb-3">2.1 직접적 효과</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="font-bold text-2xl text-green-600">1,000톤/년</p>
                      <p className="text-sm text-gray-600">해양쓰레기 수거량</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="font-bold text-2xl text-blue-600">300톤/년</p>
                      <p className="text-sm text-gray-600">CO₂ 절감</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="font-bold text-2xl text-purple-600">500개</p>
                      <p className="text-sm text-gray-600">수거 지점</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold mb-3">2.2 간접적 효과</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 해양 생물 서식지 85% 개선</li>
                    <li>• 미세플라스틱 40% 감소</li>
                    <li>• 어업 생산성 20% 향상</li>
                    <li>• 관광 산업 활성화</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* UN SDGs 연계 */}
            <section className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">3. UN 지속가능발전목표(SDGs) 연계</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border rounded-xl p-4 hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">14</div>
                    <div>
                      <p className="font-bold">Life Below Water</p>
                      <p className="text-sm text-gray-600">해양 생태계 보호</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">해양 오염 방지 및 해양 생태계 복원</p>
                </div>

                <div className="border rounded-xl p-4 hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">13</div>
                    <div>
                      <p className="font-bold">Climate Action</p>
                      <p className="text-sm text-gray-600">기후 행동</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">탄소 배출 감소 및 기후 변화 대응</p>
                </div>

                <div className="border rounded-xl p-4 hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">12</div>
                    <div>
                      <p className="font-bold">Responsible Consumption</p>
                      <p className="text-sm text-gray-600">책임감 있는 소비</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">순환 경제 및 지속가능한 소비 촉진</p>
                </div>

                <div className="border rounded-xl p-4 hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">11</div>
                    <div>
                      <p className="font-bold">Sustainable Cities</p>
                      <p className="text-sm text-gray-600">지속가능한 도시</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">깨끗한 해양 도시 환경 조성</p>
                </div>

                <div className="border rounded-xl p-4 hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <p className="font-bold">Quality Education</p>
                      <p className="text-sm text-gray-600">양질의 교육</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">환경 교육 프로그램 제공</p>
                </div>

                <div className="border rounded-xl p-4 hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">17</div>
                    <div>
                      <p className="font-bold">Partnerships</p>
                      <p className="text-sm text-gray-600">파트너십</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">민관 협력 환경 보호</p>
                </div>
              </div>
            </section>

            {/* 측정 지표 */}
            <section className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">4. 환경 영향 측정 지표</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border p-3 text-left">측정 항목</th>
                      <th className="border p-3 text-right">현재</th>
                      <th className="border p-3 text-right">1년 후</th>
                      <th className="border p-3 text-right">3년 후</th>
                      <th className="border p-3 text-right">측정 방법</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">해양쓰레기 수거량</td>
                      <td className="border p-3 text-right">0톤</td>
                      <td className="border p-3 text-right">1,000톤</td>
                      <td className="border p-3 text-right">5,000톤</td>
                      <td className="border p-3 text-right">블록체인 기록</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3">CO₂ 절감량</td>
                      <td className="border p-3 text-right">0톤</td>
                      <td className="border p-3 text-right">300톤</td>
                      <td className="border p-3 text-right">1,500톤</td>
                      <td className="border p-3 text-right">LCA 분석</td>
                    </tr>
                    <tr>
                      <td className="border p-3">참여 시민 수</td>
                      <td className="border p-3 text-right">0명</td>
                      <td className="border p-3 text-right">50,000명</td>
                      <td className="border p-3 text-right">500,000명</td>
                      <td className="border p-3 text-right">앱 가입자</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3">해양 생물 다양성</td>
                      <td className="border p-3 text-right">기준점</td>
                      <td className="border p-3 text-right">+15%</td>
                      <td className="border p-3 text-right">+40%</td>
                      <td className="border p-3 text-right">생태 조사</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 장기 비전 */}
            <section className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">5. 2030 장기 비전</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">정량적 목표</h3>
                  <ul className="space-y-2 opacity-90">
                    <li>✓ 누적 50,000톤 해양쓰레기 수거</li>
                    <li>✓ CO₂ 15,000톤 절감</li>
                    <li>✓ 200만 시민 참여</li>
                    <li>✓ 해양 플라스틱 80% 감소</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">정성적 목표</h3>
                  <ul className="space-y-2 opacity-90">
                    <li>✓ 글로벌 표준 모델 확립</li>
                    <li>✓ 순환 경제 생태계 완성</li>
                    <li>✓ 환경 의식 문화 정착</li>
                    <li>✓ 청정 해양 도시 실현</li>
                  </ul>
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
            className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white text-center mt-12"
          >
            <h3 className="text-2xl font-bold mb-4">전체 환경 영향 분석 보고서</h3>
            <p className="mb-6 opacity-90">더 자세한 데이터와 분석 방법론을 PDF로 확인하세요</p>
            <button
              onClick={handleDownloadPDF}
              className="px-8 py-3 bg-white text-green-600 rounded-xl font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2">
              <Download className="w-5 h-5" />
              환경 영향 분석 보고서 다운로드
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}