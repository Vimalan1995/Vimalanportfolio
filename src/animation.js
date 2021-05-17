export const pageAnimation = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        // when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
    exit: {
      opacity: 0,
  
      transition: {
        duration: 0.5,
      },
    },
  };

  export const fade = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 2,
      },
    },
  };

  export const titleAnim = {
    hidden: {
      y: 200,
    },
    show: {
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  export const scrollReveal = {
    hidden: {
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  export const popup = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
  
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.75,
      },
      exit: {
        opacity: 0,
        transition: { duration: 0.75 },
      },
    },
  };
  