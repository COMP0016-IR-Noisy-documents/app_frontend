// By Thatchawin Leelawat

export default class loginAPI {

    static async login(body) {
        console.log(JSON.stringify(body));
        console.log(window.__RUNTIME_CONFIG__.API_URL);
        try {
            const response = await fetch(window.__RUNTIME_CONFIG__.API_URL + '/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
            return await response;
        } catch (error) {
            console.log("api error", error);
        }


    }
}