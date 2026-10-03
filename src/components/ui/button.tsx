const base =
  "inline-flex items-center gap-2 rounded-xl border-2 border-edge font-display font-semibold shadow-pop transition " +
  "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-pop-md " +
  "active:translate-x-0.5 active:translate-y-0.5 active:shadow-pop-sm";

const variants = {
  default: "bg-card text-ink",
  primary: "bg-pop-blue text-on-blue",
  yellow: "bg-pop-yellow text-ink-dark",
};

const sizes = {
  md: "px-[18px] py-3 text-[15px]",
  sm: "px-3.5 py-2 text-sm",
};

export function buttonStyles({
  variant = "default",
  size = "md",
}: { variant?: keyof typeof variants; size?: keyof typeof sizes } = {}) {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}
