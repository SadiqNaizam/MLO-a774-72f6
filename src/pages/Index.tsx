import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginCard from '@/components/Login/LoginCard';

/**
 * LoginPage component
 * 
 * This component renders the SSO Login Page. It utilizes the MainAppLayout
 * for the overall page structure (split-screen with a decorative left panel
 * and a right panel for content) and embeds the LoginCard component in the
 * right panel for user authentication.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        The LoginCard component is the main interactive element for this page.
        It encapsulates all login-related UI and functionality including:
        - Header with title and subtitle
        - Pre-filled credential fields (or fields for new input)
        - Options for primary login or switching accounts
        - Help links
        The MainAppLayout will center this card in the right panel of the screen.
        The LoginCard itself defines its maximum width (max-w-md) and styling.
      */}
      <LoginCard />
    </MainAppLayout>
  );
};

export default LoginPage;
