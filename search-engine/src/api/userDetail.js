export default class UserDetailAPI{

    static async getCurrentUserDetail(token) {
        try {
            const response = await fetch((window.__RUNTIME_CONFIG__.REACT_APP_API_URL + '/current-user-detail'), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                }
            });
            return await response.json();
        } catch (error) {
            return console.log(error);
        }
        }
}
