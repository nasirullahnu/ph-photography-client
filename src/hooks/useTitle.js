import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=> {
        document.title = `${title} - ph-photography`;
    },[title])   
}

export default useTitle;