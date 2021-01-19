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

export const addTextElement = (text) => {
  db.collection('cards').doc('card').collection('elements').doc().set(
    {
      type: 'text',
      text: text,
      fontSize: '1cm',
      textAlign: 'left',
      color: 'black',
      backgroundColor: 'white',
      border: 'none',
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

export const addImageElement = (fileName) => {
  db.collection('cards').doc('card').collection('elements').doc().set(
    {
      type: 'image',
      text: '',
      image: fileName,
      backgroundColor: 'white',
      border: 'none',
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
