import { Note } from '../Models/NoteModel';
import { Button, Card } from 'react-bootstrap';

interface NotesProps {
    note:Note
    handleDelete:(id: string) => void
}

const Notes: React.FunctionComponent<NotesProps> = ({note,handleDelete}) => {
  return (
    <div className='mb-3'> 
        <Card style={{ backgroundColor:note.color }}>
            <Card.Body>
              <Card.Title>{note.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                {note.text}
              </Card.Text>
              <Card.Subtitle className='text-muted'>{note.date}</Card.Subtitle>
              <Button className='mt-3' variant='danger' onClick={()=>handleDelete(note.id)}>Delete</Button>
            </Card.Body>
        </Card>
    </div>
  );
};

export default Notes;
