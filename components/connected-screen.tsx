"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Wifi, Clock, Database, RefreshCw } from "lucide-react"

export function ConnectedScreen() {
  const [timeRemaining, setTimeRemaining] = useState("5:47:23")
  const [dataUsed, setDataUsed] = useState("0.2 GB")
  const [dataRemaining, setDataRemaining] = useState("2.8 GB")

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      // Update time and data usage simulation
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#EE0034] text-white">
        <div className="px-4 py-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-xl font-bold mb-1">Kết nối thành công!</h1>
          <p className="text-red-100 text-sm">Bạn đã được kết nối với Viettel WiFi</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 bg-gray-50">
        <div className="max-w-md mx-auto space-y-4">
          {/* Connection Status */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-gray-900">Đang kết nối</span>
                <Wifi className="w-4 h-4 text-green-500 ml-auto" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-[#EE0034] mx-auto mb-1" />
                  <p className="text-sm font-medium text-gray-900">{timeRemaining}</p>
                  <p className="text-xs text-gray-600">Thời gian còn lại</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Database className="w-5 h-5 text-[#EE0034] mx-auto mb-1" />
                  <p className="text-sm font-medium text-gray-900">{dataRemaining}</p>
                  <p className="text-xs text-gray-600">Data còn lại</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Details */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Chi tiết sử dụng</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Gói hiện tại:</span>
                  <span className="font-medium">Tiêu chuẩn (6 giờ)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Data đã dùng:</span>
                  <span className="font-medium">{dataUsed} / 3 GB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Tốc độ:</span>
                  <span className="font-medium">4G LTE</span>
                </div>

                {/* Data Usage Bar */}
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Sử dụng data</span>
                    <span>7%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#EE0034] h-2 rounded-full" style={{ width: "7%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="flex items-center justify-center space-x-2 bg-transparent">
              <RefreshCw className="w-4 h-4" />
              <span>Làm mới</span>
            </Button>
            <Button variant="outline" className="flex items-center justify-center space-x-2 bg-transparent">
              <Database className="w-4 h-4" />
              <span>Mua thêm</span>
            </Button>
          </div>

          {/* Tips */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <h4 className="font-semibold text-blue-900 mb-2">💡 Mẹo sử dụng</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Tắt tự động cập nhật ứng dụng để tiết kiệm data</li>
                <li>• Sử dụng WiFi cho video call chất lượng tốt nhất</li>
                <li>• Kiểm tra thời gian còn lại thường xuyên</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t px-4 py-3">
        <p className="text-xs text-gray-500 text-center">
          Cần hỗ trợ? Gọi <span className="text-[#EE0034] font-medium">18008098</span>
        </p>
      </footer>
    </div>
  )
}
