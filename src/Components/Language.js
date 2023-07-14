import { motion } from "framer-motion";

const Language = () => {
  return (
    <section>
       
      <h2 className="text-4xl">Language</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onViewportEnter={(entry) => {
          document.querySelector('.progress1').classList.add('progressEng')
          document.querySelector('.progress2').classList.add('progressJp')

        }}
        />
      <ul className="xl:grid xl:grid-cols-2">
        <li className="py-3">
          <span className="text-xl pb-3 xl:pb-5">English</span>
          <div class="w-[300px] h-4 xl:w-[600px] xl:h-6 bg-bgColorW rounded-full">
                <div class="progress1 w-0 h-full text-center text-xs text-white bg-bgColorS rounded-full">
                </div>
            </div>
        </li>
        <li className="py-3">
          <span className="text-xl pb-3 xl:pb-5">Japanese</span>
          <div class="w-[300px] h-4 xl:w-[600px] xl:h-6 bg-bgColorW rounded-full">
                <div class="progress2 w-0 h-full text-center text-xs text-white bg-bgColorS rounded-full">
                </div>
            </div>
        </li>
      </ul>
    </section>
  );
};
export default Language;
