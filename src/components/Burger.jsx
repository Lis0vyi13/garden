import { useState, useEffect, useRef } from "react";

const Burger = ({ list, extra, color, menuColor, menuPosition }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOutsideClick = (e) => {
    if (
      !menuRef.current.contains(e.target) &&
      !e.target.classList.contains("burger")
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div
      onClick={handleClick}
      className={`burger sm:hidden block relative cursor-pointer p-2 ${extra} text-[18px]`}
    >
      <div
        className={`relative w-[20px] h-[20px] scale-x-[-1] pointer-events-none`}
      >
        <span
          className={`${color} absolute top-0 h-[2.5px] rounded-10 w-1/2 transition-all duration-300 ${
            isOpen && "rotate-45 w-[140%] origin-left"
          }`}
        ></span>
        <span
          className={`${color} absolute top-1/2 h-[2.5px] rounded-10 w-full transition-opacity duration-300 ${
            isOpen && "opacity-0"
          }`}
        ></span>
        <span
          className={`${color} absolute top-full h-[2.5px] rounded-10 w-3/4 transition-all duration-300 ${
            isOpen && "-rotate-45 origin-left w-[140%]"
          }`}
        ></span>
      </div>

      <div
        ref={menuRef}
        className={`transition-all burger-menu absolute right-0 min-w-[150px] rounded-xl ${
          isOpen
            ? "opacity-1 pointer-events-auto opened"
            : "opacity-0 pointer-events-none"
        } ${menuPosition}`}
      >
        <ul
          className={`burger-menu__content text-left rounded-md flex flex-col gap-4 p-4 ${menuColor}`}
        >
          {list}
        </ul>
      </div>
    </div>
  );
};

export default Burger;
