import Image from 'next/image';
import Layout from './components/layout';
import Link from 'next/link';
import { IconContext } from "react-icons";
import { FiSearch } from "react-icons/fi";
import { useState } from 'react';

const Articles = ({res,resT,lang}:any) => {
  const [data, setDate] = useState(res);
  const [txtSearch, setTxtSearch] = useState("");
  const [type, setType] = useState<number>(0);
  const [typeList, setTypeList] = useState(resT);

  const filterType = (id:number) => {
    if(id == type){
      setType(0);
      if(txtSearch!=""){
        setDate(res);
        setDate(res.filter((d:any)=>d.title.includes(txtSearch)));
      }else{
        setDate(res);
      }
    }else{
      setType(id);
      if(txtSearch!=""){
        setDate(res.filter((d:any)=>d.title.includes(txtSearch)&&d.typeId == id));
      }else{
        setDate(res.filter((d:any)=>d.typeId == id));
      }
    }
  }

  const searchData = (e:any) => {
    const {value} = e.target;
    console.log(value);
    setTxtSearch(value);

    if(type!=0){
      setDate(res.filter((d:any)=>d.title.includes(value)&&d.typeId == type));
    }else{
      setDate(res.filter((d:any)=>d.title.includes(value)));
    }
  }
  return (
    <Layout title="Projects" lang={lang}>
        <div className="w-full">
        <div className="service-session mx-auto p-8">
          <div className="w-full text-center pt-10">
            <p className="w-2/3 mx-auto"  style={{fontSize:"30px"}}>Projects</p>
            <p className=" uppercase">HOME / Projecets</p>
          </div>
        </div>
        <div className="w-full " style={{backgroundColor:"#E4E2E2"}}>
          <div className="w-full container mx-auto px-0 py-4 md:p-8">
            <div className="w-full flex flex-wrap text-gray-500">
              <div className="w-full md:w-2/3 hidden md:flex ">
                {
                  typeList.map((o:any,i:any)=>(
                    <div key={i} className='px-1 whitespace-nowrap' onClick={()=>filterType(o.typeId)}><Link className={`project-category ${type==o.typeId?"active":""}`} href="#">{o.typeName}</Link></div>
                  ))
                }
              </div>
              <div className="w-full md:w-1/3 flex justify-end px-3">
                <input type="text" className=' rounded-l-full w-full text-sm px-4' onKeyUp={searchData} name="" id="" placeholder='Search...'/>
                <IconContext.Provider value={{ color: "#fff", className: ""}}>
                  <button type='button' className=" bg-gray-600 p-1 rounded-r-full px-2">
                      <FiSearch/>
                  </button>
                </IconContext.Provider>
              </div>    
              <div className="w-full overflow-x-auto flex md:hidden pt-4">
                {
                  typeList.map((o:any,i:any)=>(
                    <div key={i} className='px-1 whitespace-nowrap'  onClick={()=>filterType(o.typeId)}><Link className='project-category' href="#">{o.typeName}</Link></div>
                  ))
                }
                {/* <div className='px-1 pl-3 whitespace-nowrap'><Link className='project-category' href="#">ทาวน์โฮม</Link></div>
                <div className='px-1 whitespace-nowrap'><Link className='project-category' href="#">บ้านเดี่ยว</Link></div>
                <div className='px-1 whitespace-nowrap'><Link className='project-category' href="/articles">คอนโด</Link></div>
                <div className='px-1 whitespace-nowrap'><Link className='project-category' href="#">บ้านแฝด</Link></div>
                <div className='px-1 whitespace-nowrap'><Link className='project-category' href="#">อาคารพาณิชย์</Link></div>
                <div className='px-1 pr-3 whitespace-nowrap'><Link className='project-category' href="#">โครงการอื่นๆ</Link></div> */}
              </div>           
            </div>
          </div>
        </div>
        <div className="about-session text-black ">
          <div className='w-full container mx-auto p-8'>
            <div className="w-full flex flex-wrap my-8">
                {
                data.map((o:any,i:any)=>(
                    <div key={i} className="w-full md:w-4/12 p-3">
                      <Link href={`projects/${o.urlFriendly}`}>
                      <div className="w-full h-52">
                          <img className='h-full object-cover' src={process.env.NEXT_PUBLIC_IMG_URL+o.image} alt="" />
                      </div>
                      <small className=' uppercase text-xs text-gray-500' style={{paddingTop:"0.2rem",paddingBottom:"0.2rem"}}>{o.typeName}</small>
                      <h1 className='w-full md:text-sm' >{o.title}</h1>
                      </Link>
                      {/* <p className="text-xs md:text-base shot-desc-article">{o.shotDesc}</p> */}
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
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/projects`+lang);
  const data = await res?.json(); 

  const resType = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/project-type`+lang);
  const dataType = await resType?.json(); 
  return {
    props: {
      res:data||null,
      resT:dataType||null,
      lang:locale
    },
  } 
}