import React from 'react'

import CollapseContainer from '../styled/CollapseContainer'
import CollapseContent from '../styled/CollapseContent'

const Collapse = (props) => {
    function onClickHandler(event) {
        event.preventDefault()
        props.onExpandedChange()
    }

    return (
        <CollapseContainer>
            <CollapseContent isExpanded={props.isExpanded}>
                {props.children}
            </CollapseContent>

            <a href='/' onClick={onClickHandler}>
                {props.isExpanded ? props.collapsedLabel : props.expandedLabel}
            </a>
        </CollapseContainer>
    )
}

Collapse.defaultProps = {
    collapsedLabel: 'Hide',
    expandedLabel: 'Show'
}

export default Collapse
