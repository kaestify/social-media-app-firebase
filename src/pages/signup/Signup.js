import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./Signup.css";
import { motion } from "framer-motion";
import loginImg from "../../images/login.png";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { error, setError, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    signup(name, email, password, confirmPassword);
  };

  return (
    <>
      <div className="signup">
        <motion.div className="signup-card" animate={{ scale: 1.1 }}>
          <Card style={{ width: "40rem" }}>
            <Card.Body>
              <h2>
                Sign Up For An Account <i class="far fa-user-circle"></i>
              </h2>
              <Card.Text>
                <div className="form-group">
                  <div className="grid-container">
                    <h4>Name: </h4>
                    <input
                      required
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                </div>

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

                <div className="form-group">
                  <div className="grid-container">
                    <h4>Confirm Password: </h4>
                    <input
                      required
                      type="password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                    />
                  </div>
                </div>
              </Card.Text>
              <>
                <button className="btn login-btn" onClick={handleSubmit}>
                  Sign Up
                </button>
                {error && <p>{error}</p>}

                <p className="old-user">
                  Have an account? Login <Link to="/login">here.</Link>{" "}
                </p>
              </>
            </Card.Body>
          </Card>
        </motion.div>
      </div>
    </>
  );
}
