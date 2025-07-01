"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Smartphone, Lock, Eye, EyeOff } from "lucide-react"

interface LoginFormProps {
  onNext: (step: string) => void
  onBack: () => void
}

export function LoginForm({ onNext, onBack }: LoginFormProps) {
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    onNext("connected")
  }

  const isFormValid = phone.length >= 10 && password.length >= 6

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="px-4 py-4">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Đăng nhập</h1>
              <p className="text-xs text-gray-500">Viettel WiFi</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-[#EE0034] rounded-full flex items-center justify-center mx-auto mb-3">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">Chào mừng trở lại!</CardTitle>
              <p className="text-sm text-gray-600">Đăng nhập để tiếp tục sử dụng WiFi</p>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Số điện thoại
                  </Label>
                  <div className="relative mt-1">
                    <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0xxx xxx xxx"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-sm font-medium">
                    Mật khẩu
                  </Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Nhập mật khẩu"
                      className="pl-10 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleLogin}
                disabled={!isFormValid || isLoading}
                className="w-full bg-[#EE0034] hover:bg-[#CC002E] font-semibold py-3"
              >
                {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
              </Button>

              <div className="text-center">
                <Button variant="link" className="text-[#EE0034] text-sm">
                  Quên mật khẩu?
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Registration */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-3">Chưa có tài khoản?</p>
            <Button
              variant="outline"
              onClick={() => onNext("packages")}
              className="border-[#EE0034] text-[#EE0034] hover:bg-red-50"
            >
              Tạo tài khoản mới
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
