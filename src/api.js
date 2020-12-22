import db from './state/firebase'

export const addCard = (cardName = 'card') => {
  const card = db.collection('cards').doc(cardName)
  card.set({})
  addProperty('Width', 'width', '9cm')
  addProperty('Height', 'height', '9cm')
  addProperty('Background Color', 'backgroundColor', 'black')
}

export const addProperty = (verbose, slug, value) => {
  db.collection('cards').doc('card').collection('properties').doc(slug).set(
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

export const addElement = (text) => {
  db.collection('cards').doc('card').collection('elements').doc().set(
    {
      text: text
    }
  )
}
