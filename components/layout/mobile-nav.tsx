import { LayoutDashboard, Users, Calendar, TrendingUp, Settings } from "lucide-react";

export function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center">
        <button className="flex flex-col items-center p-2 text-gray-900">
          <LayoutDashboard className="w-5 h-5" />
          <span className="text-xs mt-1">Dashboard</span>
        </button>
        <button className="flex flex-col items-center p-2 text-gray-400">
          <Users className="w-5 h-5" />
          <span className="text-xs mt-1">Students</span>
        </button>
        <button className="flex flex-col items-center p-2 text-gray-400">
          <Calendar className="w-5 h-5" />
          <span className="text-xs mt-1">Schedule</span>
        </button>
        <button className="flex flex-col items-center p-2 text-gray-400">
          <TrendingUp className="w-5 h-5" />
          <span className="text-xs mt-1">Analytics</span>
        </button>
        <button className="flex flex-col items-center p-2 text-gray-400">
          <Settings className="w-5 h-5" />
          <span className="text-xs mt-1">Settings</span>
        </button>
      </div>
    </nav>
  );
}
