import {
  Atom,
  Award,
  Building2,
  FlaskConical,
  Flame,
  GraduationCap,
  Hammer,
  Leaf,
  Layers,
  Thermometer,
  Zap,
  Gem,
  type LucideIcon,
} from "lucide-react";

export const categoryIcons: Record<string, LucideIcon> = {
  calorimeters: FlaskConical,
  "thermogravimetric-analysers": Thermometer,
  "elemental-analyzers": Atom,
  "ash-fusion-analyzers": Flame,
  "coal-coke-testing": Zap,
  "reactor-systems": Building2,
  "sample-preparation": Layers,
  furnaces: Flame,
  "reference-materials": Award,
};

export const industryIcons: Record<string, LucideIcon> = {
  "fuels-energy": Zap,
  "minerals-materials": Gem,
  "cement-steel": Hammer,
  "chemical-pharmaceutical": FlaskConical,
  "research-education": GraduationCap,
  "food-agriculture": Leaf,
};

export function CategoryIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = categoryIcons[slug] ?? FlaskConical;
  return <Icon className={className} aria-hidden />;
}

export function IndustryIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = industryIcons[slug] ?? FlaskConical;
  return <Icon className={className} aria-hidden />;
}
