"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight } from "lucide-react";

const comparisonData = [
  {
    feature: "Download Speed",
    basic: "50 Mbps",
    premium: "200 Mbps",
    ultra: "500 Mbps",
    gigabit: "1 Gbps",
  },
  {
    feature: "Upload Speed",
    basic: "10 Mbps",
    premium: "50 Mbps",
    ultra: "100 Mbps",
    gigabit: "500 Mbps",
  },
  {
    feature: "Data Allowance",
    basic: "Unlimited",
    premium: "Unlimited",
    ultra: "Unlimited",
    gigabit: "Unlimited",
  },
  {
    feature: "Contract Length",
    basic: "12 months",
    premium: "12 months",
    ultra: "12 months",
    gigabit: "12 months",
  },
  {
    feature: "Installation",
    basic: "$50",
    premium: "Free",
    ultra: "Free",
    gigabit: "Free",
  },
  {
    feature: "Router Included",
    basic: true,
    premium: true,
    ultra: true,
    gigabit: true,
  },
  {
    feature: "24/7 Support",
    basic: false,
    premium: true,
    ultra: true,
    gigabit: true,
  },
  {
    feature: "Priority Support",
    basic: false,
    premium: false,
    ultra: true,
    gigabit: true,
  },
  {
    feature: "Security Suite",
    basic: false,
    premium: false,
    ultra: true,
    gigabit: true,
  },
  {
    feature: "Static IP",
    basic: false,
    premium: false,
    ultra: false,
    gigabit: true,
  },
];

export function ComparisonSection() {
  return (
    <section id="compare" className="py-16 sm:py-24 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Compare Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Match
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare all features side by side to make the best choice for your
            needs.
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-center">Package Comparison</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-4 font-semibold min-w-[200px]">
                      Features
                    </th>
                    <th className="text-center p-4 font-semibold min-w-[120px]">
                      <div className="space-y-2">
                        <div>Basic</div>
                        <div className="text-2xl font-bold text-blue-600">
                          $29.99
                        </div>
                      </div>
                    </th>
                    <th className="text-center p-4 font-semibold min-w-[120px] bg-purple-50">
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-1">
                          Premium
                          <Badge variant="secondary" className="text-xs">
                            Popular
                          </Badge>
                        </div>
                        <div className="text-2xl font-bold text-purple-600">
                          $49.99
                        </div>
                      </div>
                    </th>
                    <th className="text-center p-4 font-semibold min-w-[120px]">
                      <div className="space-y-2">
                        <div>Ultra</div>
                        <div className="text-2xl font-bold text-indigo-600">
                          $79.99
                        </div>
                      </div>
                    </th>
                    <th className="text-center p-4 font-semibold min-w-[120px]">
                      <div className="space-y-2">
                        <div>Gigabit</div>
                        <div className="text-2xl font-bold text-emerald-600">
                          $99.99
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="p-4 font-medium text-gray-900">
                        {row.feature}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.basic === "boolean" ? (
                          row.basic ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-700">{row.basic}</span>
                        )}
                      </td>
                      <td className="p-4 text-center bg-purple-50/50">
                        {typeof row.premium === "boolean" ? (
                          row.premium ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-700 font-medium">
                            {row.premium}
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.ultra === "boolean" ? (
                          row.ultra ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-700">{row.ultra}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.gigabit === "boolean" ? (
                          row.gigabit ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-700">{row.gigabit}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-50">
                    <td className="p-4"></td>
                    <td className="p-4 text-center">
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                      >
                        Choose Basic
                      </Button>
                    </td>
                    <td className="p-4 text-center bg-purple-50">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        Choose Premium
                      </Button>
                    </td>
                    <td className="p-4 text-center">
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                      >
                        Choose Ultra
                      </Button>
                    </td>
                    <td className="p-4 text-center">
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                      >
                        Choose Gigabit
                      </Button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Need help choosing? Our experts are here to help!
          </p>
          <Button size="lg" variant="outline">
            Contact Sales
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
