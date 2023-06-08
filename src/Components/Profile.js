import config from "../config";

const Profile = () => {
  return (
    <section className="bg-white p-3">
    <div className="grid grid-rows-1 grid-flow-col gap-1 auto-cols-fr break-words">
      <div className="p-3 bg-bgColor">
        <h2 className="text-4xl">Profile</h2>
        <ul>
          <li>
            <span>Name</span> <span>Noa Yasukagawa</span>
          </li>
          <li>
            <span>
              <a className="flex" href={config.socials.Github}>
                Github
                <img
                  className="object-contain w-5 ml-1"
                  src={config.icon.GitHubIcon}
                  alt="my icon"
                />
              </a>
            </span>
            <span>
              <a href={config.socials.Github}> noaysk</a>
            </span>
          </li>
          <li>
            <span>
              <a className="flex" href={config.socials.LinkedIn}>
                LinkedIn
                <img
                  className="object-contain w-5 ml-1"
                  src={config.icon.LinkedInIcon}
                  alt="my icon"
                />
              </a>
            </span>
            <span>
              <a href={config.socials.LinkedIn}>noa-yasukagawa-2270ba1b8</a>
            </span>
          </li>
        </ul>
      </div>
      <div className="p-3 bg-bgColor">
        <h2 className="text-4xl">Contact</h2>
        <ul>
          <li>
            <span>Phone Number</span> <span>+81 080-4443-2875</span>
          </li>
          <li>
            <span>E-mail Address</span> <span>noa.y.michu.zzz@gmail.com</span>
          </li>
          <li>
            <span>Address</span>
            <span>394 Whitmore Ave York, ON M6E 2N4</span>
          </li>
        </ul>
      </div>
    </div>
    </section>
  );
};

export default Profile;
