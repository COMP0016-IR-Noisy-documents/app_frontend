import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion/dist/es/index";

import "./Load.css";

// By Thatchawin Leelawat


const motionContainer = {
  width: "128px",
  height: "64px",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-around"
} 

const motionChild = {
  display: "block",
  width: "12px",
  height: "12px",
  backgroundColor: "#333333",
  borderRadius: "30px"
}


const motionContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.25
    }
  },
  end: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const motionChildVariants = {
  start: {
    y: "150%"
  },
  end: {
    y: "250%"
  }
};

const motionContainerTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut"
};

function Load() {
  const isLoaded = useSelector(state => state.LoadingReducer);

  return isLoaded ? (
    <div className="load-box">
      <div className="load">
        <motion.div
          style={motionContainer}
          variants={motionContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            style={motionChild}
            variants={motionChildVariants}
            transition={motionContainerTransition}
          />
          <motion.span
            style={motionChild}
            variants={motionChildVariants}
            transition={motionContainerTransition}
          />
          <motion.span
            style={motionChild}
            variants={motionChildVariants}
            transition={motionContainerTransition}
          />
        </motion.div>

      </div>
    </div>
  ) : null;
}

export default Load;

