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

export const login = (uid,usrname) => ({
    type: 'LOGIN',
    uid,
    usrname
});

export const logout = () => ({
    type: 'LOGOUT'
});