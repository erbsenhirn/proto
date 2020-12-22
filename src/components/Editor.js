import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ToolBar from './ToolBar'
import AssetBar from './AssetBar'
import CardViewer from './CardViewer'
import PropertyBar from './PropertyBar'

const useStyles = makeStyles({
  toolBar: {
    backgroundColor: 'white'
  },
  assetBar: {
    width: '300px',
    backgroundColor: 'blue',
    display: 'inline-block',
    verticalAlign: 'top'
  },
  cardViewer: {
    width: 'calc(100% - 600px)',
    backgroundColor: 'green',
    display: 'inline-block',
    verticalAlign: 'top'
  },
  propertyBar: {
    width: '300px',
    display: 'inline-block',
    verticalAlign: 'top'
  }
})

const Editor = (props) => {
  const classes = useStyles()

  return (
    <Box>
      <Box className={ classes.toolBar }>
        <ToolBar />
      </Box>
      <Box className={ classes.assetBar }>
        <AssetBar />
      </Box>
      <Box classame={ classes.cardViewer }>
        <CardViewer />
      </Box>
      <Box className={ classes.propertyBar }>
        <PropertyBar />
      </Box>
    </Box>
  )
}

export default Editor
