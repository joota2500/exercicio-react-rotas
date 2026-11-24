import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export function ProductCard({ product }) {
  const header = (
    <img 
      alt={product.title} 
      src={product.image} 
      style={{ width: '100%', height: '180px', objectFit: 'contain' }} 
    />
  );

  return (
    <Card title={product.title} header={header} className="m-2">
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#28a745' }}>
        R$ {product.price}
      </p>
      <Button label="Adicionar" icon="pi pi-shopping-cart" className="p-button-sm mt-2" />
    </Card>
  );
}