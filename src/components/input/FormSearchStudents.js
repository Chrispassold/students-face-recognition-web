import React, { Component } from 'react'
import FormSearch from 'components/input/FormSearch';
import { Form } from 'semantic-ui-react';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]

export default class FormSearchStudents extends Component {

    state = {
        studentsData: []
    }

    componentDidMount() {
    }


    render() {


        return (<>
            <Form>
                <Form.Group widths='equal'>
                    <FormSearch inline />
                    <Form.Select inline fluid options={options} placeholder='Gender' />
                </Form.Group>
            </Form>
        </>
        )
    }
}