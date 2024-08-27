import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion, spring } from "framer-motion";

// /////////////////////////////////////////
export default function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const zzz = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return zzz === buttonCategory;
    });

    setArr(newArr);
  };
  // ////////////////////////////
  return (
    <main className="flex">
      <section  className="   left-section flex">
        <button
          onClick={(params) => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>
        {/* ///////////////////////////////////// */}
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        {/* /////////////////////////// */}
        <button
          onClick={(params) => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
         JavaScript
        </button>
        {/* /////////////////////// */}

        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React js
        </button>
      </section>

      {/* /////////////////////// */}
      <section className=" flex right-section">
        <AnimatePresence>
        {arr.map((item) => {
          return (
            <motion.article
            layout
            initial={{  transform: "scale(0)" }}
            animate={{ transform: "scale(1)"}}
            transition={{type:"spring", damping: 8 ,stiffness:50 }}
            
            key={item.imgPath} className="  card">
              <img width={266} height={140} src={item.imgPath} alt="" />

              <div style={{ width: "266px" }} className="  box">
                <h1 className="title"> {item.projectTitel}</h1>

                <p className="sub-title">{item.prg}</p>
                {/* /////////// */}
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <a target="_blank" href={item.link}>
                      <div className="icon-link"></div>
                    </a>

                    <a target="_blank" href={item.github}>
                      <div className="icon-github"></div>
                    </a>
                  </div>
                  <a target="_blank" className="link flex" href={item.more}>
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
        </AnimatePresence>
      </section>
    </main>
  );
}
