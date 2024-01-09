import React, { useState } from "react";
import config from "../config";

const Interest = () => {
  return (
  <section className="bg-white text-cyan-950">
        <h2 className="text-4xl">Interest</h2>

        <ul className="grid grid-cols-3">
          <li className="justify-self-center p-4">
            <Item title="Game" image={config.icon.game} />
          </li>
          <li className="justify-self-center p-4">
            <Item title="AfterEffects" image={config.icon.ae} />
          </li>
          <li className="justify-self-center p-4">
            <Item title="Anime" image={config.icon.manga} />
          </li>
          <li className="justify-self-center p-4"> 
            <Item title="Paint" image={config.icon.paint} />
          </li>
          <li className="justify-self-center p-4">
            <Item title="Guitar" image={config.icon.guitar} />
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
    <div className="xl:w-56">
      <button onClick={() => handleClick(title)}>
        <img className="" src={image} alt="my icon" />
        <span class="relative flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-bgColor opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-bgColorS"></span>
</span>
        <h3> {title}</h3>
      </button>

      {isShown.Game && (
        <div>
          <a href={config.socials.twitch}>Me and my friend stream with Twitch sometimes</a>
        </div>
      )}
      {isShown.AfterEffects && (
        <div>
          <a href={config.socials.youtube}>My youtube channel noaysk</a>
        </div>
      )}
      {isShown.Anime && (
        <div>
          <a href={config.socials.myAnimeList}>My Anime List</a>
        </div>
      )}
      {isShown.Paint && (
        <div>
          <h4>I'm in the process of creating a page</h4>
        </div>
      )}
      {isShown.Guitar && (
        <div>
          <h4>just for fun</h4>
        </div>
      )}
    </div>
  );
};

export default Interest;
