"use client"

import { Button } from "@/components/ui/button"
import { Plane, Zap, Shield, Clock } from "lucide-react"

export function QuickStart() {
  const scrollToPackages = () => {
    const packagesSection = document.getElementById("packages")
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="px-4 py-6 bg-gradient-to-br from-[#EE0034] to-[#CC002E] text-white">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-3">
          <Plane className="w-8 h-8 mr-2" />
          <h2 className="text-2xl font-bold">Cần Internet Ngay?</h2>
        </div>
        <p className="text-red-100 text-sm leading-relaxed">
          Kết nối tức thì với gói 3G/4G của chúng tôi.
          <br />
          Hoàn hảo cho chuyến bay, quá cảnh và du lịch.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="text-center">
          <div className="w-10 h-10 bg-red-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
            <Zap className="w-5 h-5" />
          </div>
          <p className="text-xs text-red-100">
            Kích Hoạt
            <br />
            Tức Thì
          </p>
        </div>
        <div className="text-center">
          <div className="w-10 h-10 bg-red-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
            <Shield className="w-5 h-5" />
          </div>
          <p className="text-xs text-red-100">
            Kết Nối
            <br />
            Bảo Mật
          </p>
        </div>
        <div className="text-center">
          <div className="w-10 h-10 bg-red-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
            <Clock className="w-5 h-5" />
          </div>
          <p className="text-xs text-red-100">
            Không Ràng
            <br />
            Buộc Dài Hạn
          </p>
        </div>
      </div>

      <Button
        size="lg"
        className="w-full bg-white text-[#EE0034] hover:bg-red-50 font-semibold py-4 text-lg"
        onClick={scrollToPackages}
      >
        Chọn Gói Ngay
      </Button>
    </section>
  )
}
