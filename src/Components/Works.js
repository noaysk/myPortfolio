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
      </div>
    </section>
  );
};

export default Works;
