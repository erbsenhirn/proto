import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { CropPortrait, TextFields } from '@material-ui/icons'
import { FirestoreCollection } from 'react-firestore'
import { useSelector, useDispatch } from 'react-redux'

import { changeSelection } from '../state/store'

const AssetBar = () => {
  const dispatch = useDispatch()
  const selection = useSelector((state) => state.selection)

  return (
    <List>
      <ListItem
        button
        selected={ selection === 'cards/card'}
        onClick={() => dispatch(changeSelection('cards/card'))}
      >
        <ListItemIcon>
          <CropPortrait />
        </ListItemIcon>
        <ListItemText primary='Card' />
      </ListItem>
      <FirestoreCollection
        path='cards/card/elements'
        render={({ isLoading, data }) => {
          return isLoading
            ? (
                <p>isLoading</p>
              )
            : (
                data.map(element => (
                  <ListItem
                  key={ element.id }
                  button
                  selected={ selection === 'cards/card/elements/' + element.id}
                  onClick={() => dispatch(changeSelection('cards/card/elements/' + element.id))}
                  >
                    <ListItemIcon>
                      <TextFields />
                    </ListItemIcon>
                    <ListItemText primary={ element.text } />
                  </ListItem>
                ))
              )
        }}
      />
    </List>
  )
}

export default AssetBar
