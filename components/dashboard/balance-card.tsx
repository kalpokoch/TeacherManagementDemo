import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { Activity } from "@shared/schema";

interface BalanceCardProps {
  activities: Activity[];
  isLoading: boolean;
  className?: string;
}

export function BalanceCard({ activities, isLoading, className }: BalanceCardProps) {
  if (isLoading) {
    return (
      <Card className={cn("p-6 min-h-[200px] bg-white shadow-sm rounded-2xl", className)}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-6"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn("card-hover min-h-[200px] rounded-2xl overflow-hidden", className)} style={{ backgroundColor: '#FDFEFD', boxShadow: '0 4px 6px -1px rgba(179, 184, 176, 0.1), 0 2px 4px -1px rgba(179, 184, 176, 0.06)' }}>
      <div className="p-6 h-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold" style={{ color: '#607267' }}>Balance</h3>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-sm" style={{ color: '#607267' }}>On track</span>
            </div>
          </div>
          <Select defaultValue="monthly">
            <SelectTrigger className="w-32 border-none shadow-none text-sm" style={{ color: '#607267' }}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="daily">Daily</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="h-32 flex items-end space-x-2">
          <div className="flex-1 h-full relative">
            <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
              <path
                d="M0,100 Q75,80 150,60 Q225,40 300,20"
                stroke="#B3B8B0"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M0,100 Q75,80 150,60 Q225,40 300,20"
                stroke="#607267"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </Card>
  );
}
