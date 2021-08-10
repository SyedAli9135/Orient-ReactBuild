import Header1 from './components/Header1'
import Navbar from './components/Navbar'
import Header2 from './components/Header2'
import ProductPage2 from './components/ProductPage2'
import ProductPage1 from './components/ProductPage1'
import Footer from './components/Footer'
import ProductCheckout from './components/ProductCheckout'
import SimilarItems from './components/SimilarItems'
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path="/productpage1" component={ProductPage1} />
      <Route path="/productpage2" component={ProductPage2} />
      <Route path="/productcheckout/:id" component={ProductCheckout} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  )
}

export default App;