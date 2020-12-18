import React from 'react'
import { values, first } from 'lodash'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: props => ({
    height: props.height,
    width: props.width,
    backgroundColor: props.backgroundColor
  })
})

const Card = () => {
  useFirestoreConnect([
    { collection: 'Cards', queryParams: ['limitToFirst'] }
  ])
  const firstCard = first(values(
    useSelector((state) => state.firestore.data.Cards)
  ))
  const classes = useStyles(firstCard)

  if (!isLoaded(firstCard)) {
    return <CircularProgress />
  }
  if (isEmpty(firstCard)) {
    return <CircularProgress />
  }

  return <div className={ classes.root }></div>
}

export default Card
