import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import loginImg from "../../images/login.png";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      <div className="login">
        <motion.div
          className="login-card"
          // initial={{ x: "-100vw" }}
          // animate={{ x: 10 }}
          initial={{ y: "-100vh" }}
          animate={{ y: 10 }}
          transition={{ delay: 0.2, duration: 3 }}
        >
          <Card style={{ width: "40rem" }}>
            <Card.Img variant="top" src={loginImg} />
            <Card.Body>
              <h2>Sign In to Account</h2>
              <Card.Text>
                <div className="form-group">
                  <div className="grid-container">
                    <h4>Email: </h4>
                    <input
                      required
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="grid-container">
                    <h4>Password: </h4>
                    <input
                      required
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                </div>
              </Card.Text>
              <>
                <button onClick={handleSubmit} className="btn login-btn">
                  Login
                </button>
                {error && <p>{error} </p>}
                <p className="new-user">
                  New user? Sign up <Link to="/signup">here.</Link>{" "}
                </p>
              </>
            </Card.Body>
          </Card>
        </motion.div>
      </div>
    </>
  );
}
