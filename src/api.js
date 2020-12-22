import db from './state/firebase'

export const addCard = (cardName = 'card') => {
  const card = db.collection('cards').doc(cardName)
  card.set({})
  addPropertyToCard(card, 'Width', 'width', '9cm')
  addPropertyToCard(card, 'Height', 'height', '9cm')
  addPropertyToCard(card, 'Background Color', 'backgroundColor', 'black')

  return card
}

export const addPropertyToCard = (card, verbose, slug, value) => {
  card.collection('properties').doc(slug).set(
    {
      verbose: verbose,
      slug: slug,
      value: value
    }
  )
}

export const updateProperty = (slug, value) => {
  db.collection('cards').doc('card').collection('properties').doc(slug).update(
    {
      value: value
    }
  )
}
