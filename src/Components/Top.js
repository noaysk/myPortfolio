import config from "../config";

const Top = () => {
  return (
    <section className="bg-bgColor">
      <h1 className="text-7xl flex flex-col px-3">
        HELLO<span className="text-right">WORLD</span>
      </h1>
      <img
        className="object-contain w-2/5 float-right"
        src={config.top.bubble}
        alt="My introduction"
      />
      <img
        className="object-contain w-80 mx-auto my-0"
        src={config.top.icon}
        alt="my icon"
      />
    </section>
  );
};
export default Top;
