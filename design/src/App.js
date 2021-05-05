import './App.css';
import TabBarExample from './pages/tarbar'
import 'antd-mobile/dist/antd-mobile.css'; 
import Search from './pages/search'
import {BrowserRouter as Router ,Route } from 'react-router-dom'
import Detail from './pages/detail'

import ToBuy from './pages/tobuy'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Address from './pages/my/address'
import Purchased from './pages/my/purchased'

function App() {
  return (
    <Router>
     
      <Route path="/" exact component={TabBarExample}/>
      <Route path="/search" component={Search} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/tobuy" component={ToBuy}/>
      <Route path="/address" component={Address}/>
      <Route path="/purchased" component={Purchased}/>
    {/* <div className="App">
      <TabBarExample />
    </div> */}
    </Router>
  );
}

export default App;
