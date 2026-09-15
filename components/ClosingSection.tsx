"use client";

import { useEffect, useState } from "react";

export default function ClosingSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.12,
      }
    );

    const element = document.getElementById(
      "closing-section"
    );

    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="closing-section"
      className="relative w-full overflow-hidden bg-[#050307] text-white"
    >
      {/* =====================================================
          ATMOSPHERIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Central warm glow */}

        <div
          className="absolute left-1/2 top-[32%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "min(850px, 120vw)",
            height: "min(700px, 100vw)",
            background:
              "radial-gradient(circle, rgba(139,65,28,0.17) 0%, rgba(77,32,22,0.07) 40%, transparent 72%)",
            filter: "blur(65px)",
          }}
        />

        {/* Bottom glow */}

        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
          style={{
            width: "70%",
            height: "300px",
            background:
              "radial-gradient(ellipse, rgba(120,50,25,0.09), transparent 70%)",
            filter: "blur(45px)",
          }}
        />

        {/* Vignette */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 15%, rgba(0,0,0,0.20) 68%, rgba(0,0,0,0.72) 100%)",
          }}
        />
      </div>

      {/* =====================================================
          STARS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 70 }).map((_, index) => {
          const left = (index * 41) % 100;
          const top = (index * 73) % 100;

          return (
            <span
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: index % 13 === 0 ? "2px" : "1px",
                height: index % 13 === 0 ? "2px" : "1px",
                opacity:
                  0.05 + ((index * 17) % 28) / 100,
              }}
            />
          );
        })}
      </div>

      {/* =====================================================
          CLOSING CONTENT
      ====================================================== */}

      <div className="relative z-10 px-5 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-32 md:pt-36">
        <div className="mx-auto max-w-5xl text-center">
          {/* Small heading */}

          <p
            style={{
              margin: 0,
              fontFamily:
                "Georgia, Times New Roman, serif",
              fontSize: "clamp(10px, 0.8vw, 13px)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.38)",
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(20px)",
              transition:
                "opacity 0.9s ease, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            And so the journey begins
          </p>

          {/* Main statement */}

          <h2
            className="mt-6"
            style={{
              marginBottom: 0,
              fontFamily:
                "Georgia, Times New Roman, serif",
              fontSize: "clamp(3rem, 8vw, 7.5rem)",
              fontWeight: 400,
              lineHeight: 0.91,
              letterSpacing: "-0.065em",
              color: "rgba(255,255,255,0.95)",
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(30px)",
              transition:
                "opacity 1s ease 0.08s, transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.08s",
            }}
          >
            With hearts
            <br />
            full of light
          </h2>

          {/* Decorative line */}

          <div
            className="mt-8 flex items-center justify-center gap-4 sm:mt-10"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.9s ease 0.25s",
            }}
          >
            <span
              className="h-px"
              style={{
                width: "clamp(40px, 8vw, 100px)",
                background:
                  "linear-gradient(to right, transparent, rgba(255,190,120,0.42))",
              }}
            />

            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background:
                  "rgba(255,190,120,0.75)",
                boxShadow:
                  "0 0 15px rgba(255,160,60,0.80)",
              }}
            />

            <span
              className="h-px"
              style={{
                width: "clamp(40px, 8vw, 100px)",
                background:
                  "linear-gradient(to left, transparent, rgba(255,190,120,0.42))",
              }}
            />
          </div>

          {/* =================================================
              NAMES
          ================================================== */}

          <div
            className="mt-9 sm:mt-11"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(20px)",
              transition:
                "opacity 1s ease 0.32s, transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.32s",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily:
                  "Vartensie, Georgia, serif",
                fontSize:
                  "clamp(2.5rem, 6vw, 5.6rem)",
                lineHeight: 1,
                letterSpacing: "-0.025em",
                color:
                  "rgba(255,255,255,0.92)",
              }}
            >
              Vignesh
            </p>

            <p
              className="my-2 sm:my-3"
              style={{
                fontFamily:
                  "Georgia, Times New Roman, serif",
                fontSize: "10px",
                letterSpacing: "0.22em",
                color:
                  "rgba(255,190,120,0.62)",
              }}
            >
              weds
            </p>

            <p
              style={{
                margin: 0,
                fontFamily:
                  "Vartensie, Georgia, serif",
                fontSize:
                  "clamp(2.5rem, 6vw, 5.6rem)",
                lineHeight: 1,
                letterSpacing: "-0.025em",
                color:
                  "rgba(255,255,255,0.92)",
              }}
            >
              Shobanna
            </p>
          </div>

          {/* =================================================
              MESSAGE
          ================================================== */}

          <p
            className="mx-auto mt-8 max-w-lg sm:mt-10"
            style={{
              marginBottom: 0,
              fontFamily:
                "Georgia, Times New Roman, serif",
              fontSize:
                "clamp(12px, 1vw, 14px)",
              lineHeight: 1.85,
              letterSpacing: "0.03em",
              color:
                "rgba(255,255,255,0.37)",
              opacity: visible ? 1 : 0,
              transition: "opacity 1s ease 0.48s",
            }}
          >
            Thank you for being part of our story.
            <br />
            We cannot wait to celebrate this
            beautiful beginning with you.
          </p>

          {/* Date */}

          <div
            className="mt-7"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 1s ease 0.58s",
            }}
          >
            <span
              style={{
                fontFamily:
                  "Georgia, Times New Roman, serif",
                fontSize: "10px",
                letterSpacing: "0.22em",
                color:
                  "rgba(255,190,120,0.55)",
              }}
            >
              13 november 2026 · Chennai
            </span>
          </div>

          {/* =================================================
              DIVIDER
          ================================================== */}

          <div
            className="mx-auto my-10 flex items-center justify-center gap-4 sm:my-12"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 1s ease 0.65s",
            }}
          >
            <span
              className="h-px"
              style={{
                width: "clamp(45px, 10vw, 110px)",
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.12))",
              }}
            />

            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background:
                  "rgba(255,190,120,0.50)",
                boxShadow:
                  "0 0 10px rgba(255,160,60,0.50)",
              }}
            />

            <span
              className="h-px"
              style={{
                width: "clamp(45px, 10vw, 110px)",
                background:
                  "linear-gradient(to left, transparent, rgba(255,255,255,0.12))",
              }}
            />
          </div>

          {/* Back to top */}

          <button
            type="button"
            onClick={backToTop}
            className="group inline-flex items-center gap-3"
            style={{
              fontFamily:
                "Georgia, Times New Roman, serif",
              fontSize: "10px",
              letterSpacing: "0.14em",
              color:
                "rgba(255,255,255,0.40)",
            }}
          >
            <span className="transition-colors duration-300 group-hover:text-white">
              Back to the beginning
            </span>

            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-y-1"
            >
              <path d="M12 19V5" />
              <path d="m6 11 6-6 6 6" />
            </svg>
          </button>
        </div>

        {/* =================================================
            FOOTER
        ================================================== */}

        <div
          className="mx-auto mt-16 max-w-5xl border-t border-white/[0.06] pt-6 sm:mt-20"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease 0.8s",
          }}
        >
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p
              style={{
                margin: 0,
                fontFamily:
                  "Georgia, Times New Roman, serif",
                fontSize: "9px",
                letterSpacing: "0.10em",
                color:
                  "rgba(255,255,255,0.22)",
              }}
            >
              Made with love for Vignesh &amp;
              Shobanna
            </p>

            <p
              style={{
                margin: 0,
                fontFamily:
                  "Georgia, Times New Roman, serif",
                fontSize: "9px",
                letterSpacing: "0.10em",
                color:
                  "rgba(255,255,255,0.18)",
              }}
            >
              © 2026
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL FADE
      ====================================================== */}

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0"
        style={{
          height: "100px",
          background:
            "linear-gradient(to top, #050307, transparent)",
        }}
      />
    </section>
  );
}