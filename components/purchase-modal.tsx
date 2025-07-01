"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  ArrowRight,
  CreditCard,
  Smartphone,
  Building2,
  CheckCircle,
  Clock,
  Database,
  Zap,
  X,
} from "lucide-react"

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

interface PurchaseModalProps {
  isOpen: boolean
  onClose: () => void
  selectedPackage: Package
}

type PurchaseStep = "confirm" | "info" | "payment" | "success"

export function PurchaseModal({ isOpen, onClose, selectedPackage }: PurchaseModalProps) {
  const [currentStep, setCurrentStep] = useState<PurchaseStep>("confirm")
  const [customerInfo, setCustomerInfo] = useState({
    fullName: "",
    phone: "",
    email: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("momo")
  const [isProcessing, setIsProcessing] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ"
  }

  const handleNext = () => {
    if (currentStep === "confirm") {
      setCurrentStep("info")
    } else if (currentStep === "info") {
      setCurrentStep("payment")
    } else if (currentStep === "payment") {
      handlePurchase()
    }
  }

  const handleBack = () => {
    if (currentStep === "info") {
      setCurrentStep("confirm")
    } else if (currentStep === "payment") {
      setCurrentStep("info")
    }
  }

  const handlePurchase = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)
    setCurrentStep("success")
  }

  const handleClose = () => {
    setCurrentStep("confirm")
    setCustomerInfo({ fullName: "", phone: "", email: "" })
    setPaymentMethod("momo")
    setIsProcessing(false)
    onClose()
  }

  const isFormValid = customerInfo.fullName && customerInfo.phone && customerInfo.email

  const getStepTitle = () => {
    switch (currentStep) {
      case "confirm":
        return "Xác Nhận Gói Cước"
      case "info":
        return "Thông Tin Khách Hàng"
      case "payment":
        return "Phương Thức Thanh Toán"
      case "success":
        return "Thanh Toán Thành Công"
      default:
        return ""
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <div className="flex items-center justify-between">
            {currentStep !== "confirm" && currentStep !== "success" && (
              <Button variant="ghost" size="icon" onClick={handleBack} className="absolute left-0">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            <DialogTitle className="text-center flex-1">{getStepTitle()}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={handleClose} className="absolute right-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          {/* Step Indicator */}
          <div className="flex justify-center space-x-2 mb-6">
            {["confirm", "info", "payment", "success"].map((step, index) => (
              <div
                key={step}
                className={`w-2 h-2 rounded-full ${
                  currentStep === step
                    ? "bg-[#EE0034]"
                    : ["confirm", "info", "payment", "success"].indexOf(currentStep) > index
                      ? "bg-green-500"
                      : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Package Confirmation Step */}
          {currentStep === "confirm" && (
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg">{selectedPackage.name}</h3>
                  {selectedPackage.popular && <Badge className="bg-green-100 text-green-800">Phổ Biến</Badge>}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-2 bg-white rounded">
                    <Clock className="w-4 h-4 mx-auto mb-1 text-[#EE0034]" />
                    <p className="text-xs font-medium">{selectedPackage.duration}</p>
                    <p className="text-xs text-gray-600">Thời Gian</p>
                  </div>
                  <div className="text-center p-2 bg-white rounded">
                    <Database className="w-4 h-4 mx-auto mb-1 text-[#EE0034]" />
                    <p className="text-xs font-medium">{selectedPackage.data}</p>
                    <p className="text-xs text-gray-600">Dung Lượng</p>
                  </div>
                  <div className="text-center p-2 bg-white rounded">
                    <Zap className="w-4 h-4 mx-auto mb-1 text-[#EE0034]" />
                    <p className="text-xs font-medium">{selectedPackage.speed}</p>
                    <p className="text-xs text-gray-600">Tốc Độ</p>
                  </div>
                </div>

                <Separator className="my-3" />

                <div className="flex justify-between items-center">
                  <span className="font-semibold">Tổng cộng:</span>
                  <span className="text-2xl font-bold text-[#EE0034]">{formatPrice(selectedPackage.price)}</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  ✓ Kích hoạt tức thì sau khi thanh toán
                  <br />✓ Nhận SMS với thông tin đăng nhập
                  <br />✓ Không phí ẩn, không ràng buộc dài hạn
                </p>
              </div>
            </div>
          )}

          {/* Customer Information Step */}
          {currentStep === "info" && (
            <div className="space-y-4">
              <div className="space-y-3">
                <div>
                  <Label htmlFor="fullName">Họ và tên *</Label>
                  <Input
                    id="fullName"
                    value={customerInfo.fullName}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, fullName: e.target.value })}
                    placeholder="Nhập họ và tên"
                    className="mt-1"
                  />
                </div>

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
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-800">
                  📱 Thông tin đăng nhập sẽ được gửi qua SMS đến số điện thoại của bạn
                </p>
              </div>
            </div>
          )}

          {/* Payment Method Step */}
          {currentStep === "payment" && (
            <div className="space-y-4">
              <div>
                <Label className="text-base font-semibold">Chọn phương thức thanh toán</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-3">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="momo" id="momo" />
                    <div className="flex items-center space-x-2 flex-1">
                      <Smartphone className="w-5 h-5 text-pink-600" />
                      <Label htmlFor="momo" className="flex-1 cursor-pointer">
                        <div>
                          <p className="font-medium">MoMo</p>
                          <p className="text-xs text-gray-600">Ví điện tử MoMo</p>
                        </div>
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="banking" id="banking" />
                    <div className="flex items-center space-x-2 flex-1">
                      <Building2 className="w-5 h-5 text-blue-600" />
                      <Label htmlFor="banking" className="flex-1 cursor-pointer">
                        <div>
                          <p className="font-medium">Internet Banking</p>
                          <p className="text-xs text-gray-600">Chuyển khoản ngân hàng</p>
                        </div>
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="card" id="card" />
                    <div className="flex items-center space-x-2 flex-1">
                      <CreditCard className="w-5 h-5 text-green-600" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div>
                          <p className="font-medium">Thẻ tín dụng/ghi nợ</p>
                          <p className="text-xs text-gray-600">Visa, Mastercard, JCB</p>
                        </div>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                  <span>Gói cước:</span>
                  <span>{selectedPackage.name}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Giá:</span>
                  <span>{formatPrice(selectedPackage.price)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between items-center font-bold">
                  <span>Tổng thanh toán:</span>
                  <span className="text-[#EE0034]">{formatPrice(selectedPackage.price)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Success Step */}
          {currentStep === "success" && (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thanh Toán Thành Công!</h3>
                <p className="text-gray-600">Gói cước của bạn đã được kích hoạt</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-left">
                <h4 className="font-semibold text-green-800 mb-2">Thông tin kích hoạt:</h4>
                <div className="space-y-1 text-sm text-green-700">
                  <p>📱 SMS đã được gửi đến: {customerInfo.phone}</p>
                  <p>📧 Email xác nhận: {customerInfo.email}</p>
                  <p>🔑 Mã kích hoạt: VT{Date.now().toString().slice(-6)}</p>
                  <p>⏰ Có hiệu lực: {selectedPackage.duration}</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  💡 <strong>Hướng dẫn sử dụng:</strong>
                  <br />
                  1. Kết nối WiFi "Viettel_Airport"
                  <br />
                  2. Nhập mã kích hoạt khi được yêu cầu
                  <br />
                  3. Bắt đầu sử dụng internet!
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            {currentStep === "success" ? (
              <Button onClick={handleClose} className="w-full bg-[#EE0034] hover:bg-[#CC002E]">
                Hoàn Tất
              </Button>
            ) : (
              <>
                {currentStep !== "confirm" && (
                  <Button variant="outline" onClick={handleBack} className="flex-1 bg-transparent">
                    Quay Lại
                  </Button>
                )}
                <Button
                  onClick={handleNext}
                  disabled={(currentStep === "info" && !isFormValid) || isProcessing}
                  className="flex-1 bg-[#EE0034] hover:bg-[#CC002E]"
                >
                  {isProcessing ? (
                    "Đang xử lý..."
                  ) : currentStep === "payment" ? (
                    "Thanh Toán"
                  ) : (
                    <>
                      Tiếp Tục
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
