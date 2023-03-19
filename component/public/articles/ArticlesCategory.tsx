import Link from "next/link";
const ArticlesCategory = () => {
    return (
        <div>
            <div className="photos_categories">
                <p>
                    <Link href={""}>
                        <button>Golang</button>
                    </Link>
                    <Link href={""}>
                        <button>DSA</button>
                    </Link>
                    <Link href={""}>
                        <button>Problems</button>
                    </Link>
                    <Link href={""}>
                        <button>Development</button>
                    </Link>
                    <Link href={""}>
                        <button>Animals</button>
                    </Link>
                    <Link href={""}>
                        <button>Birds</button>
                    </Link>
                    <Link href={""}>
                        <button>Nature</button>
                    </Link>
                    <Link href={""}>
                        <button>Animals</button>
                    </Link>
                    <Link href={""}>
                        <button>Birds</button>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default ArticlesCategory;