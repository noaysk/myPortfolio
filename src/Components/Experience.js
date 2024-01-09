import config from "../config";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="bg-cover bg-bgBColor text-textBColor">
      <h2 className="text-4xl">Experiences</h2>
      <div className="xl:flex">
        <ul className="steps steps-vertical xl:px-5">
          <li data-content="" className="step step-neutral ">
            A graduate of Meguro Seibi High School
          </li>
          <li data-content="" className="step step-neutral">
            Enrolled at Seneca College - Toronto
          </li>
          <li data-content="✓" className="step step-neutral">
            F Co., Ltd. - Tokyo
          </li>
          <li data-content="" className="step step-neutral">
            A graduate of Seneca College - Toronto
          </li>
        </ul>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onViewportEnter={(entry) => {
            document.querySelector('.opacityAnimation').classList.add('opacityAnimationStart') 
          }}
        />
        <div className="opacityAnimation bg-frame1 bg-no-repeat bg-contain w-[350px] bg-center px-3 py-12 xl:w-[500px] xl:my-0 xl:mx-auto text-cyan-950">
          <div className="w-[256px] my-o mx-auto xl:pt-[100px] xl:pl-[65px] xl:w-[450px]">
            <h3 className="text-2xl pb-0">F Co., Ltd. (Programmer) </h3>
            <h4 className="text-xl pb-3">November 2021 to Jun 2023</h4>
            <p>
            F CO. is an consultant company who implements applications for various clients.
            I have participated in multiple projects remotely from Canada, sometimes on site at
            Japan during summer vacation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
