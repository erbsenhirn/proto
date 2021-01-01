import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Card from './Card'

const useStyles = makeStyles({
  cardViewer: {
    position: 'relative',
    overflowX: 'clip'
  },
  cardWrapper: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  }
})

const CardViewer = (props) => {
  const classes = useStyles()

  return (
    <Box className={ classes.cardViewer }>
      <Box className={ classes.cardWrapper }>
        <Card />
      </Box>
    </Box>
  )
}

export default CardViewer
