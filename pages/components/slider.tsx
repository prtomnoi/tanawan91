import Link from "next/link";
import React, { Children, ReactNode, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";

interface Props {
    data: any;
    autoPlay:boolean;
}
const SliderComponent: React.FC<Props> = ({data,autoPlay}) => {
    var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
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
  
  useEffect(()=>{
    // setGenId(makeid(5))
    // showSlides();
  },[])
  return (
    <div className="w-full">
        <Slider {...settings} className='slider-articles'>
            {
                data?.map((o:any,i:any)=>(
                    
                    <div key={i} className="slide p-2">
                        <Fade>
                            {/* <Link href={`articles/${o.title.replace(/ /g,"-").toLowerCase()}`}> */}
                            <div key={i} className="w-full flex flex-wrap my-8">
                                <div className="md:w-2/4 w-full">
                                    <img className="rounded-lg" src={process.env.NEXT_PUBLIC_IMG_URL+o.image} alt="" />
                                </div>
                                <div className="md:w-2/4 w-full flex items-center">
                                <div className="w-full p-4">
                                    <h1 className='w-full'>{o.title}</h1>
                                    <p className='w-full'>{o.description}</p>
                                </div>
                                </div>
                            </div>
                            {/* </Link> */}
                        </Fade>
                    </div>
                ))
            }
        </Slider>
      </div>
  );
};

export default SliderComponent;