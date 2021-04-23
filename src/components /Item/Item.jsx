// import React from 'react';
// import './style.css'
// import { Grid } from '@material-ui/core';
// import { Card, CardActions,  } from '@material-ui/core';

// export default function Item({ item, onClickItem }) {


//     return (
//         <div>
//             <Grid item>

          

//             <div className='itemImageWrapper'>
//                 <img className='itemImage' src={item.image} alt={item.name} />
//             </div>
//             <div className='itemTextWrapper'>
//                 <div className='itemContentCenter'>
//                     <div className='itemName'>
//                         <h3>{item.name}</h3>
//                     </div>
//                     <div className='itemDescription'>
//                         <p>{item.description}</p>
//                     </div>
//                     <div className='itemColor'>
//                         <p>Color: {item.color}</p>
//                     </div>

//                 </div>
//                 <div className='itemContentRight'>
//                     <div className='itemPrice'>
//                         <p>${item.price}</p>

//                     </div>
//                     <button
//                         className='addToCartBtn'
//                         onClick={() => onClickItem(item)}
//                     >
//                         Add to cart
//                     </button>

//                 </div>
//             </div>
//             </Grid>

//         </div>
//     )
// }



import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    item: {
            marginBottom: theme.spacing(3)
    },

    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
 
    cardMedia : {
            width: '40%',
            height: 'auto',
            display: 'flex',
            flex: '2, 1, 40%'
    },
    
    cardContentCenter: {
        display:'flex',
        flexDirection: 'column',
        flex: '2, 1, 40%'
    },

    cardContentRight: {
        display:'flex',
        flex: '2, 1, 20%'
    }

}));

export default function Item({item}) {
  const classes = useStyles();
  const theme = useTheme();

    const {
        name,
        image,
        description,
        color,
        price
    } = item;

  return (
      <Grid item xs={12} md={12} lg={12} className={classes.item}>
        <Card className={classes.root}>
       
            <CardMedia
                className={classes.cardMedia}
                component="img"
                alt="Contemplative Reptile"
                image={image}
                title={name}
            />
            <CardContent className={classes.cardContentCenter}>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p">
                    {description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Color: {color}
                </Typography>
                
            </CardContent>
            <CardContent className={classes.cardContentRight}>
                <Typography variant="h5" color="textPrimary" align='right' component="p">
                    ${price}
                </Typography>
            </CardContent>
      
        
        </Card>
    </Grid>
  );
}
