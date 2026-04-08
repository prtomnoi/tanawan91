import Image from 'next/image';
import Layout from '../components/layout';
import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import parse from 'html-react-parser';


const SlugArticles = ({res,lang, slug}:any) => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState(res);

  const setImgModal = (index:any) =>{
    // setOpenModal(true)
  }
  return (
    <Layout metaSeo={{title:res.title, keywords:res.keyword, description:res.shortDescription, image:process.env.NEXT_PUBLIC_IMG_URL+res.image, url:"", type:""}} lang={lang}>
      <div className="w-full">
        <div className="w-full slideshow-container-banner">
          <img className='w-full h-full' style={{filter:"brightness(0.5)",objectFit:"cover"}}  src={process.env.NEXT_PUBLIC_IMG_URL+data?.image} alt="" />
        </div>
        <div className="w-full about-session" style={{color:"#2E2E2E"}}>
          <div className='w-full container mx-auto'>
            <h1 className="w-full px-4 md:px-0 py-4 mx-auto uppercase"  style={{fontSize:"30px"}}>{data?.title}</h1>
            <p className='text-sm px-4 mb-4 md:px-0'>Chatchavan Saensuk : 17 Sep 2023</p>
            <div className="w-full flex flex-wrap pb-8">
              <div className='w-full p-4 md:p-0'>
                {
                  data?.description &&
                  parse((`${parse(data?.description)}`))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({query,locale}:any) { 
  let lang = "";
  const slug = query.slug;
  if(locale == "th"){
    lang = "-"+locale;
  }
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/publications${lang}/${slug}`);
  const data = await res?.json(); 
  return {
    props: {
      res:data||null,
      lang:locale,
      slug:slug
    },
  } 
}

export default SlugArticles;
