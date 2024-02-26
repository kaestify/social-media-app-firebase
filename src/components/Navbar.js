import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogout } from "../hooks/useLogout";

//firebase imports
import { db } from "../firebase/config";
import { collection, addDoc } from "@firebase/firestore";
export default function Navbar() {
  const [caption, setCaption] = useState("");
  const [post, setPost] = useState("");
  const { logout } = useLogout();

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/newpost"> New Post</Link>
        </li>
        <li>
          <Link to="/home">Feed</Link>
        </li>

        <li className="new-post-li" style={{ cursor: "grab" }} onClick={logout}>
          Logout
        </li>
      </ul>
    </div>
  );
}
