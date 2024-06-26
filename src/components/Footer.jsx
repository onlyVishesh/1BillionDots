  import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
  import {
    faCopyright,
    faEnvelope,
    faLocationDot,
    faPhone,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  const Footer = () => {
    return (
      <div className="flex w-full flex-col mt-10">
        <div className="flex bg-[#252839]">
          <div className="m-auto flex flex-col  items-start justify-center gap-5 px-5 py-10 text-white lg:flex-row lg:gap-16">
            <div className="flex w-72 flex-col gap-2 xs:w-80">
              <h3 className="text-3xl font-bold">1Billion Dots</h3>
              <p className="text-sm xs:text-lg">
                We embody the essence of creative metamorphosis, shaping
                innovation and evolution.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-bold">Contact Us</h3>
              <div className="text-md flex flex-col gap-2 xs:text-lg">
                <a href="" className="flex gap-5">
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  <p>
                    Platina Tower-2, <br />
                    A block, DLF Phase 1, <br />
                    Gurugram, Haryana 122022
                  </p>
                </a>
                <a href="tel:+919811470135" className="flex gap-5">
                  <span>
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <p>Call +91 9811470135</p>
                </a>
                <a
                  href="mailto:billionDotscompany@gmail.com"
                  className="flex gap-5"
                >
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <p>BillionDotsCompany@gmail.com</p>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-bold">Follow Us</h3>
              <ul className="flex gap-5 text-lg xs:text-xl">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border-2 border-white p-5 hover:border-orange-600 hover:text-orange-600  "
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border-2 border-white p-5 hover:border-orange-600 hover:text-orange-600  "
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="http://www.linkedin.com/company/1billiondots-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border-2 border-white p-5 hover:border-orange-600 hover:text-orange-600  "
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href="https://www.instagram.com/1billiondots?igsh=N3IyZGZod3djZDNz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border-2 border-white p-5 hover:border-orange-600 hover:text-orange-600  "
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FontAwesomeIcon
            className="rounded-full bg-black p-0.5 text-white"
            icon={faCopyright}
          />
          2024 All Rights Reserved By 1Billion Dots Company
        </div>
      </div>
    );
  };

  export default Footer;
