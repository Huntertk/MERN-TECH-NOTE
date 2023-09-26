import bcrypt from 'bcryptjs'

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hashPwd = await bcrypt.hash(password, salt)
    return hashPwd
} 

export const matchPassword = async (password,hashedPwd) => {
    const isMatched = await bcrypt.compare(password, hashedPwd)
    return isMatched
}