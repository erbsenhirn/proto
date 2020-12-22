import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

import { updateProperty } from '../api'

const Property = (props) => {
  function onChange (value) {
    updateProperty(props.property.slug, value)
  }

  return (
    <TextField
      variant='filled'
      label={ props.property.verbose }
      defaultValue={ props.property.value }
      onChange = { (event) => onChange(event.target.value) }
    />
  )
}

Property.propTypes = {
  property: PropTypes.object
}

export default Property
