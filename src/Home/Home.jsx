import Carousel from "../components/Carousel";
import About from "./About";
import GalleryPhoto from "./GalleryPhoto";
import Process from "./Process";

const Home = () => {
  return (
    <div className="mb-10 flex flex-col gap-10">
      <Carousel />
      <About />
      <GalleryPhoto />
      <Process />
    </div>
  );
};

export default Home;
