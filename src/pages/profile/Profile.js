import Navbar from "../../components/Navbar";
import { Card, Button } from "react-bootstrap";
import loginImg from "../../images/login.png";
import "./Profile.css";
export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <Card
          style={{
            // animation: "spin 3s linear infinite",
            width: "35rem",
            margin: "20px",
            border: "3px solid #D4AF37",
            borderRadius: "20px",
            marginTop: "300px",
          }}
        >
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "#D4AF37",
              alignItems: "center",
              padding: "15%",
              borderRadius: "18px",
              backgroundColor: "purple",
            }}
          >
            <Card.Img variant="top" src={loginImg} />
            <h2>User: JO</h2>
            <h2>Active since: 2021/11/02</h2>
            <h2>Status: Online</h2>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
