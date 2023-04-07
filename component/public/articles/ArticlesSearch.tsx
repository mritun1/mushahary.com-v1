import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const ArticlesSearch = (props:any) => {
    const [searchTxt, setSearchTxt] = useState("")

    function handleSearchTxt(event: any) {
        setSearchTxt(event.target.value)
    }
    useEffect(() => {
        setSearchTxt(props.myProp)
    }, [])
    const searchForm = () => {
        window.location.href = "/articles/v2/search/" + searchTxt
    }
    return (
        <>
            <div>
                <div className="photos_search">
                    <div>
                        <div>
                            <input type="text" name="searchTxt" value={searchTxt} onChange={handleSearchTxt} placeholder='Search Articles...' />
                        </div>
                    </div>
                    <div>
                        <div onClick={searchForm}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ArticlesSearch;