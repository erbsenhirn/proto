import React from 'react'
import { List } from '@material-ui/core'
import { useSelector } from 'react-redux'

import AssetBarItem from './AssetBarItem'

const AssetBar = () => {
  const selectionId = useSelector((state) => state.selectionId)
  const selectionType = useSelector((state) => state.selectionType)
  const card = useSelector((state) => state.card)
  const elements = useSelector((state) => state.elements)

  return (
    <List>
      <AssetBarItem
        key = 'card'
        id = 'card'
        type = 'card'
        text = { card.name }
        selected = { selectionId === 'card' && selectionType === 'card' }
      />
      { Object.entries(elements).map(([id, element]) => (
        <AssetBarItem
          key={ id }
          id = { id }
          type = { element.type }
          text = { element.text }
          selected = { selectionId === id && selectionType === element.text }
        />
      ))}
    </List>
  )
}

export default AssetBar
