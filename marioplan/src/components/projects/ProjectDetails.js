import React from 'react'

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the Net Ninja</div>
          <div>3rd of Wtvr, 5am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
