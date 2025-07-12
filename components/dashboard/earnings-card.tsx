import { Card } from "@/components/ui/card";

interface EarningsCardProps {
  totalEarnings: string;
  profitPercentage: string;
}

export function EarningsCard({ totalEarnings, profitPercentage }: EarningsCardProps) {
  return (
    <Card className="card-hover min-h-[200px] rounded-2xl overflow-hidden" style={{ backgroundColor: '#FDFEFD', boxShadow: '0 4px 6px -1px rgba(179, 184, 176, 0.1), 0 2px 4px -1px rgba(179, 184, 176, 0.06)' }}>
      <div className="p-6 h-full">
        <div className="mb-4">
          <h3 className="text-lg font-semibold" style={{ color: '#607267' }}>Earnings</h3>
          <p className="text-sm" style={{ color: '#607267' }}>Total Expense</p>
        </div>
        <div className="mb-4">
          <div className="text-2xl font-bold" style={{ color: '#2F2F30' }}>₹ {totalEarnings}</div>
          <p className="text-sm" style={{ color: '#607267' }}>
            Profit is {profitPercentage}% More than last Month
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-20 h-20">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#B3B8B0"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#607267"
                strokeWidth="8"
                fill="none"
                strokeDasharray="251.2"
                strokeDashoffset="50.24"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold" style={{ color: '#2F2F30' }}>80%</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
