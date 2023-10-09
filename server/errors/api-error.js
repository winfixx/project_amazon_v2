class ApiError extends Error {
    status
    errors

    constructor(status, message, error = []) {
        super(message)
        this.status = status
        this.errors = error
    }

    static BadRequest(message, errors = []) {
        return new ApiError(401, message, errors)
    }

    static UnauthorizedError() {
        return new ApiError(401, 'Пользователь не авторизован')
    }
}

module.exports = ApiError
