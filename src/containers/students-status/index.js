import React, { Component } from 'react'
import StudentCard from 'components/cards/StudentCard';

export default class StudentsStatus extends Component {
  render() {
    return (
        <>
        <StudentCard/>
        <StudentCard status={true}/>
        </>
    )
  }
}
