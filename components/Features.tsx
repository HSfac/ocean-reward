"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Globe, Award } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "블록체인 투명성",
      description: "모든 수거 기록이 블록체인에 영구 저장되어 조작 불가능",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "즉시 보상",
      description: "수거 즉시 토큰 지급, 동백전으로 실시간 교환 가능",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "ESG 파트너십",
      description: "기업 ESG 후원으로 안정적인 리워드 재원 확보",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "게임화 요소",
      description: "레벨, 배지, 리더보드로 지속적인 참여 동기 부여",
      color: "from-blue-500 to-cyan-500"
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
            왜 <span className="text-gradient">블루체인 부산</span>인가?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            부산 특구의 규제 혜택과 최첨단 기술의 완벽한 결합
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-blue-50 rounded-full px-6 py-3">
            <span className="text-blue-600 font-semibold">부산 블록체인 규제자유특구</span>
            <span className="text-gray-400">|</span>
            <span className="text-blue-600 font-semibold">110.65km² 특별구역</span>
            <span className="text-gray-400">|</span>
            <span className="text-blue-600 font-semibold">ICO 규제 면제</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}