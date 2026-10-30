import React from 'react';
import * as LucideIcons from 'lucide-react';

interface DynamicIconProps extends LucideIcons.LucideProps {
  name: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  className,
  size = 20,
  ...props
}) => {
  // Normalize string: convert kebab-case or lowercase to PascalCase if needed
  const pascalName = name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  // Access icon from Lucide
  const iconsMap = LucideIcons as unknown as Record<string, React.ComponentType<LucideIcons.LucideProps>>;
  const IconComponent = iconsMap[pascalName] || iconsMap[name] || LucideIcons.Sparkles;

  return <IconComponent className={className} size={size} {...props} />;
};
