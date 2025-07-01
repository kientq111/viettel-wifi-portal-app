"use client"

import { useState } from "react"
import { PackageCard } from "./package-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const packages = [
  {
    id: 1,
    name: "Basic",
    price: 29.99,
    speed: "50 Mbps",
    data: "Unlimited",
    contract: "12 months",
    features: ["Basic support", "Standard router", "1 device priority"],
    popular: false,
    color: "blue",
  },
  {
    id: 2,
    name: "Premium",
    price: 49.99,
    speed: "200 Mbps",
    data: "Unlimited",
    contract: "12 months",
    features: ["Priority support", "Advanced router", "5 device priority", "Free installation"],
    popular: true,
    color: "purple",
  },
  {
    id: 3,
    name: "Ultra",
    price: 79.99,
    speed: "500 Mbps",
    data: "Unlimited",
    contract: "12 months",
    features: ["24/7 premium support", "Pro router", "Unlimited priority", "Free installation", "Security suite"],
    popular: false,
    color: "indigo",
  },
  {
    id: 4,
    name: "Gigabit",
    price: 99.99,
    speed: "1 Gbps",
    data: "Unlimited",
    contract: "12 months",
    features: [
      "Dedicated support line",
      "Enterprise router",
      "Unlimited priority",
      "Free installation",
      "Advanced security",
      "Static IP",
    ],
    popular: false,
    color: "emerald",
  },
]

export function PackageGrid() {
  const [selectedPackages, setSelectedPackages] = useState<number[]>([])

  const togglePackageSelection = (packageId: number) => {
    setSelectedPackages((prev) =>
      prev.includes(packageId) ? prev.filter((id) => id !== packageId) : [...prev, packageId],
    )
  }

  return (
    <section id="packages" className="py-16 sm:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Choose Your Plan
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Wi-Fi Packages for Every Need</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From basic browsing to professional streaming, we have the perfect package for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              package={pkg}
              isSelected={selectedPackages.includes(pkg.id)}
              onToggleSelect={() => togglePackageSelection(pkg.id)}
            />
          ))}
        </div>

        {selectedPackages.length > 0 && (
          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Compare Selected ({selectedPackages.length})
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
