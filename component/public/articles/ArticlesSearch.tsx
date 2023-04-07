import { useEffect, useState } from "react"

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
                            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ArticlesSearch;