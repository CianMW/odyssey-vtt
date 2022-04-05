
import { Container, Row, Col, Form, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap'
import "../../styleSheets/GameSocketStyle.css"

const GameChat = ({chatHistory, handleMessageSubmit, message, setMessage}) => {

    return(
        <Row className="p-0 m-0 d-flex chatContainer" id="folder-container">

        {/* MIDDLE SECTION: CHAT HISTORY */}
              
        <ListGroup className="chat-messages">
                {chatHistory.length > 0 && chatHistory.map((message, i) => (
                    <ListGroupItem key={i}>
                    <strong>{message.sender}</strong>
                    <span className='mx-1'> | </span>
                    <span>{message.text}</span>
                    <span className='ml-2' style={{ fontSize: '0.7rem' }}>
                      {new Date(message.timestamp).toLocaleTimeString('en-US')}
                    </span>
                  </ListGroupItem>
                ))}
              </ListGroup>
              {/* BOTTOM SECTION: NEW MESSAGE INPUT FIELD */}
              <Row  className=" mx-auto parent-wide mt-auto p-0 m-0 chatbar-fixed" >
                  <Col md={12} className="p-0 m-0">
              <Form className=" parent-wide">
                <textarea
                  className="form-control parent-wide "
                  placeholder='send a message or roll the dice e.g. "1d6"'
                  value={message}
                  onKeyUp={(e) => {handleMessageSubmit(e)}}
                  onChange={(e) => setMessage(e.target.value)}
                  >
                </textarea>
              </Form>
                  </Col>
                </Row>
    </Row>
    )
}

export default GameChat
