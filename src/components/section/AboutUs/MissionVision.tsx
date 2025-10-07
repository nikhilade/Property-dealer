import React, { useRef, useEffect, useState } from "react";

const MissionVision: React.FC = () => {
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  const [missionVisible, setMissionVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === missionRef.current) setMissionVisible(true);
            if (entry.target === visionRef.current) setVisionVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-8 px-4"> {/* mt-16 -> mt-8, section upar shift */}
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Our Mission & Vision
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Mission Card */}
        <div
          ref={missionRef}
          className={`bg-gradient-to-r from-blue-100 to-blue-200 p-8 rounded-xl shadow-lg transform transition-all duration-700 ${
            missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          } hover:scale-105 hover:shadow-2xl`}
        >
          <div className="text-5xl mb-4 animate-bounce">🎯</div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            To provide seamless, transparent, and trustworthy property solutions. We simplify the buying 
            and selling process, ensuring every client receives personalized guidance and support, making 
            property dreams a reality. We focus on honesty, clarity, and efficiency in every deal.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>

        {/* Vision Card */}
        <div
          ref={visionRef}
          className={`bg-gradient-to-r from-purple-100 to-purple-200 p-8 rounded-xl shadow-lg transform transition-all duration-700 delay-150 ${
            visionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          } hover:scale-105 hover:shadow-2xl`}
        >
          <div className="text-5xl mb-4 animate-bounce">🌟</div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            To become the most trusted platform for real estate, making property buying, selling, 
            or renting effortless and enjoyable. We envision a world where verified high-quality 
            properties are accessible to all, empowering clients to make confident decisions.
          </p>
          <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
