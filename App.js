import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './Home';
import Products from './Products';
import ProductDetail from './ProductDetail';
const App = () => {
    return (
        <Router>
            <h1>hello shopping cart</h1>
            <hr />
            <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to="/products">Products</Link>
            <hr />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/productdetail/:pid" component={ProductDetail} />
            </Switch>
        </Router>
    );
}

export default App;