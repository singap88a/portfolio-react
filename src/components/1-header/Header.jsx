import { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
 import "./header.css";
 
 
export default function Header() {
  const [showModal, setshowModal] = useState(false);
  /* ========================
         dark modl start
 ===========================*/
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  /* ========================
         dark modl end
 ===========================*/
  return (
    
      
        <header className="  flex">
          <button
            onClick={(params) => {
              setshowModal(true);
            }}
            className="menu icon-menu flex"
          >
            {" "}
          </button>
          <div />

          <nav>
            <ul className="flex">
              <li>
                <a href="#Hero">About Us</a>
              </li>

              <li>
                <a href="#Main">Projects</a>
              </li>
              <li>
                <a href="">Speaking</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>

          {/* //////// dark modl button start /////// */}
          <button
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme === "dark" ? "light" : "dark"
              );
              setTheme(localStorage.getItem("currentMode"));
            }}
            className="mode flex"
          >
            {theme === "dark" ? (
              <span className="icon-moon-o"></span>
            ) : (
              <span className="icon-sun"></span>
            )}
          </button>
          {/* //////// dark modl button end /////// */}

          {showModal && (
            <div  className=" fixed  ">
              
              <ul  className="modal">
                <li>
                  <button
                    className="icon-close"
                    onClick={() => {
                      setshowModal(false);
                    }}
                  />
                </li>
                <li>
                  <a   onClick={() => {
                      setshowModal(false);
                    }} href="#Hero">About Us</a>
                </li>

                <li>
                  <a   onClick={() => {
                      setshowModal(false);
                    }} href="#Main">Projects</a>
                </li>
                <li>
                  <a   onClick={() => {
                      setshowModal(false);
                    }} href="">Speaking</a>
                </li>
                <li>
                  <a   onClick={() => {
                      setshowModal(false);
                    }} href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>
          )}

        
        </header>
      
    
  );
}
