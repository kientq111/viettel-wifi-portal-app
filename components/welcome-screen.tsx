"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Clock, Zap, Users } from "lucide-react";

interface WelcomeScreenProps {
  onNext: (step: string, data?: any) => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="px-4 py-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-10 h-10 bg-[#EE0034] rounded-lg flex items-center justify-center">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Viettel WiFi</h1>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-1 text-xs text-gray-600">
            <Clock className="w-3 h-3" />
            <span>Kết nối nhanh chóng • Bảo mật cao</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6">
        <div className="max-w-md mx-auto space-y-6">
          {/* Welcome Message */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Chào mừng đến với Viettel WiFi
            </h2>
            <p className="text-gray-600 text-sm">
              Truy cập internet tốc độ cao
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-white rounded-lg border">
              <Zap className="w-6 h-6 text-[#EE0034] mx-auto mb-1" />
              <p className="text-xs font-medium text-gray-900">Tốc độ cao</p>
              <p className="text-xs text-gray-600">4G/LTE</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg border">
              <Clock className="w-6 h-6 text-[#EE0034] mx-auto mb-1" />
              <p className="text-xs font-medium text-gray-900">Kích hoạt</p>
              <p className="text-xs text-gray-600">Tức thì</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg border">
              <Users className="w-6 h-6 text-[#EE0034] mx-auto mb-1" />
              <p className="text-xs font-medium text-gray-900">Hỗ trợ</p>
              <p className="text-xs text-gray-600">24/7</p>
            </div>
          </div>

          {/* User Type Selection */}
          <div className="space-y-3">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center space-y-3">
                <Button
                  className="w-full bg-[#EE0034] hover:bg-[#CC002E] text-white font-semibold py-4 text-lg"
                  onClick={() => onNext("packages", { userType: "new" })}
                >
                  Khách hàng mới
                  <span className="block text-sm font-normal opacity-90">
                    Mua gói WiFi ngay
                  </span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-[#EE0034] text-[#EE0034] hover:bg-red-50 font-semibold py-4 text-lg bg-transparent"
                  onClick={() => onNext("login", { userType: "existing" })}
                >
                  Đã có tài khoản
                  <span className="block text-sm font-normal opacity-75">
                    Đăng nhập để tiếp tục
                  </span>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-800 text-center">
              💡 <strong>Mẹo:</strong> Chọn "Khách hàng mới" để xem các gói WiFi
              có sẵn và mua ngay
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t px-4 py-3">
        <p className="text-xs text-gray-500 text-center">
          Cần hỗ trợ? Gọi{" "}
          <span className="text-[#EE0034] font-medium">18008098</span> hoặc nhắn
          tin cho nhân viên
        </p>
      </footer>
    </div>
  );
}
