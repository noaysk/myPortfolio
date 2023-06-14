import config from "../config";

const Top = () => {
  return (
    <section className="bg-bgColor xl:bg-wall2 xl:h-screen xl:bg-cover xl:bg-center">
      <h1 className="flex flex-col px-3 text-7xl xl:flex-row xl:text-d7xl xl:gap-24 xl:te">
        HELLO<span className="text-right xl:outline-title">WORLD</span>
      </h1>
      <div className="xl:px-16">
        <img
          className="object-contain w-2/5 float-right xl:w-[500px]"
          src={config.top.bubble}
          alt="My introduction"
        />
        <img
          className="object-contain w-80 mx-auto my-0 xl:w-[800px] xl:absolute xl:bottom-0 xl:left-0 xl:right-0"
          src={config.top.icon}
          alt="my icon"
        />
      </div>
    </section>
  );
};
export default Top;
