import { motion } from "framer-motion";

function generateCirclePoints(radius, count, centerX = 250, centerY = 250) {
  const points = [];
  for (let i = 0; i < count; i++) {
    const angle = (2 * Math.PI * i) / count;
    points.push({
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    });
  }
  return points;
}

export default function HeroTigerAnimation() {
  const center = [{ x: 250, y: 250, color: "black" }];
  const ring1 = generateCirclePoints(60, 6).map((p) => ({ ...p, color: "red" }));
  const ring2 = generateCirclePoints(120, 12).map((p) => ({ ...p, color: "purple" }));
  const ring3 = generateCirclePoints(180, 18).map((p) => ({ ...p, color: "blue" }));

  const allRings = [center, ring1, ring2, ring3];

  return (
    <svg width="500" height="500" viewBox="0 0 500 500">
      {/* Lines connecting nodes */}
      {allRings.map((ring, ri) =>
        ring.map((node, i) => {
          // Connect each node to the center
          const cx = 250;
          const cy = 250;

          // Connect to neighbor in the same ring
          const next = ring[(i + 1) % ring.length];

          return (
            <g key={`lines-${ri}-${i}`}>
              {/* Line to center */}
              <motion.line
                x1={node.x}
                y1={node.y}
                x2={cx}
                y2={cy}
                stroke="gray"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: ri * 0.5 + i * 0.1, duration: 0.6 }}
              />

              {/* Line to neighbor */}
              {next && (
                <motion.line
                  x1={node.x}
                  y1={node.y}
                  x2={next.x}
                  y2={next.y}
                  stroke="gray"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: ri * 0.5 + i * 0.15, duration: 0.6 }}
                />
              )}
            </g>
          );
        })
      )}

      {/* Dots */}
      {allRings.map((ring, ri) =>
        ring.map((node, i) => (
          <motion.circle
            key={`dot-${ri}-${i}`}
            cx={node.x}
            cy={node.y}
            r="6"
            fill={node.color}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: ri * 0.5 + i * 0.1, duration: 0.4 }}
          />
        ))
      )}
    </svg>
  );
}
