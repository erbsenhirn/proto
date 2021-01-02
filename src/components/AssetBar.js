import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { CropPortrait, TextFields } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux'

import { changeSelection } from '../state/store'

const AssetBar = () => {
  const dispatch = useDispatch()
  const selection = useSelector((state) => state.selection)
  const card = useSelector((state) => state.card)
  const elements = useSelector((state) => state.elements)

  return (
    <List>
      <ListItem
        button
        selected={ selection === 'card'}
        onClick={() => dispatch(changeSelection('card'))}
      >
        <ListItemIcon>
          <CropPortrait />
        </ListItemIcon>
        <ListItemText primary={ card.name } />
      </ListItem>
      { Object.entries(elements).map(([id, element]) => (
        <ListItem
        key={ id }
        button
        selected={ selection === id}
        onClick={() => dispatch(changeSelection(id))}
        >
          <ListItemIcon>
            <TextFields />
          </ListItemIcon>
          <ListItemText primary={ element.text } />
        </ListItem>
      ))}
    </List>
  )
}

export default AssetBar
