import Image from 'next/image';
import Layout from './components/layout';
import Session1 from './components/homes/session1';
import Session2 from './components/homes/session2';
import Session3 from './components/homes/session3';
import Session4 from './components/homes/session4';
import Link from 'next/link';
import SliderComponent from './components/slider';
import { useEffect, useState } from 'react';


const About = ({res,resSetting,lang}:any) => {
  const [data, setDate] = useState(res);
  const [titleAbout,setTitleAbout] = useState("");


  useEffect(()=>{
    // showSlides();
    let l = "";
    if(lang == "th"){
      l = "_th";
    }
    if(resSetting?.filter((e:any) => e.page == 'about').length>0){
      const t = resSetting?.filter((e:any) => e.page == 'about')[0][`title${l}`];
      setTitleAbout(t);
    }
  },[])
    console.log(res);

  return (
    <Layout  title="About" lang={lang}>
        <div className="w-full">
        <div className="service-session mx-auto p-8">
          <div className="w-full text-center pt-10">
            <p className="w-2/3 mx-auto"  style={{fontSize:"30px"}}>About</p>
            <p className=" uppercase">HOME / About</p>
          </div>
        </div>
        <div className="w-full about-session text-black">
        <div className=" container mx-auto p-8">
            <div className="w-full text-center">
              <p className="md:w-2/3 w-full mx-auto title-session">{titleAbout}</p>
            </div>
            <div className="w-full md:block hidden">
            {
              data.map((o:any,i:any)=>(
                i%2==0?
                  // <Link key={i} href={`articles/${o.title.replace(/ /g,"-").toLowerCase()}`}>
                  <div key={i}  className="w-full flex flex-wrap my-8">
                    <div className="md:w-2/4 w-full">
                      <img src={process.env.NEXT_PUBLIC_IMG_URL+o.image} alt="" />
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
                    <img src={process.env.NEXT_PUBLIC_IMG_URL+o.image} alt="" />
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
        </div>
        
      </div>
    </Layout>
  )
}

export async function getServerSideProps({query,locale}:any) { 
  let lang = "";
  if(locale == "th"){
    lang = "-"+locale;
  }
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/about`+lang);
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

export default About;
