import React, { useEffect, useState } from 'react'
import axios from 'axios'
const News = () => {
  const [news,setNews] = useState('')
// useEffect(()=> {
//   axios.get('https://mboum-finance.p.rapidapi.com/ne/news',{
//     headers: {
//       'x-rapidapi-host': 'mboum-finance.p.rapidapi.com',
//       'x-rapidapi-key': '30c39dbee3msh4a3c6b0218b7f41p19e90ejsn67450a435ef1'
//     }
//   })
//   .then(res => setNews(res))
//   .catch(err => console.log(err))

// },[])
console.log(news);
    return (
        <div>
            news
        </div>
    )
}

export default News
