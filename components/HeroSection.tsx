"use client";

import { useEffect, useState } from "react";

/* ============================================================
   BACKGROUND LANTERNS
============================================================ */

const backgroundLanterns = [
  { left: "2%", size: 48, duration: 20, delay: 0 },
  { left: "8%", size: 32, duration: 25, delay: 3 },
  { left: "14%", size: 44, duration: 22, delay: 6 },
  { left: "20%", size: 28, duration: 28, delay: 8 },

  { left: "26%", size: 56, duration: 21, delay: 1 },
  { left: "32%", size: 34, duration: 26, delay: 5 },
  { left: "38%", size: 44, duration: 23, delay: 9 },
  { left: "44%", size: 29, duration: 30, delay: 13 },

  { left: "50%", size: 36, duration: 25, delay: 3 },
  { left: "56%", size: 48, duration: 22, delay: 7 },
  { left: "62%", size: 31, duration: 27, delay: 11 },
  { left: "68%", size: 42, duration: 24, delay: 2 },

  { left: "74%", size: 55, duration: 21, delay: 6 },
  { left: "80%", size: 34, duration: 27, delay: 10 },
  { left: "86%", size: 46, duration: 23, delay: 4 },
  { left: "92%", size: 32, duration: 29, delay: 8 },
  { left: "97%", size: 26, duration: 32, delay: 15 },

  { left: "5%", size: 25, duration: 34, delay: 17 },
  { left: "18%", size: 27, duration: 31, delay: 14 },
  { left: "35%", size: 24, duration: 36, delay: 20 },
  { left: "48%", size: 26, duration: 33, delay: 18 },
  { left: "65%", size: 24, duration: 35, delay: 21 },
  { left: "83%", size: 27, duration: 32, delay: 16 },
];

/* ============================================================
   FOREGROUND LANTERNS
============================================================ */

const foregroundLanterns = [
  {
    left: "-6%",
    size: 170,
    duration: 29,
    delay: 1,
  },
  {
    left: "13%",
    size: 110,
    duration: 25,
    delay: 8,
  },
  {
    left: "34%",
    size: 195,
    duration: 31,
    delay: 13,
  },
  {
    left: "60%",
    size: 135,
    duration: 27,
    delay: 5,
  },
  {
    left: "78%",
    size: 185,
    duration: 30,
    delay: 16,
  },
  {
    left: "94%",
    size: 125,
    duration: 24,
    delay: 10,
  },
];

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#050308] text-white">
      {/* =====================================================
          DESKTOP HERO BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/hero.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />

        {/* Left side dark gradient for typography */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(3,2,8,0.78) 0%, rgba(3,2,8,0.52) 25%, rgba(3,2,8,0.16) 52%, rgba(3,2,8,0.10) 100%)",
          }}
        />

        {/* Bottom cinematic fade */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(3,2,8,0.16) 0%, transparent 48%, rgba(5,2,8,0.76) 100%)",
          }}
        />

        {/* Warm glow */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 35% 50%, rgba(255,145,58,0.10) 0%, transparent 48%)",
          }}
        />
      </div>

      {/* =====================================================
          MOBILE HERO BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 block md:hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/hero-mobile.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(3,2,8,0.24) 0%, rgba(4,2,8,0.12) 40%, rgba(5,2,8,0.50) 78%, rgba(5,2,8,0.80) 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 52%, rgba(255,145,58,0.10) 0%, transparent 52%)",
          }}
        />
      </div>

      {/* =====================================================
          ATMOSPHERIC GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "min(90vw, 800px)",
            height: "min(90vw, 800px)",
            background:
              "radial-gradient(circle, rgba(255,160,70,0.10) 0%, rgba(130,70,30,0.04) 38%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        <div
          className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 rounded-full"
          style={{
            width: "min(1200px, 100vw)",
            height: "40vh",
            background:
              "radial-gradient(ellipse, rgba(110,50,28,0.16) 0%, transparent 70%)",
            filter: "blur(75px)",
          }}
        />
      </div>

      {/* =====================================================
          STARS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[2]">
        {Array.from({ length: 90 }).map((_, index) => {
          const left = (index * 37) % 100;
          const top = (index * 61) % 100;
          const size = index % 8 === 0 ? 2 : 1;

          return (
            <span
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: 0.12 + ((index * 13) % 45) / 100,
              }}
            />
          );
        })}
      </div>

      {/* =====================================================
          BACKGROUND LANTERNS

          Fully opaque.
          Bottom -> top.
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {backgroundLanterns.map((lantern, index) => {
          return (
            <div
              key={`background-lantern-${index}`}
              className="absolute left-0 top-0"
              style={{
                left: lantern.left,
              }}
            >
              <div
                className="relative"
                style={{
                  width: `${lantern.size}px`,
                  height: `${lantern.size * 1.28}px`,
                  opacity: 1,

                  animationName: "lanternRise",
                  animationDuration: `${lantern.duration}s`,
                  animationTimingFunction: "linear",
                  animationDelay: `${lantern.delay}s`,
                  animationIterationCount: "infinite",
                  animationFillMode: "both",

                  willChange: "transform",
                }}
              >
                {/* Glow */}

                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: `${lantern.size * 0.82}px`,
                    height: `${lantern.size * 0.82}px`,
                    background: "rgba(255,155,55,0.42)",
                    filter: "blur(18px)",
                  }}
                />

                {/* Lantern */}

                <img
                  src="/images/lantern.png"
                  alt=""
                  draggable={false}
                  className="relative z-10 h-full w-full select-none object-contain"
                  style={{
                    opacity: 1,
                    filter:
                      "drop-shadow(0 0 16px rgba(255,145,45,0.50))",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* =====================================================
          HERO CONTENT

          DESKTOP:
          LEFT

          MOBILE:
          CENTER
      ====================================================== */}

      <div
        className="
          relative z-20
          flex min-h-[100svh]
          items-center
          px-5
          text-center

          md:items-center
          md:justify-start
          md:px-[7vw]

          lg:px-[9vw]
        "
      >
        <div
          className="
            flex w-full
            flex-col
            items-center
            md:w-[48%]
            md:items-start
            md:text-left
          "
        >
          {/* =================================================
              INTRO TEXT
          ================================================== */}

          <div
            style={{
              transform: `translateY(${scrollY * 0.10}px)`,
              opacity: Math.max(0, 1 - scrollY / 450),

              /*
                IMPORTANT:
                More bottom space so Vignesh never touches
                the intro text.
              */
              marginBottom: "clamp(22px, 3vw, 34px)",
            }}
          >
            <p
              style={{
                fontFamily: "Georgia, Times New Roman, serif",
                fontSize: "clamp(10px, 1vw, 14px)",
                fontWeight: 400,
                letterSpacing: "0.16em",
                color: "rgba(255,255,255,0.88)",
                margin: 0,
                lineHeight: 1.5,
                whiteSpace: "nowrap",
                textShadow: "0 2px 18px rgba(0,0,0,0.85)",
              }}
            >
              Where two names become one
            </p>
          </div>

          {/* =================================================
              SHARED NAME MARK

              Clean editorial alignment:
              Vigne  |  SH  |  obanna
              One shared SH connects both names.
          ================================================== */}

          <div
            className="relative"
            style={{
              transform: `translateY(${scrollY * 0.08}px)`,
              opacity: Math.max(0, 1 - scrollY / 550),
              paddingTop: "8px",
              paddingBottom: "6px",
              width: "100%",
              maxWidth: "900px",
            }}
          >
            <div
              className="hero-name-grid relative grid items-end"
              style={{
                gridTemplateColumns:
                  "minmax(0, 1fr) auto minmax(0, 1fr)",
                columnGap: "clamp(2px, 0.7vw, 10px)",
                minHeight: "clamp(150px, 17vw, 245px)",
                overflow: "visible",
              }}
            >
              {/* VIGNE — left / slightly higher */}

              <div
                className="hero-vigne"
                style={{
                  position: "relative",
                  zIndex: 2,
                  alignSelf: "start",
                  paddingTop: "clamp(8px, 1.2vw, 18px)",
                  minWidth: 0,
                }}
              >
                <h1
                  style={{
                    fontFamily: "Vartensie, cursive",
                    fontSize: "clamp(3.2rem, 6.1vw, 6.5rem)",
                    fontWeight: 400,
                    lineHeight: 0.84,
                    letterSpacing: "-0.045em",
                    margin: 0,
                    color: "#ffffff",
                    whiteSpace: "nowrap",
                    textShadow:
                      "0 4px 25px rgba(0,0,0,0.65), 0 0 35px rgba(0,0,0,0.30)",
                  }}
                >
                  Vigne
                </h1>
              </div>

              {/* SH — one shared central bridge */}

              <div
                className="hero-sh"
                aria-label="SH"
                style={{
                  position: "relative",
                  zIndex: 3,
                  alignSelf: "center",
                  transform:
                    "translateY(clamp(8px, 1vw, 15px))",
                  margin: 0,
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "Vartensie, cursive",
                    fontSize: "clamp(6.2rem, 11vw, 11.2rem)",
                    fontWeight: 400,
                    lineHeight: 0.68,
                    letterSpacing: "-0.075em",
                    color: "#ffffff",
                    whiteSpace: "nowrap",
                    marginLeft: "40px",
                    textShadow:
                      "0 5px 28px rgba(0,0,0,0.70), 0 0 38px rgba(0,0,0,0.30)",
                  }}
                >
                  SH
                </span>
              </div>

              {/* OBANNA — right / slightly lower */}

              <div
                className="hero-obanna"
                style={{
                  position: "relative",
                  zIndex: 2,
                  alignSelf: "end",
                  paddingBottom: "clamp(30px, 3vw, 40px)",
                  paddingRight: "clamp(4px, 0.8vw, 40px)",
                  minWidth: 0,
                }}
              >
                <h2
                  style={{
                    fontFamily: "Vartensie, cursive",
                    fontSize: "clamp(2.9rem, 5.4vw, 5.7rem)",
                    fontWeight: 400,
                    lineHeight: 0.84,
                    letterSpacing: "-0.045em",
                    margin: 0,
                    color: "#ffffff",
                    whiteSpace: "nowrap",
                    textShadow:
                      "0 4px 25px rgba(0,0,0,0.65), 0 0 35px rgba(0,0,0,0.30)",
                  }}
                >
                  obanna
                </h2>
              </div>
            </div>

            {/* Shared-name caption — aligned with the composition */}

            <div
              className="mt-5 flex items-center gap-3 md:mt-6"
              style={{
                justifyContent: "center",
                width: "100%",
              }}
            >
              <span
                className="h-px"
                style={{
                  width: "clamp(28px, 4vw, 58px)",
                  background:
                    "rgba(255,255,255,0.40)",
                }}
              />

              <span
                style={{
                  fontFamily:
                    "Georgia, Times New Roman, serif",
                  fontSize: "clamp(9px, 0.85vw, 12px)",
                  letterSpacing: "0.18em",
                  lineHeight: 1.4,
                  color:
                    "rgba(255,255,255,0.78)",
                  whiteSpace: "nowrap",
                  textShadow:
                    "0 2px 15px rgba(0,0,0,0.8)",
                }}
              >
                two names · one light
              </span>

              <span
                className="h-px"
                style={{
                  width: "clamp(28px, 4vw, 58px)",
                  background:
                    "rgba(255,255,255,0.40)",
                }}
              />
            </div>
          </div>

          {/* =================================================
              WEDDING DATE
          ================================================== */}

          <div
            style={{
              transform: `translateY(${scrollY * 0.16}px)`,
              opacity: Math.max(0, 1 - scrollY / 400),

              /*
                Separate date from Shobanna.
              */
              marginTop: "clamp(36px, 4vw, 52px)",
            }}
          >
            <div
              className="
                flex
                items-center
                justify-center
                gap-3
                sm:gap-4
                md:justify-start
              "
            >
              <span
                className="h-px"
                style={{
                  width: "clamp(22px, 4vw, 55px)",
                  background: "rgba(255,255,255,0.42)",
                }}
              />

              <span
                className="whitespace-nowrap"
                style={{
                  fontFamily: "Georgia, Times New Roman, serif",
                  fontSize: "clamp(10px, 1vw, 13px)",
                  letterSpacing: "0.14em",
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.86)",
                  textShadow: "0 2px 15px rgba(0,0,0,0.8)",
                }}
              >
                13 november 2026
              </span>

              <span
                className="h-px"
                style={{
                  width: "clamp(22px, 4vw, 55px)",
                  background: "rgba(255,255,255,0.42)",
                }}
              />
            </div>

            <p
              style={{
                fontFamily: "Georgia, Times New Roman, serif",
                margin: "12px 0 0",
                fontSize: "clamp(10px, 0.9vw, 12px)",
                letterSpacing: "0.18em",
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.70)",
                textAlign: "center",
                textShadow: "0 2px 15px rgba(0,0,0,0.8)",
              }}
            >
              Chennai
            </p>
          </div>
        </div>

        {/* ===================================================
            SCROLL INDICATOR
        ==================================================== */}

        <div
          className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center sm:bottom-9"
          style={{
            opacity: Math.max(0, 1 - scrollY / 250),
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, Times New Roman, serif",
              fontSize: "clamp(9px, 0.8vw, 11px)",
              letterSpacing: "0.20em",
              color: "rgba(255,255,255,0.68)",
              whiteSpace: "nowrap",
              textShadow: "0 2px 12px rgba(0,0,0,0.8)",
            }}
          >
            Scroll to enter
          </span>

          <div
            className="relative mt-3 overflow-hidden"
            style={{
              width: "1px",
              height: "46px",
              background: "rgba(255,255,255,0.24)",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "1px",
                height: "18px",
                background: "rgba(255,255,255,0.88)",
                animation: "scrollLine 2.2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          FOREGROUND LANTERNS

          These are above the text.
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[30] overflow-hidden">
        {foregroundLanterns.map((lantern, index) => {
          return (
            <div
              key={`foreground-lantern-${index}`}
              className="absolute left-0 top-0"
              style={{
                left: lantern.left,
              }}
            >
              <div
                className="relative"
                style={{
                  width: `${lantern.size}px`,
                  height: `${lantern.size * 1.28}px`,
                  opacity: 1,

                  animationName: "lanternRiseForeground",
                  animationDuration: `${lantern.duration}s`,
                  animationTimingFunction: "linear",
                  animationDelay: `${lantern.delay}s`,
                  animationIterationCount: "infinite",
                  animationFillMode: "both",

                  willChange: "transform",
                }}
              >
                {/* Large glow */}

                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: `${lantern.size * 0.95}px`,
                    height: `${lantern.size * 0.95}px`,
                    background: "rgba(255,150,45,0.52)",
                    filter: "blur(32px)",
                  }}
                />

                {/* Inner glow */}

                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: `${lantern.size * 0.45}px`,
                    height: `${lantern.size * 0.45}px`,
                    background: "rgba(255,200,105,0.30)",
                    filter: "blur(18px)",
                  }}
                />

                {/* Lantern */}

                <img
                  src="/images/lantern.png"
                  alt=""
                  draggable={false}
                  className="relative z-10 h-full w-full select-none object-contain"
                  style={{
                    opacity: 1,
                    filter:
                      "drop-shadow(0 0 22px rgba(255,145,45,0.55))",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* =====================================================
          BOTTOM ATMOSPHERIC FADE
      ====================================================== */}

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[25]"
        style={{
          height: "160px",
          background:
            "linear-gradient(to top, rgba(5,2,8,0.72) 0%, rgba(5,2,8,0.25) 45%, transparent 100%)",
        }}
      />

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        /* ==================================================
           BACKGROUND LANTERNS
        ================================================== */

        @keyframes lanternRise {
          0% {
            transform: translate3d(0, 120vh, 0) rotate(-2deg);
          }

          12% {
            transform: translate3d(5px, 94vh, 0) rotate(1deg);
          }

          25% {
            transform: translate3d(-5px, 68vh, 0) rotate(2deg);
          }

          40% {
            transform: translate3d(7px, 42vh, 0) rotate(-1deg);
          }

          55% {
            transform: translate3d(-6px, 16vh, 0) rotate(2deg);
          }

          70% {
            transform: translate3d(6px, -10vh, 0) rotate(-1deg);
          }

          85% {
            transform: translate3d(-5px, -40vh, 0) rotate(2deg);
          }

          100% {
            transform: translate3d(4px, -78vh, 0) rotate(-1deg);
          }
        }

        /* ==================================================
           FOREGROUND LANTERNS
        ================================================== */

        @keyframes lanternRiseForeground {
          0% {
            transform: translate3d(-8px, 125vh, 0) rotate(-4deg);
          }

          12% {
            transform: translate3d(13px, 96vh, 0) rotate(2deg);
          }

          27% {
            transform: translate3d(-15px, 65vh, 0) rotate(-2deg);
          }

          42% {
            transform: translate3d(16px, 36vh, 0) rotate(3deg);
          }

          57% {
            transform: translate3d(-11px, 8vh, 0) rotate(-2deg);
          }

          72% {
            transform: translate3d(15px, -22vh, 0) rotate(2deg);
          }

          87% {
            transform: translate3d(-12px, -54vh, 0) rotate(-3deg);
          }

          100% {
            transform: translate3d(8px, -86vh, 0) rotate(2deg);
          }
        }

        /* ==================================================
           SCROLL LINE
        ================================================== */

        @keyframes scrollLine {
          0% {
            transform: translateY(-120%);
            opacity: 0;
          }

          25% {
            opacity: 1;
          }

          70% {
            opacity: 1;
          }

          100% {
            transform: translateY(270%);
            opacity: 0;
          }
        }

        /* ==================================================
           MOBILE
        ================================================== */

        @media (max-width: 767px) {
          @keyframes lanternRise {
            0% {
              transform: translate3d(0, 125vh, 0) rotate(-2deg);
            }

            15% {
              transform: translate3d(4px, 92vh, 0) rotate(1deg);
            }

            30% {
              transform: translate3d(-4px, 62vh, 0) rotate(2deg);
            }

            45% {
              transform: translate3d(5px, 34vh, 0) rotate(-1deg);
            }

            60% {
              transform: translate3d(-4px, 7vh, 0) rotate(2deg);
            }

            75% {
              transform: translate3d(5px, -22vh, 0) rotate(-1deg);
            }

            90% {
              transform: translate3d(-4px, -52vh, 0) rotate(2deg);
            }

            100% {
              transform: translate3d(3px, -82vh, 0) rotate(-1deg);
            }
          }

          @keyframes lanternRiseForeground {
            0% {
              transform: translate3d(-5px, 125vh, 0) rotate(-3deg);
            }

            15% {
              transform: translate3d(7px, 92vh, 0) rotate(2deg);
            }

            30% {
              transform: translate3d(-8px, 62vh, 0) rotate(-2deg);
            }

            45% {
              transform: translate3d(8px, 33vh, 0) rotate(2deg);
            }

            60% {
              transform: translate3d(-6px, 6vh, 0) rotate(-2deg);
            }

            75% {
              transform: translate3d(8px, -24vh, 0) rotate(2deg);
            }

            90% {
              transform: translate3d(-6px, -55vh, 0) rotate(-2deg);
            }

            100% {
              transform: translate3d(5px, -87vh, 0) rotate(2deg);
            }
          }
        }


        /* ==================================================
           MOBILE NAME COMPOSITION
           Keep desktop layout unchanged.
        ================================================== */

        @media (max-width: 767px) {
          .hero-name-grid {
            display: grid !important;
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto auto !important;
            min-height: 265px !important;
            width: 100% !important;
            row-gap: 0 !important;
          }

          .hero-vigne {
            grid-column: 1 !important;
            grid-row: 1 !important;
            justify-self: start !important;
            align-self: start !important;
            padding-top: 0 !important;
            padding-left: 8px !important;
          }

          .hero-vigne h1 {
            font-size: clamp(3.1rem, 16vw, 4.8rem) !important;
            line-height: 0.82 !important;
          }

          .hero-sh {
            grid-column: 1 !important;
            grid-row: 2 !important;
            justify-self: center !important;
            align-self: center !important;
            transform: translateY(-8px) !important;
          }

          .hero-sh span {
            font-size: clamp(6rem, 27vw, 8.5rem) !important;
            line-height: 0.65 !important;
            margin-left: 0 !important;
          }

          @media (max-width: 767px) {
  .hero-obanna {
    grid-column: 1 !important;
    grid-row: 3 !important;
    justify-self: end !important;
    align-self: end !important;
    padding-right: 8px !important;
    padding-bottom: 10px !important;
  }
}

          .hero-obanna h2 {
            font-size: clamp(2.8rem, 14vw, 4.5rem) !important;
            line-height: 0.82 !important;
          }
        }

        /* ==================================================
           REDUCED MOTION
        ================================================== */

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