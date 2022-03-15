export default class RegisterAPI{
    // fetch search results from the backend
    static async register(body) {
        console.log("registering a new user (APIService)")
        console.log(JSON.stringify(body));
        try {
            const response = await fetch(window.__RUNTIME_CONFIG__.API_URL + 'register', {
                "method": 'POST',
                "headers": {
                    'Content-Type': 'application/json'
                },
                "body": JSON.stringify(body)
            });
            return response.status;
        } catch (error) {
            return console.log(error);
        }
        }
}
