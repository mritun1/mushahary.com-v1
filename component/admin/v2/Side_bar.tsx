function Side_bar() {
    return (
        <div>
             <div className="admin-body-left">
                        <div>
                            <ul>
                                <li>
                                    <a href="/admin/v2/dash">
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin/v2/articles_dash">
                                        Articles
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Photos
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
        </div>
    );
}

export default Side_bar;