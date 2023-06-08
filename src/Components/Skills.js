const Skills = () => {
  return (
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
  );
};
export default Skills;
