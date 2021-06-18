
import {withRouter} from 'react-router-dom'

function User(props)
{
  console.warn(props.match.params.id);
  return(
    <div>
      <h1>Hi this is user no {props.match.params.id}</h1>
      <h1>Hi this is {props.match.params.name}</h1>
    </div>
  )
}

export default withRouter(User);