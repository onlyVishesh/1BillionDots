const About = () => {
  return (
    <div className="m-auto flex flex-col items-center justify-center gap-5 md:flex-row ">
      <img
        src="https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80"
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
