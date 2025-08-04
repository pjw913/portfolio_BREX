import { Link } from "react-router-dom";
import { useState } from "react";

function FlexSection(){
    const gridImages =[
        {id:1, src:"/images/thum_1.png", alt1:"IBK DESIGN SYSTEM", alt2:"Design System, Finance, UI/UX" },
        {id:2, src:"/images/thum_2.png", alt1:"신한은행 고객경험 가이드 SOLID 2.0", alt2:"Design System, Finance, UI/UX" },
        {id:3, src:"/images/thum_3.jpg", alt1:"신한카드 라인페이·유니온페이 결제", alt2:"Design System, Finance, UI/UX" },
        {id:4, src:"/images/thum_4.jpg", alt1:"가장 스마트한 EV Life", alt2:"Design System, UI/UX" },
        {id:5, src:"/images/thum_5.jpg", alt1:"THE HANDSOME", alt2:"Design System, e-commerce, UI/UX" },
        {id:6, src:"/images/thum_6.png", alt1:"SOL GLOBAL DESIGN SYSTEM", alt2:"Design System, Finance, UI/UX" },
        {id:7, src:"/images/thum_7.jpg", alt1:"fount 4.0", alt2:"Design System, Finance, UI/UX" },
        {id:8, src:"/images/thum_8.jpg", alt1:"신한은행 디지털 혁신점포", alt2:"Design System, Finance, UI/UX" },
        {id:9, src:"/images/thum_9.jpg", alt1:"신한SOL 디자인시스템 구축", alt2:"Design System, Finance, UI/UX" },
        {id:10, src:"/images/thum_10.jpg", alt1:"신한pLay", alt2:"Design System, Finance, UI/UX" },
        {id:11, src:"/images/thum_11.jpg", alt1:"Culture Club", alt2:"Design System, e-commerce, UI/UX" },
        {id:12, src:"/images/thum_12.jpg", alt1:"SOL UX/UI 고도화 개선", alt2:"Design System, Finance, UI/UX" },
    ]

    const [isHover, setIsHover] = useState(false);


    return(
        <section className="flex-wrapper w-[100%] h-100vh md:flex flex-wrap">
                {
                    gridImages.map((item,index)=>(
                        <div key={item.id} className={`relative ${isHover ? 'active' : ''} md:w-[33.3333%] h-[60%]`} onMouseOver={()=>{setIsHover(true); console.log(isHover)}} onMouseOut={()=>{setIsHover(false); console.log(isHover)}}>
                            <div className="">
                            <img src={item.src} className="bgimg" />
                            <div className="absolute bottom-[30px] left-[20px] text-white">
                                <h3 className="font-bold text-xl pb-1">{item.alt1}</h3>
                                <div className="relative overflow-hidden h-[20px] w-[300px]">
                                    <a href="#" className={`absolute left-0 text-sm h-[40px] leading-[20px] bga`}>{item.alt2}<br />Show project ------</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))
                }
        </section>
    )
}

export default FlexSection;