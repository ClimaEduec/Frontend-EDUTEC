import { verifyToken } from "./verifytoken.js"
import { getName } from "./getname.js"
import { logout } from "./logout.js"
const url = "./login-registrar/login-regis.html"

verifyToken(url)

getName()
logout()
