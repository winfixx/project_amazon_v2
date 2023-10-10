const UserDto = require('../dto/user-dto');
const tokenService = require('../services/token-service');

module.exports = createUser = async user => {
    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({...userDto})
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {...tokens, user: {...userDto, avatar: user.avatar}}
}