import React from 'react';

class Component extends React.Component {
    constructor(props) {
        super(props);
        if (props.instance) {
            this.J2KB = props.instance;
        }
    }
}

export default Component;
