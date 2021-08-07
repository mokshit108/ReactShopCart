import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

/*const products = [
   { id:1, name:'Shoes', description:'Running shoes.',  price: '5', image: "https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg" },
   { id:2, name:'Macbook', description:'Apple macbook.',price: '10', image: "https://cdn.mos.cms.futurecdn.net/iYCQTPgBSdDmkYESfPkunh.jpg" },
];*/

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
   return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
   )

}
export default Products;