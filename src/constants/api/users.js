import Cookies from "js-cookie"
import axios from "../../configs/axios/index"

export default {
    login: (credentials) => axios.post("/teacher/login", credentials)
}

