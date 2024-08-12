import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const CatCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant='top'
        width='200'
        height='200'
        src='https://www.purina.com/_gatsby/image/fd6bdb5eb57d6bc842746800cf20f582/3f561170167ef1bfda649098ed0314c7/Abyssinian_body_7.avif?u=https%3A%2F%2Fwww.purina.com%2Fsites%2Fdefault%2Ffiles%2Fmedia%2Fimage%2FAbyssinian_body_7.jpg&a=w%3D500%26h%3D500%26fm%3Davif%26q%3D75&cd=ecb68feab94eba241d13f805758a0ad5'
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default CatCard
