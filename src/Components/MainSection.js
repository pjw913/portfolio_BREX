
function MainSection(){
    return(
        <div className="main bg-black w-full h-1/2 text-white text-3xl  font-black font-(family-name:<Pretendard>) tracking-tight pt-36 pl-6 md:h-[80%] relative ">
            <p className="mp md:pl-20 text-4xl ">We Create a<br /> Brilliant Experience<br /> Together.</p>
            <p className="mp pt-8 text-2xl md:absolute right-[10%] top-28">Simple. Focus. Share</p>
            <video autoPlay loop muted src="/images/BREX_Main.mp4" className="hidden md:block pt-20 relative"/>
            <p className="main-p hidden md:block fixed -rotate-90 text-lg right-[-3%] top-[50%] z-[20000] font-bold text-gray-300">Follow Us - <a href="#">Fb.<span/></a> / <a href="#">Be.<span/></a> / <a href="#">Ig.<span/></a></p>
        </div>
    )
}

export default MainSection;