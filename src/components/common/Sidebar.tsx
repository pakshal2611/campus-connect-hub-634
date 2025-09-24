import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

export interface SidebarItem {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  description?: string;
}

interface SidebarProps {
  items: SidebarItem[];
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ items, className }) => {
  const location = useLocation();

  return (
    <div className={cn("flex h-full flex-col", className)}>
      <ScrollArea className="flex-1 px-3 py-6">
        <nav className="space-y-2">
          {items.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <NavLink key={item.href} to={item.href} className="block">
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 h-auto py-3 px-3",
                    isActive && "bg-primary/10 text-primary border-primary/20"
                  )}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.title}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                </Button>
              </NavLink>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );
};