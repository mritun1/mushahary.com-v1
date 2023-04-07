import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const PhotosSearch = (props:any) => {

    const [searchTxt, setSearchTxt] = useState("")
    
    function handleSearchTxt(event:any){
        console.log(event.target.value)
        setSearchTxt(event.target.value)
    }
    useEffect(()=>{
        setSearchTxt(props.myProp)
    },[])
    const searchForm = () => {
        console.log("Search Btn CLicked")
        window.location.href = "/photos/v2/search/"+searchTxt
    }
    return (
        <>
            <div>
                <div className="photos_search">
                    <div>
                        <div>
                            <input type="text" name="searchTxt" value={searchTxt} onChange={handleSearchTxt} id="" placeholder='Search Photos...' />
                        </div>
                    </div>
                    <div>
                        <div onClick={searchForm}>
                            {/* <i className="fa-sharp fa-solid fa-magnifying-glass"></i> */}
                            {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-magnifying-glass" /> */}
                            
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PhotosSearch;