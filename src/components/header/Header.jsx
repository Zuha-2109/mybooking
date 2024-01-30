import "./header.css"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons"
import { faCar } from "@fortawesome/free-solid-svg-icons"
import { faPlane } from "@fortawesome/free-solid-svg-icons"
import { faTaxi } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
          </div>
          <h1 className="headerTitle">A lifetime of discounts? It's genius</h1>
          <p className="headerDesc">Get rewarded for your travels – unlock instant savings of 10% or
              more with a free mybooking account
              </p>
            <button className="headerBtn">Sign in / Register</button>  

            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed}  className="headerIcon" />
                <input type="text" className="headerSearchInput" placeholder="Where are you going?" />

                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays}  className="headerIcon" />
                <span className="headerSearchText">date to date</span>

                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson}  className="headerIcon" />
                <span className="headerSearchText">2 adults 2 children 1 room</span>

                </div>
                </div>
                

                
              </div>
            </div>


            

        </div>
        </div>
  )
}

export default Header