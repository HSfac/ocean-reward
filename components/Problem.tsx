"use client"

import { motion } from "framer-motion"
import { AlertCircle, TrendingUp, Users, Fish } from "lucide-react"

export default function Problem() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            부산이 직면한 <span className="text-gradient">해양쓰레기 위기</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            연간 <span className="font-bold text-red-600">60억원</span>의 처리 비용, <span className="font-bold text-red-600">281조원</span> 해양경제 위협
          </p>
          <p className="text-sm text-gray-500 mt-2">
            제10회 Our Ocean Conference 개최를 계기로 해결책 시급
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-3xl p-8 shadow-xl card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <AlertCircle className="w-7 h-7 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">5,000톤</h3>
            <p className="text-gray-600 font-medium">연간 해양쓰레기 수거량</p>
            <p className="text-sm text-gray-500 mt-2">• 65%가 육상 기원</p>
            <p className="text-sm text-gray-500">• 주요 해수욕장 집중</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="group bg-white rounded-3xl p-8 shadow-xl card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">60억원</h3>
            <p className="text-gray-600 font-medium">연간 처리 비용</p>
            <p className="text-sm text-gray-500 mt-2">• 매년 15% 증가</p>
            <p className="text-sm text-gray-500">• 2030년 150억 예상</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="group bg-white rounded-3xl p-8 shadow-xl card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">1,700만명</h3>
            <p className="text-gray-600 font-medium">연간 관광객</p>
            <p className="text-sm text-gray-500 mt-2">• 해운대, 광안리 집중</p>
            <p className="text-sm text-gray-500">• 관광 수익 감소 우려</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="group bg-white rounded-3xl p-8 shadow-xl card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Fish className="w-7 h-7 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">3,469척</h3>
            <p className="text-gray-600 font-medium">어선 피해</p>
            <p className="text-sm text-gray-500 mt-2">• 5,370억원 수출 위협</p>
            <p className="text-sm text-gray-500">• 어망 걸림 사고 빈발</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">지금 행동하지 않으면</h3>
          <p className="text-lg opacity-90">
            2030년까지 해양쓰레기 처리 비용이 <span className="font-bold text-yellow-300">연간 150억원</span>을 초과하고
            <br />
            부산의 <span className="font-bold text-yellow-300">281조 9천억원</span> 해양경제가 심각한 타격을 받을 것입니다
          </p>
        </motion.div>
      </div>
    </section>
  )
}