import config from "../config";

const Works = () => {
  return (
    <section className="">
      <h2 className="text-4xl">My Works</h2>
      <h3>F Co., Ltd.</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4>CouponBank 1st</h4>
          <img
            className="object-contain"
            src={config.works.cb1}
            alt="coupon bank1"
          />
        </div>
        <div>
          <h4>CouponBank 2nd</h4>
          <img
            className="object-contain"
            src={config.works.cb2}
            alt="coupon bank1"
          />
        </div>
        <div>
          <h4>Sugoroku Game</h4>
          <img
            className="object-contain"
            src={config.works.sugoroku}
            alt="coupon bank1"
          />
        </div><div>
          <h4>School site</h4>
          <img
            className="object-contain"
            src={config.works.sowers}
            alt="school site"
          />
        </div>
      </div>
      <div className="divider"></div>

        <h3>Practice</h3>
        <div className="grid grid-cols-2 gap-4">

        <div>
          <h4>Todo App(Next.js)</h4>
          <img
            className="object-contain"
            src={config.works.todo}
            alt="coupon bank1"
          />
        </div>
        <div>
          <h4>Design(UI)</h4>
          <img
            className="object-contain"
            src={config.works.leader}
            alt="coupon bank1"
          />
        </div>
      </div>
    </section>
  );
};

export default Works;
