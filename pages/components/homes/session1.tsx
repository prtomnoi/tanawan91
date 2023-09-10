import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Slider from "../slider";

const Session1 = () => {
  const data = [
    {
      img:"../../images/about-mockup-1.png",
      title:"Tanawan 91",
      shotDesc:`is a construction firm specializing in integrated 
      design-construction services. Our expertise 
      provides the new building or renovation of 
      existing building.`
    },
    {
      img:"../../images/about-mockup-2.png",
      title:"Tanawan 91",
      shotDesc:`is a construction firm specializing in integrated 
      design-construction services. Our expertise 
      provides the new building or renovation of 
      existing building.`
    }       
  ]
  return (
    <div className="w-full about-session text-black pt-4">
    <Fade>
        <div className="container mx-auto p-8">
            <div className="w-full text-center">
              <p>ABOUT</p>
              <p className="md:w-2/3 w-full mx-auto title-session"><span style={{color:"#FF5710"}}>Focus</span> on the construction service 
                and design and construction services</p>
            </div>
            <div className="w-full md:block hidden">
            {
              data.map((o:any,i:any)=>(
                i%2==0?
                <div key={i} className="w-full flex flex-wrap my-8">
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
                :
                <div key={i} className="w-full flex my-8">
                  <div className="w-2/4 flex flex-wrap items-center">
                    <div className="w-full p-4">
                        <h1 className='w-full'>{o.title}</h1>
                        <p className='w-full'>{o.shotDesc}</p>
                      </div>
                  </div>
                  <div className="w-2/4">
                    <img src={o.img} alt="" />
                  </div>
                </div>
              ))
            }
            </div>
            <div className="w-full block md:hidden">
              <Slider data={data} autoPlay={false}/>
            </div>
        </div>
    </Fade>
    </div>
    
  );
};

export default Session1;