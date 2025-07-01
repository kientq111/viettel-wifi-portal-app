"use client"

import { useState } from "react"
import { WelcomeScreen } from "@/components/welcome-screen"
import { LoginForm } from "@/components/login-form"
import { PackageSelection } from "@/components/package-selection"
import { PurchaseFlow } from "@/components/purchase-flow"
import { ConnectedScreen } from "@/components/connected-screen"

type PortalStep = "welcome" | "login" | "packages" | "purchase" | "connected"

export default function Home() {
  const [currentStep, setCurrentStep] = useState<PortalStep>("welcome")
  const [selectedPackage, setSelectedPackage] = useState<any>(null)
  const [userType, setUserType] = useState<"new" | "existing" | null>(null)

  const handleStepChange = (step: PortalStep, data?: any) => {
    setCurrentStep(step)
    if (data?.package) setSelectedPackage(data.package)
    if (data?.userType) setUserType(data.userType)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentStep === "welcome" && <WelcomeScreen onNext={handleStepChange} />}
      {currentStep === "login" && <LoginForm onNext={handleStepChange} onBack={() => setCurrentStep("welcome")} />}
      {currentStep === "packages" && (
        <PackageSelection onNext={handleStepChange} onBack={() => setCurrentStep("welcome")} />
      )}
      {currentStep === "purchase" && selectedPackage && (
        <PurchaseFlow package={selectedPackage} onNext={handleStepChange} onBack={() => setCurrentStep("packages")} />
      )}
      {currentStep === "connected" && <ConnectedScreen />}
    </div>
  )
}
