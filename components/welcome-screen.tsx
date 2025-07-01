"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wifi,
  Clock,
  Zap,
  Users,
  ArrowRight,
  Phone,
  MessageCircle,
  Shield,
  Star,
} from "lucide-react";

interface WelcomeScreenProps {
  onNext: (step: string, data?: unknown) => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b shadow-sm">
        <div className="px-6 py-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-14 h-14 bg-gradient-to-br from-[#EE0034] to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Wifi className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Viettel WiFi</h1>
              <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                <Clock className="w-3 h-3" />
                <span>Kết nối nhanh chóng • Bảo mật cao</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <div className="max-w-md mx-auto">
          {/* Welcome Message */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Chào mừng đến với
              <span className="block text-[#EE0034]">Viettel WiFi</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Trải nghiệm internet tốc độ cao với công nghệ 4G/LTE tiên tiến
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-bold text-gray-900">Tốc độ cao</p>
              <p className="text-xs text-gray-600 mt-1">4G/LTE</p>
            </div>
            <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-bold text-gray-900">Kích hoạt</p>
              <p className="text-xs text-gray-600 mt-1">Tức thì</p>
            </div>
            <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-bold text-gray-900">Hỗ trợ</p>
              <p className="text-xs text-gray-600 mt-1">24/7</p>
            </div>
          </div>

          {/* User Type Selection */}
          <div className="space-y-4 mb-8">
            <Card className="overflow-hidden shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#EE0034] to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Star className="w-8 h-8 text-white fill-current" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Bắt đầu ngay
                  </h3>
                  <p className="text-sm text-gray-600">
                    Chọn loại tài khoản của bạn
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-gradient-to-r from-[#EE0034] to-red-600 hover:from-[#CC002E] hover:to-red-700 
                               text-white font-bold py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl 
                               transform hover:scale-[1.02] transition-all duration-200 group"
                    onClick={() => onNext("packages", { userType: "new" })}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="text-left">
                        <div className="font-bold">Khách hàng mới</div>
                        <div className="text-sm opacity-90 font-normal">
                          Mua gói WiFi ngay
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#EE0034] text-[#EE0034] hover:bg-red-50 
                               font-bold py-6 text-lg bg-white rounded-2xl shadow-sm hover:shadow-md
                               transform hover:scale-[1.02] transition-all duration-200 group"
                    onClick={() => onNext("login", { userType: "existing" })}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="text-left">
                        <div className="font-bold">Đã có tài khoản</div>
                        <div className="text-sm opacity-75 font-normal">
                          Đăng nhập để tiếp tục
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Info */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 mb-8 shadow-sm">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-900 mb-1">
                  Mẹo hữu ích
                </p>
                <p className="text-sm text-blue-800">
                  Chọn Khách hàng mới để xem các gói WiFi có sẵn và mua ngay lập
                  tức
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="flex items-center space-x-2 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
              <Shield className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Bảo mật</p>
                <p className="text-xs text-gray-600">100% an toàn</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Uy tín</p>
                <p className="text-xs text-gray-600">Hàng triệu người dùng</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm border-t px-6 py-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-3">
            <p className="text-sm font-semibold text-gray-900 mb-2">
              Cần hỗ trợ?
            </p>
            <div className="flex items-center justify-center space-x-4">
              <a
                href="tel:18008098"
                className="flex items-center space-x-2 text-[#EE0034] font-semibold hover:text-red-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>18008098</span>
              </a>
              <div className="w-px h-4 bg-gray-300"></div>
              <button className="flex items-center space-x-2 text-[#EE0034] font-semibold hover:text-red-700 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>Chat ngay</span>
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center">
            Viettel WiFi - Kết nối không giới hạn
          </p>
        </div>
      </footer>
    </div>
  );
}
