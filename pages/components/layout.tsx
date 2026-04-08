import React, { Children, ReactNode } from "react";
import Header from "./header";
import HeaderMobile from "./headerMobile";
import Footer from "./footer";
import FooterMobile from "./footerMobile";
import { NextSeo } from 'next-seo'

interface MetaSeo {
  title: string;
  keywords: string;
  description: string;
  image: string;
  url: string;
  type: string;
}

interface BodyProps {
    children: any;
    lang:string;
    title?:string;
    metaSeo?:MetaSeo;
}

const _title = "Tanawan 91";
const _description = "";
const _url = process.env.NEXT_PUBLIC_URL;

const Layout: React.FC<BodyProps> = ({title, metaSeo, children, lang }) => {
  var t = "";// = fixedTitle.indexOf(url) > -1 ? _title2 : _title;

  t = _title;
  if (metaSeo?.title !== undefined) {
      t = metaSeo?.title + " | " + t;
  }
  else if (title != undefined && title != "undefined") {
    t = title + " " + t;
  }

  if (metaSeo?.image.length == 0) {
    metaSeo.image = metaSeo?.image;
  }
  const seo = {
    title: t,
    description: metaSeo ? metaSeo.description : _description,
    keywords: metaSeo ? metaSeo.keywords : `
    Tanawan 91
    ,Tanawan
    ,Design and Construction 
    ,Design
    ,Construction
    ,Contractor
    ,ธนวันต์ 91 
    ,บริษัท ธนวันต์ 91 จำกัด
    ,ออกแบบและรับเหมาก่อสร้าง
    ,รับสร้างบ้าน
    ,รับเหมาก่อสร้าง
    ,ผู้รับเหมา 
    ,ออกแบบบ้าน
    ,รับเขียนแบบ
    ,รับออกแบบTanawan 91`,
    type: "Article",
    openGraph: {
      type: metaSeo ? metaSeo.type : "Website",
      url: metaSeo ? metaSeo.url : _url,
      title: t,
      description: metaSeo ? metaSeo.description : _description,
      images: [{ url: metaSeo ? metaSeo.image : _url + 'images/og-img.jpg' }],
    }
  }
  return (
    <div>
      <NextSeo {...seo} />
      <Header lang={lang}/>
      <HeaderMobile lang={lang}/>
        <main className="mx-auto">
            {children}
        </main>
      <Footer />
      <FooterMobile />
    </div>
  );
};

export default Layout;