import NavBar from "../components/NavBar"
import TypingAnimation from "../components/TypingAnimation"
import About from "../components/About"

function Home() {
  return (
    <div>
      <NavBar/>
      <section id="home">
          <TypingAnimation/>
      </section>
      <div className="h-px bg-slate-700 mx-auto w-3/4"></div>
      <section id="about">
          <About/>
      </section>
    </div>
  );
}

export default Home;