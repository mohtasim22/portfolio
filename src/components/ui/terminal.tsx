const lines = [
  { type: "cmd", text: "npm run build" },
  { type: "ok", text: "Compiled successfully" },
  { type: "cmd", text: "git push origin main" },
  { type: "ok", text: "Live in production" },
];

export function Terminal({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`w-full max-w-[300px] rotate-[-2.5deg] rounded-xl border-2 border-edge bg-[#15161f] pb-3 font-mono text-[12.5px] leading-[1.7] text-[#e9eaf5] shadow-pop lg:w-[246px] ${className}`}
    >
      <div className="mb-1.5 flex items-center gap-1.5 border-b border-white/10 px-2.5 py-2">
        <span className="size-2 rounded-full bg-[#ff5a36]" />
        <span className="size-2 rounded-full bg-[#ffc531]" />
        <span className="size-2 rounded-full bg-[#19c495]" />
        <span className="ml-1.5 text-[11px] text-[#9aa0b5]">~/projects/next-big-thing</span>
      </div>

      {lines.map((line) => (
        <code
          key={line.text}
          className={`block whitespace-nowrap px-3 ${line.type === "ok" ? "text-[#4fe3b5]" : ""}`}
        >
          {line.type === "cmd" ? (
            <>
              <span className="text-[#ffc531]">$</span> {line.text}
            </>
          ) : (
            <>✓ {line.text}</>
          )}
        </code>
      ))}
    </div>
  );
}
