const About = () => {
  return (
    <div className="flex flex-col md:flex-row m-auto justify-center gap-5 items-center ">
        <img src="src/assets/home-about.jpeg" alt="about us" className="w-[300px] xs:w-[450px] aspect-square lg:w-1/3" />
        <div className="w-80 xs:w-96 lg:w-[500px] xl:w-1/3 flex flex-col gap-3">
            <h2 className="font-bold text-xl md:text-3xl text-center md:text-left uppercase">ABOUT US</h2>
            <p className="lg:text-lg xl:text-xl">1Billion Dots Company provides complete branding solution like Retail Branding, Bespoke Exhibition Design, Corporate Events with a wealth of 10 years experience of working with some of most established brands.<br/>
Our design work encompasses all channels and our production expertise pans across multiple media. Our journey so far has been very eventful and awesome.<br/>
No barrier has been high enough to impede our success story. <br />

As we adhere to the mantra “make it happen under all odds”.</p>
        </div>
    </div>
  )
}

export default About