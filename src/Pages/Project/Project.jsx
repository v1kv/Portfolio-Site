import { useEffect, useState, useRef } from 'react'
import Cards from '../../components/Cards/Cards'
import TheHam from './img/TheHam.png'
import ForkApp from './img/ForkApp.png'
import ShopingCart from './img/shopingCart.png'
import './Project.scss'
import Calculator from '../../components/Calculator'
import Todolist from '../../components/Todolist/Todolist'

const Project = () => {
  return (
    <>
      <div className="project-title">
        <h1 className="title">Project</h1>
      </div>
      <div className="project-cards-wrapper">
        <Cards
          cardsTitle={'PROJECT 1'}
          cardsDesc={
            'This project was a JavaScript-powered landing page specifically designed for computers. It featured an image filter and a sniper.'
          }
          img={TheHam}
          link={'https://v1kv.github.io/Project-step-one/'}
        />
        <Cards
          cardsTitle={'PROJECT 2'}
          cardsDesc={'This project was a responsive landing page.'}
          img={ForkApp}
          link={'https://v1kv.github.io/stepProjectV2.0/'}
        />
        <Cards
          cardsTitle={'PROJECT 3'}
          cardsDesc={'This project was a shoping cars.'}
          link={'https://shoping-cart-inky.vercel.app/product'}
          img={ShopingCart}
        />
      </div>
      <h2 className="mini-project-title">Mini-Project</h2>

      <div className="mini-project-wrapper">
        <div className="flex">
          <div className="mini-project">
            <Calculator />
          </div>
          <div>
            <p className="mini-project-desc">Calculator</p>
          </div>
        </div>
        <div className="flex">
          <div className="mini-project">
            <Todolist />
          </div>
          <div>
            <p className="mini-project-desc">To-Do List</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Project
