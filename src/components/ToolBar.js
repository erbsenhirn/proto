import React from 'react'
import { Button, Box } from '@material-ui/core'
import { Folder, TextFields, Image } from '@material-ui/icons'

const ToolBar = () => {
  return (
    <Box>
      <Button variant="outlined" color="primary" startIcon={<Folder />} >
        Add Container
      </Button>
      <Button variant="outlined" color="primary" startIcon={<TextFields />} >
        Add Text
      </Button>
      <Button variant="outlined" color="primary" startIcon={<Image />} >
        Add Image
      </Button>
    </Box>
  )
}

export default ToolBar
