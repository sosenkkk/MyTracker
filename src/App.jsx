import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HealthDashboard from "./pages/HealthDashboard";
import ElectricalDashboard from "./pages/ElectricalDashboard";
import WelcomePage from "./pages/WelcomePage";
import ThemeSelect from "./components/ThemeSelect";

export default function App() {
  const [theme, setTheme] = useState("light");
  console.log(theme);
  return (
    <div className={`${theme}-theme min-h-screen`}>
      <Router>
        <header className="p-6 flex justify-between items-center shadow-md">
          <Link to="/" className="hover:underline font-bold text-2xl">
            MyTracker
          </Link>
          <div className="flex items-center gap-4">
            <nav className="space-x-4">
              <Link to="/health" className="hover:underline">
                Health
              </Link>
              <Link to="/electrical" className="hover:underline">
                Electrical
              </Link>
            </nav>

            {/* Theme Selector Component */}
            <ThemeSelect theme={theme} setTheme={setTheme} />
          </div>
        </header>

        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/health" element={<HealthDashboard theme={theme} />} />
          <Route
            path="/electrical"
            element={<ElectricalDashboard theme={theme} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
