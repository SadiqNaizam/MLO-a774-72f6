import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MoreHorizontal } from 'lucide-react';

interface CredentialFieldsProps {
  email: string;
  avatarSrc?: string;
  avatarFallback: string;
  onOptionClick?: () => void;
  onPrimaryLoginClick?: () => void;
}

const CredentialFields: React.FC<CredentialFieldsProps> = ({
  email,
  avatarSrc,
  avatarFallback,
  onOptionClick,
  onPrimaryLoginClick,
}) => {

  const handleOptionsClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent triggering onPrimaryLoginClick if this button is inside the other
    if (onOptionClick) {
      onOptionClick();
    }
  }, [onOptionClick]);

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={onPrimaryLoginClick}
        className="w-full flex items-center p-3 bg-muted/50 hover:bg-muted rounded-md text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-card"
      >
        <Avatar className="h-9 w-9 mr-3">
          {avatarSrc && <AvatarImage src={avatarSrc} alt={avatarFallback} />}
          <AvatarFallback>{avatarFallback.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <p className="text-sm font-medium text-foreground">{email}</p>
          <p className="text-xs text-muted-foreground">{'*'.repeat(10)}</p>
        </div>
        <button
          type="button"
          onClick={handleOptionsClick}
          className="p-1 text-muted-foreground hover:text-foreground rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Account options"
        >
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            Or
          </span>
        </div>
      </div>
    </div>
  );
};

export default CredentialFields;
