import { Card } from "@/components/ui/card";
import type { Activity } from "@shared/schema";

interface ActivityCardProps {
  amount: string;
  activities: Activity[];
  isLoading: boolean;
}

export function ActivityCard({ amount, activities, isLoading }: ActivityCardProps) {
  if (isLoading) {
    return (
      <Card className="bg-sage-500 p-6 text-white min-h-[200px] shadow-sm rounded-2xl">
        <div className="animate-pulse">
          <div className="h-4 bg-white/20 rounded mb-4"></div>
          <div className="h-8 bg-white/20 rounded mb-4"></div>
          <div className="h-8 bg-white/20 rounded"></div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="card-hover min-h-[200px] rounded-2xl overflow-hidden" style={{ backgroundColor: '#607267', boxShadow: '0 4px 6px -1px rgba(179, 184, 176, 0.1), 0 2px 4px -1px rgba(179, 184, 176, 0.06)' }}>
      <div className="p-6 text-white h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium opacity-90">Activity</h3>
        </div>
        <div className="mb-4">
          <div className="text-2xl font-bold">₹ {amount}</div>
        </div>
        <div className="h-8 flex items-end space-x-1">
          {activities.slice(0, 6).map((activity, index) => {
            const height = Math.max(12, Math.min(32, parseFloat(activity.value) / 10 * 32));
            return (
              <div
                key={activity.id}
                className={`w-1 bg-white rounded transition-all duration-200 ${
                  index === activities.length - 1 ? 'opacity-100' : 'opacity-60'
                }`}
                style={{ height: `${height}px` }}
              />
            );
          })}
        </div>
      </div>
    </Card>
  );
}
