import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withAuth0} from "@auth0/auth0-react";



const axios = require('axios');

class Home extends React.Component {

  render() {
    return (
      <>

<Card style={{ width: '18rem' , display: "inline-block"}}>
  <Card.Img variant="top" src="fruit.image" />
  <Card.Body>
    <Card.Title>{fruit.image}</Card.Title>
    <Card.Text>
      {/* Some quick example text to build on the card title and make up the bulk of
      the card's content. */}
    </Card.Text>
    <Button variant="primary">Add to Favorite</Button>
  </Card.Body>
</Card>

        <h1>API Fruits</h1>
      </>
    )
  }
}

export default Home;
