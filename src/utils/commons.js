export const filterStudents = (args = {}, students = []) => {
    return students.filter((student) => student.match(args))
}