import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import LoginHeader from './LoginHeader';
import CredentialFields from './CredentialFields';
import SwitchAccountButton from './SwitchAccountButton';
import HelpLinks from './HelpLinks';
import { cn } from '@/lib/utils';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const handlePrimaryLogin = React.useCallback(() => {
    console.log('Primary login attempt for michaelscott@ascendion.com');
    // TODO: Implement actual login logic
  }, []);

  const handleAccountOptions = React.useCallback(() => {
    console.log('Account options clicked');
    // TODO: Implement logic for account options (e.g., remove account, manage)
  }, []);

  const handleSwitchAccount = React.useCallback(() => {
    console.log('Switch account clicked');
    // TODO: Implement logic to navigate to a different login flow or clear fields
  }, []);

  const handleHelp = React.useCallback(() => {
    console.log('Help link clicked');
    // TODO: Implement logic to navigate to help page or show help modal
  }, []);

  return (
    <Card className={cn("w-full max-w-md bg-card", className)}>
      <CardContent className="p-6 space-y-4">
        <LoginHeader 
          title="Login with SSO" 
          subtitle="Login with Company Account" 
        />
        <CredentialFields 
          email="michaelscott@ascendion.com"
          avatarSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80"
          avatarFallback="MS"
          onPrimaryLoginClick={handlePrimaryLogin}
          onOptionClick={handleAccountOptions}
        />
        <SwitchAccountButton onClick={handleSwitchAccount} />
        <HelpLinks onHelpClick={handleHelp} />
      </CardContent>
    </Card>
  );
};

export default LoginCard;
