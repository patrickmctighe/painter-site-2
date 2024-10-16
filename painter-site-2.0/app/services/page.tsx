

import Image from 'next/image';

const Services = () => {
  return (
    <div className="serviceMain">
      <div className="serviceImg">
        <Image className="homeImg" src="/IMG_0360.jpg" alt="" width={500} height={500} />
      </div>
      <div className="serviceText">
        <p>I specialize in indoor painting, but I have other skills and I'm always open to discussing projects that go beyond painting</p>
        <ul>
          <li>Indoor Painting</li>
          <li>Staining</li>
          <li>Outdoor Painting</li>
          <li>Furniture Painting</li>
          <li>Caulking</li>
        </ul>
        <div className="contact">
          <div className="phone">
            <Image src="/phone.png" alt="" className="phoneImg" width={24} height={24} />
            <p className="phoneNum">956-566-9663</p>
          </div>
          <div className="email">
            <Image src="/email.png" alt="" className="emailImg" width={24} height={24} />
            <p className="emailText">patrickquinnmctighe@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;