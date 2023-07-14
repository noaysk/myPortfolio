const Experience = () => {
  return (
    <section className="bg-cover">
      <h2 className="text-4xl">Experiences</h2>
      <div className="xl:flex">
        <ul className="steps steps-vertical xl:px-5">
          <li data-content="" className="step step-neutral ">
            A graduate of Meguro Seibi High School
          </li>
          <li data-content="" className="step step-neutral">
            Enroll in Seneca College - Toronto
          </li>
          <li data-content="✓" className="step step-neutral">
            F Co., Ltd. - Tokyo
          </li>
          <li data-content="" className="step step-neutral">
            A graduate of Seneca College - Toronto{" "}
          </li>
        </ul>

        <div className="bg-frame1 bg-no-repeat bg-contain w-[350px] bg-center px-3 py-12 xl:w-[500px] xl:mt-0 xl:my-0 xl:mr-0 xl:ml-auto">
          <div className=" xl:pt-[100px] xl:pl-[100px]">
            <h3 className="text-2xl">Seneca College </h3>
            <p>Computer Programming Diploma (CPP)</p>
            <p>3.5 / 4.0 GPA - Graduating in April 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
