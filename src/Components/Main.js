import config from "../config";
import bg from "../Assets/top.webp";
const Main = () => {
  return (
    <div>
      <section
        className="bg-cover "
        style={{ backgroundImage: "url(" + bg + ")" }}
      >
        <h1 className="text-7xl flex flex-col">
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
      <section>
        <div>
          <h2>Profile</h2>
          <ul>
            <li>Name </li>
            <li>Address </li>
            <li>Github </li>
            <li>LinkedIn </li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li>Phone Number </li>
            <li>E-mail Address </li>
            <li>Github </li>
            <li>LinkedIn </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Main;
