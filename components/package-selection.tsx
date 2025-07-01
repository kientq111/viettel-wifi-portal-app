"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Wifi,
  Shield,
  Headphones,
  CheckCircle2,
} from "lucide-react";

interface PackageSelectionProps {
  onNext: (step: string, data?: any) => void;
  onBack: () => void;
}

const packages = [
  {
    id: 1,
    name: "Gói ngày",
    description: "Dùng 24 giờ",
    price: 10000,
    unit: "/ ngày",
    color: "bg-orange-500",
    popular: false,
  },
  {
    id: 2,
    name: "Gói tuần",
    description: "Tiết kiệm, dùng 7 ngày",
    price: 30000,
    unit: "/ tuần",
    color: "bg-yellow-500",
    popular: false,
  },
  {
    id: 3,
    name: "Gói tháng",
    description: "Siêu tiết kiệm, 30 ngày",
    price: 50000,
    unit: "/ tháng",
    color: "bg-blue-500",
    popular: true,
  },
];

export function PackageSelection({ onNext, onBack }: PackageSelectionProps) {
  const [selectedPackage, setSelectedPackage] = useState<number>(3);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
  };

  const handleContinue = () => {
    const pkg = packages.find((p) => p.id === selectedPackage);
    if (pkg) {
      onNext("purchase", { package: pkg });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-4 py-4">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </Button>
            <h1 className="text-lg font-semibold text-gray-900">
              Chọn gói WiFi
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-6 py-8">
        <div className="w-full max-w-sm">
          {/* WiFi Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#EE0034] rounded-full flex items-center justify-center">
              <Wifi className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Chọn gói WiFi Viettel
            </h2>
            <p className="text-gray-600">
              Hãy chọn gói truy cập phù hợp để kết nối internet tốc độ cao.
            </p>
          </div>

          {/* Package Options */}
          <div className="space-y-4 mb-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all duration-200 ${
                  selectedPackage === pkg.id
                    ? "bg-gray-50 border-2 border-[#EE0034]"
                    : "bg-gray-50 border-2 border-transparent hover:border-gray-200"
                }`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${pkg.color}`} />
                  <div>
                    <h3 className="font-semibold text-gray-900">{pkg.name}</h3>
                    <p className="text-sm text-gray-600">{pkg.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-right">
                    <span className="text-lg font-bold text-[#EE0034]">
                      {formatPrice(pkg.price)}
                    </span>
                    <span className="text-sm text-gray-600">{pkg.unit}</span>
                  </div>
                  {selectedPackage === pkg.id && (
                    <CheckCircle2 className="w-5 h-5 text-[#EE0034]" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            className="w-full bg-[#EE0034] hover:bg-[#CC002E] text-white font-semibold py-4 text-lg rounded-2xl mb-6"
          >
            Thanh toán & Kết nối
          </Button>

          {/* Selected Package Info */}
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600">
              Bạn đã chọn{" "}
              <span className="font-semibold text-gray-900">
                {packages.find((p) => p.id === selectedPackage)?.name}
              </span>
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 text-xs text-gray-600">
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4" />
              <span>Bảo mật cao</span>
            </div>
            <div className="flex items-center space-x-1">
              <Headphones className="w-4 h-4" />
              <span>Hỗ trợ 24/7</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
