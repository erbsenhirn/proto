import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { CropPortrait, TextFields, Image } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { changeSelection } from '../state/store'

const AssetBarItem = (props) => {
  const dispatch = useDispatch()

  let icon = null
  switch (props.type) {
    case 'card':
      icon = <CropPortrait />
      break
    case 'text':
      icon = <TextFields />
      break
    case 'image':
      icon = <Image />
      break
    default:
      icon = null
  }

  return (
    <ListItem
      button
      selected={ props.selected }
      onClick={() => dispatch(changeSelection({
        selectionId: props.id,
        selectionType: props.type
      }))}
    >
      <ListItemIcon>
        { icon }
      </ListItemIcon>
      <ListItemText primary={ props.text } />
    </ListItem>
  )
}

AssetBarItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  selected: PropTypes.bool
}

export default AssetBarItem
