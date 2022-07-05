import React, {useState} from 'react';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';
import PropTypes from 'prop-types';

const Portfolio = ({filters, selected, projects}) => {
    const [state, setState] = useState(selected);
    const [projectsList, setProjects] = useState(projects);

    const onSelectFilter = (event) => {
        const filter = event.target.textContent;
        // console.log(filter);
        setState(filter);
        setProjects(filter === selected ? projects : projects.filter(project => project.category === filter))
    }

    return (
        <div>
            <Toolbar filters={filters} selected={state} onSelectFilter={onSelectFilter}/>
            <ProjectList projects={projectsList}/>
        </div>
    )
}

Portfolio.propsTypes = {
    filters: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
}

export default Portfolio

