import {Link, NavLink, useLocation} from 'react-router-dom';



function Nav(props) {
    // parse out props
    const {tabs} = props

    return (
        <header className="d-flex flex-column px-1 bg-dark justify-content-between align-items-center text-center">
            <h1 className="text-light d-inline">Micah Zahn</h1>

            <nav>
                <ul className="d-flex flex-row">
                    {tabs.map(tab => {
                        return (
                            <li className="mx-3" key={tab.name}>
                                <NavLink
                                to={tab.link}
                                className={useLocation().pathname === tab.link ? `text-light` : `text-info`}
                                >{tab.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )


}

export default Nav;