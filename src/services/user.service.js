// Credible Credentials!
const users = [{ username: 'admin', password: 'admin' }]
let logedInUser;

const validateUser = (username, password) => {
    username = username.trim();
    password = password.trim();
    logedInUser = users.find(user => user.username === username && user.password === password);
    return logedInUser;
}

const getLoggedInuser = () => logedInUser;

const checkIfUserIsAuthenticated = () => {
    return !!logedInUser;
}

export default {
    validateUser,
    getLoggedInuser,
    checkIfUserIsAuthenticated
}