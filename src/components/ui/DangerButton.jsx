import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import "./DangerButton.css";

export const DangerButton = () => {
  const [invasion, setInvasion] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    const isDark = document.documentElement.classList.contains("dark");

    if (!isDark) {
      alert("👽 Alien invasion only occurs in dark mode!");
      return;
    }

    // Play sound
    const audio = new Audio("/sounds/alien.mp3");
    audio.play();

    setInvasion(true);
    setTimeout(() => {
      navigate("/abducted");
    }, 5000);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="danger-button"
        title="Danger Button"
      >
        <AlertTriangle size={24} />
      </button>

      {invasion && (
        <div className="alien-overlay">
          <div className="ufo">
            <div className="ufo-base" />
            <div className="beam" />
          </div>
          <div className="invasion-text">👽 Portfolio Abducted</div>
        </div>
      )}
    </>
  );
};
