import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface SwitchAccountButtonProps {
  onClick?: () => void;
}

const SwitchAccountButton: React.FC<SwitchAccountButtonProps> = ({ onClick }) => {
  return (
    <Button 
      type="button"
      variant="secondary" // uses bg-secondary and text-secondary-foreground
      className="w-full" // bg-secondary is hsl(210 40% 96.1%), text-secondary-foreground is hsl(222.2 47.4% 11.2%)
      onClick={onClick}
    >
      <Plus className="mr-2 h-4 w-4" />
      Sign in with different account
    </Button>
  );
};

export default SwitchAccountButton;
