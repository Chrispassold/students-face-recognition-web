import React, {Component} from 'react'
import {Grid, Segment, List, Button, Icon} from 'semantic-ui-react';
import StudentsStatus from 'components/cards/StudentsStatus';
import Student from 'models/Student'
import HeaderWithImage from 'components/header/HeaderWithImage';
import AddStudentModal from "~/components/modal/AddStudentModal";

const studentsData = [
    new Student({
        name: 'Christian Passold',
        urlImage: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
        status: true,
        dateJoined: new Date()
    }),
    new Student({
        name: 'Taiana Batistela Rosatti',
        urlImage: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
        status: false,
        dateJoined: new Date()
    }),
    new Student({
        name: 'Taiana Batistela Rosatti',
        urlImage: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
        status: true,
        dateJoined: new Date()
    }),
    new Student({
        name: 'Taiana Batistela Rosatti',
        urlImage: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
        status: true,
        dateJoined: new Date()
    }),
    new Student({
        name: 'Taiana Batistela Rosatti',
        urlImage: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
        status: true,
        dateJoined: new Date()
    }),
    new Student({
        name: 'Taiana Batistela Rosatti',
        urlImage: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
        status: false,
        dateJoined: new Date()
    }),
    new Student({
        name: 'Taiana Batistela Rosatti',
        urlImage: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
        status: true,
        dateJoined: new Date()
    }),
    new Student({
        name: 'Taiana Batistela Rosatti',
        urlImage: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
        status: false,
        dateJoined: new Date()
    }),
]

export default class ClassRegister extends Component {

    state = {
        studentsData: [],
        openAddStudent: false
    }

    componentDidMount() {
        this.setState({studentsData})
    }

    closeAddStudent = () => this.setState({openAddStudent: false})

    openAddStudent = () => this.setState({openAddStudent: true})


    render() {
        const data = this.state.studentsData


        return (<>
                <HeaderDetails students={data} openAddStudent={this.openAddStudent}/>
                <StudentsStatus students={data} />
                <AddStudentModal open={this.state.openAddStudent} handleClose={this.closeAddStudent}/>
            </>
        )
    }
}

const StudentCountDetails = ({total = 0, present = 0}) => (
    <List>
        <List.Item>
            <List.Content><b>Presentes:</b> {present}</List.Content>
        </List.Item>
        <List.Item>
            <List.Content><b>Faltantes:</b> {total - present}</List.Content>
        </List.Item>
    </List>
)

const HeaderDetails = ({students = [], openAddStudent}) => <Grid>
    <Grid.Row>
        <Grid.Column>
            <HeaderWithImage/>
        </Grid.Column>
    </Grid.Row>

    <Grid.Row columns='equal'>
        <Grid.Column verticalAlign='middle'>
            <StudentCountDetails total={students.length}
                                 present={students.filter((value) => value.isPresent()).length}/>
        </Grid.Column>
        <Grid.Column width={8} verticalAlign='middle'/>

        {!!openAddStudent &&
        <Grid.Column width={2} textAlign={'right'} verticalAlign={'middle'}>
            <Button primary animated='fade' onClick={openAddStudent}>
                <Button.Content visible>Adicionar</Button.Content>
                <Button.Content hidden><Icon name='add'/></Button.Content>
            </Button>
        </Grid.Column>
        }
        <Grid.Column width={2} textAlign={'right'} verticalAlign={'middle'}>
            <Button secondary>
                <Button.Content visible><Icon name='refresh'/></Button.Content>
            </Button>
        </Grid.Column>
    </Grid.Row>
</Grid>