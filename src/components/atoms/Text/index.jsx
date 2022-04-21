import React, { Fragment } from 'react'

const Text = ({ type, href, className, onClick, children }) => {
  return (
    <Fragment>
      {(() => {
        switch (type) {
          case 'span':
            return (
              <span className={className} onClick={onClick}>
                {children}
              </span>
            )
          case 'anc':
            return (
              <a href={href} className={className} onClick={onClick}>
                {children}
              </a>
            )
          default:
            return (
              <p className={className} onClick={onClick}>
                {children}
              </p>
            )
        }
      })()}
    </Fragment>
  )
}

export default Text
