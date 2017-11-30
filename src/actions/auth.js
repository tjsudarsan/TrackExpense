import {firebase, googleAuthProvider} from '../firebase/firebase';

export const startAuth = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logoutAuth = () => {
    return () => {
        return firebase.auth().signOut();
    }
}

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT'
});