export default class loginAPI{

    static async login(body) {
        console.log(JSON.stringify(body));
        try {
            const response = await fetch(window.__RUNTIME_CONFIG__.REACT_APP_API_URL + '/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
            return await response.json();
        } catch (error) {
            return console.log(error);
        }
        }
}
