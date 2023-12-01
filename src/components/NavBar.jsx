import React from 'react'
import CartWidget from './CartWidget'
import {ChevronDownIcon, SettingsIcon} from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'





const NavBar = () => {
  return (
    <>
    <Flex align="center" justify="space-evenly">
    <Menu>
        <MenuButton fontSize={"1.5rem"} color={"#495D63"} borderRadius={"none"} border={"none"}> 
          Liquidacion
          <ChevronDownIcon boxSize={"2rem"}/>
        </MenuButton>
        <MenuList>
          <MenuItem>Remeras</MenuItem>
          <MenuItem>Camperas</MenuItem>
          <MenuItem>Sweater</MenuItem>
          <MenuItem>Chalecos</MenuItem>
          <MenuItem>Buzos</MenuItem>
        </MenuList>
    </Menu>
    <Input width={"50%"} placeholder='Buscar productos' />    
    <CartWidget />
          <Wrap >
        <WrapItem>
          <h2 id='titulo-header'>Bienvenido!</h2>
          <Avatar cursor={"pointer"} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </WrapItem>  
        </Wrap>
    </Flex>
    </>
  )
}

export default NavBar