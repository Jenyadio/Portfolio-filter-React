import React from 'react'
import PropTypes from 'prop-types';

const Toolbar = ({filters, selected, onSelectFilter}) => {

    return (
        <div className='toolbar'>
            {filters.map(filter => {
                return (
                    <button key={filter} className={filter === selected ? 'button btn-selected' : 'button'} onClick={onSelectFilter}>
                      {filter}
                    </button>
                )
            })}
        </div>
    )
}

Toolbar.propTypes = {
    filters: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired,
}

export default Toolbar
