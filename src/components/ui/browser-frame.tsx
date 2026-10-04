import Image from "next/image";

export function BrowserFrame({
  src,
  alt,
  url,
  sizes,
}: {
  src: string;
  alt: string;
  url: string;
  sizes: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border-2 border-edge bg-card shadow-pop-lg">
      <div className="flex items-center gap-1.5 border-b-2 border-edge px-3 py-2.5">
        <span className="size-2.5 rounded-full bg-pop-orange" />
        <span className="size-2.5 rounded-full bg-pop-yellow" />
        <span className="size-2.5 rounded-full bg-pop-green" />
        <span className="ml-2 truncate font-mono text-xs text-muted">{url}</span>
      </div>
      <Image src={src} alt={alt} width={1600} height={1000} sizes={sizes} className="h-auto w-full" />
    </figure>
  );
}
