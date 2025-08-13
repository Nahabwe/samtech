import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setMessage("");
    setName("");
  };

  return (
    <div className="dark:bg-gray-900" id="contact">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="justify-center"
      >
        <h2 className="text-4xl text-center mb-4 mt-8 font-bold">Contact Us</h2>
      </motion.div>

      {/* INTRO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="container max-auto px-4 py-12 text-center"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have questions or want to start a project with us? We’d love to hear
          from you! Use the form below or reach out directly through our contact
          information.
        </p>
      </motion.section>

      {/* CONTACT CONTENT */}
      <section className="container mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-start gap-4">
            <MapPin className="text-blue-600 dark:text-blue-400 " size={20} />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Our Office
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Kampala City, Uganda
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="text-blue-600 dark:text-blue-400 " size={20} />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                +(256) 778271814
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="text-blue-600 dark:text-blue-400 " size={20} />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                nahabwesirmuel@gmail.com
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6"
        >
          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border w-full rounded-lg px-4 py-2 focus:none focus:ring-blue-500 dark:text-gray-900"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border w-full rounded-lg px-4 py-2 focus:none focus:ring-blue-500 dark:text-gray-900"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="border w-full h-28 rounded-lg px-4 py-2 focus:ring-none focus:ring-blue-500 dark:text-gray-900"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </section>
    </div>
  );
};

export default Contact;
