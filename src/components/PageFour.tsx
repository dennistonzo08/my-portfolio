import EmailBrand from "../assets/envelope-solid.svg";
import LinkedInBrand from "../assets/linkedin-brands.svg";
import GithubBrand from "../assets/github-brands.svg";
import FacebookBrand from "../assets/facebook-brands.svg";
import InstagramBrand from "../assets/instagram-brands.svg";
import ViteBrand from "../assets/vite.svg";
import ReactBrand from "../assets/react.svg";
import TailwindBrand from "../assets/tailwind-css.svg";

function PageFour() {
  return (
    <section className="h-screen w-full pagethree">
      <div className="px-20">
        <h1 className="letstalk-header text-7xl font-semibold pt-30 pb-30 text-left">
          LETS TALK!
        </h1>

        <div className="letstalk-content">
          <ul className="flex flex-wrap">
            <li className="w-1/3 p-4">
              <a href="mailto:dennistonzo08@gmail.com">
                <div className="flex">
                  <img src={EmailBrand} alt="email" width={50} height={50} />
                  <div className="flex flex-col justify-center content-center ml-2">
                    <p className="text-left">Send me an email:</p>
                    <p className="text-left font-bold">
                      dennistonzo08@gmail.com
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li className="w-1/3 p-4">
              <a href="https://www.linkedin.com/in/dtonzo/" target="_blank">
                <div className="flex">
                  <img
                    src={LinkedInBrand}
                    alt="linkedin"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col justify-center content-center ml-2">
                    <p className="text-left">My LinkedIn Account:</p>
                    <p className="text-left font-bold">/in/tonzo</p>
                  </div>
                </div>
              </a>
            </li>
            <li className="w-1/3 p-4">
              <a href="https://github.com/dennistonzo08" target="_blank">
                <div className="flex">
                  <img src={GithubBrand} alt="github" width={50} height={50} />
                  <div className="flex flex-col justify-center content-center ml-2">
                    <p className="text-left">My Github Account:</p>
                    <p className="text-left font-bold">@dennistonzo08</p>
                  </div>
                </div>
              </a>
            </li>
            <li className="w-1/3 p-4">
              <a
                href="https://www.facebook.com/dennis.john.45442"
                target="_blank"
              >
                <div className="flex">
                  <img
                    src={FacebookBrand}
                    alt="facebook"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col justify-center content-center ml-2">
                    <p className="text-left">My Facebook Account:</p>
                    <p className="text-left font-bold">/dennis.john.45442</p>
                  </div>
                </div>
              </a>
            </li>
            <li className="w-1/3 p-4">
              <a href="https://www.instagram.com/sowsitrash/" target="_blank">
                <div className="flex">
                  <img
                    src={InstagramBrand}
                    alt="instagram"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col justify-center content-center ml-2">
                    <p className="text-left">My Instagram Account:</p>
                    <p className="text-left font-bold">@sowsitrash</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="letstalk-footer mt-10 flex">
          <div className="powered-container w-3/12">
            <h1 className="poweredby p-4">Powered By:</h1>
            <div className="">
              <ul className="powered-list flex">
                <li>
                  <div>
                    <img src={ViteBrand} alt="vite" />
                  </div>
                </li>
                <li>
                  <div>
                    <img src={ReactBrand} alt="react" />
                  </div>
                </li>
                <li>
                  <div>
                    <img src={TailwindBrand} alt="css" width={40} height={40} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full text-right design-container">
            <p className="font-bold">
              Designed and Maintained By: Dennis John Tonzo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageFour;
