import config from "../config";

const Top = () => {
  return (
    <section className="bg-bgColor xl:bg-wall xl:h-screen xl:bg-cover xl:bg-center">
      <h1 className="flex flex-col px-3 text-7xl xl:flex-row xl:hidden">
        HELLO<span className="text-right ">WORLD</span>
      </h1>
      <div className="">
      <div className="">
      <div></div>
      <div></div>
        <img
          className="object-contain w-2/5 xl:w-[450px]  xl:mt-10 ml-auto"
          src={config.top.bubble}
          alt="My introduction"
        />
        </div>
        <img
          className="object-contain w-80 mx-auto my-0 xl:w-[600px] xl:absolute xl:bottom-10 xl:left-0 xl:right-0"
          src={config.top.icon}
          alt="my icon"
        />
      </div>
    </section>
  );
};
export default Top;
