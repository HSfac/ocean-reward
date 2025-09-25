"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 mb-8 text-blue-600 hover:text-blue-700 transition">
            <ArrowLeft className="w-5 h-5" />
            <span>메인으로 돌아가기</span>
          </Link>

          <h1 className="text-4xl font-bold mb-8 text-gray-900">이용약관</h1>

          <div className="bg-white rounded-3xl shadow-xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">제1조 (목적)</h2>
              <p className="text-gray-600 leading-relaxed">
                본 약관은 블루체인 부산(이하 "서비스")이 제공하는 해양 환경 보호 플랫폼 및 블록체인 기반 리워드 시스템의 이용에 관한 조건 및 절차,
                기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">제2조 (정의)</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <strong>"서비스"</strong>란 블루체인 부산이 제공하는 해양쓰레기 수거 활동 기록 및 보상 시스템을 의미합니다.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <strong>"회원"</strong>이란 본 약관에 따라 서비스 이용 계약을 체결하고 서비스를 이용하는 자를 의미합니다.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <strong>"CLEAN 토큰"</strong>이란 해양쓰레기 수거 활동에 대한 보상으로 지급되는 블록체인 기반 디지털 자산을 의미합니다.
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">제3조 (서비스 이용)</h2>
              <div className="space-y-3 text-gray-600">
                <p className="leading-relaxed">
                  1. 회원은 블루체인 부산 앱을 통해 해양쓰레기 수거 활동을 기록하고 인증할 수 있습니다.
                </p>
                <p className="leading-relaxed">
                  2. 인증된 활동에 대해 CLEAN 토큰이 지급되며, 토큰은 제휴 가맹점에서 사용하거나 동백전으로 교환할 수 있습니다.
                </p>
                <p className="leading-relaxed">
                  3. 서비스 이용 시 위치정보 제공에 동의해야 하며, 이는 활동 인증 및 부정행위 방지를 위해 사용됩니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">제4조 (회원의 의무)</h2>
              <div className="space-y-3 text-gray-600">
                <p className="leading-relaxed">
                  1. 회원은 실제 해양쓰레기 수거 활동을 진실하게 기록하고 인증해야 합니다.
                </p>
                <p className="leading-relaxed">
                  2. 허위 인증, GPS 조작 등 부정행위 시 토큰 회수 및 서비스 이용 제한 조치가 취해질 수 있습니다.
                </p>
                <p className="leading-relaxed">
                  3. 회원은 타인의 개인정보를 도용하거나 부정한 방법으로 토큰을 취득해서는 안 됩니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">제5조 (토큰 정책)</h2>
              <div className="space-y-3 text-gray-600">
                <p className="leading-relaxed">
                  1. CLEAN 토큰의 발행량과 보상 비율은 서비스 정책에 따라 변경될 수 있습니다.
                </p>
                <p className="leading-relaxed">
                  2. 토큰은 부산시 규제자유특구 내에서만 사용 가능하며, 현금 환전은 제한됩니다.
                </p>
                <p className="leading-relaxed">
                  3. 부정행위로 취득한 토큰은 사전 통보 없이 회수될 수 있습니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">제6조 (개인정보보호)</h2>
              <p className="text-gray-600 leading-relaxed">
                서비스는 관련 법령에 따라 회원의 개인정보를 보호하며, 구체적인 내용은 별도의 개인정보처리방침에 따릅니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">제7조 (면책조항)</h2>
              <p className="text-gray-600 leading-relaxed">
                서비스는 천재지변, 시스템 장애 등 불가항력적인 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다.
              </p>
            </section>

            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-500">
                <strong>시행일:</strong> 2025년 1월 1일<br />
                <strong>최종 수정일:</strong> 2024년 12월 25일<br />
                본 약관은 부산광역시 블록체인 규제자유특구 관련 법령에 따라 작성되었습니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}