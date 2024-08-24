import axios from "axios"
const BASE_URL="http://localhost:8080/api/public/accounts";
export const AccountService = () => axios.get(BASE_URL);
export const PostAccount = (Account) => axios.post(BASE_URL,Account);
