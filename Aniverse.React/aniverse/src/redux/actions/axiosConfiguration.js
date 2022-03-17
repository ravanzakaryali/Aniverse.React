export const baseUrl = "https://localhost:44320/api";
export const header = {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
    },
}
export const headerPicture = {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Accept': '*/*',
    },
}