import { services } from "@/data/services";

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 animate-marquee motion-reduce:animate-none">
      {services.map((service) => (
        <span
          key={service}
          className="px-[18px] py-3 font-display text-[22px] font-extrabold after:ml-9 after:content-['✦']"
        >
          {service}
        </span>
      ))}
    </div>
  );
}

export function Ribbon() {
  return (
    <div className="-mx-5 flex rotate-[-1.5deg] overflow-hidden whitespace-nowrap border-y-2 border-edge bg-pop-yellow text-ink-dark">
      <Track />
      <Track hidden />
    </div>
  );
}
