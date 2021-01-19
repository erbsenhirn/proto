import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'

const useStyles = makeStyles({
  root: (properties) => ({
    backgroundColor: properties.backgroundColor,
    border: properties.border,
    borderRadius: properties.borderRadius,
    width: properties.width,
    height: properties.height,
    left: properties.left,
    top: properties.top,
    margin: properties.margin,
    padding: properties.padding,

    display: 'inline-block',
    position: 'absolute',
    boxSizing: 'border-box'
  })
})

const Image = (props) => {
  const [imageUrl, setImageUrl] = useState(null)

  const classes = useStyles(props.data)

  const storage = firebase.storage()
  const pathReference = storage.ref('images/' + props.data.image)

  pathReference.getDownloadURL().then(function (url) {
    setImageUrl(url)
  })

  return (
    <Box className={ classes.root }>
      <img src={ imageUrl } />
    </Box>
  )
}

Image.propTypes = {
  data: PropTypes.object
}

export default Image
