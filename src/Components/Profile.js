import config from "../config";

const Profile = () => {
  return (
    <section className="bg-white text-cyan-950 p-3 xl:py-10">
      
      <div className="flex flex-col w-full xl:grid grid-pro">
        <div className="grid flex-grow  place-items-center">
          <div className="p-3 w-[300px] xl:w-fit xl:p-20">
            <h2 className="">Profile</h2>
            <ul>
              <li>
                <span>Name</span> <span>Noa Yasukagawa</span>
              </li>
              <li>
                <span>
                  <a className="flex" href={config.socials.Github} target="_blank" rel="noreferrer">
                    Github
                    <img
                      className="object-contain w-5 ml-1 xl:w-10"
                      src={config.icon.GitHubIcon}
                      alt="my icon"
                    />
                  </a>
                </span>
                <span>
                  <a href={config.socials.Github} target="_blank" rel="noreferrer"> noaysk</a>
                </span>
              </li>
              <li>
                <span>
                  <a className="flex" href={config.socials.LinkedIn} target="_blank" rel="noreferrer">
                    LinkedIn
                    <img
                      className="object-contain w-5 ml-1 xl:w-10"
                      src={config.icon.LinkedInIcon}
                      alt="my icon"
                    />
                  </a>
                </span>
                <span>
                  <a href={config.socials.LinkedIn} target="_blank" rel="noreferrer">noayasukagawa</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="divider lg:divider-horizontal lg:justify-self-center">AND</div>
        <div className="grid flex-grow  place-items-center">
        <div className="p-3 w-[300px] xl:w-fit xl:p-20">
          <h2 className="">Contact</h2>
          <ul>
            <li>
              <span>Phone Number</span> <span>+1 437-460-0479</span>
            </li>
            <li>
              <span>E-mail Address</span> <span>noa.y.michu.zzz@gmail.com</span>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
