import Container from 'react-bootstrap/Container';

export default function Body({children}) {
  return (
    <Container className="Body">
      <Container className="Content">
          {children}
      </Container>
    </Container>
  );
}