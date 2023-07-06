import { useState, useEffect } from "react"
const CAT_PREFIX_IMG_URL = 'https://cataas.com'

export function useCatImage({fact}) {
    const [imageUrl, setImageUrl] = useState()
    //para recuperar la imagen cada vez que tenemos una frase nueva
    useEffect(() => {
      if(!fact) return
  
      const firstWord = fact.split(' ', 3)
  
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const {url} = response
            setImageUrl(url)
          }) 
    }, [fact])
  
    return {imageUrl: `${CAT_PREFIX_IMG_URL}${imageUrl}`}
  }