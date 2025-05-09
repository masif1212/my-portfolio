import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="mt-0 sm:-mt-[4rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[14px] sm:text-[16px]`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-[24px] sm:text-[30px]`}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[14px] sm:text-[16px]"
      >
        I am a seasoned Full-Stack Software Engineer with a strong foundation in
        JavaScript and TypeScript, actively building and scaling
        high-performance applications since December 2020. My technical
        expertise spans across modern frameworks such as React, React Native,
        Next.js, and Remix, where I consistently deliver robust, maintainable,
        and scalable software solutions. I specialize in architecting
        distributed systems and microservices, leveraging both MySQL and NoSQL
        databases for efficient and reliable data management. I am highly
        proficient in state management using Redux, API development with Node.js
        and Express, and version control using Git. My experience extends to
        CI/CD automation using GitHub Actions, enabling seamless and efficient
        deployment workflows. In the AI domain, I have hands-on experience
        designing and developing intelligent systems. Notably, I led the
        development of an AI-embedded legal chatbot, integrating OpenAI APIs and
        implementing Retrieval-Augmented Generation (RAG) techniques to deliver47        contextual, domain-specific legal insights—demonstrating my capability
        to bridge advanced AI with user-centric applications. My background also
        includes serving as a Solutions Architect at Firefly TechSolutions,
        where I continue to lead cross-functional initiatives, align business
        goals with scalable software architectures, and guide technical
        strategy. Additionally, I have contributed to DevOps functions,
        streamlining operations through automated testing (Jest, Nightwatch) and
        enforcing software quality via object-oriented design principles and
        end-to-end system validation. With a proven track record in delivering
        full-stack solutions, I bring a balanced approach to engineering—merging
        innovation with operational precision to drive product excellence.
      </motion.p>

      <div className="mt-10 sm:mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");