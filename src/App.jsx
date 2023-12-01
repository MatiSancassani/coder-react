import React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


const App = () => {
  return (
    <>
      <ChakraProvider>
        <NavBar />
      </ChakraProvider>
      <div className='contenedor-app'>
      <ItemListContainer />
      </div>
    </>
  )
}

export default App
 
    
