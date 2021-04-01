
import React, {useContext} from 'react';
import {ProductContext} from '../App';

// import { useHistory, useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    background: "#A8E6CE",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}); // material UI styles


const ProductCard = () => {
  const product = useContext(ProductContext);
  


  // let { product_id } = useParams();
  // console.log("classId from Class: ", classId); // gets the classId, A STRING

  // LOGIC NOTE: only one prop will be defined
  // If route is from Classes, indivClass will be defined, movieId will come from indivClass.id
  // If route is for a Class from home /, allMovies will be defined, movieId will come from useParams()

  // const isClassCard = allClasses === undefined;
    
  // // account if indivClass is undef or allClasses is undef
  // if (indivClass !== undefined) {
  //   classId = indivClass.id; // can get classId from allClasses, is AN INTEGER

  // } else if (allClasses !== undefined) {
  //   // we have classId, defining indivClass NOTE: integer to string with template literal `${}`
  //   indivClass = allClasses.find(indivClass => `${indivClass.id}` === classId);
  // }; 
  


  // material UI code
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const history = useHistory(); // enables onClick on productCard --> route to productCard by ID

  return (
    <>
      {/* {!isClassCard ? 
        <div>
          <Header/>
        </div>
      : <br/> /* conditional rendering for classCard*/  } 

      <Card classname="indivCard" className={classes.root} variant="outlined" onClick={(evt) => history.push(`api/auth/market/`)} >
      <CardContent style={{textAlign: "center"}}>
      {/* // {isClassCard ? <button>Logout</button> : <button>Login</button>} */}
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Sauti Market location: {product.location}
        </Typography>
        <Typography variant="h5" component="h2">
          {bull} product_name: {product.product_name} {bull}
        </Typography>
        <Typography className={classes.pos} color="textSecondary"><br/>
         description: {product.description}
        </Typography>
        <Typography variant="body2" component="p">
        price: {product.seller_price}  <br /> qty available: {product.qty}   <br/>
        <br/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
    {/* {!isClassCard ? 
      <div>
        <Footer/>
      </div>
    : <br/> /* conditional rendering for classCard*/  } 
    </>
  )
};

export default ProductCard;