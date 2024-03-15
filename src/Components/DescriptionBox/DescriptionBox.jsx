import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="desciptionbox-description">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam alias aspernatur asperiores perferendis cupiditate nisi odio, recusandae, animi voluptatum accusantium consequuntur nesciunt labore ducimus. Ipsum enim odio rerum dolor vero!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet minima excepturi veniam? Quis, ipsum! Sit, et enim a eius, praesentium quod numquam tempora dolores temporibus, sed beatae doloremque perspiciatis.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox
