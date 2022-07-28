import {Link} from 'react-router-dom';

function Nav(props) {
    // parse out props
    const {tabs, currentTab, setCurrentTab, setViewingProject} = props;

    return (
        <header className="d-flex flex-column px-1 bg-dark justify-content-between align-items-center text-center">
            <h1 className="text-light d-inline">Micah Zahn</h1>

            <nav>
                <ul className="d-flex flex-row">
                    {tabs.map(tab => {
                        return (
                            <li className="mx-3" key={tab.name}>
                                <Link
                                to={tab.link}
                                className={currentTab.name === tab.name ? `text-light` : `text-info`} 
                                href={tab.link}
                                onClick={() => {
                                    setCurrentTab(tab)
                                    setViewingProject(false)
                                }}
                                
                                >{tab.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )


}

export default Nav;