import React from 'react';
import { Github, Instagram, Twitter, Gamepad2, Mail } from 'lucide-react';

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="social-button"
  >
    {icon}
  </a>
);

export const SocialLinks: React.FC = () => {
  return (
    <div className="social-links-container">
      <SocialButton 
        href="https://github.com/realaiden" 
        icon={<Github size={20} />} 
      />
      <SocialButton 
        href="https://instagram.com/aiden.tsx" 
        icon={<Instagram size={20} />} 
      />
      <SocialButton 
        href="https://x.com/pooraiden" 
        icon={<Twitter size={20} />} 
      />
      <SocialButton 
        href="https://steamcommunity.com/id/isaiden/" 
        icon={<Gamepad2 size={20} />} 
      />
      <SocialButton 
        href="mailto:aidens@telegmail.com" 
        icon={<Mail size={20} />} 
      />
    </div>
  );
};