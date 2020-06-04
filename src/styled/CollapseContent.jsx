import styled from 'styled-components'

const CollapseContent = styled.div`
    transition: all 0.3s ease;
    height: ${({isExpanded}) => isExpanded ? '90px' : '0' };
    overflow: hidden;
`

export default CollapseContent