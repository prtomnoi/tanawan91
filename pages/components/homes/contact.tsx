import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import parse from 'html-react-parser';
import Swal from 'sweetalert2';

const Contact = ({data}:any) => {
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
  return (
    <div className="w-full about-session text-black pt-4">
      <div className="container mx-auto p-8">
        <div className="w-full pb-4">
          <p><b>CONTACT US</b></p>
        </div>
        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-4/12">
            {
              data?.map((o:any,i:any)=>(
                o.description &&
                parse((`${o.description}`))
              ))
            }
            <div className="w-full pt-4">
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
                 <input className="w-full form-control-black" onChange={handleChange} value={dataPost.massage} type="text" name="massage" id="massage" placeholder="Your Messages"/>
              </div>
              <div className="w-full py-8">
                <button type="button" onClick={submit} className="btn-light-default">Submit Now</button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-8/12 md:px-8">
          {
              data?.map((o:any,i:any)=>(
                <Link key={i} href={o?.mapURL} target="_blank">
                    <img className="w-full h-full object-cover" src={process.env.NEXT_PUBLIC_IMG_URL+o.image} alt="" />
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;