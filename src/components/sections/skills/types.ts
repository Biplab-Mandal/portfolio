import { LucideIcon } from "lucide-react";

export type SkillColor =
  | "cyan"
  | "violet"
  | "blue"
  | "amber"
  | "green"
  | "sky"
  | "rose";

export interface SkillCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  color: SkillColor;
  badge: string;
  skills: string[];
}