import { stack, type TileColor } from "@/data/stack";

const colorClasses: Record<TileColor, string> = {
  blue: "bg-pop-blue text-on-blue",
  yellow: "bg-pop-yellow text-ink-dark",
  green: "bg-pop-green text-ink-dark",
  orange: "bg-pop-orange text-ink-dark",
  white: "bg-card text-ink",
};

const tilts = ["-rotate-2", "rotate-2", "-rotate-1"];

export function TechTiles({ className = "" }: { className?: string }) {
  return (
    <ul aria-label="Tech stack" className={`flex flex-wrap gap-x-2 gap-y-2.5 ${className}`}>
      {stack.map((tech, i) => (
        <li
          key={tech.name}
          className={`rounded-[10px] border-2 border-edge px-[11px] py-1.5 font-display text-xs font-extrabold leading-tight shadow-pop-sm ${colorClasses[tech.color]} ${tilts[i % tilts.length]}`}
        >
          {tech.name}
        </li>
      ))}
    </ul>
  );
}
