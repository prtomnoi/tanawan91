import React, { Children, ReactNode, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

interface Props {
    data: any;
    autoPlay:boolean;
}
const Slider: React.FC<Props> = ({data,autoPlay}) => {
    let gid = makeid(5);
    const [genId, setGenId] = useState<any>(gid);
    let slideIndex = 0;
    
    function makeid(length:number) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
  
    function showSlides(index?:any) {
      if(index){
        slideIndex = index;
      }
      let ele:any = document.getElementById(gid);
      console.log(gid,ele);
      let slides:any = document.getElementsByClassName("slide");
      let dots:any = document.getElementsByClassName("dot-slide");
      if(slides.length > 0){
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].classList.remove("active");
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
        if(autoPlay){
          setTimeout(showSlides, 10000); // Change slide every 5 seconds (5000 milliseconds)
        }
      }
  }
  useEffect(()=>{
    // setGenId(makeid(5))
    showSlides();
  },[])
  return (
    <div className="w-full relative">
        <div className="slideshow-container" id={gid}>
            {
                data?.map((o:any,i:any)=>(
                    <div key={i} className="slide">
                        <Fade>
                            <div className="w-full flex flex-wrap my-8">
                                <div className="md:w-2/4 w-full">
                                    <img src={o.img} alt="" />
                                </div>
                                <div className="md:w-2/4 w-full flex items-center">
                                    <div className="w-full p-4">
                                    <h1 className='w-full'>{o.title}</h1>
                                    <p className='w-full'>{o.shotDesc}</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                ))
            }
        </div>
        <div className="w-full flex justify-center absolute dot-container">
            <div className="w-1/3 flex mx-auto">
                {data?.map((o:any,i:any)=>(
                    <div key={i} className='w-full px-2 text-center'>
                        <button type='button' className="dot-slide active" onClick={()=>showSlides(0)}></button>
                    </div>
                ))}
            </div>
        </div>
      </div>
  );
};

export default Slider;