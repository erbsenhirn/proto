import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'
import { useFirestore } from 'react-redux-firebase'

const Property = (props) => {
  const firestore = useFirestore()

  function onBlur (value) {
    firestore.collection('Cards').doc(props.cardId).set({
      [props.name]: value
    }, { merge: true })
  }

  return (
    <TextField
      variant='filled'
      label={ props.label }
      defaultValue={ props.defaultValue }
      onBlur = { (event) => onBlur(event.target.value) }
    />
  )
}

Property.propTypes = {
  cardId: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string
}

export default Property
