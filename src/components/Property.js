import React from 'react'
import PropTypes from 'prop-types'
import { Box, TextField } from '@material-ui/core'

import { updateProperty } from '../api'

const Property = (props) => {
  function onChange (value) {
    updateProperty(props.property.slug, value)
  }

  return (
    <Box>
      <TextField
        variant='filled'
        label={ props.property.verbose }
        defaultValue={ props.property.value }
        onChange = { (event) => onChange(event.target.value) }
      />
    </Box>
  )
}

Property.propTypes = {
  property: PropTypes.object
}

export default Property
