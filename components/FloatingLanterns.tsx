"use client";

type Lantern = {
  left: string;
  size: string;
  duration: string;
  delay: string;
  drift: string;
  opacity: number;
  blur?: number;
  zIndex: number;
};

const lanterns: Lantern[] = [
  {
    left: "4%",
    size: "72px",
    duration: "15s",
    delay: "-4s",
    drift: "42px",
    opacity: 0.9,
    zIndex: 20,
  },
  {
    left: "13%",
    size: "38px",
    duration: "19s",
    delay: "-12s",
    drift: "-30px",
    opacity: 0.58,
    blur: 0.2,
    zIndex: 5,
  },
  {
    left: "23%",
    size: "55px",
    duration: "17s",
    delay: "-8s",
    drift: "35px",
    opacity: 0.72,
    zIndex: 8,
  },
  {
    left: "34%",
    size: "32px",
    duration: "21s",
    delay: "-16s",
    drift: "-40px",
    opacity: 0.48,
    zIndex: 4,
  },
  {
    left: "44%",
    size: "78px",
    duration: "18s",
    delay: "-10s",
    drift: "28px",
    opacity: 0.92,
    zIndex: 25,
  },
  {
    left: "56%",
    size: "42px",
    duration: "16s",
    delay: "-2s",
    drift: "-32px",
    opacity: 0.62,
    zIndex: 7,
  },
  {
    left: "66%",
    size: "64px",
    duration: "20s",
    delay: "-14s",
    drift: "38px",
    opacity: 0.82,
    zIndex: 18,
  },
  {
    left: "77%",
    size: "35px",
    duration: "17s",
    delay: "-7s",
    drift: "-35px",
    opacity: 0.50,
    zIndex: 5,
  },
  {
    left: "87%",
    size: "70px",
    duration: "19s",
    delay: "-11s",
    drift: "30px",
    opacity: 0.86,
    zIndex: 22,
  },
  {
    left: "95%",
    size: "40px",
    duration: "22s",
    delay: "-18s",
    drift: "-25px",
    opacity: 0.55,
    zIndex: 6,
  },
];

export default function FloatingLanterns() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{
        zIndex: 35,
      }}
      aria-hidden="true"
    >
      {lanterns.map((lantern, index) => (
        <div
          key={index}
          className="absolute bottom-[-140px]"
          style={{
            left: lantern.left,
            width: lantern.size,
            height: lantern.size,
            opacity: lantern.opacity,
            zIndex: lantern.zIndex,
            filter: lantern.blur
              ? `blur(${lantern.blur}px)`
              : undefined,
            animation: `floatingLanternRise ${lantern.duration} linear ${lantern.delay} infinite`,
            willChange: "transform",
          }}
        >
          {/* Warm atmospheric glow */}

          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: "145%",
              height: "145%",
              background:
                "radial-gradient(circle, rgba(255,145,45,0.20), transparent 68%)",
              filter: "blur(18px)",
            }}
          />

          {/* Lantern */}

          <img
            src="/images/lantern.png"
            alt=""
            draggable={false}
            className="relative z-10 h-full w-full object-contain"
            style={{
              filter:
                "drop-shadow(0 0 16px rgba(255,145,45,0.50))",
            }}
          />
        </div>
      ))}

      <style>{`
        @keyframes floatingLanternRise {
          0% {
            transform:
              translate3d(0, 0, 0)
              rotate(-3deg)
              scale(0.82);
          }

          12% {
            transform:
              translate3d(var(--lantern-drift, 20px), -12vh, 0)
              rotate(2deg)
              scale(0.88);
          }

          35% {
            transform:
              translate3d(calc(var(--lantern-drift, 20px) * -0.65), -35vh, 0)
              rotate(-2deg)
              scale(0.94);
          }

          58% {
            transform:
              translate3d(var(--lantern-drift, 20px), -58vh, 0)
              rotate(3deg)
              scale(1);
          }

          78% {
            transform:
              translate3d(calc(var(--lantern-drift, 20px) * -0.45), -78vh, 0)
              rotate(-2deg)
              scale(0.96);
          }

          100% {
            transform:
              translate3d(0, -125vh, 0)
              rotate(3deg)
              scale(0.86);
          }
        }

        @media (max-width: 767px) {
          @keyframes floatingLanternRise {
            0% {
              transform:
                translate3d(0, 0, 0)
                rotate(-2deg)
                scale(0.78);
            }

            20% {
              transform:
                translate3d(18px, -20vh, 0)
                rotate(2deg)
                scale(0.86);
            }

            45% {
              transform:
                translate3d(-12px, -45vh, 0)
                rotate(-2deg)
                scale(0.92);
            }

            70% {
              transform:
                translate3d(14px, -70vh, 0)
                rotate(2deg)
                scale(0.96);
            }

            100% {
              transform:
                translate3d(0, -125vh, 0)
                rotate(-2deg)
                scale(0.82);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [aria-hidden="true"] * {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}