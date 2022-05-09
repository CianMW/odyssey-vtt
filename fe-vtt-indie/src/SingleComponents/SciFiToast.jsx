import { useState } from "react";
import Toast from "react-bootstrap/Toast"
import { useDispatch, useSelector } from "react-redux";
import { setToast } from "../Actions";



const SciFiToast = () => {

    const currentState = useSelector((state) => state);
    const dispatch = useDispatch();
    const [show, setShow] = useState(currentState.data.toast.isOpen);

    const closePayload = {
        isOpen: false,
        content: "No Content"
    }

    return (

        //   <Row>
        //     <Col xs={6}>
              <Toast style={{position: "absolute", top: "0"}} onClose={() => dispatch(setToast(closePayload))} show={currentState.data.toast.isOpen} delay={3000} autohide >
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">The AI says ...</strong>
                </Toast.Header>
                <Toast.Body><p>{currentState.data.toast.content}</p></Toast.Body>
              </Toast>
        //     </Col>
        //   </Row>
        );
      }


      export default SciFiToast