import React, { Component } from 'react'
import axios from 'axios'

export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            input: ""
        }
    }

    componentDidMount() {
        this.getData()
    }

    handleChange = e => {
        this.setState({ input })
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

