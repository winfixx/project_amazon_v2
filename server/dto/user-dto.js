module.exports = class UserDto {
    id
    email
    role
    fullName
    // isActivated
    // phone

    constructor(model) {
        this.id = model.id
        this.email = model.email
        this.role = model.role
        this.fullName = model.fullName
        // this.isActivated = model.isActivated
        // this.phone = model.phone
    }
}
