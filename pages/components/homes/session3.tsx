import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Slider from "../slider";

const Session3 = ({data,title}:any) => {
  // const data = [
  //   {
  //     img:"../../images/project-mockup-1.png",
  //     title:"Lorem ipsum dolor sit amet, consectetur",
  //     shotDesc:`here are many variations of passages of 
  //     Lorem Ipsum available, but the majority 
  //     have suffered alteration in some form`
  //   },
  //   {
  //     img:"../../images/project-mockup-2.png",
  //     title:"Lorem ipsum dolor sit amet, consectetur",
  //     shotDesc:`here are many variations of passages of 
  //     Lorem Ipsum available, but the majority 
  //     have suffered alteration in some form`
  //   },
  //   {
  //     img:"../../images/project-mockup-3.png",
  //     title:"Lorem ipsum dolor sit amet, consectetur",
  //     shotDesc:`here are many variations of passages of 
  //     Lorem Ipsum available, but the majority 
  //     have suffered alteration in some form`
  //   }
  // ]
  return (
    <div className="w-full about-session text-black pt-4">
      <Fade>
      <div className="container mx-auto p-8">
        <div className="w-full text-center">
          <p>PROJECTS</p>
          <p className="w-full md:w-2/3 mx-auto title-session">{title}</p>
        </div>
        {/* <div className="w-full md:block hidden"> */}
        {
          data?.map((o:any,i:any)=>(
            i%2 == 0?
              <div key={i} className="w-full flex flex-wrap my-8">
                  <div className="w-full md:w-8/12 mb-4 md:mb-0 block md:hidden">
                    <img src={process.env.NEXT_PUBLIC_IMG_URL+o.image} alt="" />
                  </div>
                  <div className="w-full md:w-2/5 flex flex-wrap items-center md:pr-4">
                    <div className="w-full h-full bg-gray-300 rounded-xl p-6">
                      <div className="w-full">
                        <h1 className='w-full text-2xl leading-9'>{o.title}</h1>
                      </div>
                      <div className="w-full py-4">
                        <p className='w-full'>{o.shortDescription}</p>
                      </div>
                      <div className="w-full py-4">
                        <Link href={`projects/${o.urlFriendly}`} className="btn-project">See Full Detail</Link>
                      </div>
                    </div>
                  </div>
                  <div className="h-auto w-3/5 md:block hidden">
                    <img className="w-full h-full object-cover rounded-xl" src={process.env.NEXT_PUBLIC_IMG_URL+o.image} alt="" />
                  </div>
              </div>
              :
              <div key={i} className="w-full flex flex-wrap my-8">
                <div className="w-full h-auto md:w-3/5 mb-4 md:mb-0">
                  <img className="w-full h-full object-cover rounded-xl" src={process.env.NEXT_PUBLIC_IMG_URL+o.image} alt="" />
                </div>
                <div className="w-full md:w-2/5 flex flex-wrap items-center md:pl-4">
                  <div className="w-full h-full bg-gray-300 rounded-xl p-6">
                      <div className="w-full">
                        <h1 className='w-full text-2xl leading-9'>{o.title}</h1>
                      </div>
                      <div className="w-full">
                        <p className='w-full py-4'>{o.shortDescription}</p>
                      </div>
                      <div className="w-full py-4">
                        <Link href={`projects/${o.urlFriendly}`} className="btn-project">See Full Detail</Link>
                      </div>
                  </div>
                </div>
              </div>
          ))
        }
        {/* </div> */}
        {/* <div className="w-full block md:hidden">
          <Slider data={data} autoPlay={false}/>
        </div> */}
        <div className="w-ful text-center">
            <Link href="/projects" className="btn-more text-white">Read More</Link>
          </div>
      </div>
      </Fade>
      
    </div>
  );
};

export default Session3;