import {createAuthProvider} from 'react-token-auth'
const API = process.env.REACT_APP_API;
export const {useAuth, authFetch, login, logout} =
    createAuthProvider({
        accessTokenKey: 'access_token',
        onUpdateToken: (token) => fetch(`${API}/auth/refresh`, {
            method: 'POST',
            body: token.refresh_token
        })
        .then(r => r.json())
    })