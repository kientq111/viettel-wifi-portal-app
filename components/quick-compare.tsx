"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpDown, Check } from "lucide-react"

const quickCompareData = [
  {
    package: "Khẩn Cấp",
    duration: "1 Giờ",
    data: "500 MB",
    price: "10.000đ",
    bestFor: "Check-in khẩn cấp",
  },
  {
    package: "Kết Nối Nhanh",
    duration: "2 Giờ",
    data: "1 GB",
    price: "15.000đ",
    bestFor: "Quá cảnh ngắn",
  },
  {
    package: "Ngày Du Lịch",
    duration: "24 Giờ",
    data: "5 GB",
    price: "45.000đ",
    bestFor: "Du lịch cả ngày",
    popular: true,
  },
  {
    package: "Cuối Tuần",
    duration: "3 Ngày",
    data: "10 GB",
    price: "85.000đ",
    bestFor: "Kỳ nghỉ ngắn",
  },
]

export function QuickCompare() {
  const [showComparison, setShowComparison] = useState(false)

  return (
    <section className="px-4 py-6 bg-white">
      <div className="text-center mb-4">
        <Button variant="outline" onClick={() => setShowComparison(!showComparison)} className="w-full">
          <ArrowUpDown className="w-4 h-4 mr-2" />
          {showComparison ? "Ẩn" : "So Sánh Nhanh"} Tất Cả Gói
        </Button>
      </div>

      {showComparison && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-center">So Sánh Gói Cước</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {quickCompareData.map((item, index) => (
                <div
                  key={index}
                  className={`p-3 border-b last:border-b-0 ${item.popular ? "bg-green-50 border-green-200" : ""}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-sm text-gray-900">{item.package}</h4>
                      {item.popular && <Badge className="bg-green-100 text-green-800 text-xs">Giá Trị Tốt Nhất</Badge>}
                    </div>
                    <span className="font-bold text-[#EE0034]">{item.price}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 mb-2">
                    <span>⏱️ {item.duration}</span>
                    <span>📊 {item.data}</span>
                    <span>🎯 {item.bestFor}</span>
                  </div>

                  <div className="flex items-center text-xs text-green-600">
                    <Check className="w-3 h-3 mr-1" />
                    <span>Kích hoạt tức thì • Không hợp đồng • Bảo mật</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  )
}
