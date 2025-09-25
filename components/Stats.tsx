"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Coins, MapPin } from "lucide-react"

export default function Stats() {

  // 실시간 애니메이션 제거 - 예상 데이터는 고정값 사용

  const statItems = [
    {
      icon: TrendingUp,
      value: "50,000+",
      unit: "kg",
      label: "예상 연간 수거량",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      value: "10,000+",
      unit: "명",
      label: "예상 활성 사용자",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Coins,
      value: "25,000,000",
      unit: "CLEAN",
      label: "예상 발행 토큰",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      value: "500+",
      unit: "곳",
      label: "예상 수거 지점",
      color: "from-orange-500 to-red-500"
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
            예상 <span className="text-gradient">성과 지표</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            블루체인 부산 서비스 출시 후 1년간 예상 성과
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statItems.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"
                style={{ background: `linear-gradient(135deg, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[2]})` }}
              />
              <div className={`relative z-10 w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <h3 className="text-3xl font-bold">{stat.value}</h3>
                <span className="text-gray-500 text-sm">{stat.unit}</span>
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="glass-dark backdrop-blur-lg rounded-3xl shadow-2xl p-10 bg-white/90"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">예상 월별 성장 추이</h3>
          <div className="h-64 relative">
            <div className="absolute inset-0 flex items-end justify-between px-4">
              {[65, 72, 78, 85, 92, 98, 105, 112, 118, 125, 132, 140].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(height / 140) * 100}%` }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="w-8 gradient-mesh rounded-t-lg relative group shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    {height}k
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 -mb-6">
              {["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"].map((month, index) => (
                <span key={index} className="text-xs text-gray-500">{month}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
            <h4 className="text-lg font-semibold mb-2">예상 일일 평균</h4>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">137</span>
              <span className="text-white/80">kg 수거</span>
            </div>
            <div className="mt-3 bg-white/20 rounded-full h-2">
              <div className="bg-white rounded-full h-2 w-full"></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
            <h4 className="text-lg font-semibold mb-2">예상 주간 참여율</h4>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">85%</span>
              <span className="text-white/80">활성 유저</span>
            </div>
            <p className="text-sm text-white/80 mt-2">매주 1회 이상 참여</p>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
            <h4 className="text-lg font-semibold mb-2">예상 환경 영향</h4>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">120</span>
              <span className="text-white/80">톤 CO₂</span>
            </div>
            <p className="text-sm text-white/80 mt-2">연간 탄소 절감 예상</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}