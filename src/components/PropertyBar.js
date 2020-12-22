import React from 'react'
import { Box } from '@material-ui/core'
import { FirestoreCollection } from 'react-firestore'

import Property from '../components/Property'

const PropertyBar = (props) => {
  return (
    <Box>
      <FirestoreCollection
        path='cards/card/properties'
        render={({ isLoading, data }) => {
          return isLoading
            ? (
                <div>isLoading</div>
              )
            : (
                data.map((property) =>
                  <Property key={ property.slug } property={ property } />
                )
              )
        }}
      />
    </Box>
  )
}

export default PropertyBar
