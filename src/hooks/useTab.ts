import { useState } from "react";
import { navData as initialNavData } from "../data/navBar";

export interface NavItem {
  id: number;
  name: string;
  image?: string;
  redirectUrl?: string;
  active: boolean;
  focus: boolean;
  children?: NavItem[];
}

export interface NavSection {
  heading: string;
  id: number;
  focus: boolean;
  content: NavItem[];
}

export default function useTab() {
  const [active, setActive] = useState<number>(11);
  const [data, setData] = useState<NavSection[]>(initialNavData);

  const getActiveTab = (id: number) => {
    const updated = updateNavSections(data, id);
    setData(updated);
    setActive(id);
  };

  function updateNavSections(sections: NavSection[], targetId: number): NavSection[] {
    return sections.map((section) => ({
      ...section,
      content: updateNavItems(section.content, targetId),
    }));
  }

  function updateNavItems(items: NavItem[], targetId: number): NavItem[] {
    return items.map((item) => {
      if (item.id === targetId) {
        if (!item.children || item.children.length === 0) {
          return { ...item, active: true, focus: false };
        } else {
          return { ...item, active: false, focus: true };
        }
      }

      return {
        ...item,
        active: false,
        focus: false,
        children: item.children ? updateNavItems(item.children, targetId) : undefined,
      };
    });
  }

  return { active, getActiveTab, data };
}
