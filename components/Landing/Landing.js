import React from "react";
import style from "./Landing.module.css";

function LandingIntro() {
  const hacker =
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
  const lock =
    "https://images.unsplash.com/photo-1614064849431-65b8359979f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
  //
  return (
    <div className={style.HeadBox}>
      {/* FIRST DIV */}
      <div className={style.HrightBox}>
        <div className={style.HrbLogoButton}>
          <img className={style.HrbTopLogo} src={lock} />
          <button className={style.HrbTopButton}>sign up</button>
        </div>
        <h1 className={style.HrbHook}>Is your data safe ? </h1>
        <h1 className={style.HrbHook}>
          In the latest breach, 125,698,496 user accounts, have been stolen.{" "}
          <button>Learn more</button>
        </h1>
        <div className={style.HrbBottomButtonsLogo}>
          <div className={style.HrbBottomButtons}>
            <button className={style.HrbBottomButton}>Podcast</button>
            <button className={style.HrbBottomButton}>News</button>
          </div>
          <img className={style.HrbBottomlogo} src={lock} />
        </div>
      </div>
      {/* SECOND DIV */}
      <div className={style.HleftBox}>
        <img
          className={style.HlbImage}
          src={hacker}
          alt="code indicating hack"
        />
        {/* from :https://www.techrepublic.com/article/from-the-dark-web-to-the-open-web-what-happens-to-stolen-data/ */}
      </div>
    </div>
  );
}

export default LandingIntro;
