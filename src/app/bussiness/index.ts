import appConfig from "../configs/app";

const getUsers = async function() {
    let users = fetch(appConfig.baseUrl + '/get-user-list', {
        method: 'GET'})
        .then((response) => {
            console.log(response.json());
            console.log("Fetch response: ");
            return response.json();
        })
        .then((json) => {
            console.log(json)
        })
        .catch((error) => console.error(error))
        .finally(() => {
            console.log("Finally");
        });
    return users;
}
export { getUsers }