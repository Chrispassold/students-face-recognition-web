//https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/app/Layouts/StickyLayout.js
import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

class App extends Component {

    render() {
        return <Container style={{ paddingTop: '2em' }}>
        {this.props.children}
    </Container>
    }
}

export default App