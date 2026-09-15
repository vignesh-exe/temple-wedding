"use client";

import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Story",
    target: "story-section",
  },
  {
    label: "Wedding",
    target: "wedding-details",
  },
  {
    label: "Gallery",
    target: "gallery-section",
  },
  {
    label: "Venue",
    target: "venue-section",
  },
  {
    label: "RSVP",
    target: "closing-section",
    isButton: true,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (target: string) => {
    const element = document.getElementById(target);

    if (element) {
      const navbarOffset = window.innerWidth >= 768 ? 62 : 72;
      const elementTop =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset;

      window.scrollTo({
        top: Math.max(0, elementTop),
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  const goHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <>
      {/* ====================================================
          DESKTOP NAVBAR
          ==================================================== */}

      <header
        className="fixed left-0 right-0 top-0 z-[100] hidden md:block"
        style={{
          transition:
            "background 500ms ease, backdrop-filter 500ms ease, border-color 500ms ease, box-shadow 500ms ease",
          background: scrolled
            ? "rgba(7,4,8,0.76)"
            : "rgba(7,4,8,0.12)",
          backdropFilter: scrolled
            ? "blur(22px)"
            : "blur(5px)",
          WebkitBackdropFilter: scrolled
            ? "blur(22px)"
            : "blur(5px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 12px 45px rgba(0,0,0,0.18)"
            : "none",
        }}
      >
        <div className="mx-auto flex h-[62px] w-full max-w-[1500px] items-center px-8 lg:px-12 xl:px-16">
          {/* ==================================================
              LEFT — Vish BRAND
              ================================================== */}

          <button
            type="button"
            onClick={goHome}
            aria-label="Go to top"
            className="group flex h-full items-center"
          >
            {/* Lantern */}

            <span className="relative mr-3 flex h-10 w-8 items-center justify-center">
              <span
                className="absolute h-9 w-9 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,145,45,0.24), transparent 68%)",
                  filter: "blur(8px)",
                }}
              />

              <img
                src="/images/lantern.png"
                alt=""
                draggable={false}
                className="relative z-10 h-8 w-auto object-contain transition-transform duration-500 group-hover:-translate-y-1"
                style={{
                  filter:
                    "drop-shadow(0 0 9px rgba(255,145,45,0.48))",
                }}
              />
            </span>

            {/* Vish */}

            <span
              style={{
                fontFamily: "Vartensie, cursive",
                fontSize: "28px",
                lineHeight: 1,
                color: "rgba(255,255,255,0.94)",
                letterSpacing: "0.01em",
                whiteSpace: "nowrap",
                marginTop: "11px",
              }}
            >
              Vish
            </span>
          </button>

          {/* ==================================================
              CENTER — DESKTOP NAVIGATION
              ================================================== */}

          <nav className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1 lg:gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.target}
                type="button"
                onClick={() =>
                  scrollToSection(item.target)
                }
                className={
                  item.isButton
                    ? "group relative ml-2 rounded-full border border-white/20 bg-white/[0.08] px-5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/[0.14] lg:px-6"
                    : "group relative px-4 py-3 lg:px-5"
                }
              >
                {/* Number */}

                <span
                  className="absolute left-1/2 top-0 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  style={{
                    fontFamily:
                      "Georgia, Times New Roman, serif",
                    fontSize: "7px",
                    letterSpacing: "0.16em",
                    color:
                      "rgba(255,183,110,0.60)",
                  }}
                >
                  0{index + 1}
                </span>

                {/* Label */}

                <span
                  style={{
                    fontFamily:
                      "Georgia, Times New Roman, serif",
                    fontSize: "11px",
                    letterSpacing: "0.09em",
                    color: item.isButton
                      ? "rgba(255,255,255,0.88)"
                      : "rgba(255,255,255,0.57)",
                    transition:
                      "color 300ms ease",
                  }}
                  className="group-hover:text-white/90"
                >
                  {item.label}
                </span>

                {/* Underline */}

                <span
                  className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-6"
                  style={{
                    background:
                      "rgba(255,181,111,0.75)",
                    boxShadow:
                      "0 0 9px rgba(255,145,45,0.55)",
                  }}
                />
              </button>
            ))}
          </nav>

          {/* ==================================================
              RIGHT — DATE
              ================================================== */}

          <div className="ml-auto flex items-center gap-4">
            <span
              className="h-px w-8"
              style={{
                background:
                  "rgba(255,255,255,0.12)",
              }}
            />

            <div className="flex flex-col items-end">
              <span
                style={{
                  fontFamily:
                    "Georgia, Times New Roman, serif",
                  fontSize: "9px",
                  letterSpacing: "0.18em",
                  color:
                    "rgba(255,190,120,0.66)",
                }}
              >
                13 · 11 · 2026
              </span>

              <span
                className="mt-1"
                style={{
                  fontFamily:
                    "Georgia, Times New Roman, serif",
                  fontSize: "7px",
                  letterSpacing: "0.15em",
                  color:
                    "rgba(255,255,255,0.28)",
                }}
              >
                CHENNAI
              </span>
            </div>
          </div>
        </div>

        {/* Bottom light */}

        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-px -translate-x-1/2"
          style={{
            width: scrolled
              ? "180px"
              : "0px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,166,92,0.40), transparent)",
            boxShadow:
              "0 0 12px rgba(255,145,45,0.25)",
            transition:
              "width 700ms cubic-bezier(.22,1,.36,1)",
          }}
        />
      </header>

      {/* ====================================================
          MOBILE NAVBAR
          SAME OLD MODEL
          ==================================================== */}

      <header
        className="fixed left-0 right-0 top-0 z-[100] md:hidden"
        style={{
          transition:
            "background 400ms ease, backdrop-filter 400ms ease, border-color 400ms ease",
          background: scrolled
            ? "rgba(7,4,8,0.72)"
            : "rgba(7,4,8,0.08)",
          backdropFilter: scrolled
            ? "blur(18px)"
            : "blur(4px)",
          WebkitBackdropFilter: scrolled
            ? "blur(18px)"
            : "blur(4px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex h-[72px] w-full items-center justify-between px-5 sm:px-8">
          {/* ==================================================
              Vish MOBILE BRAND
              ================================================== */}

          <button
            type="button"
            onClick={goHome}
            className="group flex items-center gap-3"
            aria-label="Go to top"
          >
            {/* Lantern */}

            <span className="relative flex h-9 w-7 items-center justify-center">
              <span
                className="absolute h-8 w-8 rounded-full"
                style={{
                  background:
                    "rgba(255,145,45,0.15)",
                  filter: "blur(9px)",
                }}
              />

              <img
                src="/images/lantern.png"
                alt=""
                draggable={false}
                className="relative z-10 h-8 w-auto object-contain transition-transform duration-500 group-hover:-translate-y-0.5"
                style={{
                  filter:
                    "drop-shadow(0 0 8px rgba(255,145,45,0.45))",
                }}
              />
            </span>

            {/* Vish */}

            <span
              style={{
                fontFamily: "Vartensie, cursive",
                fontSize: "25px",
                lineHeight: 1,
                color:
                  "rgba(255,255,255,0.92)",
                letterSpacing: "0.01em",
                whiteSpace: "nowrap",
                marginTop: "11px",
              }}
            >
              Vish
            </span>
          </button>

          {/* Mobile menu button */}

          <button
            type="button"
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
            className="relative flex h-10 w-10 items-center justify-center"
          >
            <span className="relative flex h-5 w-6 flex-col justify-center gap-[6px]">
              <span
                className="block h-px w-full origin-center"
                style={{
                  background:
                    "rgba(255,255,255,0.75)",
                  transform: menuOpen
                    ? "translateY(3.5px) rotate(45deg)"
                    : "none",
                  transition:
                    "transform 300ms ease",
                }}
              />

              <span
                className="block h-px w-full"
                style={{
                  background:
                    "rgba(255,255,255,0.75)",
                  opacity: menuOpen ? 0 : 1,
                  transition:
                    "opacity 200ms ease",
                }}
              />

              <span
                className="block h-px w-full origin-center"
                style={{
                  background:
                    "rgba(255,255,255,0.75)",
                  transform: menuOpen
                    ? "translateY(-3.5px) rotate(-45deg)"
                    : "none",
                  transition:
                    "transform 300ms ease",
                }}
              />
            </span>
          </button>
        </div>
      </header>

      {/* ====================================================
          MOBILE MENU
          SAME OLD MODEL
          ==================================================== */}

      <div
        className="fixed inset-0 z-[90] md:hidden"
        style={{
          pointerEvents: menuOpen
            ? "auto"
            : "none",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 350ms ease",
        }}
      >
        {/* Background */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "rgba(7,4,8,0.96)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter:
              "blur(20px)",
          }}
        />

        {/* Glow */}

        <div
          className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "450px",
            height: "450px",
            background:
              "radial-gradient(circle, rgba(126,57,27,0.18), transparent 68%)",
            filter: "blur(45px)",
          }}
        />

        {/* Stars */}

        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 35 }).map(
            (_, index) => {
              const left =
                (index * 47) % 100;
              const top =
                (index * 61) % 100;

              return (
                <span
                  key={index}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    width: "1px",
                    height: "1px",
                    opacity:
                      0.08 +
                      ((index * 13) % 25) /
                        100,
                  }}
                />
              );
            }
          )}
        </div>

        {/* Lantern */}

        <div
          className="absolute left-1/2 top-[17%] -translate-x-1/2"
          style={{
            width: "72px",
          }}
        >
          <div
            className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "rgba(255,145,45,0.17)",
              filter: "blur(24px)",
            }}
          />

          <img
            src="/images/lantern.png"
            alt=""
            draggable={false}
            className="relative z-10 w-full object-contain"
            style={{
              filter:
                "drop-shadow(0 0 20px rgba(255,145,45,0.55))",
            }}
          />
        </div>

        {/* Menu content */}

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-8">
          <p
            style={{
              margin: "0 0 35px",
              fontFamily:
                "Georgia, Times New Roman, serif",
              fontSize: "9px",
              letterSpacing: "0.30em",
              textTransform: "uppercase",
              color:
                "rgba(255,255,255,0.32)",
            }}
          >
            Vignesh weds Shobanna
          </p>

          <nav className="flex flex-col items-center gap-6">
            {navItems.map(
              (item, index) => (
                <button
                  key={item.target}
                  type="button"
                  onClick={() =>
                    scrollToSection(
                      item.target
                    )
                  }
                  className={
                    item.isButton
                      ? "rounded-full border border-white/20 bg-white/[0.08] px-7 py-3 transition-all duration-300"
                      : "transition-all duration-300"
                  }
                  style={{
                    fontFamily:
                      "Georgia, Times New Roman, serif",
                    fontSize:
                      "clamp(1.5rem, 7vw, 2.2rem)",
                    fontWeight: 400,
                    color:
                      "rgba(255,255,255,0.88)",
                    opacity: menuOpen
                      ? 1
                      : 0,
                    transform: menuOpen
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition: `opacity 400ms ease ${
                      index * 60
                    }ms, transform 400ms ease ${
                      index * 60
                    }ms`,
                  }}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          <div
            className="mt-12"
            style={{
              opacity: menuOpen
                ? 1
                : 0,
              transition:
                "opacity 500ms ease 400ms",
            }}
          >
            <span
              style={{
                fontFamily:
                  "Georgia, Times New Roman, serif",
                fontSize: "10px",
                letterSpacing: "0.18em",
                color:
                  "rgba(255,190,120,0.55)",
              }}
            >
              13 november 2026
            </span>
          </div>
        </div>
      </div>
    </>
  );
}