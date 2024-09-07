import axios from "axios"
const BASE_URL="http://192.168.24.213:8080/api/public/accounts";
const NEW_MOBILE="http://localhost:8080/api/public/newmobiles";
export const AccountService = () => axios.get(BASE_URL);
export const PostAccount = (Account) => axios.post(BASE_URL,Account);

export const GetNewMobiles=()=>axios.get(NEW_MOBILE);
