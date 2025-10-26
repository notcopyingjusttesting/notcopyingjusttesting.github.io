import bgImage from "../assets/images/overview-bg.png";
import { useEffect, useState } from "react";

export default function Overview() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Stats4Lulu Overview";
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen w-full overflow-y-auto text-white">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-2/3">
        {/* Navbar */}
        <nav
          className="flex justify-between items-center px-6 md:px-8 py-4 border-b border-white/30"
          style={{ fontFamily: "Courier New, monospace" }}
        >
          <h1 className="text-lg md:text-2xl font-bold text-black">
            Stats4Lulu Official Landing Page
          </h1>
          <div className="flex gap-4 md:gap-8 font-semibold">
            <a
              href="mailto:stats4lulu@gmail.com"
              className="hover:text-blue-200 transition text-black"
              style={{ fontFamily: "Courier New, monospace" }}
            >
              Contact: stats4lulu@gmail.com
            </a>
          </div>
        </nav>

        {/* PNG background */}
        <div
          className="flex flex-col md:flex-row justify-center items-center flex-1 gap-8 py-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* Card 1 */}
          <div className="relative w-72 md:w-80 h-auto md:h-[85vh] rounded-2xl shadow-lg flex flex-col z-10 overflow-hidden mb-6 md:mb-0">
            <div className="absolute inset-0 bg-white/70 rounded-2xl"></div>
            <div className="relative p-6 flex flex-col gap-4 justify-start h-full">
              {/* Header 1 */}
              <div>
                <h2
                  className="text-lg md:text-xl font-bold mb-2"
                  style={{
                    color: "#395752",
                    fontFamily: "Courier New, monospace",
                  }}
                >
                  Stats4Lulu Products
                </h2>
                <div className="flex flex-col gap-2">
                  <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#395752]">
                    Link1
                  </button>
                  <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#395752]">
                    Link2
                  </button>
                </div>
              </div>

              {/* Header 2 */}
              <div className="mt-4">
                <h2
                  className="text-lg md:text-xl font-bold mb-2"
                  style={{
                    color: "#395752",
                    fontFamily: "Courier New, monospace",
                  }}
                >
                  Stats4Lulu Socials
                </h2>
                <div className="flex flex-col gap-2">
                  <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#395752]">
                    bla
                  </button>
                  <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#395752]">
                    blabla
                  </button>
                  <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#395752]">
                    bla x3
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-72 md:w-80 h-auto md:h-[85vh] rounded-2xl shadow-lg flex flex-col z-10 overflow-hidden">
            <div className="absolute inset-0 bg-white/70 rounded-2xl"></div>

            <div className="relative p-6 flex flex-col gap-2 justify-start h-full">
              <h2
                className="text-lg md:text-xl font-bold mb-2"
                style={{
                  color: "#395752",
                  fontFamily: "Courier New, monospace",
                }}
              >
                Community Projects
              </h2>

              <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#6a8b88]">
                link1
              </button>
              <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#6a8b88]">
                link2
              </button>
              <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#6a8b88]">
                etc.
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full md:w-1/3 h-auto md:h-full">
        {/* Top Section */}
        <div
          className="h-auto md:h-[40%] flex flex-col justify-start items-start px-6 py-4 text-left overflow-y-auto"
          style={{
            backgroundColor: "#eeeeee",
            fontFamily: "Courier New, monospace",
          }}
        >
          <h4 className="text-black text-base font-bold mb-2">
            Official Statement from the Team
          </h4>

          <div className="text-black text-[13px] leading-relaxed">
            <p className="mb-2">
              The Stats4Lulu team has created and maintains an online,
              interactive dashboard that shares information about not only the
              letters he has received but donations made to his GiveSendGo
              campaign to fund his legal cases, Google search trends, and top
              news articles relating to Luigi. This dashboard is translated into
              8 languages: Italian, Spanish, French, Brazilian Portuguese,
              German, Simplified Chinese, and Traditional Chinese.
            </p>
            <p>
              The team currently stands at over 30 volunteers working across
              data, wordsmiths, translation, events, and collaborations. The
              members are custodians of statistics related to Luigi. They
              nurture and grow it, but in the end, it all belongs to Luigi and is
              shared as an act of service for him.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative h-auto md:h-[60%] flex justify-center items-center bg-[#f5f5f5]">
          {isLoading && (
            <div className="absolute inset-0 flex justify-center items-center bg-[#f5f5f5] text-gray-600 font-mono text-sm z-10">
              Please wait, loading the latest stats...
            </div>
          )}
          <iframe
            src="https://lookerstudio.google.com/embed/reporting/2e58763a-6a44-4843-a177-451c96c2b0b2/page/u35cF"
            width="100%"
            height="400"
            className="border-0 rounded-none md:h-full"
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
