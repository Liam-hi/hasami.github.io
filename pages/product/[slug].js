import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import data from '../../utils/data';





export default function DetailPage() {
  const router = useRouter()
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>404</div>;
  }

  return (
    <>

    <header className='content-header-md'>
      <a className='explore'><span onClick={() => router.back()}>Back</span></a>
      <img className='logo'src='/images/hasamiporcelain_logo.png'/>
      <a className='menu'>Menu</a>
    </header>
    <div className='header-sm-fill'></div>
    <div className='object'>
      <div className='gallery'>
        <img className='pagination'src='/images/HP029.jpg'/>
      </div>
      <div className='content'>
        <div className='header-fill'></div>
        <div className='text-wrapper'>
          
          <div className='section-a'>
            <p>{product.productPrice}</p>
            <p>{product.productName}</p>
            <button className='button'>Add to bag</button>
          </div>
          <div className='section-b'>{product.longDescription}</div>
          <div className='section-c'>
            <p>	• Material: {product.productMaterial}</p>
            <p>	• Dimensions: {product.productDimension}</p>
            <p>	• Usage: {product.productUsage}</p>
          </div>


      </div>


       
      </div>
    </div>
          

      </>

  );
}


  