import config from "../config";
import bgBrick from "../Assets/top.webp";
import bgWall from "../Assets/wall.webp";

const Main = () => {
  return (
    <div>
      {/* <section
        className="bg-cover px-3"
        style={{ backgroundImage: "url(" + bgBrick + ")" }}
      > */}
      <section className="bg-bgColor px-3">
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
              <span>Address</span>
              <span>394 Whitmore Ave</span>
            </li>
            <li>
              <span>Github</span> <span>noaysk</span>
            </li>
            <li>
              <span>LinkedIn</span> <span>noa-yasukagawa-2270ba1b8</span>
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
              <span>Github</span> <span> </span>
            </li>
            <li>
              <span>LinkedIn</span> <span></span>
            </li>
          </ul>
        </div>
      </div>

      <section className="bg-cover px-3">
        <h2 className="text-4xl">Experiences</h2>
        <ul class="steps steps-vertical">
          <li data-content="" class="step  step-neutral">
            Register
          </li>
          <li data-content="" class="step step-neutral">
            Choose plan
          </li>
          <li data-content="" class="step step-neutral">
            Purchase
          </li>
          <li data-content="✓" class="step step-neutral">
            Receive Product
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
      <section className="p-3 mt-5 bg-bgColor ">
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
            <div className="radial-progress bg-white text-sm" style={{ "--value": 70 }}>
              MongoDB
            </div>
          </li>
          <li className="">
            <div className="radial-progress bg-white text-sm" style={{ "--value": 40 }}>
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
          English
          <li>
            <progress
              className="progress progress-warning  w-56"
              value="70"
              max="100"
            ></progress>
          </li>
          Japanese
          <li>
            <progress
              className="progress progress-warning w-56"
              value="100"
              max="100"
            ></progress>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-4xl">Interest</h2>
        
      </section>
    </div>
  );
};

const Carousel = () => {
  return (
    <ul className="flex gap-5 overflow-x-auto">
      <li className="">
        <div className="radial-progress  bg-white" style={{ "--value": 80 }}>
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
  );
};

export default Main;
