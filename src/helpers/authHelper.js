import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
    try {

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        return hashedPassword;

    } catch (error) {
        throw new Error(error)
    }
}

export const camparePassword = async (password, hashedPassword) => {

    return await bcrypt.compare(password, hashedPassword);

}