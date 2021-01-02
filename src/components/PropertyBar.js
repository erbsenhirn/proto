import React from 'react'
import { Box } from '@material-ui/core'
import { useSelector } from 'react-redux'

import Property from '../components/Property'

const PropertyBar = (props) => {
  const selection = useSelector((state) => state.selection)
  const card = useSelector((state) => state.card)
  const elements = useSelector((state) => state.elements)

  if (selection === 'card') {
    return (
      <Box>
        <Property verbose='Name' slug='name' value={card.name} />
        <Property verbose='Width' slug='width' value={card.width} />
        <Property verbose='Height' slug='height' value={card.height} />
        <Property verbose='Background Color' slug='backgroundColor' value={card.backgroundColor} />
      </Box>
    )
  } else {
    for (const element of elements) {
      if (element.id === selection) {
        return (
          <Box>
            <Property verbose='Text' slug='text' value={element.text} />
          </Box>
        )
      }
    }
  }
}

export default PropertyBar
