import Image from 'next/image';
import Layout from './components/layout';
import Session1 from './components/homes/session1';
import Session2 from './components/homes/session2';
import Session3 from './components/homes/session3';
import Session4 from './components/homes/session4';


const Articles = () => {
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
    <Layout>
        <div className="w-full">
        <div className="service-session mx-auto p-8">
          <div className="w-full text-center pt-10">
            <p className="w-2/3 mx-auto"  style={{fontSize:"30px"}}>News and Articles</p>
            <p className=" uppercase">HOME / News and Articles</p>
          </div>
        </div>
        <div className="about-session text-black ">
          <div className='w-full container mx-auto p-8'>
            <div className="w-full flex flex-wrap my-8">
                {
                data.map((o:any,i:any)=>(
                    <div key={i} className="w-2/4 md:w-3/12 p-3">
                      <div className="w-full">
                          <img src={o.img} alt="" />
                      </div>
                      <h1 className='w-full md:text-2xl leading-9'>{o.title}</h1>
                      <p className="text-xs md:text-base shot-desc-article">{o.shotDesc}</p>
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
