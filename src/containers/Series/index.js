import React, {Component} from 'react';
import SeriesList from '../../Components/SeriesList';
import Loader from '../../Components/Loader';
import Intro from '../../Components/Intro'

class Series extends React.Component {
    constructor(props){
        super(props);
    }
    state ={
        series:[],
        sereisName:"",
        isFetching:false
     }
     onSeriesInputChange = (event) => {
       this.setState({seriesName:event.target.value,isFetching: true})
      fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
      .then(response=>
        response.json()
      )
      .then(json =>{
        this.setState({
          series:json,
          isFetching:false
        });
      });
       console.log(event);
       console.log(event.target.value);
     }
 
   render() {
       const {series, seriesName, isFetching} = this.state;
       return (
            <div>
             <Intro message="Here you can find all of your favorite Tv Series"/>
               
               <div>
                 <input 
                  type="text"
                  value={seriesName}
                  onChange={this.onSeriesInputChange} />
               </div>
               {
                !isFetching && series.length===0 && seriesName===undefined
                 && 
                 <p>Please Enter the series name into the input</p>
               }
               {
                 !isFetching && series.length==0 && seriesName !==undefined
                 &&
                 <p>Sorry! cant find any series in this name</p>
               }
               {
                 isFetching && <Loader />
               }
               <SeriesList List={this.state.series} />
            </div>
           
       )
   }
}  
   
   export default Series;