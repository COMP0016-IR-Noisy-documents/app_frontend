export default class SearchAPI{
    // fetch search results from the backend
    static async fetchResult(body) {
        console.log("fetching search results (APIService)")
        console.log(JSON.stringify(body));
        try {
            const response = await fetch(window.__RUNTIME_CONFIG__.REACT_APP_API_URL + '/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            return await response.json();
        } catch (error) {
            return console.log(error);
        }
        }
}


