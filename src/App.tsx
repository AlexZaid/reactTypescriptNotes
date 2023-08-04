import {useState} from "react"
import {Note} from './Models/NoteModel'
import NotesList from './components/NotesList'
import Header from "./components/Header"
import { Col, Container, Row } from "react-bootstrap"
import CreateNote from "./components/CreateNote"

function App() {
  const [notes,setNotes]=useState<Note[]>([{
    id:(new Date).toString(),
    title:"Meetings",
    text:"Schedule Meeting with UI/UX team",
    color:"LightGray",
    date:(new Date).toString()
 }])  
 /* const [notes,setNotes]=useState<{
    id:string,
    title:string,
    text:string,
    color:string,
    date:string 
 }[]>([{
    id:(new Date).toString(),
    title:"Meetings",
    text:"Schedule Meeting with UI/UX team",
    color:"#fa0f45",
    date:(new Date).toString()
 }])  */

  return (
    <>
      <Header/>
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNote notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
