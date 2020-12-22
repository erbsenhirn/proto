import React from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { FirestoreCollection } from 'react-firestore'

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
  properties: PropTypes.array
}

export default Card
