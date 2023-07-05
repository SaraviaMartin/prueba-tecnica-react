import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from "./services/facts"

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMG_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [factError, setFactError] = useState()

//useEffect(()=>{}, [])
  

//efecto para recuperar la frase al renderizar la pagina 
  useEffect(()=> {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

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

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }


  return (
    <main>
      <h1> App de gatos </h1>

        <button onClick={handleClick}>Get new fact</button>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${CAT_PREFIX_IMG_URL}${imageUrl}`} alt={`Image extracted using the first three 
        word for ${fact} `} />} 
    </main>  
  ) }