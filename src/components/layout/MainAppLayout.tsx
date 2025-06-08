import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    // This layout implements a responsive split-screen.
    // On medium screens and larger (md:), it's a 2-column grid.
    // On small screens, it's a single column, with the left panel hidden
    // and the right panel (main content) taking full width.
    // This interpretation of "grid-cols-2" from requirements aims for better usability on mobile devices.
    <div className={cn("grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden", className)}>
      {/* Left Panel: Decorative panel, hidden on small screens (mobile) */}
      <div className="hidden md:flex flex-col bg-secondary p-8">
        <div className="mb-auto"> {/* Pushes logo to the top */} 
          <h1 className="text-xl font-semibold text-foreground">ASCENDION</h1>
          <p className="text-xs text-muted-foreground">www.ascendion.com</p>
        </div>
        {/* 
          This space is intended for a prominent brand graphic or illustration as per design mockups.
          In a production application, an <img /> tag, an SVG component, or a CSS background-image
          would be used here to display the decorative visual element.
          For this component, a simple colored background is used. 
        */}
      </div>

      {/* Right Panel: Main content area, centered */}
      {/* Takes full width on small screens, and centers content */}
      <div className="bg-background flex justify-center items-center p-4 sm:p-6 md:p-8 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default MainAppLayout;
