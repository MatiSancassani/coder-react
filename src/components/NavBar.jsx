import React from 'react'
import CartWidget from './CartWidget'
import {ChevronDownIcon, SettingsIcon} from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
} from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import logo from './loho2.png';
import { Link } from 'react-router-dom'





const NavBar = () => {
  return (
    <>
    <Flex align="center" justify="space-evenly">
    <Menu>
        <Link to={"/"}><Box className='boton'>Inicio</Box></Link>
          <MenuButton className='liquidacion'> 
            Categorias
            <ChevronDownIcon boxSize={"2rem"}/>
          </MenuButton>
          <MenuList color={"black"} >
              <Link to={"/productos/pantalones"}><MenuItem>Pantalones</MenuItem></Link>
              <Link to={"/productos/remeras"}><MenuItem>Remeras</MenuItem></Link>
              <Link to={"/productos/camperas"}><MenuItem>Camperas</MenuItem></Link>
          </MenuList>        
          <Link><Box className='boton'>Sobre Nosotros</Box></Link>
          <Link><Box className='boton'>Contacto</Box></Link>
    </Menu>
    <Input className='busqueda' color={"black"} background={"white"} width={"35%"} placeholder='Buscar productos' border={"none"}/>    
        <CartWidget />
          <Wrap >
        <WrapItem>
          <p id='titulo-header'>Bienvenido!</p>
          <Avatar cursor={"pointer"} name='Dan Abrahmov' src={logo} />
        </WrapItem>  
        </Wrap>
    </Flex>
    </>
  )
}

export default NavBar