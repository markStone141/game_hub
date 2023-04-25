import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {key: "41516ef0339647b5b2bde9544dbf8b0b"}
})