import React from 'react';
import Loader from '../../Components/Loader';
import Series from '../Series';


class SingleSeries extends React.Component {

    state ={
        show:null
    }
    componentDidMount() {
        const {id} = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embed-episodes`)
        .then(response=>
          response.json()
        )
        .then(json =>{
          this.setState({
            show:json
          });
        });
    }

    
   
    
    render() {
        
        const {show} =this.state;
        return (
            <div>
             {show === null && <Loader />}
             {show !== null && 
             <div>
             <p>{show.name}</p>
             <p> Premiered - {show.premiered}</p>
             <p>Rating -{show.rating.average}</p>
             
             <p> 
                <img alt="ShowImage" src={show.image.original} widht="200px" />

             </p>
             </div>
             }
            </div>
        );
        
    }
}


export default SingleSeries;