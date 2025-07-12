import { useState } from "react";
import { Menu, Search, Bell, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { Teacher } from "@shared/schema";

interface HeaderProps {
  teacher: Teacher;
}

export function Header({ teacher }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="px-4 py-6 md:px-10 md:pl-32">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Greeting */}
        <div className="text-left">
          <h1 className="text-xl font-semibold text-[#2F2F30]">
            Hello, {teacher.name.split(' ')[0]}!
          </h1>
          <p className="text-sm text-[#607267]">
            Manage your teaching activities and students
          </p>
        </div>

        {/* Search + Icons */}
        <div className="flex items-center justify-between w-full md:w-auto space-x-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#607267]" />
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full md:w-64 text-sm bg-[#FDFEFD] border border-[#B3B8B0] rounded-full focus:outline-none focus:ring-2 focus:ring-[#607267]"
            />
          </div>

          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#EAECEA]">
            <Bell className="w-5 h-5 text-[#2F2F30]" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#EAECEA]">
            <Heart className="w-5 h-5 text-[#2F2F30]" />
          </Button>
        </div>
      </div>
    </header>
  );
}
