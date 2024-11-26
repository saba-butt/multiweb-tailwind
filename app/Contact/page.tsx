import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { HiOfficeBuilding } from 'react-icons/hi';

const Contact = () => {
  return (
    <section
      className="contact-page flex flex-col items-end justify-end min-h-screen bg-fixed bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/contact.jpg')", // Replace with your background image path
      }}
    >
      <h2 className="text-4xl text-center  relative left-[-390px] text-black font-bold mb-6" data-aos="fade-up">Contact Us</h2>

      {/* Contact Information */}
      <div className="contact-info mb-10 w-[950px] bg-yellow-500 p-6 rounded-md shadow-md">
        <h3 className="text-2xl text-black font-bold text-center mb-4">Get in Touch</h3>
        <ul className="space-y-4 text-blue-800">
          <li className="flex items-center space-x-3">
            <FaEnvelope className="text-blue-700 text-xl" />
            <a
              href="mailto:ebkkarachi@gmail.com"
              className="hover:underline"
            >
              ebkkarachi@gmail.com
            </a>
          </li>
          <li className="flex items-center space-x-3">
            <FaPhoneAlt className="text-blue-700 text-xl" />
            <a
              href="tel:+03132043758"
              className="hover:underline"
            >
              0313 2043758
            </a>
          </li>
          <li className="flex items-center space-x-3">
            <HiOfficeBuilding className="text-blue-700 text-xl" />
            <span>Nazimabad Urdu Bazar, Karachi, Pakistan, 74600</span>
          </li>
        </ul>

        {/* Social Media Links */}
        <div className="social-links mt-6 text-center">
          <h4 className="text-xl text-black font-bold mb-4">Follow Us</h4>
          <div className="flex justify-center space-x-6 text-blue-700">
            <a
              href="https://www.facebook.com/ebpub/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/13181166/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 text-2xl"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form bg-yellow-500 p-6 rounded-md shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-black text-center">Send Us a Message</h3>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 px-4 py-2 border border-blue-600 rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full mb-4 px-4 py-2 border border-blue-600 rounded-md"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full mb-4 px-4 py-2 border border-blue-600 rounded-md"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 px-4 py-2 border border-blue-600 rounded-md"
            rows={5}
            required
          ></textarea>
         <div className="flex justify-center">
  <button
    type="submit"
    className="w-1/2 flex items-center justify-center text-black bg-red-600 py-2 rounded-md"
  >
    Send Message
  </button>
</div>

        </form>

        {/* Google Map Embed */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-black text-center mb-4">Our Location</h3>
          <div className="w-full h-64 border border-blue-600 rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452.35523803408756!2d67.03021685808407!3d24.903373748978577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e8e9b7bcc5b%3A0x450a57804937a900!2zRW1pcmF0ZXMgQm9va3MgUHVibGlzaGVyIEVCUCDYp9uM2YXYsduM2bnYsyDYqNmP2qnYsyDZvtio2YTYtNixINqp2LHYp9qG24w!5e0!3m2!1sen!2s!4v1732608114468!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
