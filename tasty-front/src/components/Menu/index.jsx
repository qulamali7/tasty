import React from 'react'
import "./index.scss";
import MenuCards from '../ManuCards';
const Menu = () => {
  return (
    <>
    <section id='menu'>
        <div className='menu_container'>
            <div className='menu_content'>
                <div className='menu_title'>
                    <p>OUR MENU</p>
                    <h3>Discover Our Exclusive Menu</h3>
                </div>
                <div className='menu_btn'>
                    <button>Main</button>
                    <button>Dessert</button>
                    <button>Drinks</button>
                </div>
                <MenuCards/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Menu