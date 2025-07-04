import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <>
        <Navbar />
    </>
  )
}

export default App