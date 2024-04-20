import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GridList = ({ list, extra }) => {
  return (
    <ul
      className={`grid-list grid gap-y-6 gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${extra}`}
    >
      {list.map((item) => {
        return (
          <motion.li
            key={item.name}
            className="category w-[300px] xs:w-[316px] h-[380px] md:h-[420px] duration-300 "
            style={{ position: "relative" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
          >
            <Link
              to={item.url}
              className="flex w-full h-full flex-col gap-4 items-center"
            >
              <div className="relative duration-300 hover:after:opacity-50 after:rounded-[12px] rounded-[12px] img w-full h-[350px] overflow-hidden after:content[''] after:duration-300 after:absolute after:block after:left-0 after:top-0 after:w-full after:h-full after:bg-black after:opacity-0">
                <img
                  className="relative"
                  src={item.href}
                  alt={`This is a ${item.name} category`}
                  width={316}
                  height={348}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <h2 className="text-xl duration-100 hover:text-green text-center max-w-[315px]">
                {item.name}
              </h2>
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default GridList;
