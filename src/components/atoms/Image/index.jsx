import React, { Fragment } from 'react'

const Image = ({ src, alt, className }) => {
  return (
    <Fragment>
      <img src={src} alt={alt} className={className} />
    </Fragment>
  )
}

export default Image
