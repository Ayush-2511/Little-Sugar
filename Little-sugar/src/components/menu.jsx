import './menu.css'
import { useRef, useState } from 'react'
function Menu() {
    const menu = [
    {
        id: 'cakes',
        label: 'Cakes',
        items: [
            { id: 1, name: 'Chocolate Truffle', price: 450 },
            { id: 2, name: 'Blueberry Cheesecake', price: 380 },
            { id: 3, name: 'Red Velvet', price: 420 },
            { id: 4, name: 'Lemon Tart', price: 290 },
            { id: 5, name: 'Black Forest', price: 400 },
            { id: 6, name: 'Mango Mousse Cake', price: 360 },
            { id: 7, name: 'Butterscotch Cake', price: 340 },
            { id: 8, name: 'Strawberry Shortcake', price: 370 },
        ]
    },
    {
        id: 'desserts',
        label: 'Desserts',
        items: [
            { id: 1, name: 'Tiramisu', price: 350 },
            { id: 2, name: 'Crème Brûlée', price: 320 },
            { id: 3, name: 'Chocolate Mousse', price: 280 },
            { id: 4, name: 'Panna Cotta', price: 260 },
            { id: 5, name: 'Waffles with Nutella', price: 310 },
            { id: 6, name: 'Brownie with Ice Cream', price: 290 },
            { id: 7, name: 'Churros with Dip', price: 250 },
            { id: 8, name: 'Molten Lava Cake', price: 330 },
        ]
    },
    {
        id: 'coffee',
        label: 'Coffee',
        items: [
            { id: 1, name: 'Espresso', price: 120 },
            { id: 2, name: 'Cappuccino', price: 180 },
            { id: 3, name: 'Cold Brew', price: 220 },
            { id: 4, name: 'Caramel Latte', price: 240 },
            { id: 5, name: 'Flat White', price: 200 },
            { id: 6, name: 'Mocha', price: 230 },
            { id: 7, name: 'Hazelnut Latte', price: 250 },
            { id: 8, name: 'Iced Americano', price: 190 },
        ]
    },
    {
        id: 'shakes',
        label: 'Shakes',
        items: [
            { id: 1, name: 'Oreo Shake', price: 220 },
            { id: 2, name: 'Nutella Shake', price: 250 },
            { id: 3, name: 'Strawberry Shake', price: 200 },
            { id: 4, name: 'Cold Coffee', price: 180 },
            { id: 5, name: 'Kitkat Shake', price: 260 },
            { id: 6, name: 'Mango Shake', price: 210 },
            { id: 7, name: 'Dark Chocolate Shake', price: 270 },
            { id: 8, name: 'Vanilla Bean Shake', price: 230 },
        ]
    },
]
    const scrollRef = useRef(null)
    const [active, setActive] = useState('cakes')
    const scrollTo = (id) => {
        setActive(id)
        const container = scrollRef.current
        const el = document.querySelector(`#${id}`)
        container.scrollLeft = el.offsetLeft
    }
    return (
        
        <section id='menu' className='Menu'>
            <h1 className='menu-title'>Our Sweets</h1>
            <div className='buttons'>
                {menu.map(cat => (
                    <button key={cat.id}  onClick={() => scrollTo(cat.id)} className={active === cat.id ? 'active':'button'}>{cat.label}</button>
                ))}
            </div>
            <div className="menu-scroll" ref={scrollRef}>
                {menu.map(cat => (
                    <div key={cat.id} id={cat.id} className='menu-page'>
                        <ul className={cat.label}>
                            {cat.items.map(item => (
                                <li key={item.id}>
                                    <h3>{item.name}</h3>
                                    <span className="divider"></span>
                                    <p>₹{item.price}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Menu