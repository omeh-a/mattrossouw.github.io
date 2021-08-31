import React, {useState} from 'react';

interface Props {
    value : string;
}

const Headline : React.FunctionComponent = () => {
    const [greeting, setGreeting] = useState (
        'This is a function component'
    );
    
    return <div>
            <h1>{greeting}</h1>
            <input
                type="text"
                value={greeting}
                onChange = {event => setGreeting(event.target.value)}
            />
        </div>
}

export default Headline;