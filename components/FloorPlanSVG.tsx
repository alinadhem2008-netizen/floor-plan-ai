"use client";

type Props = {
  width: number;
  length: number;
  rooms: number;
};

export default function FloorPlanSVG({ width, length, rooms }: Props) {
  const safeWidth = Math.max(width, 4);
  const safeLength = Math.max(length, 4);
  const safeRooms = Math.max(rooms, 1);

  const scale = 28;
  const W = safeWidth * scale;
  const L = safeLength * scale;
  const band = Math.min(W, L) * 0.22;
  const bedroomWidth = (W - band * 2) / safeRooms;
  const labelY = L + 26;

  return (
    <svg
      viewBox={`0 0 ${W} ${labelY + 10}`}
      className="h-full w-full"
      style={{ background: "#ffffff" }}
    >
      {/* الجدار الخارجي */}
      <rect x={0} y={0} width={W} height={L} fill="#ffffff" stroke="#0B1F3A" strokeWidth={4} />

      {/* المطبخ - يسار */}
      <rect x={0} y={0} width={band} height={L} fill="#F8FAFC" stroke="#0B1F3A" strokeWidth={2} />
      <text
        x={band / 2}
        y={L / 2}
        textAnchor="middle"
        fontSize={10}
        fill="#0B1F3A"
        transform={`rotate(-90 ${band / 2} ${L / 2})`}
      >
        مطبخ
      </text>

      {/* الحمام - يمين */}
      <rect x={W - band} y={0} width={band} height={L} fill="#F8FAFC" stroke="#0B1F3A" strokeWidth={2} />
      <text
        x={W - band / 2}
        y={L / 2}
        textAnchor="middle"
        fontSize={10}
        fill="#0B1F3A"
        transform={`rotate(-90 ${W - band / 2} ${L / 2})`}
      >
        حمام
      </text>

      {/* الاستقبال - فوق */}
      <rect x={band} y={0} width={W - band * 2} height={band} fill="#F8FAFC" stroke="#0B1F3A" strokeWidth={2} />
      <text x={W / 2} y={band / 2 + 4} textAnchor="middle" fontSize={11} fill="#0B1F3A">
        استقبال
      </text>

      {/* غرف النوم - تحت */}
      {Array.from({ length: safeRooms }).map((_, i) => (
        <g key={i}>
          <rect
            x={band + i * bedroomWidth}
            y={L - band}
            width={bedroomWidth}
            height={band}
            fill="#F8FAFC"
            stroke="#0B1F3A"
            strokeWidth={2}
          />
          <text
            x={band + i * bedroomWidth + bedroomWidth / 2}
            y={L - band / 2 + 4}
            textAnchor="middle"
            fontSize={9}
            fill="#0B1F3A"
          >
            غرفة {i + 1}
          </text>
        </g>
      ))}

      {/* المنور المركزي */}
      <rect
        x={band}
        y={band}
        width={W - band * 2}
        height={L - band * 2}
        fill="#FDF6E3"
        stroke="#C9A24B"
        strokeWidth={2}
        strokeDasharray="5 4"
      />
      <text x={W / 2} y={L / 2} textAnchor="middle" fontSize={11} fill="#8a6d1a">
        منور مركزي
      </text>

      {/* الأبعاد */}
      <text x={W / 2} y={labelY} textAnchor="middle" fontSize={12} fill="#334155" fontWeight="bold">
        {safeWidth} م × {safeLength} م
      </text>
    </svg>
  );
}
