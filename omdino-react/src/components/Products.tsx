import { useEffect, useState } from 'react';
import { fetchPackages } from "../api/fetchapi";

export const Products=()=>{
    interface Product {
        id: number;
        name: string;
        brand: string;
        price: number;
        discount: boolean;
        images: string[];
        color: string;
      }
      
      
        const [products, setProducts] = useState<Product[]>([]);
      
        useEffect(() => {
          fetchPackages().then(setProducts);
        }, []);
      
        return (
          <div>
            <h1>Women's Clothing Products</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {products.map((product) => (
                <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
                  <h2>{product.name}</h2>
                  <p><strong>Brand:</strong> {product.brand}</p>
                  <p><strong>Price:</strong> ${product.price}</p>
                  <p><strong>Discount:</strong> {product.discount ? 'Yes' : 'No'}</p>
                  <p><strong>Color:</strong> {product.color}</p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {product.images.map((image, index) => (
                      <img key={index} src={image} alt={product.name} width="100" height="100" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
}




