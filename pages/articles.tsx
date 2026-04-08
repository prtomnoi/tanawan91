import Image from 'next/image';
import Layout from './components/layout';
import Session1 from './components/homes/session1';
import Session2 from './components/homes/session2';
import Session3 from './components/homes/session3';
import Session4 from './components/homes/session4';
import Link from 'next/link';
import { useState } from 'react';


const Articles = ({res,lang}:any) => {
  const [data, setDate] = useState(res);
    // const data = [
    //     {
    //       img:"../../images/article-mockup-1.png",
    //       title:"Lorem ipsum",
    //       shotDesc:`here are many variations of passages of 
    //       Lorem Ipsum available, but the majority 
    //       have suffered alteration in some form`
    //     },
    //     {
    //       img:"../../images/article-mockup-2.png",
    //       title:"Lorem ipsum",
    //       shotDesc:`here are many variations of passages of 
    //       Lorem Ipsum available, but the majority 
    //       have suffered alteration in some form`
    //     },
    //     {
    //       img:"../../images/article-mockup-3.png",
    //       title:"Lorem ipsum",
    //       shotDesc:`here are many variations of passages of 
    //       Lorem Ipsum available, but the majority 
    //       have suffered alteration in some form`
    //     },
    //     {
    //       img:"../../images/article-mockup-1.png",
    //       title:"Lorem ipsum",
    //       shotDesc:`here are many variations of passages of 
    //       Lorem Ipsum available, but the majority 
    //       have suffered alteration in some form`
    //     },
    //     {
    //       img:"../../images/article-mockup-2.png",
    //       title:"Lorem ipsum",
    //       shotDesc:`here are many variations of passages of 
    //       Lorem Ipsum available, but the majority 
    //       have suffered alteration in some form`
    //     },
    //     {
    //       img:"../../images/article-mockup-3.png",
    //       title:"Lorem ipsum",
    //       shotDesc:`here are many variations of passages of 
    //       Lorem Ipsum available, but the majority 
    //       have suffered alteration in some form`
    //     },
    //     {
    //       img:"../../images/article-mockup-1.png",
    //       title:"Lorem ipsum",
    //       shotDesc:`here are many variations of passages of 
    //       Lorem Ipsum available, but the majority 
    //       have suffered alteration in some form`
    //     },
    //     {
    //       img:"../../images/article-mockup-2.png",
    //       title:"Lorem ipsum",
    //       shotDesc:`here are many variations of passages of 
    //       Lorem Ipsum available, but the majority 
    //       have suffered alteration in some form`
    //     },
    //     {
    //       img:"../../images/article-mockup-2.png",
    //       title:"Lorem ipsum",
    //       shotDesc:`here are many variations of passages of 
    //       Lorem Ipsum available, but the majority 
    //       have suffered alteration in some form`
    //     },
    //     {
    //       img:"../../images/article-mockup-3.png",
    //       title:"Lorem ipsum",
    //       shotDesc:`here are many variations of passages of 
    //       Lorem Ipsum available, but the majority 
    //       have suffered alteration in some form`
    //     },
    //     {
    //       img:"../../images/article-mockup-1.png",
    //       title:"Lorem ipsum",
    //       shotDesc:`here are many variations of passages of 
    //       Lorem Ipsum available, but the majority 
    //       have suffered alteration in some form`
    //     },
    //     {
    //       img:"../../images/article-mockup-2.png",
    //       title:"Lorem ipsum",
    //       shotDesc:`here are many variations of passages of 
    //       Lorem Ipsum available, but the majority 
    //       have suffered alteration in some form`
    //     }
    //   ]

  return (
    <Layout title="News and Articles" lang={lang}>
        <div className="w-full">
        <div className="service-session mx-auto p-8">
          <div className="w-full text-center pt-14 md:pt-10">
            <p className="w-2/3 mx-auto text-2xl md:text-3xl">News and Articles</p>
            <p className=" uppercase">HOME / News and Articles</p>
          </div>
        </div>
        <div className="about-session text-black ">
          <div className='w-full container mx-auto p-8'>
            <div className="w-full flex flex-wrap my-8">
                {
                data.map((o:any,i:any)=>(
                    <div key={i} className="w-full md:w-3/12 p-3">
                      <Link href={`articles/${o.urlFriendly}`}>
                      <div className="w-full h-52">
                          <img className='h-full object-cover' src={process.env.NEXT_PUBLIC_IMG_URL+o.image} alt="" />
                      </div>
                      <h1 className='w-full md:text-sm leading-9' style={{paddingTop:"0.2rem",paddingBottom:"0.2rem"}}>{o.title}</h1>
                      <p className="text-xs md:text-xs shot-desc-article">{o.shortDescription}</p>
                      </Link>
                    </div>
                ))
                }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Articles;

export async function getServerSideProps({query,locale}:any) { 
  let lang = "";
  if(locale == "th"){
    lang = "-"+locale;
  }
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/publications`+lang);
  const data = await res?.json(); 
  return {
    props: {
      res:data||null,
      lang:locale
    },
  } 
}
