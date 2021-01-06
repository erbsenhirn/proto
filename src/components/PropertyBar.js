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
    for (const [id, element] of Object.entries(elements)) {
      if (id === selection) {
        return (
          <Box>
            <Property verbose='Text' slug='text' value={element.text} />
            <Property verbose='Text Size' slug='fontSize' value={element.fontSize} />
            <Property verbose='Text Align' slug='textAlign' value={element.textAlign} />
            <Property verbose='Text Color' slug='color' value={element.color} />
            <Property verbose='Background Color' slug='backgroundColor' value={element.backgroundColor} />
            <Property verbose='Border' slug='border' value={element.border} />
            <Property verbose='Border Radius' slug='borderRadius' value={element.borderRadius} />
            <Property verbose='Width' slug='width' value={element.width} />
            <Property verbose='Height' slug='height' value={element.height} />
            <Property verbose='X' slug='left' value={element.left} />
            <Property verbose='Y' slug='top' value={element.top} />
            <Property verbose='Margin' slug='margin' value={element.margin} />
            <Property verbose='Padding' slug='padding' value={element.padding} />
          </Box>
        )
      }
    }
  }
}

export default PropertyBar
