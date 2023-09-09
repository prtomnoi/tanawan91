import React from "react";
import { Fade } from "react-awesome-reveal";

const Session3 = () => {
  const data = [
    {
      img:"../../images/project-mockup-1.png",
      title:"Lorem ipsum dolor sit amet, consectetur",
      shotDesc:`here are many variations of passages of 
      Lorem Ipsum available, but the majority 
      have suffered alteration in some form`
    },
    {
      img:"../../images/project-mockup-2.png",
      title:"Lorem ipsum dolor sit amet, consectetur",
      shotDesc:`here are many variations of passages of 
      Lorem Ipsum available, but the majority 
      have suffered alteration in some form`
    },
    {
      img:"../../images/project-mockup-3.png",
      title:"Lorem ipsum dolor sit amet, consectetur",
      shotDesc:`here are many variations of passages of 
      Lorem Ipsum available, but the majority 
      have suffered alteration in some form`
    }
  ]
  console.log(data);
  return (
    <div className="w-full about-session text-black pt-4">
      <Fade>
      <div className="container mx-auto p-8">
        <div className="w-full text-center">
          <p>PROJECTS</p>
          <p className="w-2/3 mx-auto"  style={{fontSize:"30px"}}> 
          Lorem ipsum dolor sit amet,<br/> consectetur <span style={{color:"#FF5710"}}>adipiscing</span> elit, sed do</p>
        </div>
        {
          data.map((o:any,i:any)=>(
            i%2 == 0?
              <div key={i} className="w-full flex my-8">
                  <div className="w-5/12 flex flex-wrap items-center pr-4">
                    <div className="w-full h-full bg-gray-300 rounded-xl p-6">
                        <h1 className='w-full text-2xl leading-9'>{o.title}</h1>
                        <p className='w-full py-4'>{o.shotDesc}</p>
                        <a href="" className="btn-project">See Full Detail</a>
                    </div>
                  </div>
                  <div className="w-8/12">
                    <img src={o.img} alt="" />
                  </div>
              </div>
              :
              <div key={i} className="w-full flex my-8">
                <div className="w-8/12">
                  <img src={o.img} alt="" />
                </div>
                <div className="w-5/12 flex flex-wrap items-center pl-4">
                  <div className="w-full h-full bg-gray-300 rounded-xl p-6">
                      <h1 className='w-full text-2xl leading-9'>{o.title}</h1>
                      <p className='w-full py-4'>{o.shotDesc}</p>
                      <a href="" className="btn-project">See Full Detail</a>
                  </div>
                </div>
              </div>
          ))
        }
        <div className="w-ful text-center">
            <a href="/articles" className="btn-more text-white">Read More</a>
          </div>
      </div>
      </Fade>
      
    </div>
  );
};

export default Session3;