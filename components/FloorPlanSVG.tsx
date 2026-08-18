"use client";

type Props = {
  width: number;
  length: number;
  rooms: number;
};

function ar(n: number | string) {
  const map: Record<string, string> = {
    "0": "٠", "1": "١", "2": "٢", "3": "٣", "4": "٤",
    "5": "٥", "6": "٦", "7": "٧", "8": "٨", "9": "٩", ".": "٫",
  };
  return String(n)
    .split("")
    .map((c) => map[c] ?? c)
    .join("");
}

function Door({ x, y, r, rotate }: { x: number; y: number; r: number; rotate: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <line x1={0} y1={0} x2={0} y2={r} stroke="#0B1F3A" strokeWidth={1.4} />
      <path
        d={`M 0 ${r} A ${r} ${r} 0 0 0 ${r} 0`}
        stroke="#0B1F3A"
        strokeWidth={0.9}
        fill="none"
        strokeDasharray="2.5 2.5"
      />
    </g>
  );
}

export default function FloorPlanSVG({ width, length, rooms }: Props) {
  const safeWidth = Math.max(width, 4);
  const safeLength = Math.max(length, 4);
  const safeRooms = Math.max(rooms, 1);

  const scale = 30;
  const W = safeWidth * scale;
  const L = safeLength * scale;
  const band = Math.min(W, L) * 0.22;
  const bedroomWidth = W / safeRooms;
  const midHeight = L - band * 2;

  const padLeft = 34;
  const padTop = 32;
  const vbW = W + padLeft + 12;
  const vbH = L + padTop + 34;

  return (
    <svg
      viewBox={`0 0 ${vbW} ${vbH}`}
      className="h-full w-full"
      style={{ background: "#ffffff" }}
    >
      {/* خط القياس العلوي (العرض) */}
      <line x1={padLeft} y1={padTop - 12} x2={padLeft + W} y2={padTop - 12} stroke="#334155" strokeWidth={0.8} />
      <line x1={padLeft} y1={padTop - 16} x2={padLeft} y2={padTop - 8} stroke="#334155" strokeWidth={0.8} />
      <line x1={padLeft + W} y1={padTop - 16} x2={padLeft + W} y2={padTop - 8} stroke="#334155" strokeWidth={0.8} />
      <text x={padLeft + W / 2} y={padTop - 18} textAnchor="middle" fontSize={11} fill="#334155">
        {ar(safeWidth)} م
      </text>

      {/* خط القياس الجانبي (الطول) */}
      <line x1={padLeft - 12} y1={padTop} x2={padLeft - 12} y2={padTop + L} stroke="#334155" strokeWidth={0.8} />
      <line x1={padLeft - 16} y1={padTop} x2={padLeft - 8} y2={padTop} stroke="#334155" strokeWidth={0.8} />
      <line x1={padLeft - 16} y1={padTop + L} x2={padLeft - 8} y2={padTop + L} stroke="#334155" strokeWidth={0.8} />
      <text
        x={padLeft - 20}
        y={padTop + L / 2}
        textAnchor="middle"
        fontSize={11}
        fill="#334155"
        transform={`rotate(-90 ${padLeft - 20} ${padTop + L / 2})`}
      >
        {ar(safeLength)} م
      </text>

      <g transform={`translate(${padLeft} ${padTop})`}>
        {/* الجدار الخارجي */}
        <rect x={0} y={0} width={W} height={L} fill="#ffffff" stroke="#0B1F3A" strokeWidth={4} />

        {/* الاستقبال */}
        <rect x={0} y={0} width={W} height={band} fill="#F8FAFC" stroke="#0B1F3A" strokeWidth={2} />
        <text x={W / 2} y={16} textAnchor="middle" fontSize={12} fill="#0B1F3A" fontWeight="bold">
          استقبال
        </text>
        <circle cx={W * 0.32} cy={band * 0.62} r={band * 0.24} fill="none" stroke="#0B1F3A" strokeWidth={1} />
        {[0, 90, 180, 270].map((deg) => {
          const rr = band * 0.24 + 7;
          const cx = W * 0.32 + rr * Math.cos((deg * Math.PI) / 180);
          const cy = band * 0.62 + rr * Math.sin((deg * Math.PI) / 180);
          return <circle key={deg} cx={cx} cy={cy} r={3.2} fill="none" stroke="#0B1F3A" strokeWidth={0.8} />;
        })}
        <Door x={W / 2} y={band} r={band * 0.35} rotate={0} />

        {/* المطبخ */}
        <rect x={0} y={band} width={band} height={midHeight} fill="#F8FAFC" stroke="#0B1F3A" strokeWidth={2} />
        <text
          x={band / 2}
          y={band + midHeight / 2 + 4}
          textAnchor="middle"
          fontSize={10}
          fill="#0B1F3A"
          transform={`rotate(-90 ${band / 2} ${band + midHeight / 2})`}
        >
          مطبخ
        </text>
        <rect x={4} y={band + 8} width={band - 8} height={10} fill="none" stroke="#0B1F3A" strokeWidth={0.8} />
        {[0, 1, 2, 3].map((i) => (
          <circle
            key={i}
            cx={8 + (i % 2) * (band - 16)}
            cy={band + 11 + Math.floor(i / 2) * 4}
            r={1.4}
            fill="#0B1F3A"
          />
        ))}
        <Door x={band} y={band + midHeight / 2} r={band * 0.35} rotate={90} />

        {/* الحمام */}
        <rect x={W - band} y={band} width={band} height={midHeight} fill="#F8FAFC" stroke="#0B1F3A" strokeWidth={2} />
        <text
          x={W - band / 2}
          y={band + midHeight / 2 + 4}
          textAnchor="middle"
          fontSize={10}
          fill="#0B1F3A"
          transform={`rotate(-90 ${W - band / 2} ${band + midHeight / 2})`}
        >
          حمام
        </text>
        <ellipse cx={W - band / 2} cy={band + 16} rx={band * 0.28} ry={7} fill="none" stroke="#0B1F3A" strokeWidth={0.8} />
        <rect x={W - band / 2 - 6} y={band + midHeight - 22} width={12} height={8} fill="none" stroke="#0B1F3A" strokeWidth={0.8} />
        <circle cx={W - band / 2} cy={band + midHeight - 18} r={2.5} fill="none" stroke="#0B1F3A" strokeWidth={0.7} />
        <Door x={W - band} y={band + midHeight / 2} r={band * 0.35} rotate={180} />

        {/* المنور المركزي */}
        <rect
          x={band}
          y={band}
          width={W - band * 2}
          height={midHeight}
          fill="#FDF6E3"
          stroke="#C9A24B"
          strokeWidth={2}
          strokeDasharray="5 4"
        />
        <text x={W / 2} y={band + midHeight / 2} textAnchor="middle" fontSize={11} fill="#8a6d1a">
          منور مركزي
        </text>

        {/* غرف النوم */}
        {Array.from({ length: safeRooms }).map((_, i) => {
          const cellX = i * bedroomWidth;
          const bedW = bedroomWidth * 0.55;
          const bedH = band * 0.55;
          const bedX = cellX + (bedroomWidth - bedW) / 2;
          const bedY = L - band + band * 0.15;
          return (
            <g key={i}>
              <rect x={cellX} y={L - band} width={bedroomWidth} height={band} fill="#F8FAFC" stroke="#0B1F3A" strokeWidth={2} />
              <text x={cellX + bedroomWidth / 2} y={L - 6} textAnchor="middle" fontSize={9} fill="#0B1F3A">
                غرفة {ar(i + 1)}
              </text>
              <rect x={bedX} y={bedY} width={bedW} height={bedH} fill="none" stroke="#0B1F3A" strokeWidth={0.9} />
              <line x1={bedX} y1={bedY + bedH * 0.25} x2={bedX + bedW} y2={bedY + bedH * 0.25} stroke="#0B1F3A" strokeWidth={0.7} />
              <Door x={cellX + bedroomWidth / 2} y={L - band} r={band * 0.3} rotate={180} />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
