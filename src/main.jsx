import React from 'react'
import ReactDOM from 'react-dom';

import {Container} from './components/Container.jsx'
import { Header } from './components/Header.jsx'
import { Produktuak } from './components/Produktuak.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div class="bg-light">
    <Header />
    <Container />
    <Produktuak />
  </div>
  
)
