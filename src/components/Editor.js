import React from 'react'
import { Box } from '@material-ui/core'

import ToolBar from './ToolBar'
import AssetBar from './AssetBar'
import CardViewer from './CardViewer'
import PropertyBar from './PropertyBar'

const Editor = (props) => {
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
