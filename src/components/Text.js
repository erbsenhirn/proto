import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  root: (properties) => ({
    fontSize: properties.fontSize,
    textAlign: properties.textAlign,
    color: properties.color,
    backgroundColor: properties.backgroundColor,
    border: properties.border,
    borderRadius: properties.borderRadius,
    width: properties.width,
    height: properties.height,
    left: properties.left,
    top: properties.top,
    margin: properties.margin,
    padding: properties.padding,

    display: 'inline-block',
    position: 'absolute',
    boxSizing: 'border-box'
  })
})

const Text = (props) => {
  const classes = useStyles(props.data)

  return (
    <Box className={ classes.root }>
      { props.value }
    </Box>
  )
}

Text.propTypes = {
  value: PropTypes.string,
  data: PropTypes.object
}

export default Text
