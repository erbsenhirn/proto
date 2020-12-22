import React from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import Text from '../components/Text'

const useStyles = makeStyles({
  root: (properties) => (
    Object.assign({}, ...properties.map((property) => ({ [property.slug]: property.value })))
  )
})

const Card = (props) => {
  const classes = useStyles(props.properties)

  return (
    <Box className={ classes.root }>
      <Text value= { 'props.card.elements[0].Text' } />
    </Box>
  )
}

Card.propTypes = {
  properties: PropTypes.object
}

export default Card
