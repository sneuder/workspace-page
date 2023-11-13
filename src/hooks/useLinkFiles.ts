import { useMemo } from "react";

const useLinkFiles = () => {
  const donwloadFile = useMemo(() => {
    return {
      windows:
        "https://drive.usercontent.google.com/uc?id=1QEd0oDUwUVEWYR5jgWPobGynnfX7RM0t&authuser=0&export=download",
      linux:
        "https://drive.usercontent.google.com/uc?id=1JAjyW47ThnS7M9PR1r-6fvGtLBK7Gn2N&authuser=0&export=download",
    };
  }, []);

  return donwloadFile;
};

export default useLinkFiles;
