import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiFillBook } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { AiOutlineContacts } from 'react-icons/ai'

const nav = () => {
  return (
    <nav>
      <a href="#" ><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><AiFillBook /></a>
      <a href="#services"><RiServiceLine /></a>
      <a href="#contact"><AiOutlineContacts /></a>
    </nav>
  )
}

export default nav