import React from 'react'
import { Link } from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'

const isHash = str => /^#/.test(str)

export default ({ href, ...props }) =>
  isAbsoluteURL(href) || isHash(href)
    ? <a href={href} {...props} />
    : <Link to={href} {...props} />
