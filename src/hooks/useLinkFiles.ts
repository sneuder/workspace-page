import { useMemo } from "react"

const useLinkFiles = () => {
  const donwloadFile = useMemo(() => {
    return {
      windows: "https://drive.usercontent.google.com/uc?id=1xUJs65GxOIWOdwLdZ-Lp2IhoaLyaltEc&authuser=0&export=download",
      linux: "https://drive.usercontent.google.com/download?id=1IPuWdYxBWCg4O7mnE_1IQwUtrArKnML6&export=download&authuser=0&confirm=t&uuid=9372fe49-5d5b-4d06-9c96-3309de5a127a&at=APZUnTVqMzzbk8MV-EMTi8SJm4J1:1697485209143"
    }
  }, [])

  return donwloadFile
}

export default useLinkFiles
