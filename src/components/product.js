import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { productActive } from '../store/products';


function Products(props) {
  return (
    <>
      {props.product.map(element => {
        return <Card style={{display:'inline-block', marginLeft:'25%', height:'5%', width:'20%', marginTop:'3%', backgroundColor:'grey'}}>
          <CardActionArea>
            <CardMedia
              title={element.name}
              image={element.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h6">
                {element.name} 
              </Typography>
              <Typography gutterBottom variant="h6" >
                ${element.price}
              </Typography>
              <Typography variant="p" color="textSecondary" >
                {element.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      })}

    </>
  )
}
function mapStateToProps(state) {
  return state.product;
}
const mapDispatchToProps = {
    productActive,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);