import Image from "next/image";

const GaleryBox = () => {
  return (
    <section className="galery-box">
      <div className="container">
        <div className="box-container">
          <div className="box-images">
            <Image src={'/images/menu2_img_1.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/menu2_img_2.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/menu2_img_3.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/menu2_img_4.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/menu2_img_5.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/menu2_img_1.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/menu2_img_2.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/menu2_img_5.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/menu2_img_6.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/menu2_img_7.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/menu2_img_8.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/menu2_img_7.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/menu2_img_6.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/menu2_img_5.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GaleryBox;