import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import data from '../../utils/data';





export default function DetailPage() {
  console.log(JSON.stringify(data));
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>404</div>;
  }

  return (
    <>

    <header className='content-header-md'>
      <a>Explore</a>
      <img className='logo'src='/images/hasamiporcelain_logo.png'/>
      <a>Menu</a>
    </header>
    <div className='object'>
      <div className='gallery'>
      </div>
      <div className='content'>
        
        <p>{product.productName}</p>
      </div>
    </div>
          

      </>

  );
}


  