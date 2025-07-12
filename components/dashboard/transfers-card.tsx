import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Transfer } from "@shared/schema";

interface TransfersCardProps {
  transfers: Transfer[];
  isLoading: boolean;
  className?: string;
}

export function TransfersCard({ transfers, isLoading, className }: TransfersCardProps) {
  if (isLoading) {
    return (
      <Card className={cn("p-6 min-h-[200px] bg-white shadow-sm rounded-2xl", className)}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-12 bg-gray-200 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                    <div className="h-3 bg-gray-200 rounded w-20"></div>
                  </div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn("card-hover min-h-[200px] rounded-2xl overflow-hidden", className)} style={{ backgroundColor: '#FDFEFD', boxShadow: '0 4px 6px -1px rgba(179, 184, 176, 0.1), 0 2px 4px -1px rgba(179, 184, 176, 0.06)' }}>
      <div className="p-6 h-full">
        <h3 className="text-lg font-semibold mb-4" style={{ color: '#607267' }}>Your Transfers</h3>
        <div className="space-y-4">
          {transfers.map((transfer) => (
            <div key={transfer.id} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-12 rounded-full" style={{ backgroundColor: '#607267' }}></div>
                <div>
                  <div className="font-medium" style={{ color: '#2F2F30' }}>{transfer.fromTo}</div>
                  <div className="text-sm" style={{ color: '#607267' }}>{transfer.timestamp}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={cn(
                  "font-semibold",
                  transfer.type === 'from' ? "text-emerald-600" : "text-red-600"
                )}>
                  {transfer.type === 'from' ? '+' : ''}{transfer.percentage}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
