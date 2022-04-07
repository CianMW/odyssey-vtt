import { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import spaceAces from "./spaceAces.json"



const LibrarySearch = () => {
const [search, setSearch] = useState("");

// useEffect(() => {
//     if (search.length > 2) {
//         searchSpaceAces()
//     }
//     console.log(spaceAces)

// }, [search]);

function searchSpaceAces() {
    let results = []

    for (let index = 0; index < spaceAces.length; index++) {
        const element = spaceAces[index];
        element.subsections.map(el => el.text.toLowerCase().includes(search) && results.push(el))
    }
    console.log("results!!!", results)
}

    return (<>
        <FormControl 
        type="text"
        placeholder="Search for a rule or generator"
        value={search}
        onChange={e => setSearch(e.target.value.toLowerCase())}
        />
        </>
    )
}

export default LibrarySearch;