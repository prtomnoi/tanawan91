import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BsArrowDownRight, BsArrowUpLeft } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const Session2 = ({data}:any) => {
  const [activeDesign, setActiveDesign] = useState<{ [key: number]: boolean }>({ [0]: false });
  const [activeBuild, setActiveBuild] = useState<{ [key: number]: boolean }>({ [0]: false });

  return (
    <div className="w-full service-session pt-4">
        <Fade>
        <div className="container mx-auto p-8">
            <div className="w-full">
              <p>SERVICES</p>
              <p className="w-full mx-auto"  style={{fontSize:"30px"}}>Design Build</p>
            </div>
            <div className="w-full flex my-8">
              <div className="w-4/12">
                  <img src="../../images/service-mockup-1.png" alt="" />
                </div>
                <div className="w-8/12 pl-8">
                  {
                    data.design?.map((o:any,i:any)=>(
                      <div key={i} className="w-full">
                        <div className="w-full flex border-b mb-4" >
                          <h1 className='w-2/12 flex items-end' style={{fontSize:"53px"}}>{"0"+(i+1)}</h1>
                          <h1 className='w-10/12 flex items-end' style={{fontSize:"30px"}}>{o.title}</h1>
                          <IconContext.Provider value={{ color: "#e26330", className: "", size:"50" }}>
                            <div className="w-2/12 flex items-end justify-end" onClick={()=>setActiveDesign({ [i]: !activeDesign[i] })}>
                               {
                                activeDesign[i] ? 
                                <BsArrowUpLeft />
                                :
                                <BsArrowDownRight />
                               }
                            </div>
                          </IconContext.Provider>
                        </div>
                        {
                          activeDesign[i] &&
                          <Fade>
                            <div className="w-full flex text-2xl mb-4">
                              <div className="w-2/12"></div>
                              <div className="w-10/12">
                                {
                                  o.step.map((oo:any,ii:any)=>(
                                    <p key={ii}>{oo}</p>
                                  ))
                                }
                              </div>
                            </div>
                          </Fade>
                          
                        }
                        
                      </div>
                    ))
                  }
                  
                </div>
            </div>

            <div className="w-full text-right">
              <p>SERVICES</p>
              <p className="w-full mx-auto"  style={{fontSize:"30px"}}>Build</p>
            </div>
            <div className="w-full flex my-8">
                <div className="w-8/12 ">
                  {
                    data.build?.map((o:any,i:any)=>(
                      <div key={i} className="w-full">
                        <div className="w-full flex border-b mb-4" >
                          <h1 className='w-2/12 flex items-end' style={{fontSize:"53px"}}>{"0"+(i+1)}</h1>
                          <h1 className='w-10/12 flex items-end' style={{fontSize:"30px"}}>{o.title}</h1>
                          <IconContext.Provider value={{ color: "#e26330", className: "", size:"50" }}>
                            <div className="w-2/12 flex items-end justify-end" onClick={()=>setActiveBuild({ [i]: !activeBuild[i] })}>
                            {
                                activeBuild[i] ? 
                                <BsArrowUpLeft />
                                :
                                <BsArrowDownRight />
                               }
                            </div>
                          </IconContext.Provider>
                        </div>
                        {
                          activeBuild[i] &&
                          <Fade>
                            <div className="w-full flex text-2xl mb-4">
                              <div className="w-2/12"></div>
                              <div className="w-10/12">
                                {
                                  o.step.map((oo:any,ii:any)=>(
                                    <p key={ii}>{oo}</p>
                                  ))
                                }
                              </div>
                            </div>
                          </Fade>
                          
                        }
                        
                      </div>
                    ))
                  }
                </div>
                <div className="w-4/12 pl-8">
                  <img src="../../images/service-mockup-2.png" alt="" />
                </div>
            </div>
        </div>
        </Fade>
      </div>
  );
};

export default Session2;