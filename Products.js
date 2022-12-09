import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
const Products = () => {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                console.log(response.data);
                setRecords(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);
    return (
        <>
            <h2>Products</h2>
            {
                records.map(row => {
                    return (
                        <div key={row.id} className="box">
                            {row.title}<br />
                            <Link to={"/productdetail/" + row.id}>
                                <img src={row.image} width="100" alt={row.title} />
                            </Link>
                            <br />
                            Price : {row.price}$
                            <hr />
                        </div>
                    )
                })
            }
        </>
    );
}
export default Products;