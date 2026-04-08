import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import SliderComponent from "../slider";
import Link from "next/link";

const Session1 = ({data,title}:any) => {
  return (
    <div className="w-full about-session text-black pt-4">
    <Fade>
        <div className="container mx-auto p-8 pt-1">
            <div className="w-full text-center">
              <p>ABOUT</p>
              <p className="md:w-2/3 w-full mx-auto title-session" style={{lineHeight:"2.3rem"}}>{title}</p>
            </div>
            <div className="w-full md:block hidden">
            {
              data?.map((o:any,i:any)=>(
                i%2==0?
                // <Link key={i} href={`articles/${o.title.replace(/ /g,"-").toLowerCase()}`}>
                  <div key={i} className="w-full flex flex-wrap my-8">
                    <div className="md:w-2/4 w-full">
                      <img className=" rounded-xl" src={process.env.NEXT_PUBLIC_IMG_URL+o.image} alt="" />
                    </div>
                    <div className="md:w-2/4 w-full flex items-center">
                      <div className="w-full p-4">
                        <h1 className='w-full'>{o.title}</h1>
                        <p className='w-full'>{o.description}</p>
                      </div>
                    </div>
                  </div>
                  // </Link>
                :
                // <Link key={i}  href={`articles/${o.title.replace(/ /g,"-").toLowerCase()}`}>
                <div key={i} className="w-full flex my-8">
                  <div className="w-2/4 flex flex-wrap items-center">
                    <div className="w-full p-4">
                        <h1 className='w-full'>{o.title}</h1>
                        <p className='w-full'>{o.description}</p>
                      </div>
                  </div>
                  <div className="w-2/4">
                    <img className=" rounded-xl" src={process.env.NEXT_PUBLIC_IMG_URL+o.image} alt="" />
                  </div>
                </div>
                // </Link>
              ))
            }
            </div>
            <div className="w-full block md:hidden">
              <SliderComponent data={data} autoPlay={false}/>
            </div>
        </div>
    </Fade>
    </div>
    
  );
};

export default Session1;