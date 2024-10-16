import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
     
      <div className="homeMainCont">

        <div className="homeMain">
          <Image className="logo" src="/paintLogo.png" alt="Logo" width={400} height={400} />
          <p className="homeText">
            As a local independent painter serving Davidson and the surrounding
            area, I am dedicated to achieving perfection and realizing your vision
            in every project. Known for my organization, cleanliness, and
            efficiency, I ensure that each job is completed to the highest
            standard. With a commitment to quality, I use top-grade materials and
            meticulous techniques to deliver outstanding results. I provide
            personalized service and attention to detail. My goal is to transform
            your space with a professional touch that reflects your style and
            meets your expectations. Let me be your go-to choice for getting the
            job done right. Contact me today for a free consultation and estimate.
          </p>
        </div>
      </div>
    
    </>
  );
}
