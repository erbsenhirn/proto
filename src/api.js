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
      text: text,
      fontSize: '1cm',
      color: 'black',
      backgroundColor: 'white',
      border: '',
      borderRadius: '0',
      width: 'auto',
      height: 'auto',
      left: 'auto',
      top: 'auto',
      margin: '0',
      padding: '0'
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
