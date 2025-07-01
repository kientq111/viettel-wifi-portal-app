"use client"

import { useState } from "react"
import { PackageCard } from "./package-card"
import { PurchaseModal } from "./purchase-modal"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const packages = [
  {
    id: 1,
    name: "Kết Nối Nhanh",
    duration: "2 Giờ",
    data: "1 GB",
    speed: "3G/4G",
    price: 15000,
    popular: false,
    bestFor: "Quá cảnh ngắn",
    color: "blue",
    urgent: false,
  },
  {
    id: 2,
    name: "Ngày Du Lịch",
    duration: "24 Giờ",
    data: "5 GB",
    speed: "4G/LTE",
    price: 45000,
    popular: true,
    bestFor: "Du lịch cả ngày",
    color: "green",
    urgent: false,
  },
  {
    id: 3,
    name: "Cuối Tuần",
    duration: "3 Ngày",
    data: "10 GB",
    speed: "4G/LTE",
    price: 85000,
    popular: false,
    bestFor: "Chuyến đi ngắn",
    color: "purple",
    urgent: false,
  },
  {
    id: 4,
    name: "Khẩn Cấp",
    duration: "1 Giờ",
    data: "500 MB",
    speed: "3G/4G",
    price: 10000,
    popular: false,
    bestFor: "Nhu cầu khẩn cấp",
    color: "red",
    urgent: true,
  },
]

export function PackageSelector() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(2)
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ"
  }

  const handlePurchase = () => {
    if (selectedPackage) {
      setShowPurchaseModal(true)
    }
  }

  const selectedPkg = packages.find((p) => p.id === selectedPackage)

  return (
    <section id="packages" className="px-4 py-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">Chọn Gói Của Bạn</h3>
          <Badge variant="outline" className="text-xs">
            Kích Hoạt Tức Thì
          </Badge>
        </div>
        <p className="text-sm text-gray-600">Chọn gói hoàn hảo cho nhu cầu du lịch của bạn</p>
      </div>

      <div className="space-y-3 mb-6">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            package={pkg}
            isSelected={selectedPackage === pkg.id}
            onSelect={() => setSelectedPackage(pkg.id)}
          />
        ))}
      </div>

      {selectedPackage && (
        <div className="sticky bottom-4 bg-white p-4 rounded-lg shadow-lg border">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="font-semibold text-gray-900">{selectedPkg?.name}</p>
              <p className="text-sm text-gray-600">
                {formatPrice(selectedPkg?.price || 0)} • {selectedPkg?.duration}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-600">{formatPrice(selectedPkg?.price || 0)}</p>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full bg-[#EE0034] hover:bg-[#CC002E] font-semibold py-4"
            onClick={handlePurchase}
          >
            Mua Ngay - Truy Cập Tức Thì
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-xs text-center text-gray-500 mt-2">
            ✓ Thanh toán bảo mật • ✓ Kích hoạt tức thì • ✓ Không phí ẩn
          </p>
        </div>
      )}

      {selectedPkg && (
        <PurchaseModal
          isOpen={showPurchaseModal}
          onClose={() => setShowPurchaseModal(false)}
          selectedPackage={selectedPkg}
        />
      )}
    </section>
  )
}
