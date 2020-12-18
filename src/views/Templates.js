import React from 'react'
import { GridList, GridListTile, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useSelector } from 'react-redux'
import { toPairs } from 'lodash'
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase'

import Template from '../model/template'
import TemplatePreview from '../components/TemplatePreview'

const Templates = () => {
  const firestore = useFirestore()
  useFirestoreConnect('Templates')
  const allTemplates = useSelector((state) => state.firestore.data.Templates)

  function addTemplate () {
    const newTemplate = new Template()
    return firestore.collection('Templates').add(newTemplate.add())
  }

  function deleteTemplate (templateID) {
    console.log(templateID)
    // firestore.collection('Templates').doc(templateID).delete('1L0XZZEY4ETBqMYiWIwl')
    // return firestore.collection('Templates').doc(templateID).delete()
  }

  /*
  function TemplatePreviews () {
    if (isLoaded(allTemplates) && !isEmpty(allTemplates)) {
      return (
        <Box>
          {toPairs(allTemplates).map((pair) => {
            const key = pair[0]
            const value = pair[1]
            return (
              <GridListTile key={key}>
                <TemplatePreview id={key} name={value.name} />
              </GridListTile>
            )
          })}
        </Box>
      )
    } else {
      return null
    }
  }
  */

  return (
    <GridList cols="4" cellHeight="auto">
      {toPairs(allTemplates).map((pair) => {
        const key = pair[0]
        const value = pair[1]
        console.log(key)
        console.log(value)
        return (
          <GridListTile key={key}>
            <TemplatePreview deleteCallback={() => deleteTemplate(key)} name={value.name} />
          </GridListTile>
        )
      })}
      <GridListTile>
        <Button variant="outlined" color="primary" onClick={addTemplate} startIcon={<AddIcon />}>
          Add Template
        </Button>
      </GridListTile>
    </GridList>
  )
}

export default Templates
