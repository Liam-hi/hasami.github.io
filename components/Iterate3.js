import React from 'react'
import Form from './Form';
import Link from 'next/link';
import data from '../utils/data';


const students = [
{
    id: 1,
    name: 'Nima'
},
{
    id: 2,
    name: 'Amin'
},
{
    id: 3,
    name: 'Josesph'

}]

const populateTable = data.products.map(x => 
<>
<Link href={`/product/${x.slug}`}>
<h1>Student id: {x.id}</h1>
<h1>Name: {x.productName}</h1>
<hr/>
</Link>


</>
    );




export default function Iterate3() {
  return (
    <Form>
        {populateTable}
    </Form>
  )
}

