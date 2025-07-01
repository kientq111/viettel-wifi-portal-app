"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Database, Zap, Star, AlertCircle } from "lucide-react"

interface Package {
  id: number
  name: string
  duration: string
  data: string
  speed: string
  price: number
  popular: boolean
  bestFor: string
  color: string
  urgent: boolean
}

interface PackageCardProps {
  package: Package
  isSelected: boolean
  onSelect: () => void
}

export function PackageCard({ package: pkg, isSelected, onSelect }: PackageCardProps) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-50",
    green: "border-green-500 bg-green-50",
    purple: "border-purple-500 bg-purple-50",
    red: "border-[#EE0034] bg-red-50",
  }

  const iconColors = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600",
    red: "text-[#EE0034]",
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ"
  }

  return (
    <Card
      className={`cursor-pointer transition-all duration-200 ${
        isSelected ? `ring-2 ${colorClasses[pkg.color as keyof typeof colorClasses]}` : "hover:shadow-md"
      } ${pkg.urgent ? "border-red-200" : ""}`}
      onClick={onSelect}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h4 className="font-bold text-gray-900">{pkg.name}</h4>
              {pkg.popular && (
                <Badge className="bg-green-100 text-green-800 text-xs">
                  <Star className="w-3 h-3 mr-1" />
                  Phổ Biến
                </Badge>
              )}
              {pkg.urgent && (
                <Badge variant="destructive" className="text-xs bg-[#EE0034] hover:bg-[#CC002E]">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Khẩn Cấp
                </Badge>
              )}
            </div>
            <p className="text-xs text-gray-600 mb-2">{pkg.bestFor}</p>
          </div>

          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">{formatPrice(pkg.price)}</p>
            <p className="text-xs text-gray-500">một lần</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <Clock className={`w-4 h-4 mx-auto mb-1 ${iconColors[pkg.color as keyof typeof iconColors]}`} />
            <p className="text-xs font-medium text-gray-900">{pkg.duration}</p>
            <p className="text-xs text-gray-600">Thời Gian</p>
          </div>

          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <Database className={`w-4 h-4 mx-auto mb-1 ${iconColors[pkg.color as keyof typeof iconColors]}`} />
            <p className="text-xs font-medium text-gray-900">{pkg.data}</p>
            <p className="text-xs text-gray-600">Dung Lượng</p>
          </div>

          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <Zap className={`w-4 h-4 mx-auto mb-1 ${iconColors[pkg.color as keyof typeof iconColors]}`} />
            <p className="text-xs font-medium text-gray-900">{pkg.speed}</p>
            <p className="text-xs text-gray-600">Tốc Độ</p>
          </div>
        </div>

        {isSelected && (
          <div className="mt-3 p-2 bg-green-50 rounded-lg border border-green-200">
            <p className="text-xs text-green-800 text-center font-medium">✓ Đã chọn - Sẵn sàng mua</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
