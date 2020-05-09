import path from 'path';
import fs from 'fs';
import products from '../content/products.json';

const productDescriptionDirectory = path.join(
  process.cwd(),
  'src',
  'content',
  'products'
);

export const getAllProductIDs = () =>
  products.map((product) => ({ params: { id: product.id } }));

export const getProductMetadata = (id: string) => {
  const metadata = products.find((product) => product.id === id);

  return metadata ?? null;
};

export const getProduct = ({ params: { id } }) => {
  const description = fs.readFileSync(
    `${productDescriptionDirectory}/${id}.md`
  );

  const metadata = getProductMetadata(id);

  if (!description || !metadata) {
    return null;
  }

  return {
    ...metadata,
    description: description.toString(),
  };
};
