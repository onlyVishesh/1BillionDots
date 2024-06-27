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
      <div className="flex w-full flex-col mt-auto">
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
                <a href="" className="flex gap-5 hover:text-orange-500">
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  <a href="https://www.google.com/maps/place/PLATINA+TOWER-2,+A+Block,+DLF+Phase+1,+Gurugram,+Sikanderpur+Ghosi,+Haryana+122022/@28.4802,77.092917,16z/data=!4m6!3m5!1s0x390d192f308689f7:0x9f314f9b1628a91c!8m2!3d28.4804237!4d77.0929591!16s%2Fg%2F11n6spmgsd?hl=en&entry=ttu">
                    Platina Tower-2, <br />
                    A block, DLF Phase 1, <br />
                    Gurugram, Haryana 122022
                  </a>
                </a>
                <a href="tel:+919811470135" className="flex gap-5 hover:text-orange-500">
                  <span>
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <p>Call +91 9811470135</p>
                </a>
                <a
                  href="mailto:billionDotscompany@gmail.com"
                  className="flex gap-5 hover:text-orange-500"
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
                  className="flex h-10 w-10 items-center justify-center border-2 border-white p-5 hover:border-orange-500 hover:text-orange-500  "
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border-2 border-white p-5 hover:border-orange-500 hover:text-orange-500  "
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="http://www.linkedin.com/company/1billiondots-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border-2 border-white p-5 hover:border-orange-500 hover:text-orange-500  "
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href="https://www.instagram.com/1billiondots?igsh=N3IyZGZod3djZDNz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border-2 border-white p-5 hover:border-orange-500 hover:text-orange-500  "
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
