import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'Boosters',
    description: 'Boost your game hints',
  },
  {
    id: 'p2',
    price: 10,
    title: 'Nitro Pack',
    description: 'Slove it Soon to win!!',
  },
  {
    id: 'p3',
    price: 13,
    title: 'Classic Pack',
    description: 'Use it in all Games to level-up-to-grade-2',
  },
  {
    id: 'p4',
    price: 11,
    title: 'Generic Pack',
    description: 'Use it in all Games to level-up-to-grade-1',
  },
  {
    id: 'p5',
    price: 20,
    title: 'Perimium Pack',
    description: 'Use it in all Games to level-up-to-grade-4',
  },
  {
    id: 'p6',
    price: 18,
    title: 'Alto Pack',
    description: 'Use it in all Games to level-up-to-grade-3',
  },
  {
    id: 'p7',
    price: 3,
    title: 'Power',
    description: 'Buy power to get more chnaces to play and win',
  },
  {
    id: 'p8',
    price: 50,
    title: 'Super Pro Pack',
    description: 'Comes with Alto + Power %50 + Boosters %60',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Deals To Make you Win!</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
