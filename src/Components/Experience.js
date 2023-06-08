const Experience = () => {
  return (
    <section className="bg-cover">
      <h2 className="text-4xl">Experiences</h2>
      <ul className="steps steps-vertical">
        <li data-content="" className="step  step-neutral ">
          A graduate of Meguro Seibi Hight School - Tokyo
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
      <div className="bg-bgColor p-3">
        <h3 className="text-2xl">Seneca College </h3>
        <p>Computer Programming Diploma (CPP)</p>
        <p>3.5 / 4.0 GPA - Graduating in April 2022</p>
      </div>
    </section>
  );
};
export default Experience;
