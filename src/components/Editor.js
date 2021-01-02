import React from 'react'
import { Box } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import db from '../state/firebase'
import { updateCard, updateElement } from '../state/store'

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
      snapshot.docChanges().forEach(function (change) {
        if (change.type === 'added' || change.type === 'modified') {
          dispatch(updateElement({ id: change.doc.id, data: change.doc.data() }))
        }
        if (change.type === 'removed') {
          console.log('Removed city: ', change.doc.data())
        }
      })
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
