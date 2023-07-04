import config from "../config";

const Top = () => {
  return (
    <section className="bg-bgColor xl:bg-wall xl:h-screen xl:bg-cover xl:bg-center">
      <h1 className="flex flex-col px-3 text-7xl xl:flex-row xl:hidden">
        HELLO<span className="text-right ">WORLD</span>
      </h1>
      <div className="">
        <img
          className="object-contain w-2/5 float-right xl:w-[500px]"
          src={config.top.bubble}
          alt="My introduction"
        />
        <img
          className="object-contain w-80 mx-auto my-0 xl:w-[800px] xl:absolute xl:bottom-10 xl:left-0 xl:right-0"
          src={config.top.icon}
          alt="my icon"
        />
      </div>
    </section>
  );
};
export default Top;
