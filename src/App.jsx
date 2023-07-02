import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

//useEffect(()=>{}, [])

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      const {fact} = data
      setFact(fact)

      const firstWord = fact.split(' ', 3)

      fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
          const {url} = response
          setImageUrl(`https://cataas.com${url}`)
        }) 
    })
  }, [])


  return (
    <main>
      <h1> App de gatos </h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three 
      word for ${fact} `} />}
    </main>  
  ) }