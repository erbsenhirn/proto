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
    return (
      <Box>
        <Property verbose='Text' slug='text' value={elements[selection].text} />
        <Property verbose='Text Size' slug='fontSize' value={elements[selection].fontSize} />
        <Property verbose='Text Align' slug='textAlign' value={elements[selection].textAlign} />
        <Property verbose='Text Color' slug='color' value={elements[selection].color} />
        <Property verbose='Background Color' slug='backgroundColor' value={elements[selection].backgroundColor} />
        <Property verbose='Border' slug='border' value={elements[selection].border} />
        <Property verbose='Border Radius' slug='borderRadius' value={elements[selection].borderRadius} />
        <Property verbose='Width' slug='width' value={elements[selection].width} />
        <Property verbose='Height' slug='height' value={elements[selection].height} />
        <Property verbose='X' slug='left' value={elements[selection].left} />
        <Property verbose='Y' slug='top' value={elements[selection].top} />
        <Property verbose='Margin' slug='margin' value={elements[selection].margin} />
        <Property verbose='Padding' slug='padding' value={elements[selection].padding} />
      </Box>
    )
  }
}

export default PropertyBar
