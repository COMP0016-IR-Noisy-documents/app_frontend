// By Thatchawin Leelawat

export default class UserDetailAPI {

    static async getCurrentUserDetail(token) {
        const response = await fetch((window.__RUNTIME_CONFIG__.API_URL + '/current-user-detail'), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        });
        return await response;
    }
}