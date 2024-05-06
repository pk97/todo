import {useParams} from "react-router-dom";

const Welcome = () => {
  let { username } = useParams();
  return (<div> Welcome {username}</div>);
}

export default Welcome;