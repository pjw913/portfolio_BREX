
function Footer(){
    return(
        <footer className="bg-black w-full h-[70%] md:flex flex-col h-[50%]">
            <div className="flex flex-col md:flex-row flex-nowrap md:w-[90%] h-[80%] md:mx-auto md:items-center">
            <div className="ppp md:w-[23%] h-[30%] p-0">
                <h3 className="pl-8 pt-12 md:pt-5 pl-8"><img className="w-26 h-14 object-cover" src="/images/BREX_logo.png" alt="logo" /></h3>
                <p className="textlink text-gray-300 pl-8 pt-6 font-extrabold text-base"><a href="#">Fb.<span /></a>  /  <a href="#">Be.<span /></a>  /  <a href="#">Ig.<span /></a></p>
            </div>
            <div className="text-gray-300 pl-8 pt-6 md:w-[23%] h-[30%] p-0">
                <h3 className="font-extrabold">주소</h3>
                <p className="pt-4">서울특별시 송파구 올림픽로 370 수성방이빌딩 9F</p>
            </div>
            <div className="text-gray-300 pt-6 project pl-8 md:w-[23%] h-[30%] p-0">
                <h3 className="font-extrabold">프로젝트 문의</h3>
                <p className="pt-4">새로운 프로젝트를 준비중이신가요? <a href="#" className="font-black">Contact Us<span /></a></p>
            </div>
            <div className="text-gray-300 pt-6 pb-8 pl-8 companytt md:w-[23%] h-[30%] p-0">
                <h3 className="font-extrabold">회사소개서</h3>
                <p className="pt-4">BREX.에 대한 자세한 정보를 원하신다면, 회사소개서를 확인해보세요.   <a href="#" className="font-black">Download<span /></a></p>
            </div>
            </div>
            <div className="text-gray-300 align-center copyright flex-col justify-center items-center sitelink md:h-[20%]">
                <p className="pb-3 pt-5">© BREX Inc. Brillant Experience. All rights reserved.</p>
                <p>Contact : <a href="#">hello@brex.kr<span /></a>   /  02-6093-1101</p>
            </div>
        </footer>
    )
}

export default Footer;