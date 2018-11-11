import React from 'react'
import { Form } from 'semantic-ui-react'

const FormSearch = ({loading = false, ...props}) => <Form.Input {...props} fluid icon='search' placeholder='Search...' loading={loading} />

export default FormSearch