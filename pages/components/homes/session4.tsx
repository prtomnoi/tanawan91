import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Session4 = () => {
  const data = [
    {
      img:"../../images/article-mockup-1.png",
      title:"Lorem ipsum",
      shotDesc:`here are many variations of passages of 
      Lorem Ipsum available, but the majority 
      have suffered alteration in some form`
    },
    {
      img:"../../images/article-mockup-2.png",
      title:"Lorem ipsum",
      shotDesc:`here are many variations of passages of 
      Lorem Ipsum available, but the majority 
      have suffered alteration in some form`
    },
    {
      img:"../../images/article-mockup-3.png",
      title:"Lorem ipsum",
      shotDesc:`here are many variations of passages of 
      Lorem Ipsum available, but the majority 
      have suffered alteration in some form`
    },
    {
      img:"../../images/article-mockup-1.png",
      title:"Lorem ipsum",
      shotDesc:`here are many variations of passages of 
      Lorem Ipsum available, but the majority 
      have suffered alteration in some form`
    },
    {
      img:"../../images/article-mockup-2.png",
      title:"Lorem ipsum",
      shotDesc:`here are many variations of passages of 
      Lorem Ipsum available, but the majority 
      have suffered alteration in some form`
    },
    {
      img:"../../images/article-mockup-3.png",
      title:"Lorem ipsum",
      shotDesc:`here are many variations of passages of 
      Lorem Ipsum available, but the majority 
      have suffered alteration in some form`
    },
    {
      img:"../../images/article-mockup-1.png",
      title:"Lorem ipsum",
      shotDesc:`here are many variations of passages of 
      Lorem Ipsum available, but the majority 
      have suffered alteration in some form`
    },
    {
      img:"../../images/article-mockup-2.png",
      title:"Lorem ipsum",
      shotDesc:`here are many variations of passages of 
      Lorem Ipsum available, but the majority 
      have suffered alteration in some form`
    }
  ]
  return (
    <div className="w-full service-session pt-4">
      <Fade>
      <div className="container mx-auto p-8">
          <div className="w-full text-center">
            <p className=" uppercase">Publications</p>
            <p className="w-2/3 mx-auto title-session">News and Articles</p>
          </div>
          <div className="w-full flex flex-wrap my-8">
            {
              data.map((o:any,i:any)=>(
                <div key={i} className="w-2/4 md:w-3/12 p-3">
                  <div className="w-full">
                    <img src={o.img} alt="" />
                  </div>
                  <h1 className='w-full md:text-2xl leading-9'>{o.title}</h1>
                  <p className=" text-xs md:text-base shot-desc-article">{o.shotDesc}</p>
                </div>
              ))
            }
          </div>
          <div className="w-ful text-center">
            <Link href="/articles" className="btn-more">Read More</Link>
          </div>
        </div>
      </Fade>
        
      </div>
  );
};

export default Session4;