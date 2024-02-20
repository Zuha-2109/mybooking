import React from 'react'
import "./featured.css"
import useFetch from '../../hooks/useFetch'

const Featured = () => {

  const { data, loading } = useFetch(
    "https://stay-buddy.onrender.com/api/hotels/countByCity?cities=bengaluru,chennai,hyderabad"
    );
    // console.log(data);

  

  return (
    <div className='featured'>
    {loading ? (
      "Loading please wait")
      :
    (
    <>
        <div className="featuredItem">
          <img src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" className="featuredImg" />  

          <div className="featuredTitles">
            <h1>Bengaluru</h1>
            <h2>{data[0]}</h2>
            
          </div>
        </div>
        <div className="featuredItem">
          <img src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" className="featuredImg" />  

          <div className="featuredTitles">
            <h1>Chennai</h1>
            <h2>{data[1]}</h2>
            
          </div>
        </div>
        <div className="featuredItem">
          <img src="https://cf.bstatic.com/xdata/images/city/600x600/684653.jpg?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o=" alt="" className="featuredImg" />  

          <div className="featuredTitles">
            <h1>Hyderabad</h1>
            <h2>{data[2]}</h2>
            
          </div>
        </div>
        <div className="featuredItem">
          <img src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="" className="featuredImg" />  

          <div className="featuredTitles">
            <h1>New Delhi</h1>
            <h2>125 properties</h2>
            
          </div>
        </div>
        <div className="featuredItem">
          <img src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" alt="" className="featuredImg" />  

          <div className="featuredTitles">
            <h1>Mumbai</h1>
            <h2>12 properties</h2>
            
          </div>
        </div>
        </>)}
    </div>
  )
}

export default Featured