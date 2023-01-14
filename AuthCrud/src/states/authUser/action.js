import api from '../../utils/api';

const ActionType = {
    SET_AUTH_USER: 'SET_AUTH_USER',
    UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

function setAuthUserActionCreator(authUser) {
    return {
        type: ActionType.SET_AUTH_USER,
        payload: {
            authUser,
        },
    };
}

function unsetAuthUserActionCreator() {
    return {
        type: ActionType.UNSET_AUTH_USER,
        payload: {
            authUser: null,
        },
    };
}

function asyncSetAuthUser({ email, password }) {
    return async (dispatch) => {
        try {
            const data = await api.login({ email, password });
            const { token, ...dataWithoutToken } = data;
            api.putAccessToken(token);

            dispatch(setAuthUserActionCreator(dataWithoutToken));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncUnsetAuthUser() {
    return async (dispatch) => {
        try {
            const data = await api.logout();
            api.putAccessToken('');

            dispatch(setAuthUserActionCreator(data));
        } catch (error) {
            alert(error.message);
        }
    };
}

export {
    ActionType,
    setAuthUserActionCreator,
    unsetAuthUserActionCreator,
    asyncSetAuthUser,
    asyncUnsetAuthUser,
};