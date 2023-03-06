import Link from "next/link";

function Header() {
    return (
        <div>
            <div className="admin-head">

<div className="admin-head-left">
    <div>
        <Link href="/" target={"_blank"}>
            <button>
                View Site 	&gt; 	&gt;
            </button>
        </Link>
    </div>
</div>

<div className="admin-head-right">

    <div className="admin-box">
        <div>
            <div></div>
        </div>

        <div>
            <p>
                Users
            </p>
            <div>
                    <ul>
                        <li><a href="">
                            log-out</a></li>
                    </ul>
                </div>
        </div>
    </div>
</div>
</div>
        </div>
    );
}

export default Header;