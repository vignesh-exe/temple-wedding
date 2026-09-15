"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const WEDDING_DATE = new Date(
  "2026-11-13T00:00:00+05:30"
).getTime();

function calculateTimeLeft(): TimeLeft {
  const difference = WEDDING_DATE - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(
      difference / (1000 * 60 * 60 * 24)
    ),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

function formatNumber(value: number) {
  return String(value).padStart(2, "0");
}

export default function CountdownSection() {
  /*
   * Start with a stable value so the server-rendered HTML
   * matches the first client render.
   */
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [visible, setVisible] = useState(false);

  /*
   * Calculate the actual countdown only after hydration.
   */
  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft());
    };

    updateCountdown();

    const timer = setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    const element = document.getElementById(
      "countdown-section"
    );

    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const units = [
    {
      value: timeLeft.days,
      label: "days",
    },
    {
      value: timeLeft.hours,
      label: "hours",
    },
    {
      value: timeLeft.minutes,
      label: "minutes",
    },
    {
      value: timeLeft.seconds,
      label: "seconds",
    },
  ];

  return (
    <section
      id="countdown-section"
      className="relative min-h-[90vh] w-full overflow-hidden bg-[#070408] text-white"
    >
      {/* =====================================================
          ATMOSPHERIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "min(900px, 130vw)",
            height: "min(900px, 130vw)",
            background:
              "radial-gradient(circle, rgba(132,62,27,0.15) 0%, rgba(75,31,23,0.07) 35%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.22) 65%, rgba(0,0,0,0.65) 100%)",
          }}
        />
      </div>

      {/* =====================================================
          STARS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 65 }).map((_, index) => {
          const left = (index * 47) % 100;
          const top = (index * 67) % 100;

          return (
            <span
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: index % 11 === 0 ? "2px" : "1px",
                height: index % 11 === 0 ? "2px" : "1px",
                opacity:
                  0.08 + ((index * 13) % 30) / 100,
              }}
            />
          );
        })}
      </div>

      {/* =====================================================
          FLOATING LANTERNS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Large left lantern */}

        <div
          className="absolute left-[-20px] top-[15%] sm:left-[5%]"
          style={{
            width: "clamp(65px, 8vw, 105px)",
            animation:
              "countdownLanternLeft 7s ease-in-out infinite",
          }}
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: "130%",
              height: "130%",
              background:
                "rgba(255,150,55,0.18)",
              filter: "blur(28px)",
            }}
          />

          <img
            src="/images/lantern.png"
            alt=""
            draggable={false}
            className="relative z-10 w-full object-contain"
            style={{
              filter:
                "drop-shadow(0 0 22px rgba(255,145,45,0.55))",
            }}
          />
        </div>

        {/* Right lantern */}

        <div
          className="absolute right-[-15px] top-[63%] sm:right-[7%]"
          style={{
            width: "clamp(55px, 7vw, 90px)",
            animation:
              "countdownLanternRight 8s ease-in-out infinite",
          }}
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: "125%",
              height: "125%",
              background:
                "rgba(255,150,55,0.16)",
              filter: "blur(25px)",
            }}
          />

          <img
            src="/images/lantern.png"
            alt=""
            draggable={false}
            className="relative z-10 w-full object-contain"
            style={{
              filter:
                "drop-shadow(0 0 20px rgba(255,145,45,0.50))",
            }}
          />
        </div>

        {/* Small lantern */}

        <div
          className="absolute right-[19%] top-[12%] hidden sm:block"
          style={{
            width: "clamp(30px, 3vw, 48px)",
            opacity: 0.65,
            animation:
              "countdownLanternSmall 6s ease-in-out infinite",
          }}
        >
          <img
            src="/images/lantern.png"
            alt=""
            draggable={false}
            className="w-full object-contain"
            style={{
              filter:
                "drop-shadow(0 0 13px rgba(255,145,45,0.45))",
            }}
          />
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 flex min-h-[90vh] items-center justify-center px-5 py-28 sm:px-8 sm:py-36">
        <div className="w-full max-w-6xl text-center">
          {/* Eyebrow */}

          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(25px)",
              transition:
                "opacity 1s ease, transform 1s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily:
                  "Georgia, Times New Roman, serif",
                fontSize: "clamp(10px, 0.8vw, 13px)",
                letterSpacing: "0.30em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.42)",
              }}
            >
              Until we say forever
            </p>
          </div>

          {/* Heading */}

          <h2
            style={{
              margin: "22px 0 0",
              fontFamily:
                "Georgia, Times New Roman, serif",
              fontSize: "clamp(2.8rem, 7vw, 7rem)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.055em",
              color: "rgba(255,255,255,0.95)",
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(35px)",
              transition:
                "opacity 1.2s ease 0.1s, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.1s",
            }}
          >
            The day is drawing near
          </h2>

          {/* Date */}

          <div
            className="mt-8 flex items-center justify-center gap-4 sm:mt-10 sm:gap-6"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 1s ease 0.3s",
            }}
          >
            <span
              className="h-px"
              style={{
                width: "clamp(35px, 8vw, 100px)",
                background:
                  "linear-gradient(to right, transparent, rgba(255,190,120,0.45))",
              }}
            />

            <span
              style={{
                fontFamily:
                  "Georgia, Times New Roman, serif",
                fontSize: "clamp(11px, 1vw, 15px)",
                letterSpacing: "0.22em",
                color: "rgba(255,190,120,0.72)",
              }}
            >
              13 november 2026
            </span>

            <span
              className="h-px"
              style={{
                width: "clamp(35px, 8vw, 100px)",
                background:
                  "linear-gradient(to left, transparent, rgba(255,190,120,0.45))",
              }}
            />
          </div>

          {/* =================================================
              COUNTDOWN
          ================================================== */}

          <div
            className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-3 gap-y-8 sm:mt-20 sm:grid-cols-4 sm:gap-5 md:gap-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(45px)",
              transition:
                "opacity 1.2s ease 0.35s, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.35s",
            }}
          >
            {units.map((unit, index) => (
              <div
                key={unit.label}
                className="relative"
              >
                {/* Number */}

                <div
                  className="relative mx-auto flex aspect-[1.25/1] w-full max-w-[210px] items-center justify-center overflow-hidden rounded-[10px] border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm"
                >
                  {/* Glow */}

                  <div
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,155,70,0.10), transparent 70%)",
                      filter: "blur(25px)",
                    }}
                  />

                  <span
                    key={`${unit.label}-${unit.value}`}
                    style={{
                      position: "relative",
                      fontFamily:
                        "Georgia, Times New Roman, serif",
                      fontSize:
                        "clamp(3.1rem, 7vw, 6.2rem)",
                      fontWeight: 400,
                      lineHeight: 1,
                      letterSpacing: "-0.06em",
                      color:
                        "rgba(255,255,255,0.94)",
                      fontVariantNumeric:
                        "tabular-nums",
                    }}
                  >
                    {formatNumber(unit.value)}
                  </span>
                </div>

                {/* Label */}

                <p
                  style={{
                    margin: "14px 0 0",
                    fontFamily:
                      "Georgia, Times New Roman, serif",
                    fontSize: "10px",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.34)",
                  }}
                >
                  {unit.label}
                </p>

                {/* Separator */}

                {index < units.length - 1 && (
                  <span
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-xl text-white/20 sm:block md:-right-5"
                    aria-hidden="true"
                  >
                    :
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Bottom message */}

          <p
            className="mx-auto mt-14 max-w-md sm:mt-16"
            style={{
              marginBottom: 0,
              fontFamily:
                "Georgia, Times New Roman, serif",
              fontSize: "clamp(12px, 1vw, 15px)",
              lineHeight: 1.8,
              letterSpacing: "0.035em",
              color: "rgba(255,255,255,0.40)",
              opacity: visible ? 1 : 0,
              transition: "opacity 1s ease 0.7s",
            }}
          >
            Soon, the lights will gather,
            the music will begin,
            and two hearts will step into
            their next chapter.
          </p>
        </div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20"
        style={{
          height: "140px",
          background:
            "linear-gradient(to top, #070408, transparent)",
        }}
      />

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes countdownLanternLeft {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(-3deg);
          }

          50% {
            transform: translate3d(10px, -18px, 0) rotate(3deg);
          }
        }

        @keyframes countdownLanternRight {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(3deg);
          }

          50% {
            transform: translate3d(-10px, -16px, 0) rotate(-3deg);
          }
        }

        @keyframes countdownLanternSmall {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-5px, -12px, 0);
          }
        }

        @media (max-width: 767px) {
          #countdown-section {
            min-height: 820px;
          }

          @keyframes countdownLanternLeft {
            0%,
            100% {
              transform: translate3d(0, 0, 0) rotate(-2deg);
            }

            50% {
              transform: translate3d(5px, -12px, 0) rotate(2deg);
            }
          }

          @keyframes countdownLanternRight {
            0%,
            100% {
              transform: translate3d(0, 0, 0) rotate(2deg);
            }

            50% {
              transform: translate3d(-5px, -10px, 0) rotate(-2deg);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}