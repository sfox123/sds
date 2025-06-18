"use client";
import { moorkUtility } from "@/utility";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeContext";

const HeaderMenu = () => {
  useEffect(() => {
    moorkUtility.stickMenu();
  }, []);
  const currentPath = usePathname();
  const activeMenuFuntion = (value) => {
    return value.some((el) => currentPath.includes(el)) ? "mil-current" : "";
  };

  return (
    <Fragment>
      <li
        className={`${activeMenuFuntion(["home"])} ${currentPath === "/" ? "mil-current" : ""}`}
      >
        <Link href="/">Home</Link>
      </li>
      <li className={`${activeMenuFuntion(["about"])}`}>
        <Link href="about">About us</Link>
      </li>
      <li className={`${activeMenuFuntion(["services"])}`}>
        <Link href="services">Services</Link>
      </li>
      <li className={`${activeMenuFuntion(["work"])}`}>
        <a href="/works-1">Works</a>
      </li>
      <li
        className={`mil-has-children ${activeMenuFuntion([
          "contact",
          "projects",
          "clients",
        ])}`}
      >
        <a href="#.">Pages</a>
        <ul>
          <li>
            <Link href="contact">Contact</Link>
          </li>
          <li>
            <Link href="projects">Projects</Link>
          </li>
          <li>
            <Link href="clients">Clients</Link>
          </li>
        </ul>
      </li>
    </Fragment>
  );
};
const HeaderLeng = () => {
  return (
    <ul>
      <li>
        <a href="#">LIGHT</a>
      </li>
      <li>
        <a href="#">DARK</a>
      </li>
    </ul>
  );
};

const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header1 />;
    case 2:
      return <Header2 />;
    case 3:
      return <Header3 />;
    case 4:
      return <Header4 />;
    case 5:
      return <Header5 />;
    case 6:
      return <Header6 />;

    default:
      return <DefaultHeader />;
  }
};
const Header1 = () => {
  const [toggle, setToggle] = useState(false);
  const { theme } = useTheme();
  return (
    <div className={`mil-top-panel-frame ${theme === "dark" ? "mil-dark-panel" : "mil-light-panel"}`}>
      <div className="container">
        <div className="mil-top-panel">
          {/* mil-just-left mil-just-between */}
          <div className="mil-left">
            <Link href="/" className="mil-logo mil-logo-sm">
              <img
                style={{ width: "70%" }}
                loading="lazy"
                src="img/logo-4.png"
                alt="SDS"
              />
            </Link>
            <nav>
              <ul className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
                <HeaderMenu />
              </ul>
            </nav>
          </div>
          <div className="mil-right">
            <ThemeToggle />
            <div
              className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Header2 = () => {
  const [toggle, setToggle] = useState(false);
  const { theme } = useTheme();
  return (
    <div className={`mil-top-panel-frame ${theme === "dark" ? "mil-dark-panel" : "mil-light-panel"}`}>
      <div className="container">
        <div className="mil-top-panel">
          {/* mil-just-left mil-just-between */}
          <div className="mil-left">
            <Link href="/" className="mil-logo mil-logo-sm">
              <img loading="lazy" src="img/logo-5.png" alt="SDS" />
            </Link>
            <nav>
              <ul
                className={`mil-navigation mil-white ${
                  toggle ? "mil-active" : ""
                }`}
              >
                <HeaderMenu />
              </ul>
            </nav>
          </div>
          <div className="mil-right">
            <ThemeToggle />
            <div
              className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Header3 = () => {
  const [toggle, setToggle] = useState(false);
  const { theme } = useTheme();
  return (
    <div className={`mil-top-panel-frame ${theme === "dark" ? "mil-dark-panel" : "mil-light-panel"}`}>
      <div className="container">
        <div className="mil-top-panel">
          {/* mil-just-left mil-just-between */}
          <div className="mil-left">
            <Link href="/" className="mil-logo mil-logo-sm">
              <img loading="lazy" src="img/logo-4.png" alt="SDS" />
            </Link>
          </div>
          <div className="mil-right">
            <ThemeToggle />
            <nav>
              <ul
                className={`mil-navigation mil-white ${
                  toggle ? "mil-active" : ""
                }`}
              >
                <HeaderMenu />
              </ul>
            </nav>
            <div
              className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Header4 = () => {
  const [toggle, setToggle] = useState(false);
  const { theme } = useTheme();
  return (
    <div className={`mil-top-panel-frame ${theme === "dark" ? "mil-dark-panel" : "mil-light-panel"}`}>
      <div className="container">
        <div className="mil-top-panel">
          {/* mil-just-left mil-just-between */}
          <div className="mil-left">
            <Link href="/" className="mil-logo mil-logo-sm">
              <img loading="lazy" src="img/logo-4.png" alt="SDS" />
            </Link>
          </div>
          <div className="mil-right">
            <ThemeToggle />
            <nav>
              <ul className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
                <HeaderMenu />
              </ul>
            </nav>
            <div
              className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Header5 = () => {
  const [toggle, setToggle] = useState(false);
  const { theme } = useTheme();
  return (
    <div className={`mil-top-panel-frame ${theme === "dark" ? "mil-dark-panel" : "mil-light-panel"}`}>
      <div className="container">
        <div className="mil-top-panel">
          {/* mil-just-left mil-just-between */}
          <div className="mil-left">
            <Link href="/" className="mil-logo mil-logo-sm">
              <img loading="lazy" src="img/logo-5.png" alt="SDS" />
            </Link>
            <nav>
              <ul
                className={`mil-navigation mil-white ${
                  toggle ? "mil-active" : ""
                }`}
              >
                <HeaderMenu />
              </ul>
            </nav>
          </div>
          <div className="mil-right">
            <ThemeToggle />
            <div
              className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Header6 = () => {
  const [toggle, setToggle] = useState(false);
  const { theme } = useTheme();
  return (
    <div className={`mil-top-panel-frame ${theme === "dark" ? "mil-dark-panel" : "mil-light-panel"}`}>
      <div className="container">
        <div className="mil-top-panel">
          {/* mil-just-left mil-just-between */}
          <div className="mil-left">
            <Link href="/" className="mil-logo">
              <img loading="lazy" src="img/logo-2.png" alt="SDS" />
            </Link>
          </div>
          <div className="mil-right">
            <ThemeToggle />
            <nav>
              <ul className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
                <HeaderMenu />
              </ul>
            </nav>
            <div
              className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const DefaultHeader = () => {
  const [toggle, setToggle] = useState(false);
  const { theme } = useTheme();
  return (
    <div className={`mil-top-panel-frame ${theme === "dark" ? "mil-dark-panel" : "mil-light-panel"}`}>
      <div className="container">
        <div className="mil-top-panel">
          {/* mil-just-left mil-just-between */}
          <div className="mil-left">
            <Link href="/" className="mil-logo">
              <img loading="lazy" src="img/logo-1.png" alt="SDS" />
            </Link>
            <nav>
              <ul
                className={`mil-navigation mil-white mil-center ${
                  toggle ? "mil-active" : ""
                }`}
              >
                <HeaderMenu />
              </ul>
            </nav>
          </div>
          <div className="mil-right">
            <ThemeToggle />
            <div
              className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
