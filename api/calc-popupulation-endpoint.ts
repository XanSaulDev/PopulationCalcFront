
import axios from "axios";

const calcPopulation = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
});


export default calcPopulation;