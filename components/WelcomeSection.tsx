"use client";

import { useEffect, useState } from "react";

export default function WelcomeSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="welcome-section"
      className="relative w-full overflow-hidden bg-[#080407] text-white"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Central warm glow */}

        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "min(700px, 100vw)",
            height: "min(420px, 65vw)",
            background:
              "radial-gradient(ellipse, rgba(128,58,27,0.15) 0%, rgba(72,31,23,0.06) 42%, transparent 72%)",
            filter: "blur(55px)",
          }}
        />

        {/* Fine horizontal atmosphere */}

        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2"
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(255,180,100,0.08), transparent)",
          }}
        />

        {/* Top fade */}

        <div
          className="absolute inset-x-0 top-0 h-24"
          style={{
            background:
              "linear-gradient(to bottom, #080407, transparent)",
          }}
        />

        {/* Bottom fade */}

        <div
          className="absolute inset-x-0 bottom-0 h-24"
          style={{
            background:
              "linear-gradient(to top, #080407, transparent)",
          }}
        />

        {/* Grain */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* =====================================================
          STARS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 38 }).map((_, index) => {
          const left = (index * 47) % 100;
          const top = (index * 71) % 100;

          const size = index % 11 === 0 ? 2 : 1;

          return (
            <span
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity:
                  0.05 +
                  ((index * 17) % 24) / 100,
              }}
            />
          );
        })}
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="relative z-10 mx-auto flex w-full max-w-4xl justify-center px-5 py-16 sm:px-8 sm:py-20 md:py-24"
        style={{
          transform: `translateY(${Math.max(
            -8,
            Math.min(8, scrollY * -0.008)
          )}px)`,
        }}
      >
        {/* =================================================
            GLASS STORY PANEL
        ================================================== */}

        <div
          className="relative w-full overflow-hidden rounded-[28px] border border-white/[0.075] px-6 py-9 sm:px-10 sm:py-11 md:px-16 md:py-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012))",
            boxShadow:
              "0 25px 90px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.035)",
            backdropFilter: "blur(14px)",
          }}
        >
          {/* =================================================
              PANEL GLOW
          ================================================== */}

          <div
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 rounded-full"
            style={{
              width: "360px",
              height: "170px",
              background:
                "radial-gradient(ellipse, rgba(255,150,60,0.10), transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          {/* =================================================
              TOP DECORATION
          ================================================== */}

          <div className="relative flex items-center justify-center gap-3">
            <span
              className="h-px"
              style={{
                width: "42px",
                background:
                  "linear-gradient(to right, transparent, rgba(255,190,120,0.42))",
              }}
            />

            <span
              className="relative flex h-6 w-6 items-center justify-center"
            >
              <span
                className="absolute h-6 w-6 rounded-full"
                style={{
                  background:
                    "rgba(255,150,55,0.08)",
                  filter: "blur(6px)",
                }}
              />

              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background:
                    "rgba(255,200,130,0.9)",
                  boxShadow:
                    "0 0 14px rgba(255,160,60,0.85)",
                }}
              />
            </span>

            <span
              className="h-px"
              style={{
                width: "42px",
                background:
                  "linear-gradient(to left, transparent, rgba(255,190,120,0.42))",
              }}
            />
          </div>

          {/* =================================================
              LABEL
          ================================================== */}

          <div className="relative mt-6 text-center">
            <p
              style={{
                margin: 0,
                fontFamily:
                  "Georgia, Times New Roman, serif",
                fontSize:
                  "clamp(9px, 0.75vw, 12px)",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color:
                  "rgba(255,255,255,0.42)",
              }}
            >
              A new chapter begins
            </p>
          </div>

          {/* =================================================
              MINI LANTERN
          ================================================== */}

          <div className="relative mx-auto mt-6 flex justify-center">
            <div
              className="relative"
              style={{
                width:
                  "clamp(42px, 5vw, 58px)",
                height:
                  "clamp(55px, 7vw, 74px)",
                animation:
                  "welcomeMiniLantern 4.5s ease-in-out infinite",
              }}
            >
              {/* Glow */}

              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width: "150%",
                  height: "150%",
                  background:
                    "rgba(255,145,55,0.12)",
                  filter: "blur(22px)",
                }}
              />

              <img
                src="/images/lantern.png"
                alt=""
                draggable={false}
                className="relative z-10 h-full w-full object-contain"
                style={{
                  filter:
                    "drop-shadow(0 0 18px rgba(255,150,55,0.58))",
                }}
              />
            </div>
          </div>

          {/* =================================================
              MAIN MESSAGE
          ================================================== */}

          <div className="relative mt-6 text-center sm:mt-7">
            <h2
              style={{
                margin: 0,
                fontFamily:
                  "Georgia, Times New Roman, serif",
                fontSize:
                  "clamp(1.65rem, 3.4vw, 3.3rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.045em",
                color:
                  "rgba(255,255,255,0.93)",
              }}
            >
              Two hearts.
            </h2>

            <p
              className="mt-1"
              style={{
                marginBottom: 0,
                fontFamily:
                  "Georgia, Times New Roman, serif",
                fontSize:
                  "clamp(1.35rem, 2.7vw, 2.6rem)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.1,
                letterSpacing: "-0.035em",
                color:
                  "rgba(255,190,120,0.82)",
              }}
            >
              One journey.
            </p>
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="relative mx-auto mt-5 max-w-md text-center"
            style={{
              marginBottom: 0,
              fontFamily:
                "Georgia, Times New Roman, serif",
              fontSize:
                "clamp(11px, 0.95vw, 14px)",
              lineHeight: 1.75,
              letterSpacing: "0.035em",
              color:
                "rgba(255,255,255,0.40)",
            }}
          >
            And a lifetime of beautiful moments
            waiting to unfold.
          </p>

          {/* =================================================
              BOTTOM DIVIDER
          ================================================== */}

          <div className="relative mt-7 flex items-center justify-center">
            <span
              className="h-px"
              style={{
                width:
                  "clamp(70px, 13vw, 130px)",
                background:
                  "linear-gradient(to right, transparent, rgba(255,190,120,0.24))",
              }}
            />

            <span
              className="mx-3"
              style={{
                fontFamily:
                  "Vartensie, Georgia, serif",
                fontSize: "20px",
                color:
                  "rgba(255,190,120,0.52)",
              }}
            >
              V · S
            </span>

            <span
              className="h-px"
              style={{
                width:
                  "clamp(70px, 13vw, 130px)",
                background:
                  "linear-gradient(to left, transparent, rgba(255,190,120,0.24))",
              }}
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATION
      ====================================================== */}

      <style>{`
        @keyframes welcomeMiniLantern {
          0%,
          100% {
            transform: translateY(0) rotate(-2deg);
          }

          50% {
            transform: translateY(-7px) rotate(2deg);
          }
        }

        @media (max-width: 640px) {
          @keyframes welcomeMiniLantern {
            0%,
            100% {
              transform: translateY(0) rotate(-1.5deg);
            }

            50% {
              transform: translateY(-5px) rotate(1.5deg);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}