import Image from 'next/image';
import Layout from './components/layout';
import Session1 from './components/homes/session1';
import { GetServerSideProps, NextPage } from 'next';

interface ProviderPageProps {
  slug: string; 
}
const Slag: NextPage<ProviderPageProps> = ({ slug } : any) => {
  const arrDataDesign = [ 
    "Talking",
    "Design Process",
    "Construction Drawing and Construction Permission",
    "Construction",
    "Project Hand over"
  ];
  console.log(arrDataDesign);
  return (
    <Layout>
      <div className="w-full service-session pt-4">
        <div className="container mx-auto p-8">
            <div className="w-full ">
              <p>{slug}</p>
              <p className="w-full mx-auto"  style={{fontSize:"30px"}}>Design Build</p>
            </div>
            <div className="w-full flex my-8">
              <div className="w-4/12">
                  <img src="../../images/service-mockup-1.png" alt="" />
                </div>
                <div className="w-8/12 pl-8">
                  
                  {/* {
                    arrDataDesign.map((o:any,i:any)=>{

                    })
                  } */}
                  
                </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<ProviderPageProps> = async (context :any) => {
  const { slug } = context.params;
  return {
    props: {
      slug,
    },
  };
};

export default Slag;
