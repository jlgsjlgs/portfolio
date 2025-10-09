import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from "../components/NavBar"
import TypingAnimation from "../components/TypingAnimation"
import About from "../components/About"
import Background from "../components/Background"

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

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
      <div className="h-px bg-slate-700 mx-auto w-3/4"></div>
      <section id="background">
          <Background/>
      </section>
    </div>
  );
}
export default Home;