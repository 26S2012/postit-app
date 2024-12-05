import {
  Button,
  Col,
  Container,
  Row,
  Input,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { savePost } from "../Features/PostSlice";

const SharePosts = () => {
  const [postMsg,setpostMsg] = useState("");
  const {user} = useSelector(state => state.users)
  const dispatch = useDispatch()
  const habdlePost=()=>{
    if(!postMsg.trim()){
      alert("Post message is required")
      return;
    }
    const postData ={
      postMsg:postMsg,
      email:user.email
    }
    dispatch(savePost(postData)); 
    setpostMsg(""); 
   
  }
  return (
    <Container>
      <Row>
        <Col>
          <Input
            id="share"
            name="share"
            placeholder="Share your thoughts..."
            type="textarea"
            value={postMsg}
            onChange={e => setpostMsg(e.target.value)}
          />

          <Button onClick={habdlePost}>PostIT</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SharePosts;
