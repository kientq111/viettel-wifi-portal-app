"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, CreditCard, Smartphone, CheckCircle } from "lucide-react"

interface PurchaseFlowProps {
  package: any
  onNext: (step: string) => void
  onBack: () => void
}

export function PurchaseFlow({ package: pkg, onNext, onBack }: PurchaseFlowProps) {
  const [step, setStep] = useState<"info" | "payment" | "processing">("info")
  const [customerInfo, setCustomerInfo] = useState({
    phone: "",
    email: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("momo")
  const [isProcessing, setIsProcessing] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ"
  }

  const handleInfoSubmit = () => {
    setStep("payment")
  }

  const handlePayment = async () => {
    setStep("processing")
    setIsProcessing(true)
    // Simulate payment
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsProcessing(false)
    onNext("connected")
  }

  const isInfoValid = customerInfo.phone.length >= 10 && customerInfo.email.includes("@")

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="px-4 py-4">
          <div className="flex items-center space-x-3">
            {step === "info" && (
              <Button variant="ghost" size="icon" onClick={onBack}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
            )}
            {step === "payment" && (
              <Button variant="ghost" size="icon" onClick={() => setStep("info")}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
            )}
            <div>
              <h1 className="text-lg font-bold text-gray-900">
                {step === "info" && "Thông tin"}
                {step === "payment" && "Thanh toán"}
                {step === "processing" && "Đang xử lý"}
              </h1>
              <p className="text-xs text-gray-500">
                {pkg.name} - {formatPrice(pkg.price)}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6">
        <div className="max-w-md mx-auto">
          {/* Customer Info Step */}
          {step === "info" && (
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Thông tin liên hệ</CardTitle>
                <p className="text-sm text-gray-600 text-center">Thông tin kích hoạt sẽ được gửi qua SMS</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="phone">Số điện thoại *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    placeholder="0xxx xxx xxx"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    placeholder="email@example.com"
                    className="mt-1"
                  />
                </div>

                <Button
                  onClick={handleInfoSubmit}
                  disabled={!isInfoValid}
                  className="w-full bg-[#EE0034] hover:bg-[#CC002E] font-semibold py-3"
                >
                  Tiếp tục
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Payment Step */}
          {step === "payment" && (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Phương thức thanh toán</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-3 p-3 border rounded-lg">
                      <RadioGroupItem value="momo" id="momo" />
                      <div className="flex items-center space-x-2 flex-1">
                        <Smartphone className="w-5 h-5 text-pink-600" />
                        <Label htmlFor="momo" className="flex-1 cursor-pointer font-medium">
                          MoMo
                        </Label>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <div className="flex items-center space-x-2 flex-1">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer font-medium">
                          Thẻ tín dụng
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span>Gói:</span>
                    <span className="font-medium">{pkg.name}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Thời gian:</span>
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span>Dung lượng:</span>
                    <span>{pkg.data}</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Tổng:</span>
                    <span className="text-[#EE0034]">{formatPrice(pkg.price)}</span>
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={handlePayment}
                className="w-full bg-[#EE0034] hover:bg-[#CC002E] font-semibold py-4 text-lg"
              >
                Thanh toán ngay
              </Button>
            </div>
          )}

          {/* Processing Step */}
          {step === "processing" && (
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Đang xử lý thanh toán</h3>
                <p className="text-gray-600 mb-4">Vui lòng chờ trong giây lát...</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#EE0034] h-2 rounded-full animate-pulse" style={{ width: "70%" }}></div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
