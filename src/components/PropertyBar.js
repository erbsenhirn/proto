import React from 'react'
import { Box } from '@material-ui/core'
import { useSelector } from 'react-redux'

import Property from '../components/Property'

const PropertyBar = (props) => {
  const card = useSelector((state) => state.card)

  return (
    <Box>
      <Property verbose='Name' slug='name' value={card.name} />
      <Property verbose='Width' slug='width' value={card.width} />
      <Property verbose='Height' slug='height' value={card.height} />
      <Property verbose='Background Color' slug='backgroundColor' value={card.backgroundColor} />
    </Box>
  )
}

export default PropertyBar
