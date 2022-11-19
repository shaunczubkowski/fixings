import "./Layout.scss";
import { Outlet, Link } from "react-router-dom";
import { Logo } from "../components/Logo";

export function Layout() {
  return (
    <div className="Layout">
      <header>
        <Logo />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
