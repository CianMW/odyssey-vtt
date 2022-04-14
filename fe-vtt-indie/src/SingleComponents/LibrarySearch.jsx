import { useEffect, useState } from "react";
import { FormControl, Row } from "react-bootstrap";
import spaceAcesJson from "./spaceAces.json"



const LibrarySearch = () => {
const [search, setSearch] = useState("");
const [resultsArray, setResultsArray] = useState("");

useEffect(() => {
    if (search.length > 2) {
        searchSpaceAces()
    }
    console.log(spaceAcesJson)

}, [search]);

function searchSpaceAces() {
    let results = []

    for (let i = 0; i < spaceAcesJson.spaceAces.length; i++) {
        const element = spaceAcesJson.spaceAces[i];
       let filtered =  element.subsections.filter(el => el.text.toLowerCase().includes(search))
       if(filtered.length > 0){
              results.push(filtered)
           console.log("the filtered", filtered )
        } else {
            console.log("No Filtered")
        }
    }
    setResultsArray(results)
    console.log(resultsArray, "saved to the state")
    console.log("results!!!", spaceAcesJson.spaceAces.length)
}

    return (<>
        <FormControl 
        type="text"
        placeholder="Search for a rule or generator"
        value={search}
        onChange={e => setSearch(e.target.value.toLowerCase())}
        />
        {resultsArray.length > 0 && resultsArray.map(el => console.log("singular text", el))}
        </>
    )
}

export default LibrarySearch;