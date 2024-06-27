import about from "../assets/carousel3.jpeg"
const About = () => {

  return (
    <div className="m-auto flex flex-col items-center justify-center gap-5 md:flex-row mb-10">
      <img
        src={about}
        alt="about us"
        className="aspect-square w-[300px] xs:w-[450px] lg:w-1/3"
      />
      <div className="flex w-80 flex-col gap-3 xs:w-96 lg:w-[500px] xl:w-1/3">
        <h2 className="text-center text-xl font-bold md:text-left md:text-3xl">
          ABOUT US
        </h2>
        <p className="lg:text-lg xl:text-xl">
          1Billion Dots Company provides complete branding solution like Retail
          Branding, Bespoke Exhibition Design, Corporate Events with a wealth of
          10 years experience of working with some of most established brands.
          <br />
          Our design work encompasses all channels and our production expertise
          pans across multiple media. Our journey so far has been very eventful
          and awesome.
          <br />
          No barrier has been high enough to impede our success story. <br />
          As we adhere to the mantra “make it happen under all odds”.
        </p>
      </div>
    </div>
  );
};

export default About;
