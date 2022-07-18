

function Nav(props) {
    // parse out props
    const {tabs, currentTab, setCurrentTab} = props;

    return (
        <header className="d-flex flex-column px-1 bg-dark justify-content-between align-items-center text-center">
            <h1 className="text-light d-inline">Micah Zahn</h1>

            <nav>
                <ul className="d-flex flex-row">
                    {tabs.map(tab => {
                        return (
                            <li className="mx-3" key={tab.name}>
                                <span 
                                className="text-info" 
                                href={tab.link}
                                onClick={() => {
                                    setCurrentTab(tab)
                                }}
                                
                                >{tab.name}</span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )


}

export default Nav;