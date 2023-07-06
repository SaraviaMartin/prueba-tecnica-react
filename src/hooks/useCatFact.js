import { useState, useEffect } from "react"
import { getRandomFact } from "../services/facts"

export function useCatFact  () {
    const [fact, setFact] = useState()
  
    const refreshFact = () => {
      getRandomFact().then(newFact => setFact(newFact))
    }
    //efecto para recuperar la frase al renderizar la pagina 
    useEffect(refreshFact, [])
    return {fact, refreshFact}
  }