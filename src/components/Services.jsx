import {
  Code,
  Database,
  Server,
  Monitor,
  Layers,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

const servicesList = [
  {
    icon: <Monitor size={40} />,
    title: "Website Development",
    description:
      "Custom, responsive, and user-friendly websites designed to meet your business needs.",
  },
  {
    icon: <Settings size={40} />,
    title: "IT Consultancy",
    description:
      "Expert guidance to help you choose the best technology solutions for your projects.",
  },
  {
    icon: <Database size={40} />,
    title: "Database Development",
    description:
      "Efficient and secure databases built to handle your business data smoothly.",
  },
  {
    icon: <Server size={40} />,
    title: "Backend Development",
    description:
      "Robust and scalable backend systems that power your applications.",
  },
  {
    icon: <Code size={40} />,
    title: "Frontend Development",
    description:
      "Beautiful, responsive interfaces with seamless user experiences.",
  },
  {
    icon: <Layers size={40} />,
    title: "Fullstack Development",
    description:
      "End-to-end solutions that cover everything from frontend to backend.",
  },
];

const Services = () => {
  return (
    <div className="dark:bg-gray-900" id="services">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-3xl font-bold text-center mt-10">
          Our Services
        </h1>
      </motion.section>

      {/* INTRO TEXT */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          From web development to IT consulting, we provide top-notch digital
          solutions to help your business thrive in the modern world.
        </p>
      </motion.section>

      {/* SERVICE CARDS */}
      <section className="container mx-auto px-4 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
          >
            <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Services;
