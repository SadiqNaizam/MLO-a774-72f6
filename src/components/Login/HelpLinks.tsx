import React from 'react';
import { Button } from '@/components/ui/button';

interface HelpLinksProps {
  onHelpClick?: () => void;
}

const HelpLinks: React.FC<HelpLinksProps> = ({ onHelpClick }) => {
  return (
    <div className="text-center text-xs text-muted-foreground">
      Still have trouble signing in?{' '}
      <Button
        type="button"
        variant="link"
        className="p-0 h-auto text-xs text-primary hover:text-primary/90 font-semibold"
        onClick={onHelpClick}
      >
        Click Here
      </Button>
    </div>
  );
};

export default HelpLinks;
