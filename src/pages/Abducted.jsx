// src/pages/Abducted.jsx
import { useNavigate } from "react-router-dom";
import "./Abducted.css";

export const Abducted = () => {
  const navigate = useNavigate();

  const handleReload = () => {
    navigate("/"); // Go back to Home
    window.location.reload(); // Force reload to reset state
  };

  return (
    <div className="abducted-container">
      <div className="boom">💥</div>
      <h1 className="abducted-text">Portfolio Abducted!</h1>
      <p className="return-hint">👾 They got everything. Reload to bring it back.</p>
      <button onClick={handleReload} className="reload-button">
        🔁 Reload Portfolio
      </button>
    </div>
  );
};
