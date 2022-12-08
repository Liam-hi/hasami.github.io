import React from 'react'
import Grid from './Grid';
import Link from 'next/link';
import data from '../utils/data';



const populateTable = data.products.map(x => 
<>
<Link class='container' href={`/product/${x.slug}`}>
    <img className='thumbnail' src={x.productImage}/>
    <div class="top-left description">{x.productName}</div>
    <div class="bottom-left price">{x.productPrice}</div>
    <div class="bottom-left-stock stock">{x.countInStock}</div>
  
</Link>


</>
    );




export default function Object() {
  return (
    <Grid>
        {populateTable}
    </Grid>
  )
}

