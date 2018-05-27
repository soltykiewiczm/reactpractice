import React, { PureComponent, Fragment } from 'react';

class WhatComesOut extends PureComponent {
    render() {
        return (
            <Fragment>
                <p className="whatcomesout">
                    User name:
                    {this.props.inputValue}
                </p>
            </Fragment>
        )
    }
}

export default WhatComesOut;