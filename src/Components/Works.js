import config from "../config";

const Works = () => {
  return (
    <section className="">
      <h2 className="text-4xl">My Works</h2>
      <h3>F Co., Ltd.</h3>
      <ul className="grid grid-cols-2 gap-4">
        <li>
          <h4>CouponBank 1st</h4>
          <div className="item">
            <img
              className="object-contain"
              src={config.works.cb1}
              alt="coupon bank1"
            />
            <div class="item__text">
              <ul>
                <li>AdobeXD</li>
                <li>SCSS</li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <h4>CouponBank 2nd</h4>
          <div className="item">
            <img
              className="object-contain"
              src={config.works.cb2}
              alt="coupon bank1"
            />
            <div class="item__text">
              <ul>
                <li>AdobeXD</li>
                <li>SCSS(Bootstrap:AdminLTE)</li>
                <li>Java(SpringBoot)</li>
                <li>Integration testing</li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <h4>Sugoroku Game</h4>
          <div className="item">
            <img
              className="object-contain"
              src={config.works.sugoroku}
              alt="coupon bank1"
            />
            <div class="item__text">
              <ul>
                <li>Figma</li>
                <li>Vue.js</li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <h4>School site</h4>
          <div className="item">
            <img
              className="object-contain"
              src={config.works.sowers}
              alt="school site"
            />
            <div class="item__text">
              <ul>
                <li>Figma</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>

      <div className="divider"></div>
      <h3>Practice</h3>

      <ul className="grid grid-cols-2 gap-4">
        <li>
          <h4>Todo App(Next.js)</h4>
          <div className="item">
            <img
              className="object-contain"
              src={config.works.todo}
              alt="coupon bank1"
            />
            <div class="item__text">
              <ul>
                <li>Next.js</li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <h4>Design(UI)</h4>
          <div className="item">
            <img
              className="object-contain"
              src={config.works.leader}
              alt="coupon bank1"
            />
            <div class="item__text">
              <ul>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Works;
