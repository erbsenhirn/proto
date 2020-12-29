import React from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { FirestoreCollection } from 'react-firestore'

import Text from '../components/Text'

const useStyles = makeStyles({
  root: (properties) => ({
    width: properties.width,
    height: properties.height,
    backgroundColor: properties.backgroundColor
  })
})

const Card = (props) => {
  const classes = useStyles(props.card)

  return (
    <Box className={ classes.root }>
      <FirestoreCollection
        path='cards/card/elements'
        render={({ isLoading, data }) => {
          return isLoading
            ? (
                <p>isLoading</p>
              )
            : (
                data.map(element => (
                  <Text key={ element.id } value={ element.text }/>
                ))
              )
        }}
      />
    </Box>
  )
}

Card.propTypes = {
  card: PropTypes.array
}

export default Card
