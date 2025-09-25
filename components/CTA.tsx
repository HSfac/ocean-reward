"use client"

import { motion } from "framer-motion"
import { FileText, Calendar, ArrowRight, Phone, Mail, User, X, Download } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "신희성",
    email: "huiseong5278@gmail.com",
    phone: "01020755278",
    message: ""
  })
  const [showDocModal, setShowDocModal] = useState(false)
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null)
  const [showWhitepaperModal, setShowWhitepaperModal] = useState(false)

  const handleMeetingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`미팅 신청 완료: ${formData.name} (${formData.email})`)
  }

  return (
    <section className="section-padding gradient-ocean text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            함께 만들어가요
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            부산의 해양 환경 보호와 블록체인 혁신을 위한 새로운 도전
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">상세 자료</h3>
            <p className="mb-6 opacity-90">
              블루체인 부산 프로젝트 상세 문서 및 기획안
            </p>
            <div className="space-y-3">
              <Link
                href="/docs/business-plan"
                className="w-full px-6 py-3 bg-white/10 backdrop-blur border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" />
                사업 계획서 보기
              </Link>
              <Link
                href="/docs/token-economy"
                className="w-full px-6 py-3 bg-white/10 backdrop-blur border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" />
                토큰 이코노미 보기
              </Link>
              <Link
                href="/docs/environmental-impact"
                className="w-full px-6 py-3 bg-white/10 backdrop-blur border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" />
                환경 영향 분석 보고서 보기
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">미팅 신청</h3>
            <p className="mb-6 opacity-90">
              공모전 심사위원님을 위한 프로젝트 상세 설명
            </p>
            <form onSubmit={handleMeetingSubmit} className="space-y-3">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-60" />
                <input
                  type="text"
                  placeholder="이름"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-10 py-3 bg-white/20 backdrop-blur border border-white/30 rounded-xl placeholder-white/60 text-white"
                  required
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-60" />
                <input
                  type="email"
                  placeholder="이메일"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-10 py-3 bg-white/20 backdrop-blur border border-white/30 rounded-xl placeholder-white/60 text-white"
                  required
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-60" />
                <input
                  type="tel"
                  placeholder="연락처"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-10 py-3 bg-white/20 backdrop-blur border border-white/30 rounded-xl placeholder-white/60 text-white"
                  required
                />
              </div>
              <textarea
                placeholder="문의사항 (선택)"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur border border-white/30 rounded-xl placeholder-white/60 text-white resize-none"
                rows={3}
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:shadow-xl transition flex items-center justify-center gap-2"
              >
                미팅 신청하기 <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-6 flex-wrap justify-center">
            <a href="/terms" className="hover:underline">이용약관</a>
            <span className="opacity-50">|</span>
            <a href="/privacy" className="hover:underline">개인정보처리방침</a>
            <span className="opacity-50">|</span>
            <a href="/faq" className="hover:underline">FAQ</a>
            <span className="opacity-50">|</span>
            <Link href="/docs/whitepaper" className="hover:underline">백서 다운로드</Link>
          </div>
          <p className="mt-8 text-sm opacity-70">
            © 2025 블루체인 부산. 부산 블록체인 규제자유특구
          </p>
        </motion.div>
      </div>

      {/* Document Modal */}
      {showDocModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowDocModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {selectedDoc === 'business-plan' && '사업 계획서'}
                  {selectedDoc === 'token-economy' && '토큰 이코노미 설계서'}
                  {selectedDoc === 'environmental-impact' && '환경 영향 분석 보고서'}
                </h3>
                <p className="text-gray-600 mt-1">준비중입니다</p>
              </div>
              <button
                onClick={() => setShowDocModal(false)}
                className="p-2 hover:bg-gray-100 rounded-xl transition"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Download className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-blue-900">
                  {selectedDoc === 'business-plan' && '블루체인 부산 사업 계획서'}
                  {selectedDoc === 'token-economy' && 'CLEAN/OCEAN 토큰 이코노미 설계'}
                  {selectedDoc === 'environmental-impact' && '해양 환경 영향 분석'}
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                현재 자료를 준비중입니다.
                {selectedDoc === 'business-plan' && ' 상세한 사업 계획 및 수익 모델을 포함한 완성도 높은 문서를 준비하고 있습니다.'}
                {selectedDoc === 'token-economy' && ' 이중 토큰 시스템의 상세한 메커니즘과 알고리즘 설계를 문서화하고 있습니다.'}
                {selectedDoc === 'environmental-impact' && ' 해양 생태계에 미치는 긍정적 영향과 측정 지표를 분석 중입니다.'}
              </p>
              <p className="text-sm text-gray-600">
                📅 예상 완료일: 2025년 2월 중
              </p>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-3">
                자세한 내용은 이메일로 문의해주세요:
              </p>
              <a
                href="mailto:huiseong5278@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                📧 huiseong5278@gmail.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Whitepaper Modal */}
      {showWhitepaperModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowWhitepaperModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">백서 다운로드</h3>
                <p className="text-gray-600 mt-1">블루체인 부산 기술 백서</p>
              </div>
              <button
                onClick={() => setShowWhitepaperModal(false)}
                className="p-2 hover:bg-gray-100 rounded-xl transition"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="bg-purple-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Download className="w-6 h-6 text-purple-600" />
                <span className="font-semibold text-purple-900">블루체인 부산 Whitepaper v1.0</span>
              </div>
              <p className="text-gray-700 mb-4">
                블루체인 부산의 블록체인 기술, 토큰 이코노미, 그리고 해양 환경 보호 비전을 담은
                기술 백서를 준비중입니다.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📋 주요 내용:</p>
                <ul className="ml-4 space-y-1">
                  <li>• 이중 토큰 시스템 (CLEAN/OCEAN)</li>
                  <li>• 활동 증명 알고리즘 (PoA)</li>
                  <li>• 부산시 블록체인 특구 연계 전략</li>
                  <li>• 토큰 이코노미 및 거버넌스</li>
                  <li>• 로드맵 및 향후 계획</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                📅 공개 예정일: 2025년 2월 말
              </p>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-3">
                백서 공개 알림을 받고 싶으시면 이메일을 남겨주세요:
              </p>
              <a
                href="mailto:huiseong5278@gmail.com?subject=블루체인 부산 백서 알림 신청"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
              >
                📧 알림 신청하기
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}