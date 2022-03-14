import SearchResult from './searchResult/SearchResult';

const ResultList = (props) => {

    
    // props.searchID
    // console.log(props.results);

    // console.log("OBJ IS:", Object);
    // console.log(Object.entries(props.results));

    if(Object.entries(props.results).length === 0) {
        return (<p> No results found. Seems like we have to work on our search engine.</p>)
    } else {
        return (
            <div className="row">
            {/* 
                Display the first 20 results if props.results is not None.
                Currently the "results" object has the format key: value, where
                    - key is the result index (starting at 0)
                    - value is an object representing the material with properties
                        - id: int
                        - title: str
                        - type: str
                        - language: str
                        - keywords: [str]
                        - concepts: [str]
                        - description: str
                        - url: str
            */}
            {props.results && Object.entries(props.results).slice(0,20).map(([key, material], index) => {
                return (
                    <div key= {key} className="col-md-6 ">
                        <SearchResult material={material} index={(index+1)} searchID={props.searchID}/>
                    </div>
                )
                
                })}
            </div>
            )
    }
}

export default ResultList;