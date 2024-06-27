import React from "react";

const containerStyle = {
  width: "100%",
  height: "550px",
};

const center = {
  lat: 19.075314480255834,
  lng: 72.88153973865361,
};

const Contact = () => {
  const [selected, setSelected] = React.useState(null);

  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <div className="">
        <section className="section1 clearfix">
          <div className="textcenter">
            <span className="mb-10 text-center text-4xl font-bold text-orange-500 md:text-6xl">
              Contact Us
            </span>
          </div>
        </section>

        <section className="section2 clearfix">
          <div className="col2 column1 first">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7013.956609941475!2d77.092917!3d28.4802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d192f308689f7%3A0x9f314f9b1628a91c!2sPLATINA%20TOWER-2%2C%20A%20Block%2C%20DLF%20Phase%201%2C%20Gurugram%2C%20Sikanderpur%20Ghosi%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1719457866470!5m2!1sen!2sin"
             
              className="w-full h-[300px] xl:w-[600px] xl:h-[450px]"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col2 column2 last">
            <div className="sec2innercont">
              <div className="sec2addr">
                <a
                  href="https://www.google.com/maps/place/PLATINA+TOWER-2,+A+Block,+DLF+Phase+1,+Gurugram,+Sikanderpur+Ghosi,+Haryana+122022/@28.4802,77.092917,16z/data=!4m6!3m5!1s0x390d192f308689f7:0x9f314f9b1628a91c!8m2!3d28.4804237!4d77.0929591!16s%2Fg%2F11n6spmgsd?hl=en&entry=ttu"
                  className="hover:text-orange-500"
                >
                  <p>
                    PLATINA TOWER-2 A Block, DLF Phase 1, Gurugram, Sikanderpur
                    Ghosi, Haryana 122022
                  </p>
                </a>
                <a href="tel:+919811470135" className="hover:text-orange-500">
                  <p>Call +91 9811470135</p>
                </a>
                <a
                  href="mailto:billionDotscompany@gmail.com"
                  className=" hover:text-orange-500"
                >
                  <p>BillionDotsCompany@gmail.com</p>
                </a>
                <p></p>
              </div>
            </div>
            <div className="sec2contactform">
              <h3 className="sec2frmtitle text-orange-500">
                <a
                  href="mailto:billionDotscompany@gmail.com"
                  className="hover:text-orange-500"
                >
                  {" "}
                  Want to Know More?? Drop Us a Mail
                </a>
              </h3>
              <form>
                <div className="clearfix">
                  <input
                    className="col2 first"
                    type="text"
                    placeholder="FirstName"
                  />
                  <input
                    className="col2 last"
                    type="text"
                    placeholder="LastName"
                  />
                </div>
                <div className="clearfix">
                  <input
                    className="col2 first"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="col2 last"
                    type="text"
                    placeholder="Contact Number"
                  />
                </div>
                <div className="clearfix">
                  <textarea
                    name="textarea"
                    cols="20"
                    rows="4"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div className="clearfix">
                  <input type="submit" value="Send" className="bg-orange-500" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
