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
          <li data-content="✓" className="step step-neutral">
            STUCKON - Toronto
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
            document
              .querySelector(".opacityAnimation")
              .classList.add("opacityAnimationStart");
          }}
        />
        <div className="bg-bgColor rounded-lg p-2  text-cyan-950">
          <div className="w-[256px] my-o mx-auto p-5 xl:w-[450px]">
            <div>
              <h3 className="text-2xl pb-0">
                F Co., Ltd. (Full-Stuck Developer){" "}
              </h3>
              <h4 className="text-xl pb-3">July 2021 to May 2023</h4>
              <p>
                F CO. is an consultant company who implements applications for
                various clients. I have participated in multiple projects
                remotely from Canada, sometimes on site at Japan during summer
                vacation.
              </p>
            </div>
            <div className="pt-5">
              <h3 className="text-2xl pb-0">
                STUCKON (Jr.Front-End Developer){" "}
              </h3>
              <h4 className="text-xl pb-3">Nov 2021 to Jan 2022</h4>
              <p>
                Participated in the development of an Android app for
                international students in Toronto. Engaged in a study focused on
                website development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
