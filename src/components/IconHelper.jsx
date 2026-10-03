import React from 'react';
import {
  Code,
  Code2,
  Coffee,
  FileCode,
  Terminal,
  Cpu,
  Layers,
  Server,
  Palette,
  FileText,
  Database,
  FolderArchive,
  ServerCrash,
  BarChart3,
  Sparkles,
  GitBranch,
  Github,
  Monitor,
  Send,
  Layout,
  Brain,
  Wrench,
  Globe,
  Linkedin,
  Mail,
  GraduationCap,
  Award,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const iconMap = {
  Code,
  Code2,
  Coffee,
  FileCode,
  Terminal,
  Cpu,
  Layers,
  Server,
  Palette,
  FileText,
  Database,
  FolderArchive,
  ServerCrash,
  BarChart3,
  Sparkles,
  GitBranch,
  Github,
  Monitor,
  Send,
  Layout,
  Brain,
  Wrench,
  Globe,
  Linkedin,
  Mail,
  GraduationCap,
  Award,
  CheckCircle,
  ExternalLink,
};

export const DynamicIcon = ({ name, className = "w-5 h-5", defaultIcon = "Code" }) => {
  const IconComponent = iconMap[name] || iconMap[defaultIcon] || Code;
  return <IconComponent className={className} />;
};

export default DynamicIcon;
