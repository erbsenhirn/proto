import React from 'react'
import { Button, Box } from '@material-ui/core'
import { Folder, TextFields, Image } from '@material-ui/icons'
import { v4 as uuidv4 } from 'uuid'
import { storage } from '../state/firebase'

import { addTextElement, addImageElement } from '../api'

const ToolBar = () => {
  const hiddenFileInput = React.useRef(null)
  const handleUploadClick = event => {
    hiddenFileInput.current.click()
  }
  const handleUpload = event => {
    const file = event.target.files[0]

    const storageRef = storage.ref()
    const uuid = uuidv4()
    const imageRef = storageRef.child('images/' + uuid)

    imageRef.put(file).then(function (snapshot) {
      addImageElement(uuid)
    })
  }

  return (
    <Box>
      <Button
        onClick={ () => addTextElement('Text') }
        variant='outlined'
        color='primary'
        startIcon={<TextFields />}
      >
        Add Text
      </Button>
      <Button
        onClick={ handleUploadClick }
        variant='outlined'
        color='primary'
        startIcon={<Image />}
        type='file'
      >
        Add Image
      </Button>
      <Button
        variant='outlined'
        color='primary'
        startIcon={<Folder />}
        disabled
      >
        Add Container
      </Button>
      <input
        type='file'
        ref={hiddenFileInput}
        onChange={handleUpload}
        style={{ display: 'none' }}
        accept='image/*'
      />
    </Box>
  )
}

export default ToolBar
