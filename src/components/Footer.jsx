import {
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="dark:bg-black dark:text-white bg-gray-100 text-gray-800 py-12 px-6"
    >
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-600 dark:text-gray-300">
            We are a passionate team dedicated to delivering modern, reliable, 
            and secure technology solutions. From fast hosting to custom web 
            development, we help bring your ideas to life 24/7.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FiMapPin className="text-blue-600 dark:text-blue-400" size={20} />
              <p>Kampala City, Uganda</p>
            </div>
            <div className="flex items-start gap-3">
              <FiPhone className="text-blue-600 dark:text-blue-400" size={20} />
              <p>+(256) 778271814</p>
            </div>
            <div className="flex items-start gap-3">
              <FiMail className="text-blue-600 dark:text-blue-400" size={20} />
              <p>nahabwesirmuel@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="hover:text-blue-500"
            >
              <FaWhatsapp size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="hover:text-blue-500"
            >
              <FaTwitter size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="hover:text-blue-500"
            >
              <FaTiktok size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="hover:text-blue-500"
            >
              <FaLinkedin size={20} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} SAMTECH. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
