import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react';
import StudentCard from './StudentCard';



const StudentsStatus = ({ students = [] }) => (
    <Grid columns={4} stackable>
        {students.map((value, index) => {
            return <Grid.Column key={index}>
                <StudentCard date={value.getDateJoined()} status={value.isPresent()} name={value.getName()} urlImage={value.getUrlImage()} />
            </Grid.Column>
        })}
    </Grid>
)

StudentsStatus.propTypes = {
}


export default StudentsStatus