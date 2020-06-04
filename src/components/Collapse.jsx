import React from 'react'

import CollapseContainer from '../styled/CollapseContainer'
import CollapseContent from '../styled/CollapseContent'

const Collapse = (props) => {
    return (
        <CollapseContainer>
            <CollapseContent isExpanded={props.isExpanded}>
                {props.children}
            </CollapseContent>

            <a href='#' onClick={props.onExpandedChange}>
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
