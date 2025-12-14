import { useState, useRef, useEffect } from "react";
import bgImage from "../assets/images/media-bg.png";

interface ButtonItem {
  label: string;
  text: string;
}

const BUTTONS: ButtonItem[] = [
  { label: "Who we are", text: "Content for Button 1" },
  { label: "Our mission", text: "Content for Button 2" },
  { label: "What we stand for", text: "Content for Button 3" },
  { label: "What happens behind the scenes", text: "Content for Button 4" },
  { label: "Community partners", text: "Content for Button 5" },
  { label: "Get involved", text: "Content for Button 6" },
  { label: "All mentions of Stats4Lulu", text: "Content for Button 7" },
];

const SEPARATOR_COLORS = [
  "#88B3AF",
  "#6a8b88",
  "#618c88",
  "#476B65",
  "#324D48",
  "#000000",
];

export default function Media() {
  const [active, setActive] = useState<number | null>(null);
  const [navHeight, setNavHeight] = useState(0);
  const [buttonHeight, setButtonHeight] = useState(0);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Mobile button and content refs
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>(BUTTONS.map(() => null));
  const contentRefs = useRef<Array<HTMLDivElement | null>>(BUTTONS.map(() => null));

  /* ---------------- DESKTOP HEIGHT CALC ---------------- */
  useEffect(() => {
    const updateHeights = () => {
      if (navRef.current) {
        const navH = navRef.current.offsetHeight;
        setNavHeight(navH);

        const viewportHeight = window.innerHeight;
        const availableHeight = viewportHeight - navH;

        const separatorHeight = 6;
        const calculatedButtonHeight = Math.floor(
          (availableHeight - (BUTTONS.length - 1) * separatorHeight) /
            BUTTONS.length
        );

        setButtonHeight(calculatedButtonHeight);
      }
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  /* ---------------- MOBILE BUTTON CLICK ---------------- */
  const handleButtonClick = (index: number) => {
    const isOpen = active === index;
  
    if (isOpen) {
      setActive(null);
      return;
    }
  
    const prevIndex = active;
    setActive(index);
  
    const buttonEl = buttonRefs.current[index];
    const contentEl = contentRefs.current[index];
    if (!buttonEl || !contentEl) return;
  
    // Wait for the previous content to collapse, if any
    if (prevIndex !== null) {
      const prevContentEl = contentRefs.current[prevIndex];
      if (prevContentEl) {
        const onPrevTransitionEnd = (event: TransitionEvent) => {
          if (event.propertyName === "max-height") {
            prevContentEl.removeEventListener("transitionend", onPrevTransitionEnd);
  
            // Wait one frame for new content to expand
            requestAnimationFrame(() => {
              // Scroll button into view
              buttonEl.scrollIntoView({ behavior: "smooth", block: "start" });
            });
          }
        };
        prevContentEl.addEventListener("transitionend", onPrevTransitionEnd);
        return;
      }
    }
  
    // No previous content or after collapse
    const onNewTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName === "max-height") {
        contentEl.removeEventListener("transitionend", onNewTransitionEnd);
  
        // Scroll button into view after layout update
        requestAnimationFrame(() => {
          buttonEl.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    };
  
    contentEl.addEventListener("transitionend", onNewTransitionEnd);
  };
  
  
  

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* ================= MOBILE LAYOUT ================= */}
      <div className="block md:hidden">
        {/* MOBILE NAVBAR */}
        <nav
          className="w-full px-4 pt-2 pb-4"
          style={{ fontFamily: "Courier New, monospace" }}
        >
          <h1 className="text-xl font-bold" style={{ lineHeight: 1.05 }}>
            Stats4Lulu Media Summary Page
          </h1>
          <h2 className="font-mono text-sm text-black/60" style={{ lineHeight: 1.05 }}>
            Official statements from Stats4Lulu, about Stats4Lulu
          </h2>

          <div
            className="flex flex-wrap items-center gap-[0.4rem] text-sm mt-1 font-semibold italic text-black/75"
            style={{ lineHeight: 1.05 }}
          >
            <a href="mailto:stats4lulu@gmail.com">stats4lulu@gmail.com</a>
            <span className="text-black/40">•</span>
            <a href="https://discord.gg/hDuuFCtWbk" target="_blank" rel="noopener noreferrer">
              Join our Discord
            </a>
            <span className="text-black/40">•</span>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeLFppQsFajVnM_QrxfphwQ-1EKnUKWgMMfBfga9yX3JkZ_9Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bug Reports & Suggestions
            </a>
          </div>
        </nav>

        {/* MOBILE ACCORDION */}
        <div className="flex flex-col">
          {BUTTONS.map((item, index) => {
            const isOpen = active === index;

            return (
              <div key={item.label}>
                <button
                  ref={(el) => (buttonRefs.current[index] = el)}
                  onClick={() => handleButtonClick(index)}
                  className="w-full px-4 py-5 text-lg font-mono bg-[#eeeeee] flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xl">{isOpen ? "v" : ">"}</span>
                </button>

                {index < BUTTONS.length - 1 && (
                  <div
                    className="w-full h-[6px]"
                    style={{ backgroundColor: SEPARATOR_COLORS[index] }}
                  />
                )}

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[400px]" : "max-h-0"
                  }`}
                >
                  <div className="relative h-[300px]">
                    <img
                      src={bgImage}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="relative z-10 p-4 text-lg font-serif text-black">
                      {item.text}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= DESKTOP LAYOUT ================= */}
      <div className="hidden md:block">
        {/* RIGHT IMAGE */}
        <div
          className="fixed top-0 bottom-0 right-0 z-20 w-1/2 pointer-events-none"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16">
            <h2
              className="text-4xl font-serif text-black drop-shadow-lg break-words"
              style={{ maxWidth: "80%", lineHeight: 1.2 }}
            >
              {BUTTONS[active !== null ? active : 0].text}
            </h2>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* DESKTOP NAVBAR */}
        <nav
          ref={navRef}
          className="absolute top-0 left-0 right-0 z-50"
          style={{ fontFamily: "Courier New, monospace", clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
        >
          <div className="relative flex justify-start items-start px-4 md:px-6 pt-2 pb-4">
            <div className="flex flex-col text-black max-w-[calc(100%-50vw)]">
              <h1 className="text-xl sm:text-lg md:text-xl lg:text-3xl font-bold" style={{ lineHeight: 1.05 }}>
                Stats4Lulu Media Summary Page
              </h1>
              <h2 className="font-mono text-sm md:text-base text-black/60" style={{ lineHeight: 1.05 }}>
                Official statements from Stats4Lulu, about Stats4Lulu
              </h2>

              <div className="flex flex-wrap items-center gap-[0.4rem] text-sm md:text-base mt-1 font-semibold italic text-black/75" style={{ lineHeight: 1.05 }}>
                <a href="mailto:stats4lulu@gmail.com">stats4lulu@gmail.com</a>
                <span className="text-black/40">•</span>
                <a href="https://discord.gg/hDuuFCtWbk" target="_blank" rel="noopener noreferrer">
                  Join our Discord
                </a>
                <span className="text-black/40">•</span>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeLFppQsFajVnM_QrxfphwQ-1EKnUKWgMMfBfga9yX3JkZ_9Q/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bug Reports & Suggestions
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* LEFT BUTTON STACK */}
        <div
          className="absolute left-0 z-10 flex flex-col overflow-y-auto"
          style={{ top: navHeight, bottom: 0, right: "42.5%" }}
        >
          {BUTTONS.map((item, index) => (
            <div key={item.label}>
              <button
                onClick={() => setActive(index)}
                className="w-full text-2xl font-mono bg-[#eeeeee] hover:bg-gray-200 transition cursor-pointer"
                style={{ height: buttonHeight, minHeight: 80, maxHeight: 200 }}
              >
                {item.label}
              </button>

              {index < BUTTONS.length - 1 && (
                <div
                  className="w-full h-[6px]"
                  style={{ backgroundColor: SEPARATOR_COLORS[index] }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
