import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, MessageSquare, Upload } from "lucide-react";

export function QuickActionsCard() {
  return (
    <Card className="card-hover min-h-[200px] rounded-2xl overflow-hidden" style={{ backgroundColor: '#FDFEFD', boxShadow: '0 4px 6px -1px rgba(179, 184, 176, 0.1), 0 2px 4px -1px rgba(179, 184, 176, 0.06)' }}>
      <div className="p-6 h-full">
        <h3 className="text-lg font-semibold mb-4" style={{ color: '#607267' }}>Quick Actions</h3>
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="button-hover w-full justify-start rounded-full h-12 text-left transition-all duration-200"
            style={{ 
              borderColor: '#B3B8B0',
              color: '#607267',
              backgroundColor: 'transparent'
            }}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Assignment
          </Button>
          
          <Button 
            variant="outline" 
            className="button-hover w-full justify-start rounded-full h-12 text-left transition-all duration-200"
            style={{ 
              borderColor: '#B3B8B0',
              color: '#607267',
              backgroundColor: 'transparent'
            }}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Message Students
          </Button>
          
          <Button 
            variant="outline" 
            className="button-hover w-full justify-start rounded-full h-12 text-left transition-all duration-200"
            style={{ 
              borderColor: '#B3B8B0',
              color: '#607267',
              backgroundColor: 'transparent'
            }}
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload Resources
          </Button>
        </div>
      </div>
    </Card>
  );
}