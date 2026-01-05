import { motion } from "framer-motion";
import { Project } from "./Projects";
import { About } from "./About";
import { SideNavbar } from "./SideNavbar";
import { GetInTouch } from "./GetInTouch";
import { Skills } from "./Skills";

export const Home = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };
  const text =
    `Hi, I’m Stuti Kumari, a Frontend Developer who loves transforming
     ideas into intuitive and engaging web experiences.
    
         `.split("");

  return (
    <div className="mt-40 mb-10 ">
      <div>
        <div className="    grid grid-cols-1 md:grid-cols-3 gap-6 items-center ">
          <div className="md:col-span-2 text-center md:text-left">
            <p className="text-4xl sm:text-5xl font-bold font-[Montserrat] text-gray-100 drop-shadow-lg">
              Hey, I am Stuti
            </p>
            <motion.div
              className="text-2xl font-bold text-white mt-2"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {text.map((letter, index) => (
                <motion.span
                  className="text-2xl font-medium text-gray-400 font-[Lora] italic"
                  key={index}
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div className="relative flex justify-center  inset-shadow-sm inset-shadow-indigo-500/50">
            <img
              src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1752225324/drgxmgwd2hwdhdpddpgc.jpg"
              className="h-[230px] w-[200px]  shadow-lg rounded-[30%_30%_50%_60%] overflow-hidden
   object-cover
   transition-transform duration-300 hover:scale-105"
            />
            {/* Gradient Effect Applied on Image */}
            {/* <span className=" w-3/4 mx-auto top-2 absolute  left-0 right-0  bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[1px]"></span> */}
          </div>
        </div>
      </div>
      {/* <SideNavbar /> */}
     
      <About />
      <Skills />
      {/* <Project /> */}
      <GetInTouch />
    </div>
  );
};
