const RocketData = (props) => {
    return( 
        <section className="RocketNames">
            <ul>
                <li className="rocket">
                    <h1>{props.rocketName}</h1>
                    <p>{props.rocketInfo}</p>
                    <img src={props.rocketPic} alt="" />
                </li>
            </ul>
        </section>
    )
}

export default RocketData