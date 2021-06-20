import React from 'react'
import { CommonContext } from './CommonContext'

class Header extends React.Component {

    render() {
        return (
            <CommonContext.Consumer>
                {
                    ({ color }) => (
                        <h1 style={{ backgroundColor: color }}>Hello, this is header page</h1>
                    )
                }
            </CommonContext.Consumer>
        );
    }
}


export default Header;
