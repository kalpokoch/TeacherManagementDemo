import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Users } from "lucide-react";

export function CreateClassCard() {
  return (
    <Card className="card-hover min-h-[200px] rounded-2xl overflow-hidden" style={{ backgroundColor: '#FDFEFD', boxShadow: '0 4px 6px -1px rgba(179, 184, 176, 0.1), 0 2px 4px -1px rgba(179, 184, 176, 0.06)' }}>
      <div className="p-6 h-full">
        <div className="text-center h-full flex flex-col justify-center">
          <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-200" style={{ backgroundColor: '#B3B8B0' }}>
            <Users className="w-8 h-8" style={{ color: '#607267' }} />
          </div>
          
          <h3 className="text-lg font-semibold mb-2" style={{ color: '#607267' }}>Create New Class</h3>
          <p className="text-sm mb-4" style={{ color: '#607267' }}>Set up a new class for your students</p>
          
          <Button 
            className="button-hover text-white px-6 py-3 rounded-full font-medium transition-all duration-200"
            style={{ backgroundColor: '#607267' }}
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Class
          </Button>
        </div>
      </div>
    </Card>
  );
}