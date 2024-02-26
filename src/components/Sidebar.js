import { NavLink } from "react-router-dom";

//styles and images
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <h1>Hey User!</h1>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <span>Create a new post</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
