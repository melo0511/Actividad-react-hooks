import React from 'react'

import {Link} from 'react-router-dom'


export const Anchor = ({route,textAnchor}) => {
  return (
    <Link className='anclas' to={route}>{textAnchor}</Link>
  )
}
