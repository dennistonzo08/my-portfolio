import PythonBrand from "../assets/python-brands.svg";
import ScrollDownBrand from "../assets/angles-down-solid.svg";
import DatabaseBrand from "../assets/database-solid.svg";
import HtmlBrand from "../assets/html5-brands.svg";
import CssBrand from "../assets/css3-alt-brands.svg";
import JavascriptBrand from "../assets/js-brands.svg";
import GitBrand from "../assets/git-alt-brands.svg";
import AzureBrand from "../assets/azure-svgrepo-com.svg";
import PremiereBrand from "../assets/premiere-svgrepo-com.svg";
import AftereffectsBrand from "../assets/aftereffects-svgrepo-com.svg";
import MediaencoderBrand from "../assets/icons8-adobe-media-encoder-64 1 (2).svg";
import PhotoshopBrand from "../assets/photoshop-svgrepo-com.svg";
import IllustratorBrand from "../assets/illustrator-svgrepo-com.svg";
import CanvaBrand from "../assets/canva-svgrepo-com.svg";
import CsharpBrand from "../assets/csharp-svgrepo-com 1.svg";
import MysqlBrand from "../assets/mysql 1.svg";
import PhpBrand from "../assets/php-brands.svg";
import VisualbasicBrand from "../assets/vb-svgrepo-com 1.svg";
import JavaBrands from "../assets/java-brands.svg";

function PageThree() {
  return (
    <section className="h-screen w-full pagethree">
      <div className="myjourney-container w-full h-12 flex justify-center content-center">
        <h1 className="myjourney text-4xl font-semibold">MY JOURNEY</h1>
      </div>

      <div className="checkpoint">
        <div className="inriver w-full border-solid border rounded">
          <div>
            <p className="taytol">INRIVER</p>
            <p>Junior Programmer</p>
            <p>July 2023 - June 2025</p>
          </div>

          <div>
            <p>Technologies:</p>
            <ul className="flex flex-wrap">
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={PythonBrand}
                  alt="python"
                  height={"auto"}
                  width={"45%"}
                />
                <span>python</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={JavascriptBrand}
                  alt="javascript"
                  height={"auto"}
                  width={"45%"}
                />
                <span>javascript</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={DatabaseBrand}
                  alt="mssql"
                  height={"auto"}
                  width={"45%"}
                />
                <span>ms sql</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={HtmlBrand}
                  alt="html"
                  height={"auto"}
                  width={"45%"}
                />
                <span>Html</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={CssBrand}
                  alt="Css"
                  height={"auto"}
                  width={"45%"}
                />
                <span>Css</span>
              </li>
              <li className="flex justify-center">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>file_type_typescript_official</title>
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="1.312"
                      style={{ fill: "#1c1c1c" }}
                    ></rect>
                    <path
                      d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z"
                      style={{ fill: "#8C8B8B", fillRule: "evenodd" }}
                    ></path>
                  </g>
                </svg>
                <span>typescript</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={GitBrand}
                  alt="Git"
                  height={"auto"}
                  width={"45%"}
                />
                <span>Git</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={AzureBrand}
                  alt="azure"
                  height={"auto"}
                  width={"45%"}
                />
                <span>Azure</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="checkpoint">
        <div className="miso w-full border-solid border rounded">
          <div>
            <p className="taytol">MARKZ IT SOLUTIONS OPC</p>
            <p>Freelance Video Editor</p>
            <p>November 2022 - July 2023</p>
          </div>

          <div>
            <p>Technologies:</p>
            <ul className="flex flex-wrap">
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={PremiereBrand}
                  alt="premiere"
                  height={"auto"}
                  width={"45%"}
                />
                <span>premiere</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={AftereffectsBrand}
                  alt="after effects"
                  height={"auto"}
                  width={"45%"}
                />
                <span>after effects</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={MediaencoderBrand}
                  alt="adobe media encoder"
                  height={"auto"}
                  width={"70%"}
                />
                <span>adobe media encoder</span>
              </li>
              <li className="flex justify-center">
                <img
                  src={PhotoshopBrand}
                  alt="adobe photoshop"
                  height={"auto"}
                  width={"50%"}
                />
                <span>adobe photoshop</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={IllustratorBrand}
                  alt="illustrator"
                  height={"auto"}
                  width={"45%"}
                />
                <span>Illustrator</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={CanvaBrand}
                  alt="canva"
                  height={"auto"}
                  width={"45%"}
                />
                <span>Canva</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="checkpoint">
        <div className="altavista w-full border-solid border rounded">
          <div>
            <p className="taytol">ALTAVISTA BEACH RESORT</p>
            <p>Freelance Programmer</p>
            <p>September 2023 - October 2023</p>
          </div>

          <div>
            <p>Technologies:</p>
            <ul className="flex flex-wrap">
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={CsharpBrand}
                  alt="csharp"
                  height={"auto"}
                  width={"60%"}
                />
                <span>Csharp</span>
              </li>
              <li className="flex justify-center">
                <img
                  src={MysqlBrand}
                  alt="mysql"
                  height={"auto"}
                  width={"40%"}
                />
                <span>Mysql</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={PhpBrand}
                  alt="Php"
                  height={"auto"}
                  width={"70%"}
                />
                <span>Php</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={PythonBrand}
                  alt="python"
                  height={"auto"}
                  width={"45%"}
                />
                <span>Python</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="checkpoint">
        <div className="aifcp w-full border-solid border rounded">
          <div>
            <p className="taytol">
              AGRO-INDUSTRIAL FOUNDATION COLLEGE OF THE PHILIPPINES
            </p>
            <p>Freelance Programmer</p>
            <p>September 2023 - October 2023</p>
          </div>

          <div>
            <p>Technologies:</p>
            <ul className="flex flex-wrap">
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={CsharpBrand}
                  alt="csharp"
                  height={"auto"}
                  width={"60%"}
                />
                <span>Csharp</span>
              </li>
              <li className="flex justify-center">
                <img
                  src={MysqlBrand}
                  alt="mysql"
                  height={"auto"}
                  width={"40%"}
                />
                <span>Mysql</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={PhpBrand}
                  alt="Php"
                  height={"auto"}
                  width={"70%"}
                />
                <span>Php</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={PythonBrand}
                  alt="python"
                  height={"auto"}
                  width={"45%"}
                />
                <span>Python</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="checkpoint">
        <div className="dmsf w-full border-solid border rounded">
          <div>
            <p className="taytol">DAVAO MEDICAL SCHOOL FOUNDATION HOSPITAL</p>
            <p>Junior Programmer</p>
            <p>March 2019 - January 2023</p>
          </div>

          <div>
            <p>Technologies:</p>
            <ul className="flex flex-wrap">
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={CsharpBrand}
                  alt="csharp"
                  height={"auto"}
                  width={"60%"}
                />
                <span>csharp</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={MysqlBrand}
                  alt="mysq"
                  height={"auto"}
                  width={"45%"}
                />
                <span>mysql</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={PhpBrand}
                  alt="Php"
                  height={"auto"}
                  width={"70%"}
                />
                <span>Php</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={HtmlBrand}
                  alt="html"
                  height={"auto"}
                  width={"45%"}
                />
                <span>Html</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={CssBrand}
                  alt="css"
                  height={"auto"}
                  width={"45%"}
                />
                <span>Css</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={VisualbasicBrand}
                  alt="visual basic"
                  height={"auto"}
                  width={"45%"}
                />
                <span>Visual Basic</span>
              </li>
              <li className="flex justify-center">
                <img
                  className="block align-middle"
                  src={JavaBrands}
                  alt="java"
                  height={"auto"}
                  width={"45%"}
                />
                <span>java</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={ScrollDownBrand} alt="scroll arrow" width={20} height={20} />
      </div>
    </section>
  );
}

export default PageThree;
