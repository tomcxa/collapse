import React, { useState } from 'react';
import styled from 'styled-components'

import Collapse from './components/Collapse'

function App() {
    const initialExpanded = true
    const [isExpanded, setExpanded] = useState(initialExpanded)

    function handleExpandedChange() {
        setExpanded(!isExpanded)
    }

    return (
            <Collapse
                collapsedLabel='Close'
                expandedLabel='Open'
                isExpanded={isExpanded}
                onExpandedChange={handleExpandedChange}
            >
                <Text>
                    Альфа-Банк, основанный в 1990 году, является универсальным банком,
                    осуществляющим все основные виды банковских операций, представленных
                    на рынке финансовых услуг, включая обслуживание частных и корпоративных
                    клиентов, инвестиционный банковский бизнес, торговое финансирование и т.д.
                </Text>
            </Collapse>
    );
}


const Text = styled.p`
    
`

export default App;
