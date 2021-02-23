/**
 *
 * Footer
 *
 */

import React from 'react'
import styled from 'styled-components'
import { FOOTER_HEIGHT } from 'uikit-dev/widgets/Menu/config'
import colorStrokeLong from '../../images/Color-stroke-long.png'
import definixBlackLogo from '../../images/Definix-advance-crypto-assets.png'
import facebookNormal from '../../images/Footer-Icon/Facebook-Normal.png'
import githubNormal from '../../images/Footer-Icon/Github-Normal.png'
import kakaoNormal from '../../images/Footer-Icon/Kakao-Normal.png'
import poweredbySIX from '../../images/Footer-Icon/Powered-by-SIX.png'
import redditNormal from '../../images/Footer-Icon/Reddit-Normal.png'
import telegramNormal from '../../images/Footer-Icon/Telegram-Normal.png'
import twitterNormal from '../../images/Footer-Icon/Twitter-Normal.png'

function Footer() {
  const FooterStyled = styled.footer`
    height: ${FOOTER_HEIGHT}px;
    position: relative;
    padding: 22px 0 16px 0;

    .color-stroke {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%);
      height: 6px;
      width: 100%;
    }

    .logo {
      height: 28px;
    }

    .six-logo {
      width: 200px;
    }

    .social {
      display: flex;

      a {
        max-width: 4rem;
        cursor: pointer;
      }
    }
  `

  const ContainerStyled = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  `

  return (
    <FooterStyled>
      <img src={colorStrokeLong} alt="" className="color-stroke" />
      <ContainerStyled>
        <div className="flex align-center flex-wrap justify-center">
          <img src={definixBlackLogo} alt="" className="logo mr-4" />
          <p className="mt-2 mr-4">Advance your crypto assets</p>
          <a href="https://coinmarketcap.com/currencies/six/markets/" target="_blank" rel="noreferrer">
            <img src={poweredbySIX} alt="" className="six-logo" />
          </a>
        </div>

        <div className="social">
          <a href="https://www.facebook.com/thesixnetwork" target="_blank" rel="noreferrer">
            <img src={facebookNormal} alt="" />
          </a>
          <a href="https://twitter.com/DefinixOfficial" target="_blank" rel="noreferrer">
            <img src={twitterNormal} alt="" />
          </a>
          <a href="https://t.me/SIXNetwork" target="_blank" rel="noreferrer">
            <img src={telegramNormal} alt="" />
          </a>
          <a href="https://open.kakao.com/o/gQNRT5K" target="_blank" rel="noreferrer">
            <img src={kakaoNormal} alt="" />
          </a>
          <a href="https://github.com/thesixnetwork" target="_blank" rel="noreferrer">
            <img src={githubNormal} alt="" />
          </a>
          <a href="https://www.reddit.com/r/sixnetwork/" target="_blank" rel="noreferrer">
            <img src={redditNormal} alt="" />
          </a>
        </div>
      </ContainerStyled>
    </FooterStyled>
  )
}

Footer.propTypes = {}

export default Footer
