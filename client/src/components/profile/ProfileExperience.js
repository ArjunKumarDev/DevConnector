import React from 'react'
import PropTypes from 'prop-types';
import Moment from "react-moment";

function ProfileExperience({ experience:{company,from,to,description,title}}) {
  return (
    <div>
            <h3 class="text-dark">{company}</h3>
            <p>
             {<Moment format="YYYY/MM/DD">{from}</Moment>} - {to ? <Moment format="YYYY/MM/DD">{to}</Moment> : "Now"}
            </p>
            <p><strong>Position: </strong>{title}</p>
            <p>
              <strong>Description: </strong>{description && description}
            </p>
          </div>
  )
}

ProfileExperience.propTypes = {
    experience : PropTypes.array.isRequired
}

export default ProfileExperience

