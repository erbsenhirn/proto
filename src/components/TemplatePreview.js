import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, CardHeader, CardActions } from '@material-ui/core'
// import Typography from '@material-ui/core/Typography'
// import CardContent from '@material-ui/core/CardContent'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
// import { useSelector } from 'react-redux'

const TemplatePreview = (props) => {
  // const myTemplate = useSelector((state) => state.firestore.data.Templates)

  return (
    <Card variant="outlined">
      <CardHeader title={props.name} />

      <CardActions>
        <Button variant="outlined" color="primary" startIcon={<EditIcon />}>
          Edit
        </Button>
        <Button variant="outlined" color="primary" startIcon={<DeleteIcon />} onClick={props.deleteCallback}>
          Delete
        </Button>

      </CardActions>
    </Card>
  )
}

TemplatePreview.propTypes = {
  name: PropTypes.string,
  deleteCallback: PropTypes.func
}

export default TemplatePreview
