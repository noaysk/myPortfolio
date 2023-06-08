const Language = () => {
  return (
    <section>
      <h2 className="text-4xl">Language</h2>
      <ul>
        <li className="py-3">
          <span className="text-xl">English</span>
          <progress
            className="progress progress-warning w-56 h-6"
            value="70"
            max="100"
          ></progress>
        </li>
        <li className="py-3">
          <span className="text-xl">Japanese</span>
          <progress
            className="progress progress-warning w-56 h-6"
            value="100"
            max="100"
          ></progress>
        </li>
      </ul>
    </section>
  );
};
export default Language;
