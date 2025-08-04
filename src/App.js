import { useState } from 'react';
import './App.css';
import MainSection from './Components/MainSection';
import FlexSection from './Components/FlexSection';
import Footer from './Components/Footer';

function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [hover1, setHover1] = useState(true);
  const [hover2, setHover2] = useState(true);
  const [hover3, setHover3] = useState(true);
  const [hover4, setHover4] = useState(true);
  
  const handleMenuHover = (menu) =>{
    setActiveMenu(menu);
    setIsMenuOpen(true);
  }
  
  const handleMenuLeave = () =>{
    setActiveMenu(null);
    setIsMenuOpen(false);
  }
  return (
    <section className="bg-black w-full h-screen">
     <header className="fixed w-full bg-transparent h-24 flex flex-wrap justify-between items-center z-[999] ">
      <h1 className="mx-8 mt-1 w-28 h-22 cursor:pointer sm:w-32 sm:h-26 md:w-36 md:h-30 ">
        <a href="#"><img src="/images/BREX_logo.png" alt="Main" className="object-contain filter brightness-100 hover:brightness-75 transition ease-in-out duration-300"/></a>
      </h1>
      <nav className="flex gap-4 mr-4 ">
        <ul className="font-semibold flex items-center hidden md:flex text-gray-300 group" onMouseOut={()=>{setHover1(true);setHover2(true);setHover3(true);setHover4(true);}}>
          <li><a href="#" onMouseOver={()=>{setHover1(true);setHover2(false);setHover3(false);setHover4(false);}} className={`transition ease-in duration:1000 group-hover: ${hover1 ? 'active' : 'none'}`}>PROJECT</a></li>
          <li><a href="#" onMouseOver={()=>{setHover1(false);setHover2(true);setHover3(false);setHover4(false);}} className={`pl-4 transition ease-in duration:1000 group-hover: ${hover2 ? 'active' : 'none'}`}>CONTACT</a></li>
          <li><a href="#" onMouseOver={()=>{setHover1(false);setHover2(false);setHover3(true);setHover4(false);}} className={`pl-4 transition ease-in duration:1000 group-hover: ${hover3 ? 'active' : 'none'}`}>CAREERS</a></li>
          <li><a href="#" onMouseOver={()=>{setHover1(false);setHover2(false);setHover3(false);setHover4(true);}} className={`pl-4 transition ease-in duration:1000 group-hover: ${hover4 ? 'active' : 'none'}`}>ABOUT</a></li>
        </ul>
        <div className="flex gap-3 items-center">
          <a href="#" className="px-3 py-2 text-white hover:bg-red-700 font-semibold rounded-lg text-sm transition-all ease-in duration-2000 ">프로젝트 문의</a>
          <button className="flex flex-col rounded-full w-12 h-12 bg-gray-800 flex-col gap-[6px] justify-center group" onClick={()=>setMobileToggle(!mobileToggle)}>
            <span className="display:block w-5 h-[2px] bg-gray-300 mx-4 group-hover:bg-gray-600 transition ease-in-out duration-500"></span>
            <span className="display:block w-4 h-[2px] bg-gray-300 mx-4 group-hover:bg-gray-600 transition ease-in-out duration-500"></span>
          </button>
        </div>
        
      </nav>
      
     </header>
     {mobileToggle && (

        <div className="togglediv fixed bg-black/75 right-0 top-0 w-full h-full z-[1000]">
          <p className="snslink absolute w-[184px] h-[24px] text-center -rotate-90 font-semibold text-white left-4 top-[500px] translate-y-1/2 origin-top-left">Follow Us - <a href="#">Fb.<span/></a> / <a href="#">Be.<span/></a> / <a href="#">Ig.<span/></a></p>
          <nav className={`absolute right-0 top-0 w-[90%] h-full transition ease-in-out duration-500 z-[1000] ${mobileToggle ? 'animation':''}`}>
            <button className="absolute right-8 top-12" onClick={()=>setMobileToggle(false)}>
              <span className="absolute w-6 h-1 bg-gray-300 left-1/2 -translate-x-1/2 rotate-45 top-1/2 -translate-y-0.5" />
              <span className="absolute w-6 h-1 bg-gray-300 left-1/2 -translate-x-1/2 -rotate-45 top-1/2 -translate-y-0.5" />
            </button>
            <ul className="flex flex-col gap-6 pl-4 pt-24 font-semibold text-gray-300 transition ease-in-out duration-500">
              <li><a href="#">Project</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">About</a></li>
              <li>© BREX Inc. Brillant Experience. All rights reserved.</li>
              <li>Contact : <a href="#" className="brexlink">hello@brex.kr<span/></a>   /  02-6093-1101</li>
            </ul>
          </nav>
          
        </div>
      )
      }
      <MainSection />
      <FlexSection />
      <Footer />
    </section>
    
  );
}

export default App;
