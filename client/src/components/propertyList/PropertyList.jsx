import React from 'react'
import "./propertyList.css"
import useFetch from '../../hooks/useFetch';

const PropertyList = () => {


    const { data, loading } = useFetch(
        "https://stay-buddy.onrender.com/api/hotels/countByType"
        );
        const images = [
            "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
            "https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
            "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
            "https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
            "https://q-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=",
            "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",
            "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o="

        ]

        return (
            <div className="pList">
              {loading ? (
                "loading"
              ) : (
                <>
                  {data &&
                    images.map((img,i) => (
                      <div className="pListItem" key={i}>
                        <img
                          src={img}
                          alt=""
                          className="pListImg"
                        />
                        <div className="pListTitles">
                          <h1>{data[i]?.type}</h1>
                          <h2>{data[i]?.count} {data[i]?.type}</h2>
                        </div>
                      </div>
                    ))}
                </>
              )}
            </div>
          );
        };

export default PropertyList