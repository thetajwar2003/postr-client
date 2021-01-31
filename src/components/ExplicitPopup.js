import React from 'react';
import {Popup} from 'semantic-ui-react';

function ExplicitPopup({content, children}) {
    return <Popup inverted content={content} trigger={children}/>
}

export default ExplicitPopup;