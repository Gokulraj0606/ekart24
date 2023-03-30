import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Badge } from 'react-bootstrap';

function App() {
  const data = [
    {
      Snap: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCU9-Cs_bbF3PXJv3_BlkBoPsU5FNqjpvSg&usqp=CAU",
      Product: "Fossil Trendsetter",
      Rating: "⭐⭐⭐⭐⭐",
      Price: "$80.00"
    },
    {
      Snap: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnN87uLSJf2uodhwRM5gv4WK6koXZzb2mEVw&usqp=CAU",
      Product: "Tommy Hilfiger",
      Rating: "⭐⭐⭐⭐⭐",
      Price: "$18.00"
    },
    {
      Snap: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjm-oaJ37swFqZjXFi0Gm4DQiEvpWP7ucGlQ&usqp=CAU",
      Product: "Rolex Sauvant",
      Rating: "⭐⭐⭐⭐⭐",
      Price: "$25.00"
    },
    {
      Snap: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYfMenalzsXdUIleGuUeeg70FmLNyE3AbdA&usqp=CAU",
      Product: "Swatch Pacemaker",
      Rating: "⭐⭐⭐⭐⭐",
      Price: "$40.00"
    },
    {
      Snap: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rx9z-b2g5JA8VxYa3K5t2znwo3ltKtIylQ&usqp=CAU",
      Product: "Fastrack Reflex",
      Rating: "⭐⭐⭐⭐⭐",
      Price: "$25.00"
    },
    {
      Snap: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-84SLQLAZSIkOdZtzZPUBNahnK3reFiyYFg&usqp=CAU",
      Product: "Casio Whiz",
      Rating: "⭐⭐⭐⭐⭐",
      Price: "$280.00"
    },
    {
      Snap: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXHm7BHmvLm2LTLBN5cxRTz8mJ7YUBqI2a1Q&usqp=CAU",
      Product: "Titan Patriot",
      Rating: "⭐⭐⭐⭐⭐",
      Price: "$18.00"
    },
    {
      Snap: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXTbA9s-ek0BxDeo_HOVydW9AJTYkE4osDg&usqp=CAU",
      Product: "Cartier Collector",
      Rating: "⭐⭐⭐⭐⭐",
      Price: "$40.00"
    },
  ]

  const [count, setCount] = useState(0)

  return (
    <div >
      <div className='cartadd'>
        <Badge bg="success">
          CART {count}
        </Badge>
      </div>
      <div className='heading'>
        <h1>Shop in style</h1>
        <p style={{ color: "gray" }}>With this shop hompeage template</p>
      </div>

      <div className="App">
        {data.map((value, idx) =>
          <Cards
            value={value}
            key={idx}
            count={count}
            setCount={setCount}
          />

        )}

      </div>

    </div>
  );
}



function Cards({ value, idx, count, setCount }) {
  const [show, setShow] = useState(false)

  function addToCart() {
    setShow(!show)
    setCount(count + 1)
  }

  function removeToCart() {
    setShow(!show)
    setCount(count - 1)
  }

  return (
    <Card key={idx} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={value.Snap} />
      <Card.Body>
        <Card.Title>{value.Product}</Card.Title>
        <Card.Text>
          {value.Rating}
        </Card.Text>
        <Card.Text>
          {value.Price}
        </Card.Text>
        {!show ? <Button variant="primary" onClick={addToCart}>Add to Cart</Button> : ""}
        {show ? <Button style={{ backgroundColor: 'grey' }} variant="primary" onClick={removeToCart}>Remove Cart</Button> : ""}
      </Card.Body>
    </Card>
  )
}




export default App;
