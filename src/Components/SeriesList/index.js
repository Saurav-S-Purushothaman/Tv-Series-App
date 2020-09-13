import React from 'react';
import Series from '../../containers/Series';
import './index.css';
import {Link} from 'react-router-dom';

const SeriesList = (props) => {
    return (
        <div>
           <ul className="series-list">
              {props.List.map(series =>(
                  <li key={series.show.id}>
                      <Link to= {`/series/${series.show.id}`}>
                      {series.show.name}
                      </Link>
                      </li>
              ))}
           </ul>
        </div>
    )
}

export default SeriesList;