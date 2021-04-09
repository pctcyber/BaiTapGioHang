const stateDefault = {

    isLoading: true,
}

export const LoadingReducer =  (state = stateDefault, action) => {
    switch (action.type) {

        // case 'DISPLAY_LOADING': {
        //     state.isLoading = true;
        //     return { ...state }
        // }
        case 'HIDDEN_LOADING': {

            state.isLoading = false;
            return { ...state }
        }

        default:
            return { ...state }
    }
}
