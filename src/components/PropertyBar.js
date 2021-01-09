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
        <Property key='Card Name' verbose='Name' slug='name' value={card.name} />
        <Property key='Card Width' verbose='Width' slug='width' value={card.width} />
        <Property key='Card Height' verbose='Height' slug='height' value={card.height} />
        <Property key='Card Background Color' verbose='Background Color' slug='backgroundColor' value={card.backgroundColor} />
      </Box>
    )
  } else {
    return (
      <Box>
        <Property key={ selection + ' Text' } verbose='Text' slug='text' value={elements[selection].text} />
        <Property key={ selection + ' Text Size' } verbose='Text Size' slug='fontSize' value={elements[selection].fontSize} />
        <Property key={ selection + ' Text Align' } verbose='Text Align' slug='textAlign' value={elements[selection].textAlign} />
        <Property key={ selection + ' Text Color' } verbose='Text Color' slug='color' value={elements[selection].color} />
        <Property key={ selection + ' Background Color' } verbose='Background Color' slug='backgroundColor' value={elements[selection].backgroundColor} />
        <Property key={ selection + ' Border' } verbose='Border' slug='border' value={elements[selection].border} />
        <Property key={ selection + ' Border Radius' } verbose='Border Radius' slug='borderRadius' value={elements[selection].borderRadius} />
        <Property key={ selection + ' Width' } verbose='Width' slug='width' value={elements[selection].width} />
        <Property key={ selection + ' Height' } verbose='Height' slug='height' value={elements[selection].height} />
        <Property key={ selection + ' X' } verbose='X' slug='left' value={elements[selection].left} />
        <Property key={ selection + ' Y' } verbose='Y' slug='top' value={elements[selection].top} />
        <Property key={ selection + ' Margin' } verbose='Margin' slug='margin' value={elements[selection].margin} />
        <Property key={ selection + ' Padding' } verbose='Padding' slug='padding' value={elements[selection].padding} />
      </Box>
    )
  }
}

export default PropertyBar
