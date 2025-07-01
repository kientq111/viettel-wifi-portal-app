import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, HelpCircle } from "lucide-react"

export function SupportBanner() {
  return (
    <section className="px-4 py-6">
      <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
        <CardContent className="p-4">
          <div className="text-center mb-4">
            <HelpCircle className="w-8 h-8 text-[#EE0034] mx-auto mb-2" />
            <h3 className="font-bold text-gray-900 mb-1">Cần Hỗ Trợ?</h3>
            <p className="text-sm text-gray-600">Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng 24/7 cho du khách</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" size="sm" className="flex items-center justify-center bg-transparent">
              <Phone className="w-4 h-4 mr-2" />
              Gọi Ngay
            </Button>
            <Button variant="outline" size="sm" className="flex items-center justify-center bg-transparent">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat Trực Tuyến
            </Button>
          </div>

          <div className="mt-4 p-3 bg-white rounded-lg border">
            <h4 className="font-semibold text-sm text-gray-900 mb-2">Hướng Dẫn Thiết Lập Nhanh:</h4>
            <ol className="text-xs text-gray-600 space-y-1">
              <li>1. Chọn gói cước ở trên</li>
              <li>2. Hoàn tất thanh toán bảo mật</li>
              <li>3. Nhận SMS tức thì với thông tin đăng nhập</li>
              <li>4. Kết nối và bắt đầu duyệt web!</li>
            </ol>
          </div>

          <div className="mt-3 text-center">
            <p className="text-xs text-gray-500">
              ✓ Hoạt động trên mọi thiết bị • ✓ Không cần ứng dụng • ✓ Kích hoạt tức thì
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
