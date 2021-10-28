import React from 'react'
import axios from 'axios'
const News = () => {

    var options = {
        method: 'GET',
        url: 'https://mboum-finance.p.rapidapi.com/ne/news',
        headers: {
          'x-rapidapi-host': 'mboum-finance.p.rapidapi.com',
          'x-rapidapi-key': '30c39dbee3msh4a3c6b0218b7f41p19e90ejsn67450a435ef1'
        }
      };

    return (
        <div>
            
        </div>
    )
}

export default News
