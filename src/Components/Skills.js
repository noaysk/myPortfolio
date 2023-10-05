import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="mt-5 bg-bgColor ">
      <h2 className="text-4xl">Skills</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onViewportEnter={(entry) => {
          var skills90 = document.querySelectorAll('.radial-progress-90')
          for( var a = 0; a<skills90.length; a++){
            skills90[a].classList.add('meter-90')
          }
          var skills80 = document.querySelectorAll(".radial-progress-80")
          for( var b = 0; b<skills80.length; b++){
            skills80[b].classList.add('meter-80')
          }
          var skills70 = document.querySelectorAll(".radial-progress-70")
          for( var c = 0; c<skills70.length; c++){
            skills70[c].classList.add('meter-70')
          }
          var skills60 = document.querySelectorAll(".radial-progress-60")
          for( var d = 0; d<skills60.length; d++){
            skills60[d].classList.add('meter-60')
          }
          var skills50 = document.querySelectorAll(".radial-progress-50")
          for( var e = 0; e<skills50.length; e++){
            skills50[e].classList.add('meter-50')
          }
          var skills40 = document.querySelectorAll(".radial-progress-40")
          for( var f = 0; f<skills40.length; f++){
            skills40[f].classList.add('meter-40')
          }
          var skills30 = document.querySelectorAll(".radial-progress-30")
          for( var g = 0; g<skills30.length; g++){
            skills30[g].classList.add('meter-30')
          }
          var skills20 = document.querySelectorAll(".radial-progress-20")
          for( var h = 0; h<skills20.length; h++){
            skills20[h].classList.add('meter-20')
          }
          var skills10 = document.querySelectorAll(".radial-progress-10")
          for( var i = 0; i<skills10.length; i++){
            skills10[i].classList.add('meter-10')
          }
        }}
      />
      <Languages />
      <Framework />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onViewportEnter={(entry) => {
          var skills90 = document.querySelectorAll('.radial-progress-90-1')
          for( var a = 0; a<skills90.length; a++){
            skills90[a].classList.add('meter-90')
          }
          var skills80 = document.querySelectorAll(".radial-progress-80-1")
          for( var b = 0; b<skills80.length; b++){
            skills80[b].classList.add('meter-80')
          }
          var skills70 = document.querySelectorAll(".radial-progress-70-1")
          for( var c = 0; c<skills70.length; c++){
            skills70[c].classList.add('meter-70')
          }
          var skills60 = document.querySelectorAll(".radial-progress-60-1")
          for( var d = 0; d<skills60.length; d++){
            skills60[d].classList.add('meter-60')
          }
          var skills50 = document.querySelectorAll(".radial-progress-50-1")
          for( var e = 0; e<skills50.length; e++){
            skills50[e].classList.add('meter-50')
          }
          var skills40 = document.querySelectorAll(".radial-progress-40-1")
          for( var f = 0; f<skills40.length; f++){
            skills40[f].classList.add('meter-40')
          }
          var skills30 = document.querySelectorAll(".radial-progress-30-1")
          for( var g = 0; g<skills30.length; g++){
            skills30[g].classList.add('meter-30')
          }
          var skills20 = document.querySelectorAll(".radial-progress-20-1")
          for( var h = 0; h<skills20.length; h++){
            skills20[h].classList.add('meter-20')
          }
          var skills10 = document.querySelectorAll(".radial-progress-10-1")
          for( var i = 0; i<skills10.length; i++){
            skills10[i].classList.add('meter-10')
          }
        }}
      />
      <Database />
      <Platform />
    </section>
  );
};

const Languages = () => {
  return (
    <div className="xl:px-5">
      <h3 className="text-2xl p-3">Language</h3>
      <ul className="flex gap-5 xl:gap-16 overflow-x-auto xl:p-5">
        <li className="">
          <div className="radial-progress-90">HTML</div>
        </li>
        <li className="">
          <div className="radial-progress-90">CSS/SCSS</div>
        </li>
        <li className="">
          <div className="radial-progress-80">JS</div>
        </li>
        <li className="">
          <div className="radial-progress-60">JAVA</div>
        </li>
        <li className="">
          <div className="radial-progress-10">c/c++</div>
        </li>
      </ul>
    </div>
  );
};

const Framework = () => {
  return (
    <div className="xl:px-5">
      <h3 className="text-2xl p-3">Framework</h3>
      <ul className="flex gap-5 xl:gap-16 overflow-x-auto xl:p-5">
        <li className="">
          <div className="radial-progress-80">React</div>
        </li>
        <li className="">
          <div className="radial-progress-30">Vue</div>
        </li>
        <li className="">
          <div className="radial-progress-40">Angular</div>
        </li>
        <li className="">
          <div className="radial-progress-60">Next.js</div>
        </li>
      </ul>
    </div>
  );
};

const Database = () => {
  return (
    <div className="xl:px-5">
      <h3 className="text-2xl p-3">Database</h3>
      <ul className="flex gap-5 xl:gap-16 overflow-x-auto xl:p-5">
        <li className="">
          <div className="radial-progress-60-1 text-center">MySQL</div>
        </li>
        <li className="">
          <div
            className="radial-progress-70-1 text-sm">
            MongoDB
          </div>
        </li>
        <li className="">
          <div
            className="radial-progress-30-1 text-sm">
            PostgreSQL
          </div>
        </li>
      </ul>
    </div>
  );
};

const Platform = () => {
  return (
    <div className="xl:px-5">
      <h3 className="text-2xl p-3">Platform</h3>
      <ul className="flex gap-5 xl:gap-16 overflow-x-auto xl:p-5">
        <li className="">
          <div
            className="radial-progress-90-1 text-center"
          >
            Visual Studio
          </div>
        </li>
        <li className="">
          <div className="radial-progress-80-1">
            Figma
          </div>
        </li>
        <li className="">
          <div className="radial-progress-70-1">
            Adobe XD
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
