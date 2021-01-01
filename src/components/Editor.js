import React from 'react'
import { Box } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import db from '../state/firebase'
import { updateCard, updateElements } from '../state/store'

import ToolBar from './ToolBar'
import AssetBar from './AssetBar'
import CardViewer from './CardViewer'
import PropertyBar from './PropertyBar'

const Editor = () => {
  const dispatch = useDispatch()

  db.collection('cards').doc('card').onSnapshot(
    (doc) => dispatch(updateCard(doc.data()))
  )

  db.collection('cards').doc('card').collection('elements')
    .onSnapshot(function (snapshot) {
      const elements = []
      snapshot.forEach(function (doc) {
        elements.push({ id: doc.id, ...doc.data() })
      })
      dispatch(updateElements(elements))
    })

  return (
    <Box>
      <ToolBar />
      <Box display='flex' >
        <AssetBar />
        <Box flexGrow={1}>
          <CardViewer />
        </Box>
        <PropertyBar />
      </Box>
    </Box>
  )
}

export default Editor
