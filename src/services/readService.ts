import axiosInstance from "../config/axiosConfig";

function readBook(userId :number, bookId :number){
    return axiosInstance.post("/read", {userId, bookId});
}

export {readBook};