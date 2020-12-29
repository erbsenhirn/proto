import React from 'react'
import PropTypes from 'prop-types'
import { Box, TextField } from '@material-ui/core'

import { updateProperty } from '../api'

const Property = (props) => {
  function onChange (value) {
    updateProperty(props.slug, value)
  }

  return (
    <Box>
      <TextField
        variant='filled'
        label={ props.verbose }
        defaultValue={ props.value }
        onChange = { (event) => onChange(event.target.value) }
      />
    </Box>
  )
}

Property.propTypes = {
  verbose: PropTypes.string,
  slug: PropTypes.string,
  value: PropTypes.object
}

export default Property
