"use client";

import { Wifi, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#EE0034] rounded-lg flex items-center justify-center">
              <Wifi className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Viettel</h1>
              <p className="text-xs text-gray-500">Internet Di Động Tức Thì</p>
            </div>
          </div>

          <div className="text-right">
            <Badge
              variant="destructive"
              className="text-xs bg-[#EE0034] hover:bg-[#CC002E]"
            >
              <Clock className="w-3 h-3 mr-1" />
              Có Hạn
            </Badge>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-center space-x-1 text-xs text-gray-600">
          <MapPin className="w-3 h-3" />
        </div>
      </div>
    </header>
  );
}
