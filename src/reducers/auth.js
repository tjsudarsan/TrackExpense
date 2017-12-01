export default (state = {},action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                uid : action.uid,
                name : action.usrname
            }

        case 'LOGOUT':
            return {}
        
        default :
            return state;
    }
};