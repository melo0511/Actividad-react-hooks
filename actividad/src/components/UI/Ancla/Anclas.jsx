import React from 'react'

export const Anclas = ({style,textAncla,reference}) => {
  return (
    <a className={style} href={reference}>{textAncla}</a>
  )
}
