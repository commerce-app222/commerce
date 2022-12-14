import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Contact = () => {
  return (
   <div className="Contact">
      <Container>
       <h3 className="mt-3">Kontak Kami</h3>
        <Row>
         <Col>
          <Form className="mt-3">
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nama Anda</Form.Label>
                    <Form.Control type="text" placeholder="Masukan Nama" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Alamat Email</Form.Label>
                    <Form.Control type="email" placeholder="Masukan Email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>
            
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Kirim
                  </Button>
                </Form>
         </Col>
        </Row>
      </Container>
   </div>
  ) 
}

export default Contact