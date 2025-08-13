import { Laugh, Lock, Rocket, Settings } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="dark:bg-gray-900" id="home">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <img
              src="home.jpg"
              alt="a man sitting"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Home of Tech
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
              Welcome to the home where dreams come true. Develop and host your
              website with us — modern, reliable, and fast.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#services">
                <button className="border border-black py-3 px-6 rounded-lg font-semibold  shadow-md transition duration-300 hover:bg-black hover:text-white">
                  Get Started
                </button>
              </a>
              <a href="#services">
                <button className="border border-black py-3 px-6 rounded-lg font-semibold shadow-md transition duration-300 hover:bg-black hover:text-white">
                  Our Services
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Rocket />,
                title: "Fast Hosting",
                desc: "Lightning-speed servers to keep your website online and fast.",
              },
              {
                icon: <Settings />,
                title: "Custom Websites",
                desc: "Tailor-made websites built exactly to your needs.",
              },
              {
                icon: <Lock />,
                title: "Secure & Scalable",
                desc: "Built with modern security and room to grow as your business expands.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white flex">
                  <div>{feature.icon}</div>
                  <div className="ml-4">{feature.title}</div>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
