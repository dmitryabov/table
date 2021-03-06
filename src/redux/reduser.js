const SET_CLIENTS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_CURRENT_CLIENT = 'SET_CURRENT_CLIENT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const SET_NEW_CLIENT = 'SET_NEW_CLIENT';


let initialState = {
    userReduser: [
    {
        "id": 795,
        "firstName": "Colleen",
        "lastName": "Jayanti",
        "email": "MShofstahl@amet.net",
        "phone": "(505)241-7443",
        "address": {
            "streetAddress": '',
            "city": '',
            "state": '',
            "zip": '',
        },
        "description": ''
      } 
    ],
    pageSize: 50,
    totalClientsCount: 32,
    currentPage: 1,
    currentClient: null,
    isFetching: false

};

      const sidebarReduser = (state = initialState, action) => {

        switch(action.type){
            case SET_CLIENTS: {
                return { ...state, userReduser: action.user}
            }
            case SET_CURRENT_PAGE: {
                return { ...state, currentPage: action.currentPage}
            }
            case SET_CURRENT_CLIENT: {
                return { ...state, currentClient: action.currentClient}
            }
            case TOOGLE_IS_FETCHING: {
                return { ...state, isFetching: action.isFetching}
            }
            case SET_NEW_CLIENT: 
            let client = action.newClient;
            return {
                ...state,
                userReduser: [...state.userReduser, {
                    "id": client.id,
                    "firstName": client.firstName,
                    "lastName": client.lastName,
                    "email": client.email,
                    "phone": client.phone,
                  }]
            }
            default:
              return state;
        }  
    }

export const setClientsAC = (user) => { return { type: SET_CLIENTS, user}}
export const setCurrentPageAC = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage}}
export const setCurrentClientAC = (currentClient) => { return { type: SET_CURRENT_CLIENT, currentClient}}
export const toogleIsFetchingtAC = (isFetching) => { return { type: TOOGLE_IS_FETCHING, isFetching}}
export const setNewClientAC = (newClient) => { return { type: SET_NEW_CLIENT, newClient}}

export default sidebarReduser;