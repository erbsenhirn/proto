import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { CropPortrait, TextFields } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux'

import { changeSelection } from '../state/store'

const AssetBar = () => {
  const dispatch = useDispatch()
  const selection = useSelector((state) => state.selection)
  const elements = useSelector((state) => state.elements)

  return (
    <List>
      <ListItem
        button
        selected={ selection === 'card/card'}
        onClick={() => dispatch(changeSelection('card/card'))}
      >
        <ListItemIcon>
          <CropPortrait />
        </ListItemIcon>
        <ListItemText primary='Card' />
      </ListItem>
      { elements.map(element => (
        <ListItem
        key={ element.id }
        button
        selected={ selection === 'element/' + element.id}
        onClick={() => dispatch(changeSelection('element/' + element.id))}
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
