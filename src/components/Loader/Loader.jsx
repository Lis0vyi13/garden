import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className="flex w-full justify-center items-center h-[300px]">
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
