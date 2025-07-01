import { Button } from "@/components/ui/button"
import { ArrowDown, Zap, Shield, Clock } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] opacity-10 bg-cover bg-center" />
      <div className="relative container px-4 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Lightning Fast
            <span className="block text-blue-200">Wi-Fi Packages</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Choose from our premium Wi-Fi packages designed for every lifestyle. Fast speeds, reliable connection, and
            unbeatable value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
              View Packages
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
            >
              Compare Plans
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500/20 p-3 rounded-full mb-3">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-1">Ultra Fast</h3>
              <p className="text-sm text-blue-200">Up to 1Gbps speeds</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500/20 p-3 rounded-full mb-3">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-1">Secure</h3>
              <p className="text-sm text-blue-200">Advanced encryption</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500/20 p-3 rounded-full mb-3">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-1">24/7 Support</h3>
              <p className="text-sm text-blue-200">Always here to help</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-blue-200" />
      </div>
    </section>
  )
}
