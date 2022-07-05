import React from 'react'
import PropTypes from 'prop-types';

const ProjectList = ({projects}) => {
    return (
        <div className='projects'>
            {projects.map((project, index) => {
                return (
                    <img src={project.img} alt={project.category} key={index + 1} className='project-img'/>
                )
            })}
        </div>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.array,
}

export default ProjectList
