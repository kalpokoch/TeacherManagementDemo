import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import type { Teacher } from "@shared/schema";

interface ProfileCardProps {
  teacher: Teacher;
}

export function ProfileCard({ teacher }: ProfileCardProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className="card-hover min-h-[200px] rounded-2xl overflow-hidden" style={{ backgroundColor: '#FDFEFD', boxShadow: '0 4px 6px -1px rgba(179, 184, 176, 0.1), 0 2px 4px -1px rgba(179, 184, 176, 0.06)' }}>
      <div className="p-6 h-full">
        <div className="text-center">
          <Avatar className="w-16 h-16 mx-auto mb-4">
            <AvatarImage src={teacher.avatar || undefined} alt={teacher.name} />
            <AvatarFallback style={{ backgroundColor: '#B3B8B0', color: '#607267' }}>
              {teacher.avatar ? getInitials(teacher.name) : <User className="w-8 h-8" />}
            </AvatarFallback>
          </Avatar>
          
          <h3 className="text-lg font-semibold mb-1" style={{ color: '#2F2F30' }}>{teacher.name}</h3>
          <p className="text-sm mb-4" style={{ color: '#607267' }}>{teacher.email}</p>
          
          <div className="flex justify-center space-x-6">
            <div className="text-center">
              <div className="text-sm" style={{ color: '#607267' }}>Projects</div>
              <div className="text-lg font-semibold" style={{ color: '#2F2F30' }}>{teacher.projects}</div>
            </div>
            <div className="text-center">
              <div className="text-sm" style={{ color: '#607267' }}>Followers</div>
              <div className="text-lg font-semibold" style={{ color: '#2F2F30' }}>{teacher.followers}</div>
            </div>
            <div className="text-center">
              <div className="text-sm" style={{ color: '#607267' }}>Following</div>
              <div className="text-lg font-semibold" style={{ color: '#2F2F30' }}>{teacher.following}</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
