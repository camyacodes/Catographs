// import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

interface Cat {
  Owner: string
  cat_name: string
  breed: string
  image: string
  description: string
}

interface CatCardProps {
  cat: Cat
}

const CatCard = ({ cat }: CatCardProps) => {
  const { Owner, cat_name, image } = cat
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' width='200' height='200' src={image} />
      <Card.Body>
        <Card.Title>
          {cat_name} <br />
          <em>{Owner}</em>
        </Card.Title>
        <Card.Text>
          {/* <p>Owner: {Owner}</p> */}
          {/* <p>Breed: {breed}</p> */}
          {/* <p>{description}</p> */}
        </Card.Text>
        {/* <Button variant='primary'>Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
}

export default CatCard
