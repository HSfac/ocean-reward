"use client"

import { motion } from "framer-motion"
import { Rocket, Code, Globe, Trophy } from "lucide-react"

export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "MVP 개발 완료",
      period: "2025년 1-6월",
      budget: "3-5억원",
      icon: Code,
      items: [
        "핵심 스마트 컨트랙트 개발",
        "기본 모바일 앱 출시",
        "IPFS 통합 검증 시스템",
        "해운대 파일럿 테스트"
      ]
    },
    {
      phase: "Phase 2",
      title: "프로덕션 런칭",
      period: "2025년 7-10월",
      budget: "4-7억원",
      icon: Rocket,
      items: [
        "AI 검증 시스템 고도화",
        "IoT 센서 통합",
        "KYC/AML 규제 준수",
        "동백전 연동 완료"
      ]
    },
    {
      phase: "Phase 3",
      title: "확장 & 성장",
      period: "2025년 11월-2026년 6월",
      budget: "5-8억원",
      icon: Globe,
      items: [
        "멀티체인 배포",
        "NFT 마켓플레이스",
        "기업 ESG 파트너십",
        "전국 확대"
      ]
    },
    {
      phase: "Phase 4",
      title: "글로벌 진출",
      period: "2026년 7월+",
      budget: "10억원+",
      icon: Trophy,
      items: [
        "아시아 주요 도시 진출",
        "UN 해양 컨퍼런스 협력",
        "탄소 크레딧 거래소",
        "DAO 거버넌스 전환"
      ]
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            구현 <span className="text-gradient">로드맵</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            24개월 내 손익분기점, 36개월 내 15만 사용자 달성
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-green-400"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className={`bg-white rounded-2xl p-8 shadow-lg card-hover ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}>
                    <div className={`flex items-center gap-3 mb-4 ${
                      index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                    }`}>
                      <span className="text-sm font-semibold text-gray-500">{phase.phase}</span>
                      <h3 className="text-2xl font-bold">{phase.title}</h3>
                    </div>
                    <div className={`flex items-center gap-3 mb-4 text-gray-600 ${
                      index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                    }`}>
                      <span>{phase.period}</span>
                      <span>•</span>
                      <span className="font-semibold">{phase.budget}</span>
                    </div>
                    <ul className={`space-y-2 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}>
                      {phase.items.map((item, i) => (
                        <li key={i} className="text-gray-700">
                          {index % 2 === 0 && <span className="text-blue-500 mr-2">✓</span>}
                          {item}
                          {index % 2 !== 0 && <span className="text-blue-500 ml-2">✓</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <h4 className="text-3xl font-bold text-blue-600 mb-2">50-70억원</h4>
            <p className="text-gray-600">총 투자 규모</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <h4 className="text-3xl font-bold text-green-600 mb-2">18-24개월</h4>
            <p className="text-gray-600">손익분기점</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <h4 className="text-3xl font-bold text-purple-600 mb-2">300-500%</h4>
            <p className="text-gray-600">5년 예상 ROI</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}