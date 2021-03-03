import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'
import arrow from '../../../images/arrow-right.png'

const Icon: React.FC<SvgProps> = (props) => {
  return <img src={arrow} alt="" style={{ height: '12px' }} {...props} />
}

export default Icon
