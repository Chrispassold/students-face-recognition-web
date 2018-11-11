import _ from 'lodash'
export default class Student {
    constructor({ name, status = false, urlImage = null, dateJoined = null }) {

        if (!name) throw new Error('Name not found')

        this.name = name
        this.status = status
        this.dateJoined = dateJoined
        this.urlImage = urlImage
    }


    getName = () => this.name

    isPresent = () => this.status

    getDateJoined = () => this.dateJoined

    getUrlImage = () => this.urlImage

    toJSON() {
        let { name, status, dateJoined, urlImage } = this;
        return { name, status, dateJoined, urlImage };
    }

    match = ({ name = '', status = null }) => {
        if (!name || !_.startsWith(this.name, name)) {
            return false
        }

        if (this.status != status) {
            return false
        }

        return true;
    }

}