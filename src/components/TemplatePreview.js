import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
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
        <Button variant="outlined" color="primary" startIcon={<DeleteIcon />}>
          Delete
        </Button>

      </CardActions>
    </Card>
  )
}

TemplatePreview.propTypes = {
  name: PropTypes.string
}

export default TemplatePreview
