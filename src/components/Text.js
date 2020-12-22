import React from 'react'
import PropTypes from 'prop-types'

const Text = (props) => {
  return (
    <p>{ props.value }</p>
  )
}

Text.propTypes = {
  value: PropTypes.string
}

export default Text
