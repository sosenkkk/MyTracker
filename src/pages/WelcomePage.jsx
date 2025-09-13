import { Link } from "react-router-dom";
import { animate } from "animejs";
import { useEffect, useRef } from "react";

function Cube() {
  const cubeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;

      const rotateX = progress * 40;
      const rotateY = progress * 100;

      cubeRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen fixed flex items-center justify-center "
      style={{ perspective: "1000px", zIndex: 0 }}
    >
      <div
        ref={cubeRef}
        className="relative w-48 h-48"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(0deg) rotateY(0deg)",
        }}
      >
        <div className="face front">Track</div>
        <div className="face back">this</div>
        <div className="face right">that</div>
        <div className="face left">what</div>
        <div className="face top">why</div>
        <div className="face bottom">where</div>
      </div>

      {/* Scroll space */}
      <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <div style={{ height: "500vh" }} />
      </div>

      <style>{`
        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          color: white;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          backface-visibility: hidden;
        }
        .front  { background: teal;    transform: translateZ(96px); }
        .back   { background: orange;  transform: rotateY(180deg) translateZ(96px); }
        .right  { background: green;   transform: rotateY(90deg) translateZ(96px); }
        .left   { background: purple;  transform: rotateY(-90deg) translateZ(96px); }
        .top    { background: gold;    transform: rotateX(90deg) translateZ(96px); }
        .bottom { background: red;     transform: rotateX(-90deg) translateZ(96px); }
      `}</style>
    </div>
  );
}

export default function WelcomePage() {
  return (
    <>
      <Cube />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
          Welcome to the Dashboard App
        </h1>
        <p className="text-lg text-blue-700 mb-10 text-center">
          Choose a dashboard to manage your products effectively.
        </p>
        <div className="flex gap-6">
          <Link
            to="/health"
            className="px-6 py-4 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 transition"
          >
            Health Products
          </Link>
          <Link
            to="/electrical"
            className="px-6 py-4 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600 transition"
          >
            Electrical Appliances
          </Link>
        </div>
      </div>
    </>
  );
}
