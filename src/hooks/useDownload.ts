import { useState } from "react";

const useDownload = () => {
  const [downloading, setDownloading] = useState(false);

  const downloadFile = async (url: string) => {
    setDownloading(true);

    try {
      const anchor = document.createElement("a");
      anchor.href = url;

      anchor.download = url.split("/").pop() as string;
      anchor.click();

      anchor.remove();
    } catch (error) {
      console.error("Error downloading file:", error);
    } finally {
      setTimeout(() => {
        setDownloading(false);
      }, 2000);
    }
  };

  return { downloadFile, downloading };
};

export default useDownload;
