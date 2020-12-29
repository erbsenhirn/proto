import React from 'react'
import { Box } from '@material-ui/core'
import { FirestoreDocument } from 'react-firestore'

import Property from '../components/Property'

const PropertyBar = (props) => {
  return (
    <Box>
      <FirestoreDocument
        path='cards/card'
        render={({ isLoading, data }) => {
          return isLoading
            ? (
                <div>isLoading</div>
              )
            : (
                <Box>
                  <Property verbose='Name' slug='name' value={data.name} />
                  <Property verbose='Width' slug='width' value={data.width} />
                  <Property verbose='Height' slug='height' value={data.height} />
                  <Property verbose='Background Color' slug='backgroundColor' value={data.backgroundColor} />
                </Box>
              )
        }}
      />
    </Box>
  )
}

export default PropertyBar
