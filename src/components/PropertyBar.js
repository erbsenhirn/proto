import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { Box, CircularProgress } from '@material-ui/core'

import Property from '../components/Property'

const PropertyBar = () => {
  useFirestoreConnect([
    { collection: 'Cards', queryParams: ['limitToFirst'] }
  ])
  const cards = useSelector((state) => state.firestore.ordered.Cards)
  console.log(cards)
  if (!isLoaded(cards) || isEmpty(cards)) {
    return <CircularProgress />
  }

  return (
    <Box>
      <Property cardId={cards[0].id} name='width' label='Width' defaultValue={ cards[0].width } />
      <Property cardId={cards[0].id} name='height'label='Height' defaultValue={ cards[0].height } />
      <Property cardId={cards[0].id} name='backgroundColor' label='Background Color' defaultValue={ cards[0].backgroundColor } />
    </Box>
  )
}

export default PropertyBar
