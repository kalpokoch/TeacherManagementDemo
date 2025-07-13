import { GraduationCap, LayoutDashboard, CreditCard, TrendingUp, Users, Calendar, FileText, Settings, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-16 h-[60vh] rounded-3xl bg-white shadow-lg flex flex-col items-center justify-between py-6">

      {/* Navigation */}
      <nav className="flex flex-col items-center space-y-4 mt-2">
        <SidebarButton icon={LayoutDashboard} active />
        <SidebarButton icon={CreditCard} />
        <SidebarButton icon={TrendingUp} />
        <SidebarButton icon={Users} />
        <SidebarButton icon={Calendar} />
        <SidebarButton icon={FileText} />
      </nav>

      {/* Bottom Settings/Profile */}
      <div className="flex flex-col items-center space-y-4">
        <SidebarButton icon={Settings} />
        <SidebarButton icon={HelpCircle} />
      </div>
    </div>
  );
}

function SidebarButton({ icon: Icon, active = false }: { icon: any; active?: boolean }) {
  return (
    <button className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all
      ${active ? 'bg-[#2F2F30] text-white' : 'text-[#2F2F30]/50 hover:text-[#2F2F30] hover:bg-gray-100'}`}>
      <Icon className="w-5 h-5" />
    </button>
  );
}