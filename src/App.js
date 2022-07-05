import React,{useState,useEffect} from "react";
import About from "./section/about/About";
import Header from "./section/header/Header";
import Menu from "./section/menu/Menu";
import Nav from "./section/nav/Nav";

function App() {
  const [dark,setDark] = useState(false);
  const body = document.body;

  const changeTheme = () => {
      setDark(!dark);

      if(!dark){
          body.classList.add('dark')
      }else{
          body.classList.remove('dark')
      }
  }

  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>

    <Nav setDark={changeTheme}/>
    
    <Header
    dark={dark}
    scroll={offset}/>
    
    <About/>

    <Menu
    dark={dark}/>
    </>
  );
}

export default App;
