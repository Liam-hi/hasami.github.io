import React from 'react'
import Grid from './Grid';
import Link from 'next/link';
import data from '../utils/data';



const populateTable = data.products.map(x => 
<>
<Link class='container' href={`/product/${x.slug}`}>
    <img className='thumbnail' src={x.productImage}/>
    <div class="top-left description">Appetizer Plate / Lid<br></br>[185 x 21 mm]</div>
    <div class="bottom-left price">Out of stock</div>
    <div class="bottom-left-stock stock"></div>
  
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

