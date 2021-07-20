import React, { Component, Fragment } from 'react'
import Await from './Await'
import Complete from './Complete'
import Add from './Add'
class App extends Component {
    render() {
        return (
            <Fragment>
                <Add />
                <Await />
                <Complete />
            </Fragment>
        );
    }
}

export default App