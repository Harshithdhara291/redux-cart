import {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
    const [products, getProducts] = useState([]);

    useEffect(()=>{
        getProductsData()
    },[])

    const getProductsData = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const fetchedData = await response.json();
        getProducts(fetchedData)
    }
  
    const cards = products.map(product =>(
        <div className='col-md-3' style={{ marginBottom:"10px" }} key={product.id}>
                <Card className='h-100' >
                <div className='text-center'><Card.Img variant="top" src={product.image}  style={{width:"100px",height:"120px",margin:"20px"}} /></div>
                <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    INR {product.price}
                </Card.Text>
                </Card.Body>
                <Card.Footer> <Button variant="primary">Add to cart</Button></Card.Footer>
            </Card>
        </div>
    ))

  return (
    <div>
        <h1>Product Dashboard</h1>
        <div className='row'>{cards}</div>
    </div>
    
  )
}

export default Product