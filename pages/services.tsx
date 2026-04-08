import Image from 'next/image';
import Layout from './components/layout';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import { IconContext } from "react-icons";
import { BsArrowDownRight, BsArrowUpLeft } from "react-icons/bs";
import { useEffect, useState } from 'react';

const Services = ({res,resSetting,lang}:any) => {
  const [activeDesign, setActiveDesign] = useState<{ [key: number]: boolean }>({ [0]: false });
  const [activeBuild, setActiveBuild] = useState<{ [key: number]: boolean }>({ [0]: false });
  const [data, setDate] = useState({
    design:res.filter((d:any)=>d.type == "design"),
    build:res.filter((d:any)=>d.type == "build")
  });
  const [dataSetting,setDataSetting] = useState({
    img1:"",
    img2:""
  });

  useEffect(()=>{
    // showSlides();
    let l = "";
    if(lang == "th"){
      l = "_th";
    }
    if(resSetting?.filter((e:any) => e.page == 'service').length>0){
      const dSetting = resSetting?.filter((e:any) => e.page == 'service')[0];
      setDataSetting(dSetting);
    }
  },[])
  console.log(resSetting);
  return (
    <Layout lang={lang}>
        <div className="w-full">
            <div className="service-session mx-auto p-8">
                <div className="w-full text-center pt-10">
                    <p className="w-2/3 mx-auto"  style={{fontSize:"30px"}}>Services</p>
                    <p className=" uppercase">HOME / Services</p>
                </div>
            </div>
            <div className="w-full about-session text-black pt-4">
            <Fade>
            <div className="container mx-auto p-8">
                <div className="w-full">
                <p>SERVICES</p>
                <p className="w-full mx-auto title-session">Design Build</p>
                </div>
                <div className="w-full flex flex-wrap my-8">
                <div className="w-full md:w-4/12 mb-8 md:mb-0">
                    <img src={process.env.NEXT_PUBLIC_IMG_URL+dataSetting?.img1} alt="" />
                    </div>
                    <div className="w-full md:w-8/12 md:pl-8">
                    {
                        data?.design?.map((o:any,i:any)=>(
                        <div key={i} className="w-full" >
                          <div className="w-full flex flex-wrap border-b border-black mb-4 cursor-pointer" onClick={()=>setActiveDesign({ [i]: !activeDesign[i] })}>
                            <h1 className='w-2/12 flex items-end md:text-5xl'>{"0"+(i+1)}</h1>
                            <h1 className='w-9/12 flex items-end md:text-3xl'>{o.title}</h1>
                            <IconContext.Provider value={{ color: "#e26330", className: "menu-icon"}}>
                                <div className="w-1/12 flex items-end justify-end" >
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
                              <div className="w-full flex md:text-2xl mb-4">
                              <div className="w-2/12"></div>
                              <div className="w-10/12 th">
                                <p className='text-sm'>{o.description}</p>
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
                <div className="w-full flex flex-wrap my-8">
                    <div className="w-full md:w-4/12 md:pl-8 mb-8 md:mb-0 block md:hidden">
                    <img src={process.env.NEXT_PUBLIC_IMG_URL+dataSetting?.img2} alt="" />
                    </div>
                    <div className="w-full md:w-8/12 ">
                    {
                        data?.build?.map((o:any,i:any)=>(
                        <div key={i} className="w-full">
                            <div className="w-full flex flex-wrap border-b border-black mb-4 cursor-pointer" onClick={()=>setActiveBuild({ [i]: !activeBuild[i] })}>
                            <h1 className='w-2/12 flex items-end md:text-5xl'>{"0"+(i+1)}</h1>
                            <h1 className='w-9/12 flex items-end md:text-3xl'>{o.title}</h1>
                            <IconContext.Provider value={{ color: "#e26330", className: "menu-icon"}}>
                                <div className="w-1/12 flex items-end justify-end" >
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
                                <div className="w-full flex md:text-2xl mb-4">
                                <div className="w-2/12"></div>
                                <div className="w-10/12 th">
                                  <p className='text-sm'>{o.description}</p>
                                </div>
                                </div>
                            </Fade>
                            
                            }
                            
                        </div>
                        ))
                    }
                    </div>
                    <div className="w-full md:w-4/12 pl-8 md:block hidden">
                    <img src={process.env.NEXT_PUBLIC_IMG_URL+dataSetting?.img2} alt="" />
                    </div>
                </div>
            </div>
            </Fade>
        </div>
        </div>
    </Layout>
  )
}

export default Services;

export async function getServerSideProps({query,locale}:any) { 
  let lang = "";
  if(locale == "th"){
    lang = "-"+locale;
  }
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/service`+lang);
  const data = await res?.json(); 

  const resWeb = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/setting-web`);
  const dataWeb = await resWeb?.json(); 
  return {
    props: {
      res:data||null,
      resSetting:dataWeb||null,
      lang:locale
    },
  } 
}
