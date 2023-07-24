'use client'
import './form-contact.scss';
import { motion } from 'framer-motion';
import { faArrowCircleRight, faArrowUpRightFromSquare, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const FormContact = () => {
  return (
    <>
      {/* <section className="tf__contact mt_100 xs_mt_70 mb_100 xs_mb_70">
      <div className="container">
        <div className="tf__contact_form_area">
          <div className="row">
            <div className="col-xl-12 col-md-12 col-lg-12 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__contact_info_area">
                <div className="tf__contact_info">
                  <h3>call</h3>
                  <p>660-429-9027  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></p>
                </div>
                <div className="tf__contact_info">
                  <h3>mail</h3>
                  <p>ss.kansha@gmail.com</p>
                </div>
                <div className="tf__contact_info border-0 p-0 m-0">
                  <h3>location</h3>
                  <p>303 Cooper Blvd Suite I, Warrensburg, MO 64093, United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tf__contact_map_area">
          <div className="row mt_100 xs_mt_70">
            <div className="col-12 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__contact_map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12442.744552741196!2d-93.7368245!3d38.7709022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c3e304e1e59d4d%3A0xd91636cc2fb9e159!2sKansha%20Hibachi%20Express!5e0!3m2!1sen!2sus!4v1685732677839!5m2!1sen!2sus"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
      <div className="container">
        <section className="formContact">
          <div className=" box box1">
            <h1>We Are Here...</h1>
            <p>We'd love to hear your feedback</p>
          </div>
          <div className=" box box2">
            <h1>Let's Talk.</h1>
            <p>We'd love to hear your feedback</p>
            <Link href="#">
              <button><FontAwesomeIcon icon={faPhone} /> Call Us</button>
            </Link>
          </div>
          <div className="box box3">
            <div className="title">
              <div className="boxImage">
                <Image width={500} height={500} src="/images/logo-kansha-header.png" alt="RegFood" className="logoImage" />
              </div>
              {/* <h1>Kansha Hibachi Express</h1>
              <p>Hibachi & Sushi Restaurant</p> */}
            </div>
            <div className="address">
              <h3>Address:</h3>
              <p>303 Cooper Blvd Suite I, Warrensburg, MO 64093, United States</p>
            </div>
            <div className="hours">
              <h3>Hours:</h3>
              {/* <ul>
                <li>Sun: <span>04:00 - 09:00</span></li>
                <li>Mon: <span>11.00 - 02:30 04:00 - 09:00</span></li>
                <li>Tue: <span>11.00 - 02:30 04:00 - 09:00</span></li>
                <li>Wed: <span>11.00 - 02:30 04:00 - 09:00</span></li>
                <li>Thu: <span>11.00 - 02:30 04:00 - 09:00</span></li>
                <li>Fri: <span>11.00 - 02:30 04:00 - 09:00</span></li>
                <li>Sat: <span>11.00 - 02:30 04:00 - 09:00</span></li>
              </ul> */}
              <table>
                <tbody>
                  <tr>
                    <td className="days">Sun:</td>
                    <td className="clock">04:00 - 09:00</td>
                  </tr>
                  <tr>
                    <td className="days">Mon:</td>
                    <td className="clock">11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM</td>
                  </tr>
                  <tr>
                    <td className="days">Tue:</td>
                    <td className="clock">11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM</td>
                  </tr>
                  <tr>
                    <td className="days">Wed:</td>
                    <td className="clock">11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM</td>
                  </tr>
                  <tr>
                    <td className="days">Thu:</td>
                    <td className="clock">11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM</td>
                  </tr>
                  <tr>
                    <td className="days">Fri:</td>
                    <td className="clock">11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM</td>
                  </tr>
                  <tr>
                    <td className="days">Sat:</td>
                    <td className="clock">11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="contact">
              <h3>Contact</h3>
              {/* <ul>
                <li>Phone <span><Link href="#">(660) 429-9074 <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link> </span></li>
                <li>E-mail <span><Link href="#">ss.kansha@gmail.com <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link></span></li>
              </ul> */}
              <table>
                <tbody>
                  <tr>
                    <td className='titleContact'>Phone:</td>
                    <td className="detailContact"><Link href="tel:+16604299074" target="_blank" rel="noreferrer">(660) 429-9074 <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></Link> </td>
                  </tr>
                  <tr>
                    <td className="titleContact">E-mail:</td>
                    <td className="detailContact"><Link href="mailto:ss.kansha@gmail.com" target="_blank" rel="noreferrer">ss.kansha@gmail.com <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className=" box box4">Box 4</div>
          <div className=" box box5">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            {/* <button>Follow Us</button> */}
            <ul>
              <li>Posts: 203</li>
              <li>Followers: 578</li>
              <li>Following: 20</li>
            </ul>
            <Link href="#"><span>Follow Us <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /> </span></Link>
          </div>
          <div className=" box box6">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <button>Join Us</button>
          </div>
          <div className=" box box7">
            <h1>Stay Connected...</h1>
            <p>Lorem ipsum dolor sit amet Lorem</p>
          </div>
          {/* <div className=" box box8">Box 8</div> */}
        </section>
      </div>
    </>
  );
}

export default FormContact;