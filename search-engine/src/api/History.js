export default class SearchHistoryAPI{
    // fetch search results from the backend
    static async collectUserSearchHistory(body) {
        // console.log(JSON.stringify(body));
        try {
            const response = await fetch(window.__RUNTIME_CONFIG__.API_URL + '/search-history', {
                "method": 'POST',
                "headers": {
                    'Content-Type': 'application/json'
                },
                "body": JSON.stringify(body)
            });
            return response.json();
        } catch (error) {
            return console.log(error);
        }
    }

    static async collectUserClickHistory(body) {
        console.log(JSON.stringify(body));
        try {
            const response = await fetch(window.__RUNTIME_CONFIG__.API_URL + '/click-history', {
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
