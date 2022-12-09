import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
const ProductDetail = () => {
    const { pid } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + pid)
            .then((response) => {
                const rcds = [...data];
                rcds.push(response.data);
                setData(rcds);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <h2>Showing detail of Product</h2>
            {
                data.map(row => {
                    return (
                        <div key={row.id} className="box">
                            <img src={row.image} alt={row.title} /> <br />
                            Title :  {row.title} <br />
                            Category : {row.category} <br />
                            Description : {row.description}   <hr />
                            Price:  {row.price}$
                            <hr />
                        </div>
                    )
                })
            }
        </>
    );
}
export default ProductDetail;