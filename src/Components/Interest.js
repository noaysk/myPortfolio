import React, { useState } from "react";
import config from "../config";

const Interest = () => {
  return (
  <section>
        <h2 className="text-4xl">Interest</h2>

        <ul className="grid grid-cols-3">
          <li>
            <Item title="game" image={config.icon.game} />
          </li>
          <li>
            <Item title="ae" image={config.icon.ae} />
          </li>
          <li>
            <Item title="manga" image={config.icon.manga} />
          </li>
          <li>
            <Item title="paint" image={config.icon.paint} />
          </li>
          <li>
            <Item title="guitar" image={config.icon.guitar} />
          </li>
        </ul>
      </section>
  );
};

const Item = ({ title, image }) => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown({ ...isShown, [event]: !isShown[event] });
  };

  return (
    <div>
      <button onClick={() => handleClick(title)}>
        <img className="w-20" src={image} alt="my icon" />

        <h3> {title}</h3>
      </button>

      {isShown.game && (
        <div>
          <h4>Minecraft</h4>
        </div>
      )}
      {isShown.ae && (
        <div>
          <h4>Youtube</h4>
          <a href={config.socials.youtube}>My youtube channel</a>{" "}
        </div>
      )}
      {isShown.manga && (
        <div>
          <h4>List</h4>
        </div>
      )}
      {isShown.paint && (
        <div>
          <h4>MySite</h4>
        </div>
      )}
      {isShown.guitar && (
        <div>
          <h4>{title}</h4>
        </div>
      )}
    </div>
  );
};

export default Interest;
