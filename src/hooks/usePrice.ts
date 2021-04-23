import axios from 'axios'
import { useState, useEffect } from 'react'

export const useFinixPriceApi = (): number => {
  const [currentPrice, setCurrentPrice] = useState(0)
  useEffect(() => {
    axios.get('https://api.definix.com/v1.0/price?symbol=FINIXUSD').then(response => {
      const data = response.data || {}
      setCurrentPrice(data.price || 0)
    })
  }, [])
  return currentPrice || 0
}
export const useSixPriceApi = (): number => {
  const [currentPrice, setCurrentPrice] = useState(0)
  useEffect(() => {
    axios.get('https://api.definix.com/v1.0/price?symbol=SIXUSD').then(response => {
      const data = response.data || {}
      setCurrentPrice(data.price || 0)
    })
  }, [])
  return currentPrice || 0
}
export const useBnbPriceApi = (): number => {
  const [currentPrice, setCurrentPrice] = useState(0)
  useEffect(() => {
    axios.get('https://api.definix.com/v1.0/price?symbol=BNBUSD').then(response => {
      const data = response.data || {}
      setCurrentPrice(data.price || 0)
    })
  }, [])
  return currentPrice || 0
}
