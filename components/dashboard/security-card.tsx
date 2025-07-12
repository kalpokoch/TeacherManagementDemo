import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fingerprint } from "lucide-react";

export function SecurityCard() {
  return (
    <Card className="card-hover min-h-[200px] rounded-2xl overflow-hidden" style={{ backgroundColor: '#FDFEFD', boxShadow: '0 4px 6px -1px rgba(179, 184, 176, 0.1), 0 2px 4px -1px rgba(179, 184, 176, 0.06)' }}>
      <div className="p-6 h-full">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#B3B8B0' }}>
            <Fingerprint className="w-8 h-8" style={{ color: '#607267' }} />
          </div>
          <h3 className="text-lg font-semibold mb-2" style={{ color: '#607267' }}>Keep you safe!</h3>
          <p className="text-sm mb-4" style={{ color: '#607267' }}>Update your security password</p>
          <Button className="button-hover text-white px-6 py-2 text-sm font-medium transition-all duration-200" style={{ backgroundColor: '#607267' }}>
            Update Your Security
          </Button>
        </div>
      </div>
    </Card>
  );
}
