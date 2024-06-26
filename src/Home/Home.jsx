import Carousel from "../components/Carousel"
import About from "./About"
import Process from "./Process"

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
        <Carousel/>
        <About/>
        <Process/>
    </div>
  )
}

export default Home