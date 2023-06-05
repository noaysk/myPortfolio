import React, { useState } from "react";

import config from "../config";
import bgBrick from "../Assets/top.webp";
import bgWall from "../Assets/wall.webp";

const Main = () => {

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  return (
    <div>
 <button onClick={handleClick}>Click</button>

{/* 👇️ show elements on click */}
{isShown && (
  <div>
    <h2>Some content here</h2>
  </div>
)}

{/* 👇️ show component on click */}
{isShown && <Box />}
      <section className="bg-bgColor">
        <h1 className="text-7xl flex flex-col px-3">
          HELLO
          <span className="text-right">WORLD</span>
        </h1>
        <img
          className="object-contain w-2/5 float-right"
          src={config.top.bubble}
          alt="hi"
        />
        <img
          className="object-contain w-80 mx-auto my-0"
          src={config.top.icon}
          alt="my icon"
        />
      </section>
      <div
        class="grid bg-white grid-rows-1 
                     grid-flow-col gap-1 auto-cols-fr break-words p-3"
      >
        <div class="p-3 bg-bgColor">
          <h2 className="text-4xl">Profile</h2>

          <ul>
            <li>
              <span>Name</span> <span>Noa Yasukagawa</span>
            </li>

            <li>
              <span>
                <a className="flex" href={config.socials.Github}>
                  Github
                  <img
                    className="object-contain w-5 ml-1"
                    src={config.icon.GitHubIcon}
                    alt="my icon"
                  />
                </a>
              </span>
              <span>
                <a href={config.socials.Github}> noaysk</a>
              </span>
            </li>
            <li>
              <span>
                <a className="flex" href={config.socials.LinkedIn}>
                  LinkedIn
                  <img
                    className="object-contain w-5 ml-1"
                    src={config.icon.LinkedInIcon}
                    alt="my icon"
                  />
                </a>
              </span>
              <span>
                <a href={config.socials.LinkedIn}>noa-yasukagawa-2270ba1b8</a>
              </span>
            </li>
          </ul>
        </div>
        <div class="p-3 bg-bgColor">
          <h2 className="text-4xl">Contact</h2>
          <ul>
            <li>
              <span>Phone Number</span> <span>+81 080-4443-2875</span>
            </li>
            <li>
              <span>E-mail Address</span> <span>noa.y.michu.zzz@gmail.com</span>
            </li>
            <li>
              <span>Address</span>
              <span>394 Whitmore Ave York, ON M6E 2N4</span>
            </li>
          </ul>
        </div>
      </div>

      <section className="bg-cover">
        <h2 className="text-4xl">Experiences</h2>
        <ul class="steps steps-vertical">
          <li data-content="" class="step  step-neutral ">
            A graduate of Meguro Seibi Hight School - Tokyo
          </li>
          <li data-content="" class="step step-neutral">
            Enroll in Seneca College - Toronto
          </li>
          <li data-content="✓" class="step step-neutral">
            F Co., Ltd. - Tokyo
          </li>
          <li data-content="" class="step step-neutral">
            A graduate of Seneca College - Toronto{" "}
          </li>
        </ul>
        <div className="bg-bgColor p-3">
          <h3 className="text-2xl">Seneca College </h3>
          <p>Computer Programming Diploma (CPP)</p>
          <p>3.5 / 4.0 GPA - Graduating in April 2022</p>
        </div>
      </section>

      {/* <section
        className="p-3 mt-5 bg-cover "
        style={{ backgroundImage: "url(" + bgWall + ")" }}
      > */}
      <section className="mt-5 bg-bgColor ">
        <h2 className="text-4xl">Skills</h2>
        <h3 className="text-2xl p-3">Language</h3>
        <ul className="flex gap-5 overflow-x-auto ">
          <li className="">
            <div className="radial-progress bg-white" style={{ "--value": 80 }}>
              HTML
            </div>
          </li>
          <li className="">
            <div className="radial-progress bg-white" style={{ "--value": 70 }}>
              CSS/SCSS
            </div>
          </li>
          <li className="">
            <div className="radial-progress bg-white" style={{ "--value": 60 }}>
              JS
            </div>
          </li>
          <li className="">
            <div className="radial-progress bg-white" style={{ "--value": 30 }}>
              JAVA
            </div>
          </li>
          <li className="">
            <div className="radial-progress bg-white" style={{ "--value": 15 }}>
              c/c++
            </div>
          </li>
        </ul>
        <h3 className="text-2xl p-3">Framework</h3>
        <ul className="flex gap-5 overflow-x-auto">
          <li className="">
            <div className="radial-progress bg-white" style={{ "--value": 60 }}>
              React
            </div>
          </li>
          <li className="">
            <div className="radial-progress bg-white" style={{ "--value": 10 }}>
              Next.js
            </div>
          </li>
        </ul>
        <h3 className="text-2xl p-3">Database</h3>
        <ul className="flex gap-5 overflow-x-auto">
          <li className="">
            <div
              className="radial-progress bg-white text-center"
              style={{ "--value": 60 }}
            >
              MySQL
            </div>
          </li>
          <li className="">
            <div
              className="radial-progress bg-white text-sm"
              style={{ "--value": 70 }}
            >
              MongoDB
            </div>
          </li>
          <li className="">
            <div
              className="radial-progress bg-white text-sm"
              style={{ "--value": 40 }}
            >
              PostgreSQL
            </div>
          </li>
        </ul>
        <h3 className="text-2xl p-3">Plathome</h3>
        <ul className="flex gap-5 overflow-x-auto">
          <li className="">
            <div
              className="radial-progress bg-white text-center"
              style={{ "--value": 90 }}
            >
              Visual Studio
            </div>
          </li>
          <li className="">
            <div className="radial-progress bg-white" style={{ "--value": 80 }}>
              Figma
            </div>
          </li>
          <li className="">
            <div className="radial-progress bg-white" style={{ "--value": 70 }}>
              Adbe XD
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-4xl">Language</h2>
        <ul>
          <li className="py-3">
            <span className="text-xl">English</span>
            <progress
              className="progress progress-warning w-56 h-6"
              value="70"
              max="100"
            ></progress>
          </li>
          <li className="py-3">
            <span className="text-xl">Japanese</span>
            <progress
              className="progress progress-warning w-56 h-6"
              value="100"
              max="100"
            ></progress>
          </li>
        </ul>
      </section>

    

      <section>
        <h2 className="text-4xl">Interest</h2>
        <ul className="grid grid-cols-3">


        <li tabIndex={0} className="collapse text-center">
        <div className="collapse-title text-xl font-medium p-8">
          <img className="" src={config.icon.game} alt="my icon" />
          <span>Game</span>
        </div>
        <div className="collapse-content">
          <p className="w-24">Minecraft, 7days to die, Genshin, Mario Kart</p>
          <a className="" href={config.socials.Github}>
                  NOA NOA NOA
                </a>
        </div>
      </li>

      <li tabIndex={0} className="collapse text-center">
        <div className="collapse-title text-xl font-medium p-8">
          <img className="" src={config.icon.game} alt="my icon" />
          <span>Game</span>
        </div>
        <div className="collapse-content">
        <a className="flex" href={config.socials.Github}>
                  Github
                  NOA NOA NOA
                </a>
        </div>
      </li>
     

      <li tabIndex={0} className="collapse text-center">
        <div className="collapse-title text-xl font-medium pt-6 w-36 pb-3">
          <img className="" src={config.icon.ae} alt="my icon" />
          <span>AfterEffects</span>
        </div>
        <div className="collapse-content">
          <Carousel/>
        </div>
      </li>

     

          <li className="text-center collapse">
            <input type="checkbox" />
            <div className="collapse-title p-8 pb-3">
              <img className="" src={config.icon.paint} alt="my icon" />
              <span>paint</span>
            </div>
            <div className="collapse-content">
              <p className="w-24 break-normal"></p>
            </div>
          </li>

          <li className="w-16 text-center">
            <img
              className="object-contain"
              src={config.icon.paint}
              alt="my icon"
            />
            <span>paint</span>
          </li>
          <li className="w-16 text-center">
            <img
              className="object-contain"
              src={config.icon.guitar}
              alt="my icon"
            />
            <span>guitar</span>
          </li>
        </ul>
      </section>

      
    </div>
  );
};


const Carousel = () => {
  return (
    <a className="flex" href={config.socials.Github}>
                  NOA NOA NOA
                </a>
  );
};



function Box() {
  return (
    <div>
  <a href={config.socials.LinkedIn}>noa-yasukagawa-2270ba1b8</a>    </div>
  );
}
 

export default Main;
