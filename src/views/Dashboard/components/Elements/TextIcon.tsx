import React from 'react'
import styled from 'styled-components'
interface TextIconProps{
    src?:string,
    text?:string,
    ImgSize?:number
}
const TextIcon: React.FC<TextIconProps> = ({children, src, text, ImgSize}) => {
  return (
    <Wrap size={ImgSize} >
      <span><img src={src} alt="" /></span>
      <span>{text}</span>
    </Wrap>
  )
}
interface WrapProps{
  size?:number;
}
const Wrap=styled.section<WrapProps>`
  display: flex;
  align-items: center;
  column-gap: 2px;
  font-weight:600;
  color: white;
font-size:16px;
line-height:21.82px;
& span:first-child{
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props)=> props.size}px;
  height:${(props)=> props.size}px;
}
& span img{
  width: 100%;
  height: 100%;
}
`
export default TextIcon;
