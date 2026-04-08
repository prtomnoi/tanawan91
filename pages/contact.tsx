import Image from 'next/image';
import Layout from './components/layout';
import Link from 'next/link';
import { useState } from 'react';
import parse from 'html-react-parser';
import Swal from 'sweetalert2';


const Contact = ({res,lang}:any) => {
  const [data, setDate] = useState(res);
  const [dataPost,setDataPost] = useState({
    firstName:"",
    email:"",
    phone:"",
    subject:"",
    massage:""
  });

  const handleChange = (e:any) => {
    const {name,value} = e.target;
    console.log(name,value);
    setDataPost({...dataPost,[name]:value});
  }

  const submit = () => {
    const axios = require('axios');
    let data = {
      name: dataPost.firstName,
      email: dataPost.email,
      phone: dataPost.phone,
      subject: dataPost.subject,
      message: dataPost.massage
    };


    axios.post(process.env.NEXT_PUBLIC_API_URL+'api/contact/', data)
    .then((response:any) => {
      console.log(response.data);
      Swal.fire({
        title: 'Success',
        text: response.data.message,
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      });
      setDataPost({
        firstName:"",
        email:"",
        phone:"",
        subject:"",
        massage:""
      })
    });
  }
  console.log(res);
  return (
    <Layout title="Contact" lang={lang}>
        <div className="w-full">
        <div className="service-session mx-auto p-8">
          <div className="w-full text-center pt-10">
            <p className="w-2/3 mx-auto"  style={{fontSize:"30px"}}>Contact</p>
            <p className=" uppercase">HOME / Contact</p>
          </div>
        </div>
        <div className="about-session text-black ">
            <div className="w-full container mx-auto">
                <div className="w-full flex flex-wrap py-8">
                    <div className="w-full md:w-2/4 px-8"> 
                        <div className="w-full">
                          <div className="w-full mb-4">
                            <input className="w-full form-control-black" onChange={handleChange} value={dataPost.firstName} type="text" name="firstName" id="firstName" placeholder="First Name"/>
                          </div>
                          <div className="w-full mb-4">
                            <input className="w-full form-control-black" onChange={handleChange} value={dataPost.email} type="text" name="email" id="email" placeholder="Your Email"/>
                          </div>
                          <div className="w-full mb-4">
                            <input className="w-full form-control-black" onChange={handleChange} value={dataPost.phone} type="text" name="phone" id="phone" placeholder="Moblie Number"/>
                          </div>
                          <div className="w-full mb-4">
                            <input className="w-full form-control-black" onChange={handleChange} value={dataPost.subject} type="text" name="subject" id="subject" placeholder="How Can I Help You?"/>
                          </div>
                          <div className="w-full mb-4">
                            <input className="w-full form-control-black" onChange={handleChange} value={dataPost.massage} type="text" name="massage" id="massage" placeholder="Your Massages"/>
                          </div>
                          <div className="w-full py-8">
                            <button type="button" onClick={submit} className="btn-light-default">Submit Now</button>
                          </div>
                        </div>
                    </div>
                    <div className="w-full md:w-2/4 px-8">
                        {
                        data?.description &&
                        parse((`${data?.description}`))
                        }
                    </div>
                    
                </div>
            </div>
            <div className="w-full container mx-auto pb-8">
                <Link href={data?.mapURL} target="_blank">
                    <img className="w-full" src={process.env.NEXT_PUBLIC_IMG_URL+data.image} alt="" />
                </Link>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({query,locale}:any) { 
    let lang = "";
    if(locale == "th"){
      lang = "_"+locale;
    }
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/contact`+lang);
    const data = await res?.json(); 
    return {
      props: {
        res:data[0]||null,
        lang:locale
      },
    } 
}

export default Contact;
