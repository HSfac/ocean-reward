"use client"

import { motion } from "framer-motion"
import { Camera, MapPin, Coins, CheckCircle } from "lucide-react"

export default function Solution() {
  const steps = [
    {
      icon: Camera,
      title: "STEP 1: 수거 & 촬영",
      description: "해양쓰레기를 수거하고 앱으로 사진 촬영",
      details: ["수거 전/후 사진", "GPS 자동 기록", "3초 내 업로드"]
    },
    {
      icon: MapPin,
      title: "STEP 2: AI 검증",
      description: "YOLOv8 AI가 쓰레기 종류와 양을 자동 분석",
      details: ["정확도 98% AI", "지오펜싱 검증", "중복 방지 알고리즘"]
    },
    {
      icon: CheckCircle,
      title: "STEP 3: 블록체인 기록",
      description: "클레이튼 블록체인에 수거 내역 영구 기록",
      details: ["IPFS 사진 저장", "스마트 컨트랙트", "조작 불가 보장"]
    },
    {
      icon: Coins,
      title: "STEP 4: 리워드 지급",
      description: "CLEAN 토큰 즉시 지급, 동백전으로 교환 가능",
      details: ["실시간 지급", "1:1 동백전 교환", "가맹점 사용 가능"]
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            블록체인으로 만드는 <span className="text-gradient">해양보호 혁신</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <span className="font-bold">투명하고 신뢰할 수 있는</span> 리워드 시스템으로 시민 참여 극대화
          </p>
          <p className="text-sm text-gray-500 mt-2">
            한국 최초 해양쓰레기 수거 블록체인 리워드 플랫폼
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 h-full">
                <div className="w-14 h-14 gradient-ocean rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <ul className="space-y-1">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center gap-1">
                      <span className="text-cyan-500">✓</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-3xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">4,000 TPS</h3>
              <p className="opacity-90">클레이튼 처리 속도</p>
              <p className="text-sm opacity-75 mt-1">이더리움 대비 267배 빠름</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">$0.01</h3>
              <p className="opacity-90">거래 수수료</p>
              <p className="text-sm opacity-75 mt-1">약 13원/건</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">5,200만명</h3>
              <p className="opacity-90">카카오톡 연동 사용자</p>
              <p className="text-sm opacity-75 mt-1">카카오페이 직접 연동</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}