export default class SearchAPI{
    // fetch search results from the backend
    static async fetchResult(body) {
        console.log("fetching search results (APIService)")
        console.log(window.__RUNTIME_CONFIG__.API_URL + 'search');
        console.log(JSON.stringify(body));
        try {
            const response = await fetch(window.__RUNTIME_CONFIG__.API_URL + 'search', {
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


