import { motion } from "framer-motion";

export const Project = () => {
  return (
    <div className="mt-10">
      
      <div className="text-2xl font-bold text-neutral-300 mb-6">Projects</div>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="border border-gray-700  hover:bg-gray-800/50 p-5 rounded-lg cursor-pointer ">
          <p className="text-2xl leading-8 font-bold ">Galaxia</p>
          <p className="text-xl font-medium  text-neutral-400 mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            voluptas voluptate tempore odit nam laborum recusandae distinctio ex
            nostrum adipisci.
          </p>
        </div>
        <div className="dark:bg-neutral-800 p-5 rounded-lg cursor-pointer ">
          <p className="text-2xl leading-8 font-bold ">Galaxia</p>
          <p className="text-xl font-medium  text-neutral-400 mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            voluptas voluptate tempore odit nam laborum recusandae distinctio ex
            nostrum adipisci.
          </p>
        </div>
        <div className="dark:bg-neutral-800 p-5 rounded-lg cursor-pointer ">
          <p className="text-2xl leading-8 font-bold ">Galaxia</p>
          <p className="text-xl font-medium  text-neutral-400 mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            voluptas voluptate tempore odit nam laborum recusandae distinctio ex
            nostrum adipisci.
          </p>
        </div>
      </div>
    </div>
  );
};
