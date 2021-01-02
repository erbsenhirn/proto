import db from './state/firebase'

export const addCard = (cardName = 'card') => {
  db.collection('cards').doc(cardName).set({
    name: 'Cardname',
    width: '9cm',
    height: '9cm',
    backgroundColor: 'lightgreen'
  })
}

export const updateProperty = (slug, value) => {
  db.collection('cards').doc('card').update(
    {
      [slug]: value
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

export const updateElement = (elementId, slug, value) => {
  db.collection('cards').doc('card').collection('elements').doc(elementId).update(
    {
      [slug]: value
    }
  )
}
