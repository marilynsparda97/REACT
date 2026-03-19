import { Form, Container, Button } from 'react-bootstrap';

export function FocusableInput() {
  return (
    <Container className="mt-3">
      <Form.Group className="mb-3">
        <Form.Label>Inserisci testo</Form.Label>
        <Form.Control type="text" placeholder="Focus me!" />
      </Form.Group>
      <Button variant="primary">Invia</Button>
    </Container>
  );
}