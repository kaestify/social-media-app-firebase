import "./Landing.css";
import { useHistory } from "react-router";
import { motion } from "framer-motion";
import Typing from "react-typing-animation";
import TypeAnimation from "react-type-animation";
export default function Landing() {
  const history = useHistory();
  const enter = () => {
    history.push("/login");
  };

  return (
    <div className="landing">
      <div className="game-header">
        <TypeAnimation
          cursor={false}
          sequence={["Stay fabulous with Jo-glam ♡", 1000, ""]}
          wrapper="h2"
          repeat={Infinity}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.2 }}
        className="landing-btn"
        onClick={enter}
      >
        Enter
      </motion.button>
    </div>
  );
}
