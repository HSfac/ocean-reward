"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      category: "서비스 이용",
      questions: [
        {
          q: "블루체인 부산은 어떤 서비스인가요?",
          a: "블루체인 부산은 부산시 블록체인 규제자유특구에서 운영되는 해양 환경 보호 플랫폼입니다. 해양쓰레기를 수거하면 블록체인 기반 CLEAN 토큰을 보상으로 받을 수 있으며, 이를 제휴 가맹점에서 사용하거나 동백전으로 교환할 수 있습니다."
        },
        {
          q: "앱은 어디에서 다운로드할 수 있나요?",
          a: "블루체인 부산 앱이 2025년 10월 정식 출시되었습니다. Google Play Store와 Apple App Store에서 무료로 다운로드할 수 있습니다."
        },
        {
          q: "회원가입에 제한이 있나요?",
          a: "만 14세 이상 누구나 가입 가능합니다. 다만, 토큰 보상을 받기 위해서는 실명 인증이 필요하며, 부산시 거주자 또는 부산 방문자만 활동 인증이 가능합니다."
        }
      ]
    },
    {
      category: "토큰 및 보상",
      questions: [
        {
          q: "CLEAN 토큰은 어떻게 받나요?",
          a: "해양쓰레기 수거 활동을 앱으로 인증하면 자동으로 토큰이 지급됩니다. 수거량 1kg당 100 CLEAN 토큰을 받을 수 있으며, 일일 최대 500토큰까지 획득 가능합니다."
        },
        {
          q: "토큰은 어디에서 사용할 수 있나요?",
          a: "부산시 내 제휴 카페, 음식점, 편의점 등에서 사용 가능하며, 동백전으로 1:1 비율로 교환할 수도 있습니다. 제휴처는 앱 내에서 확인할 수 있습니다."
        },
        {
          q: "토큰을 현금으로 바꿀 수 있나요?",
          a: "규제자유특구 정책에 따라 직접적인 현금 환전은 제한됩니다. 하지만 동백전으로 교환 후 동백전 사용처에서 현금처럼 사용 가능합니다."
        },
        {
          q: "토큰에 유효기간이 있나요?",
          a: "CLEAN 토큰은 획득일로부터 2년간 유효합니다. 만료 3개월 전 앱 푸시 알림으로 안내해드립니다."
        }
      ]
    },
    {
      category: "활동 인증",
      questions: [
        {
          q: "활동 인증은 어떻게 하나요?",
          a: "1) 수거 전 사진 촬영 2) GPS 위치 확인 3) 수거 활동 진행 4) 수거 후 사진 촬영 5) 수거량 입력 순서로 진행됩니다. AI가 사진을 분석해 자동으로 인증 처리됩니다."
        },
        {
          q: "어떤 쓰레기를 수거해야 하나요?",
          a: "플라스틱, 유리병, 캔, 비닐, 스티로폼, 폐그물 등 모든 해양쓰레기가 대상입니다. 단, 위험물질이나 대형 폐기물은 관할 기관에 신고 후 처리하세요."
        },
        {
          q: "인증이 거부되었어요. 왜 그런가요?",
          a: "GPS 조작, 동일 사진 반복 사용, 허위 수거량 입력 등이 감지되면 인증이 거부됩니다. 정당한 활동임에도 거부된 경우 고객센터로 문의해주세요."
        }
      ]
    },
    {
      category: "기술 및 보안",
      questions: [
        {
          q: "블록체인을 사용하는 이유는 무엇인가요?",
          a: "블록체인 기술로 모든 활동 기록과 토큰 거래를 투명하고 안전하게 관리합니다. 위변조가 불가능하며, 누구나 활동 내역을 검증할 수 있어 신뢰성을 보장합니다."
        },
        {
          q: "개인정보는 안전한가요?",
          a: "모든 개인정보는 암호화되어 저장되며, 블록체인에는 익명화된 활동 데이터만 기록됩니다. 개인정보보호법에 따라 엄격히 관리되고 있습니다."
        },
        {
          q: "지갑 주소를 잃어버렸어요.",
          a: "앱 내 '설정 > 지갑 관리'에서 복구 문구를 통해 지갑을 복원할 수 있습니다. 복구 문구는 최초 가입 시 제공되므로 안전한 곳에 보관해주세요."
        }
      ]
    },
    {
      category: "파트너십",
      questions: [
        {
          q: "제휴 가맹점이 되려면 어떻게 해야 하나요?",
          a: "블루체인 부산 홈페이지에서 가맹점 신청을 하거나, 파트너십 담당자(huiseong5278@gmail.com)에게 문의해주세요. 심사 후 승인되면 QR 결제 시스템을 무료로 제공합니다."
        },
        {
          q: "기업 후원은 어떻게 참여하나요?",
          a: "ESG 경영 파트너십 프로그램을 통해 참여 가능합니다. 후원 기업은 탄소배출권 확보, 브랜드 홍보 등의 혜택을 받을 수 있습니다."
        },
        {
          q: "정부 지원은 어떻게 받고 있나요?",
          a: "부산시 블록체인 규제자유특구 사업으로 선정되어 기술개발 및 운영 지원을 받고 있으며, 환경부 해양쓰레기 관리 시범사업에도 참여하고 있습니다."
        }
      ]
    }
  ]

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 10 + questionIndex
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 mb-8 text-purple-600 hover:text-purple-700 transition">
            <ArrowLeft className="w-5 h-5" />
            <span>메인으로 돌아가기</span>
          </Link>

          <h1 className="text-4xl font-bold mb-2 text-gray-900">자주 묻는 질문</h1>
          <p className="text-gray-600 mb-8">블루체인 부산 서비스에 대해 궁금한 점을 확인해보세요</p>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4">
                  <h2 className="text-xl font-bold text-white">{category.category}</h2>
                </div>

                <div className="p-6 space-y-4">
                  {category.questions.map((item, questionIndex) => (
                    <div key={questionIndex} className="border-b last:border-b-0 pb-4 last:pb-0">
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full text-left flex items-start justify-between gap-4 hover:text-blue-600 transition"
                      >
                        <span className="font-semibold text-gray-800">{item.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 mt-1 flex-shrink-0 transition-transform ${
                            openIndex === categoryIndex * 10 + questionIndex ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: openIndex === categoryIndex * 10 + questionIndex ? 'auto' : 0,
                          opacity: openIndex === categoryIndex * 10 + questionIndex ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-gray-600 leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">더 궁금한 점이 있으신가요?</h3>
            <p className="mb-6">고객센터에서 친절하게 답변해드립니다</p>
            <div className="space-y-2">
              <p className="flex items-center justify-center gap-2">
                📧 이메일: huiseong5278@gmail.com
              </p>
              <p className="flex items-center justify-center gap-2">
                📞 전화: 010-2075-5278
              </p>
              <p className="text-sm opacity-90 mt-4">
                운영시간: 평일 09:00 - 18:00
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}