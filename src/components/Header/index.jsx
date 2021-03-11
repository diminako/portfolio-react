const style = {
    // Header main
    head: {
        backgroundColor: "green",
        height: "7vh",
        display: "flex"
    },
    // Brand styling
    brandDiv: {
        width: "20%"
    },
    brand: {
        display: "flex",
        listStyle: "none"
    },
    // Links styling
    listDiv: {
        width: "80%"
    },
    list: {
        listStyle: "none",
        display: "flex",
        justifyContent: "end"
    },
    links: {
        paddingLeft: "20px",
        paddingRight: "10px"

    }
}

const Header = () => {
    return(
        <div style={style.head}>
            <div style={style.brandDiv}>
            <ul style={style.brand}>
                <a href="#"><li style={style.brand}>Dimitri Nakos</li></a>
            </ul>
            </div>
            <div style={style.listDiv}>
            <ul style={style.list}>
                <a href="#"><li style={style.links}>Portfolio</li></a>
                <a href="#"><li style={style.links}>Resume</li></a>
                <a href="#"><li style={style.links}>About</li></a>
            </ul>
            </div>
        </div>
    )
}

export default Header;