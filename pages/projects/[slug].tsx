import Image from 'next/image';
import Layout from '../components/layout';
import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import Swal from 'sweetalert2'
import parse from 'html-react-parser';

interface ProviderPageProps {
  slug: string; 
}



const SlugProject = ({res,lang, slug}:any) => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState(res?.data);
  const [dataAlbum, setDataAlbums] = useState(res?.albums);
  const [img, setImg] = useState("");
  let row = 1;
  let col = 1;
  function setImgModal(index:any){
    setImg(process.env.NEXT_PUBLIC_IMG_URL+dataAlbum[index]?.image);
    Swal.fire({
      width: 800,                
      html:`
        <div class="w-full flex">
            <div class="flex justify-center">
              <button type="button" data-role="none" id="arrowPrev" index=`+(index <= 0 ? 0 :index-1)+` class="slick-arrow slick-prev"> Previous</button>
            </div>
            <div>
              <img id="img-modal" className='' src=`+process.env.NEXT_PUBLIC_IMG_URL+dataAlbum[index]?.image+` alt="" />
            </div>
            <div class="flex justify-center">
              <button type="button" data-role="none" id="arrowNext" index=`+((index+1) >= dataAlbum.length? dataAlbum.length-1 : index+1)+` class="slick-arrow slick-next"> Next</button>
            </div>
        </div>
      `,
      showConfirmButton: false,
      background: '#00000000',
    })

    const prev:any = document.getElementById("arrowPrev");
    const next:any = document.getElementById("arrowNext");
    const imghtml:any = document.getElementById("img-modal");
    if(prev){
      prev.onclick = function prevFunc(e:any){
        var k = e.target.getAttribute("index");
        var prevK = parseInt(k) <= 0 ? 0 : parseInt(k)-1;
        var nextK = parseInt(k) >= (dataAlbum.length-1)? dataAlbum.length-1 : parseInt(k)+1;
        imghtml.src = process.env.NEXT_PUBLIC_IMG_URL+dataAlbum[k]?.image;
        prev.setAttribute("index", prevK);
        next.setAttribute("index", nextK);
        console.log(prevK,parseInt(k),nextK,dataAlbum.length);
      };
    }

    if(next){
      next.onclick = function nextFunc(e:any){
        var k = e.target.getAttribute("index");
        var prevK = parseInt(k) <= 0 ? 0 : parseInt(k)-1;
        var nextK = parseInt(k) >= (dataAlbum.length-1)? dataAlbum.length-1 : parseInt(k)+1;
        imghtml.src = process.env.NEXT_PUBLIC_IMG_URL+dataAlbum[k]?.image;
        prev.setAttribute("index", prevK);
        next.setAttribute("index", nextK);
        console.log(e.target.getAttribute("index"));
      };
    }
    
    // prev?.onclick(()=>test());
  
    // setOpenModal(true)
  }

  

  // const dataAlbum = [
  //   "../../images/img-project-detail-1.png",
  //   "../../images/img-project-detail-2.png",
  //   "../../images/img-project-detail-3.png",

  //   "../../images/img-project-detail-4.png",
  //   "../../images/img-project-detail-3.png",
  //   "../../images/img-project-detail-2.png",

  //   "../../images/img-project-detail-3.png",
  //   "../../images/img-project-detail-1.png",
  //   "../../images/img-project-detail-3.png"
  // ];

 console.log(dataAlbum);
  return (
    <Layout metaSeo={{title:res.title, keywords:res.keyword, description:res.shortDescription, image:process.env.NEXT_PUBLIC_IMG_URL+res.image, url:"", type:""}} lang={lang}>
      <div className="w-full">
        <div className="w-full slideshow-container-banner">
          <img className='w-full h-full' style={{filter:"brightness(0.5)",objectFit:"cover"}}  src={process.env.NEXT_PUBLIC_IMG_URL+data?.image}  alt="" />
        </div>
        <div className="w-full about-session" style={{color:"#2E2E2E"}}>
          <div className='w-full container mx-auto'>
            <h1 className="w-full px-4 md:px-0 py-4 mx-auto uppercase" style={{fontSize:"30px"}}>{data?.title}</h1>
            <div className="w-full flex flex-wrap mb-4">
              <div className='w-full p-4 md:p-0 md:w-3/4 text-gray-500'>
                {
                  data?.description &&
                  parse((`${parse(data?.description)}`))
                }
              </div>
              <div className='w-full md:w-1/4 px-4 md:px-8'>
                <div className="w-full pb-2">
                  <p>Type</p>
                  <p className='text-gray-500'>{data?.typeName}</p>
                </div>
                <div className="w-full pb-2">
                  <p>Year</p>
                  <p className='text-gray-500'>{data?.year}</p>
                </div>
                <div className="w-full pb-2">
                  <p>Location</p>
                  <p className='text-gray-500'>{data?.location}</p>
                </div>
                <div className="w-full pb-2">
                  <p>Status</p>
                  <p className='text-gray-500'>{data?.statusName}</p>
                </div>
                <div className="w-full pb-2">
                  <p>Area</p>
                  <p className='text-gray-500'>{data?.area}</p>
                </div>
                <div className="w-full pb-2">
                  <p>Client</p>
                  <p className='text-gray-500'>{data?.client}</p>
                </div>
                <div className="w-full pb-2">
                  <p>Architect</p>
                  <p className='text-gray-500'>{data?.architect ? data?.architect :"-"}</p>
                </div>
                
                <div className="w-full pb-2">
                  <p>Contractor</p>
                  <p className='text-gray-500'>{data?.contractor? data?.contractor: "-"}</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:px-0">
              {
                
                dataAlbum.map((o:any,i:any)=>{
                  if(row > 3){
                    row = 1;
                  }
                  if(col > 3){
                    col = 1;
                    row++;
                  }
                  
                  if(row == 1){
                    col++;
                    if(col==3){
                      return (
                        <div key={i} className="w-full flex flex-wrap">
                         <div className="w-1/3">
                           <div className='w-full'>
                             <img className='w-full' src={process.env.NEXT_PUBLIC_IMG_URL+dataAlbum[i-1]?.image} alt="" onClick={()=>setImgModal(i-1)} />
                           </div>
                           <div className='w-full pt-4'>
                             <img className='w-full' src={process.env.NEXT_PUBLIC_IMG_URL+dataAlbum[i]?.image} alt="" onClick={()=>setImgModal(i)}/>
                           </div>
                         </div>
                         <div className="w-2/3 pl-4">
                           <div className='w-full h-full'>
                             <img className='w-full h-full' src={process.env.NEXT_PUBLIC_IMG_URL+dataAlbum[i+1]?.image} alt="" onClick={()=>setImgModal(i+1)}/>
                           </div>
                         </div>
                       </div>
                       )
                    }
                    
                  }else if(row == 2) {
                    col++;
                    if(col==3){
                      return (
                        <div key={i} className="w-full flex flex-wrap py-4">
                          <div className="w-full flex flex-wrap">
                            <div className='w-2/6'>
                              <img className='w-full' src={process.env.NEXT_PUBLIC_IMG_URL+dataAlbum[i-1]?.image} alt="" onClick={()=>setImgModal(i-1)}/>
                            </div>
                            <div className='w-2/6 pl-4'>
                              <img className='w-full h-full' src={process.env.NEXT_PUBLIC_IMG_URL+dataAlbum[i]?.image} alt="" onClick={()=>setImgModal(i)}/>
                            </div>
                            <div className='w-2/6 pl-4'>
                              <img className='w-full h-full' src={process.env.NEXT_PUBLIC_IMG_URL+dataAlbum[i+1]?.image} alt="" onClick={()=>setImgModal(i+1)}/>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    
                  }else {
                    col++;
                    if(col==3){
                      return (
                        <div key={i} className="w-full flex flex-wrap pb-4">
                          <div className="w-2/3 h-full">
                            <div className='w-full'>
                              <img className='w-full' src={process.env.NEXT_PUBLIC_IMG_URL+dataAlbum[i-1]?.image} alt="" onClick={()=>setImgModal(i-1)}/>
                            </div>
                          </div>
                          <div className="w-1/3 h-full pl-4">
                            <div className='w-full'>
                              <img className='w-full' src={process.env.NEXT_PUBLIC_IMG_URL+dataAlbum[i]?.image} alt="" onClick={()=>setImgModal(i)}/>
                            </div>
                            <div className='w-full pt-4'>
                              <img className='w-full h-full' src={process.env.NEXT_PUBLIC_IMG_URL+dataAlbum[i+1]?.image} alt="" onClick={()=>setImgModal(i+1)}/>
                            </div>
                          </div>
                        </div>
                        )
                    }
                    
                  }
                })
              }

              {/* <div className="w-full flex flex-wrap">
                <div className="w-1/3">
                  <div className='w-full'>
                    <img className='w-full' src="../../images/img-project-detail-1.png" alt="" onClick={()=>setImgModal(0)} />
                  </div>
                  <div className='w-full pt-4'>
                    <img className='w-full' src="../../images/img-project-detail-2.png" alt="" onClick={()=>setImgModal(1)}/>
                  </div>
                </div>
                <div className="w-2/3 pl-4">
                  <div className='w-full h-full'>
                    <img className='w-full h-full' src="../../images/img-project-detail-3.png" alt="" onClick={()=>setImgModal(2)}/>
                  </div>
                </div>
              </div> */}

              {/* <div className="w-full flex flex-wrap py-4">
                <div className="w-full flex flex-wrap">
                  <div className='w-2/6'>
                    <img className='w-full' src="../../images/img-project-detail-4.png" alt="" onClick={()=>setImgModal(4)}/>
                  </div>
                  <div className='w-2/6 pl-4'>
                    <img className='w-full h-full' src="../../images/img-project-detail-3.png" alt="" onClick={()=>setImgModal(5)}/>
                  </div>
                  <div className='w-2/6 pl-4'>
                    <img className='w-full h-full' src="../../images/img-project-detail-2.png" alt="" onClick={()=>setImgModal(6)}/>
                  </div>
                </div>
              </div> */}

              {/* <div className="w-full flex flex-wrap pb-4">
                <div className="w-2/3 h-full">
                  <div className='w-full'>
                    <img className='w-full' src="../../images/img-project-detail-3.png" alt="" onClick={()=>setImgModal(7)}/>
                  </div>
                </div>
                <div className="w-1/3 h-full pl-4">
                  <div className='w-full'>
                    <img className='w-full' src="../../images/img-project-detail-1.png" alt="" onClick={()=>setImgModal(8)}/>
                  </div>
                  <div className='w-full pt-4'>
                    <img className='w-full h-full' src="../../images/img-project-detail-3.png" alt="" onClick={()=>setImgModal(9)}/>
                  </div>
                </div>
              </div> */}

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
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/projects${lang}/${slug}`);
  const data = await res?.json(); 
  return {
    props: {
      res:data||null,
      lang:locale,
      slug:slug
    },
  } 
}

export default SlugProject;
