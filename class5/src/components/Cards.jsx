import React from 'react'
import Card from './Card'
import jewellery from "../assets/jewellery.webp"

import "./Cards.css"

const Cards = () => {
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <Card title="Bracelete" desc="jdgsjhukbcf dsjcfbhsdjlikhsd d,jfnsdoifncsd cdkjfoipmjvd vlkdfjgoiermgv e,kfjeroifje frlkjgeroipgj" src="https://cdn.shopify.com/s/files/1/0508/9417/6444/products/jULY-10-OUTHOUSEB300472.jpg?v=1696421282" />
                <Card title="Bracelete" desc="jdgsjhukbcf dsjcfbhsdjlikhsd d,jfnsdoifncsd cdkjfoipmjvd vlkdfjgoiermgv e,kfjeroifje frlkjgeroipgj" src="https://asset.swarovski.com/images/c_crop,g_xy_center,w_5851,h_7328,x_6468,y_5203/dpr_auto,f_auto,q_auto,c_lfill,w_759,h_950/swa-cms/SS25_LOOKBOOK_LOOK10_72DPI_RGB/.jpg" />
                <Card title="Bracelete" desc="jdgsjhukbcf dsjcfbhsdjlikhsd d,jfnsdoifncsd cdkjfoipmjvd vlkdfjgoiermgv e,kfjeroifje frlkjgeroipgj" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvtGv2Zya5iggeQR35tXozb9duJkpmvub0w&s" />
                <Card title="Bracelete" desc="jdgsjhukbcf dsjcfbhsdjlikhsd d,jfnsdoifncsd cdkjfoipmjvd vlkdfjgoiermgv e,kfjeroifje frlkjgeroipgj" src="https://cdn.shopify.com/s/files/1/0508/9417/6444/products/jULY-10-OUTHOUSEB300472.jpg?v=1696421282" />
                <Card title="Bracelete" desc="jdgsjhukbcf dsjcfbhsdjlikhsd d,jfnsdoifncsd cdkjfoipmjvd vlkdfjgoiermgv e,kfjeroifje frlkjgeroipgj" src="https://cdn.shopify.com/s/files/1/0508/9417/6444/products/jULY-10-OUTHOUSEB300472.jpg?v=1696421282" />
                <Card title="Necklace" desc = "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" src={jewellery}/>
               
            </div>
        </div>


    )
}

export default Cards