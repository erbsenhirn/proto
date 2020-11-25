import { values, first } from 'lodash';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';


const useStyles = makeStyles({
  root: props => ({
    height: props.height,
    width: props.width,
    backgroundColor: props.backgroundColor,
  }),
});

const Card = () => {
  useFirestoreConnect([
    { collection: 'cards', queryParams: [ 'limitToFirst' ] }
  ])
  const firstCard = first(values(
    useSelector((state) => state.firestore.data.cards)
  ))
  const classes = useStyles(firstCard)

  if (!isLoaded(firstCard)) {
    return <CircularProgress />
  }
  if (isEmpty(firstCard)) {
    return <CircularProgress />
  }

  return <div className={ classes.root }>Hello World!</div>
}

export default Card;
