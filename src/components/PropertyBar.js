import React from 'react'
import { Box } from '@material-ui/core'
import { useSelector } from 'react-redux'

import Property from '../components/Property'

const PropertyBar = (props) => {
  const selectionId = useSelector((state) => state.selectionId)
  const selectionType = useSelector((state) => state.selectionType)
  const card = useSelector((state) => state.card)
  const elements = useSelector((state) => state.elements)

  switch (selectionType) {
    case 'card':
      return (
        <Box>
          <Property key='Card Name' verbose='Name' slug='name' value={card.name} />
          <Property key='Card Width' verbose='Width' slug='width' value={card.width} />
          <Property key='Card Height' verbose='Height' slug='height' value={card.height} />
          <Property key='Card Background Color' verbose='Background Color' slug='backgroundColor' value={card.backgroundColor} />
        </Box>
      )
    case 'text':
      return (
        <Box>
          <Property key={ selectionId + ' Text' } verbose='Text' slug='text' value={elements[selectionId].text} />
          <Property key={ selectionId + ' Text Size' } verbose='Text Size' slug='fontSize' value={elements[selectionId].fontSize} />
          <Property key={ selectionId + ' Text Align' } verbose='Text Align' slug='textAlign' value={elements[selectionId].textAlign} />
          <Property key={ selectionId + ' Text Color' } verbose='Text Color' slug='color' value={elements[selectionId].color} />
          <Property key={ selectionId + ' Background Color' } verbose='Background Color' slug='backgroundColor' value={elements[selectionId].backgroundColor} />
          <Property key={ selectionId + ' Border' } verbose='Border' slug='border' value={elements[selectionId].border} />
          <Property key={ selectionId + ' Border Radius' } verbose='Border Radius' slug='borderRadius' value={elements[selectionId].borderRadius} />
          <Property key={ selectionId + ' Width' } verbose='Width' slug='width' value={elements[selectionId].width} />
          <Property key={ selectionId + ' Height' } verbose='Height' slug='height' value={elements[selectionId].height} />
          <Property key={ selectionId + ' X' } verbose='X' slug='left' value={elements[selectionId].left} />
          <Property key={ selectionId + ' Y' } verbose='Y' slug='top' value={elements[selectionId].top} />
          <Property key={ selectionId + ' Margin' } verbose='Margin' slug='margin' value={elements[selectionId].margin} />
          <Property key={ selectionId + ' Padding' } verbose='Padding' slug='padding' value={elements[selectionId].padding} />
        </Box>
      )
    case 'image':
      return (
        <Box>
          <Property key={ selectionId + ' Text' } verbose='Name' slug='text' value={elements[selectionId].text} />
          <Property key={ selectionId + ' Background Color' } verbose='Background Color' slug='backgroundColor' value={elements[selectionId].backgroundColor} />
          <Property key={ selectionId + ' Border' } verbose='Border' slug='border' value={elements[selectionId].border} />
          <Property key={ selectionId + ' Border Radius' } verbose='Border Radius' slug='borderRadius' value={elements[selectionId].borderRadius} />
          <Property key={ selectionId + ' Width' } verbose='Width' slug='width' value={elements[selectionId].width} />
          <Property key={ selectionId + ' Height' } verbose='Height' slug='height' value={elements[selectionId].height} />
          <Property key={ selectionId + ' X' } verbose='X' slug='left' value={elements[selectionId].left} />
          <Property key={ selectionId + ' Y' } verbose='Y' slug='top' value={elements[selectionId].top} />
          <Property key={ selectionId + ' Margin' } verbose='Margin' slug='margin' value={elements[selectionId].margin} />
          <Property key={ selectionId + ' Padding' } verbose='Padding' slug='padding' value={elements[selectionId].padding} />
        </Box>
      )
  }
}

export default PropertyBar
