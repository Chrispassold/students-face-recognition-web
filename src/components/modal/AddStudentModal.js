import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, Header, Icon, Modal, Form} from 'semantic-ui-react'
import Dropzone from "~/components/dropzone";

export default class AddStudentModal extends Component {

    render() {
        return (
            <Modal
                open={this.props.open}
                onClose={this.props.handleClose}
                centered={false}
                size='small'
                dimmer={'blurring'}
            >
                <Header icon='users' content='Adicionar aluno'/>
                <Modal.Content>
                    <Form>
                        <Form.Input required fluid label='Nome' />
                        <Dropzone/>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={this.props.handleClose} inverted>
                        <Icon name='ban'/> Cancel
                    </Button>
                    <Button color='green' onClick={this.props.handleClose}>
                        <Icon name='checkmark'/> Got it
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

AddStudentModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}