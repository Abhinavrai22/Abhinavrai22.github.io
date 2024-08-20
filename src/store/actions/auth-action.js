import Urls from "../../config/apiEndpoints"
import Api from "../../utils/Api"
import { RESET_STATE, SET_AUTHENTICATION, SET_TOKEN, SET_USER } from "../reducers/auth-reducer"


const AuthAction = {
    signIn : (data ) => async (dispatch , _) => {
        try {
            const res = Api.post({url: Urls.signIn , data })
            if (res?.status != 200) return
            const { token , user , } = res.data
            dispatch(SET_TOKEN(token))
            dispatch(SET_USER(user))
            dispatch(SET_AUTHENTICATION(true))
        
        }
        catch (error) {
            console.error(error)
        }
    } ,
    signOut : (cb) => async (dispatch , _) => {
        try {
            const res = Api.get({url: Urls.signOut  })
            if (res?.status != 200) return
            dispatch(RESET_STATE())
            
        }
        catch (error) {
            console.error(error)
        }
    }
}