"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 mb-8 text-green-600 hover:text-green-700 transition">
            <ArrowLeft className="w-5 h-5" />
            <span>메인으로 돌아가기</span>
          </Link>

          <h1 className="text-4xl font-bold mb-8 text-gray-900">개인정보처리방침</h1>

          <div className="bg-white rounded-3xl shadow-xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">1. 개인정보의 수집 및 이용 목적</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                블루체인 부산은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
                이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <ul className="space-y-2 text-gray-600 ml-4">
                <li>• 회원 가입 및 관리</li>
                <li>• 해양쓰레기 수거 활동 인증 및 기록</li>
                <li>• CLEAN 토큰 지급 및 관리</li>
                <li>• 서비스 개선 및 통계 분석</li>
                <li>• 부정행위 방지 및 제재</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">2. 수집하는 개인정보 항목</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">필수 수집 항목</h3>
                  <ul className="space-y-1 text-gray-600 ml-4">
                    <li>• 성명, 생년월일, 연락처, 이메일</li>
                    <li>• 위치정보 (활동 인증 시)</li>
                    <li>• 활동 사진 및 영상</li>
                    <li>• 블록체인 지갑 주소</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">선택 수집 항목</h3>
                  <ul className="space-y-1 text-gray-600 ml-4">
                    <li>• 프로필 사진</li>
                    <li>• SNS 계정 정보</li>
                    <li>• 관심 지역 설정</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">3. 개인정보의 보유 및 이용 기간</h2>
              <div className="space-y-3 text-gray-600">
                <p className="leading-relaxed">
                  회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보 수집 시 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• 회원 정보: 회원 탈퇴 시까지</li>
                  <li>• 활동 기록: 3년 (환경부 지침에 따름)</li>
                  <li>• 토큰 거래 기록: 5년 (전자상거래법에 따름)</li>
                  <li>• 위치정보: 활동 인증 후 즉시 삭제</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">4. 개인정보의 제3자 제공</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                블루체인 부산은 원칙적으로 정보주체의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:
              </p>
              <ul className="space-y-2 text-gray-600 ml-4">
                <li>• 정보주체의 사전 동의를 받은 경우</li>
                <li>• 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                <li>• 부산광역시 블록체인 규제자유특구 관리를 위한 최소한의 정보 제공</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">5. 정보주체의 권리·의무 및 행사방법</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                정보주체는 블루체인 부산에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:
              </p>
              <ul className="space-y-2 text-gray-600 ml-4">
                <li>• 개인정보 열람 요구</li>
                <li>• 오류 등이 있을 경우 정정 요구</li>
                <li>• 삭제 요구</li>
                <li>• 처리 정지 요구</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">6. 개인정보의 안전성 확보 조치</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• 개인정보 암호화: 비밀번호, 결제정보 등은 암호화하여 저장·관리</li>
                <li>• 해킹 등에 대비한 기술적 대책: 보안프로그램 설치 및 주기적 갱신·점검</li>
                <li>• 개인정보 접근 제한: 권한 부여, 변경, 말소를 통한 접근통제</li>
                <li>• 블록체인 기술을 통한 데이터 무결성 보장</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">7. 개인정보 보호책임자</h2>
              <div className="bg-gray-50 rounded-xl p-4 text-gray-600">
                <p className="mb-2"><strong>개인정보 보호책임자:</strong> 신희성</p>
                <p className="mb-2"><strong>연락처:</strong> 010-2075-5278</p>
                <p><strong>이메일:</strong> huiseong5278@gmail.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">8. 쿠키(Cookie)의 운영</h2>
              <p className="text-gray-600 leading-relaxed">
                서비스는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 쿠키를 사용합니다.
                이용자는 웹브라우저 설정을 통해 쿠키 사용을 거부할 수 있으나, 이 경우 서비스 이용에 제한이 있을 수 있습니다.
              </p>
            </section>

            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-500">
                <strong>시행일:</strong> 2025년 10월 1일<br />
                <strong>최종 수정일:</strong> 2025년 9월 25일<br />
                본 개인정보처리방침은 개인정보보호법 및 정보통신망법에 따라 작성되었습니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}