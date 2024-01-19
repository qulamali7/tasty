import React from 'react'
import "./index.scss";
import TeamCards from '../TeamCards';
const Team = () => {
  return (
    <>
    <section id="team">
        <div className="team_container">
          <div className="team_content">
            <div className="team_title">
              <p>GUESTS SAYS</p>
              <h3>Our Satisfied Guests says</h3>
            </div>
            <TeamCards/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Team