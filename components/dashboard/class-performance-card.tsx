import { Card } from "@/components/ui/card";

export function ClassPerformanceCard() {
  const performanceData = [
    { month: "Jan", grade: 85 },
    { month: "Feb", grade: 78 },
    { month: "Mar", grade: 92 },
    { month: "Apr", grade: 88 },
    { month: "May", grade: 95 },
  ];

  return (
    <Card className="card-hover min-h-[200px] rounded-2xl overflow-hidden" style={{ backgroundColor: '#FDFEFD', boxShadow: '0 4px 6px -1px rgba(179, 184, 176, 0.1), 0 2px 4px -1px rgba(179, 184, 176, 0.06)' }}>
      <div className="p-6 h-full">
        <h3 className="text-lg font-semibold mb-2" style={{ color: '#607267' }}>Class Performance</h3>
        <p className="text-sm mb-4" style={{ color: '#607267' }}>Average Grade This Month</p>
        
        <div className="mb-4">
          <div className="text-2xl font-bold" style={{ color: '#2F2F30' }}>95%</div>
          <div className="text-sm text-emerald-600">+7% from last month</div>
        </div>
        
        <div className="h-16 flex items-end space-x-1">
          {performanceData.map((data, index) => {
            const height = Math.max(8, (data.grade / 100) * 48);
            return (
              <div key={data.month} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full rounded-t transition-all duration-200"
                  style={{ 
                    height: `${height}px`,
                    backgroundColor: index === performanceData.length - 1 ? '#607267' : '#B3B8B0'
                  }}
                />
                <div className="text-xs mt-1" style={{ color: '#607267' }}>{data.month}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}