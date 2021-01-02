import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'

import Text from '../components/Text'

const useStyles = makeStyles({
  root: (properties) => ({
    width: properties.width,
    height: properties.height,
    backgroundColor: properties.backgroundColor
  })
})

const Card = (props) => {
  const card = useSelector((state) => state.card)
  const elements = useSelector((state) => state.elements)
  const classes = useStyles(card)

  return (
    <Box className={ classes.root }>
      { Object.entries(elements).map(([id, element]) => (
        <Text key={ id } value={ element.text } data={ element }/>
      ))}
    </Box>
  )
}

export default Card
