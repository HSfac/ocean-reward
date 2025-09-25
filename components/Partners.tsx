"use client"

import { motion } from "framer-motion"
import { Handshake, Building2, Globe2, Award } from "lucide-react"

export default function Partners() {
  const partners = [
    { name: "부산시", category: "정부", logo: "🏛️" },
    { name: "해양수산부", category: "정부", logo: "🌊" },
    { name: "클레이튼", category: "블록체인", logo: "⛓️" },
    { name: "카카오", category: "기술", logo: "💬" },
    { name: "삼성SDS", category: "기업", logo: "💻" },
    { name: "BNK금융", category: "금융", logo: "🏦" },
    { name: "신세계", category: "유통", logo: "🛍️" },
    { name: "동백전", category: "결제", logo: "💳" }
  ]

  const benefits = [
    {
      icon: Building2,
      title: "기업 ESG 파트너",
      description: "연간 300-450억원 후원 목표",
      benefits: ["맞춤형 ESG 리포트", "탄소 크레딧 발행", "브랜드 노출"]
    },
    {
      icon: Globe2,
      title: "정부 기관",
      description: "스마트 오션 빌리지 통합",
      benefits: ["실시간 데이터 제공", "정책 효과 측정", "시민 참여 증대"]
    },
    {
      icon: Handshake,
      title: "지역 상점",
      description: "동백전 가맹점 네트워크",
      benefits: ["신규 고객 유치", "친환경 이미지", "매출 증대"]
    }
  ]

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            함께하는 <span className="text-gradient">파트너</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            정부, 기업, 시민이 함께 만드는 해양 생태계 보호
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 mb-12"
        >
          <h3 className="text-xl font-bold text-center mb-8 text-gray-700">주요 파트너사</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md"
              >
                <div className="text-4xl mb-3">{partner.logo}</div>
                <h4 className="font-bold text-gray-800">{partner.name}</h4>
                <p className="text-sm text-gray-500">{partner.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <div className="w-12 h-12 gradient-eco rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <ul className="space-y-2">
                {benefit.benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center"
        >
          <Award className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">파트너가 되어주세요</h3>
          <p className="mb-6 opacity-90">
            함께 부산의 바다를 지키고, 지속가능한 미래를 만들어갑니다
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold"
          >
            파트너십 문의
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}