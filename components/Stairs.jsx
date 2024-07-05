import { delay, motion } from "framer-motion";
const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: {
    top: ["100%", "0%"],
  },
};
const reverseIndex = (index) => {
  const totalSteps = 7;
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.05,
            }}
            className="h-full w-full dark:bg-white bg-black relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
