import {Link, useParams} from "react-router-dom";
import Todo from "./Todo";

const Welcome = () => {
  let { username } = useParams();
  return (
      <>
        <div> Welcome {username}</div>
          <Link to="/todo"> Click Here</Link>
      </>
          );
}

export default Welcome;