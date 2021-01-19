import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, TextField } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { updateProperty, updateElement } from '../api'

const Property = (props) => {
  const selectionId = useSelector((state) => state.selectionId)
  const selectionType = useSelector((state) => state.selectionId)
  const [value, setValue] = useState(props.value)

  function updateDatabase (value) {
    if (selectionType === 'card') {
      updateProperty(props.slug, value)
    } else {
      updateElement(selectionId, props.slug, value)
    }
  }

  return (
    <Box>
      <TextField
        variant='filled'
        label={ props.verbose }
        value={ value }
        onChange = { (event) => setValue(event.target.value) }
        onKeyDown= { (event) => {
          if (event.key === 'Enter') {
            updateDatabase(value)
          }
        }}
        onBlur = { () => updateDatabase(value) }
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
