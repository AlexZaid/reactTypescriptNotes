import { Container, Navbar } from 'react-bootstrap';

interface HeaderProps {
}

const Header:React.FunctionComponent<HeaderProps> = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
};

export default Header;
