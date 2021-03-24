import BigNumber from 'bignumber.js'
import { useState, useEffect } from 'react'
import { useActiveWeb3React } from './index'
import multicall from '../utils/multicall'
import {
  multicallAdress,
  SIX_BUSD_LP,
  FINIX_BUSD_LP,
  SIX_ADDRESS,
  BUSD_ADDRESS,
  FINIX_ADDRESS,
  MASTERCHEF_ADDRESS
} from '../constants'
import erc20 from '../constants/abis/erc20.json'

export function useSixPrice(): number {
  const [currentPrice, setCurrentPrice] = useState(0)
  const { chainId } = useActiveWeb3React()
  useEffect(() => {
    if (chainId) {
      const multicallContractAddress = multicallAdress[chainId]
      const busdAddressContract = BUSD_ADDRESS[chainId]
      const sixAddressContract = SIX_ADDRESS[chainId]
      const masterChefAddressContract = MASTERCHEF_ADDRESS[chainId]
      const lpAdress = SIX_BUSD_LP[chainId]
      const calls = [
        {
          address: busdAddressContract,
          name: 'balanceOf',
          params: [lpAdress]
        },
        {
          address: sixAddressContract,
          name: 'balanceOf',
          params: [lpAdress]
        },
        {
          address: lpAdress,
          name: 'balanceOf',
          params: [masterChefAddressContract]
        },
        {
          address: lpAdress,
          name: 'totalSupply'
        },
        {
          address: busdAddressContract,
          name: 'decimals'
        },
        {
          address: sixAddressContract,
          name: 'decimals'
        }
      ]

      multicall(multicallContractAddress, erc20, calls).then(response => {
        const [
          tokenBalanceLP,
          quoteTokenBlanceLP,
          lpTokenBalanceMC,
          lpTotalSupply,
          tokenDecimals,
          quoteTokenDecimals
        ] = response
        // Ratio in % a LP tokens that are in staking, vs the total number in circulation
        const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))
        // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
        const tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
        const quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
          .div(new BigNumber(10).pow(quoteTokenDecimals))
          .times(lpTokenRatio)
        setCurrentPrice(parseFloat(quoteTokenAmount.div(tokenAmount).toJSON()) || 0)
      })
    }
  }, [chainId])
  return currentPrice
}

export default function useFinixPrice(): number {
  const [currentPrice, setCurrentPrice] = useState(0)
  const { chainId } = useActiveWeb3React()
  const sixPrice = useSixPrice()
  useEffect(() => {
    if (chainId) {
      const multicallContractAddress = multicallAdress[chainId]
      const busdAddressContract = BUSD_ADDRESS[chainId]
      const finixAddressContract = FINIX_ADDRESS[chainId]
      const masterChefAddressContract = MASTERCHEF_ADDRESS[chainId]
      const lpAdress = FINIX_BUSD_LP[chainId]
      const calls = [
        {
          address: busdAddressContract,
          name: 'balanceOf',
          params: [lpAdress]
        },
        {
          address: finixAddressContract,
          name: 'balanceOf',
          params: [lpAdress]
        },
        {
          address: lpAdress,
          name: 'balanceOf',
          params: [masterChefAddressContract]
        },
        {
          address: lpAdress,
          name: 'totalSupply'
        },
        {
          address: busdAddressContract,
          name: 'decimals'
        },
        {
          address: finixAddressContract,
          name: 'decimals'
        }
      ]

      multicall(multicallContractAddress, erc20, calls).then(response => {
        const [
          tokenBalanceLP,
          quoteTokenBlanceLP,
          lpTokenBalanceMC,
          lpTotalSupply,
          tokenDecimals,
          quoteTokenDecimals
        ] = response
        // Ratio in % a LP tokens that are in staking, vs the total number in circulation
        const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))
        // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
        const tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
        console.log('busd balance', tokenAmount.toNumber())
        console.log('busd balance', tokenAmount.toNumber())
        console.log('busd balance', tokenAmount.toNumber())
        console.log('busd balance', tokenAmount.toNumber())
        console.log('busd balance', tokenAmount.toNumber())
        const quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
          .div(new BigNumber(10).pow(quoteTokenDecimals))
          .times(lpTokenRatio)
        console.log('finix balance', quoteTokenAmount.toNumber())
        console.log('finix balance', quoteTokenAmount.toNumber())
        console.log('finix balance', quoteTokenAmount.toNumber())
        console.log('finix balance', quoteTokenAmount.toNumber())
        console.log('finix balance', quoteTokenAmount.toNumber())
        console.log('finix balance', quoteTokenAmount.toNumber())
        setCurrentPrice(sixPrice * parseFloat(quoteTokenAmount.div(tokenAmount).toJSON()) || 0)
      })
    }
  }, [chainId, sixPrice])
  return currentPrice
}
