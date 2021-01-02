import React from 'react'
import PropTypes from 'prop-types'
import { Box, TextField } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { updateProperty, updateElement } from '../api'

const Property = (props) => {
  const selection = useSelector((state) => state.selection)

  function onChange (value) {
    if (selection === 'card') {
      updateProperty(props.slug, value)
    } else {
      updateElement(selection, props.slug, value)
    }
  }

  return (
    <Box>
      <TextField
        variant='filled'
        label={ props.verbose }
        value={ props.value }
        onChange = { (event) => onChange(event.target.value) }
      />
    </Box>
  )
}

Property.propTypes = {
  verbose: PropTypes.string,
  slug: PropTypes.string,
  value: PropTypes.string
}

export default Property
