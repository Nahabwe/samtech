import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="dark:bg-gray-900" id="about">
      {/* HERO BANNER */}
      <section>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-3xl font-bold text-center mt-10"
        >
          About Us
        </motion.h1>
      </section>
      {/* ABOUT CONTENT */}
      <section className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            We are a passionate team dedicated to delivering exceptional
            technology solutions. With a strong commitment to innovation, we
            help individuals, startups, and established businesses bring their
            ideas to life through modern web design, development, and hosting.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our services are available 24/7, ensuring that our clients always
            have the support they need. Trust, transparency, and quality are the
            pillars of our work.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img
            src="about.jpeg"
            alt="Team working"
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </section>
      {/* MISSION & VISION */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Our Mission",
              text: "To empower businesses and individuals by providing cutting-edge digital solutions that drive success and growth.",
            },
            {
              title: "Our Vision",
              text: "To become a leading technology solutions provider recognized for creativity, innovation, and customer satisfaction worldwide.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
