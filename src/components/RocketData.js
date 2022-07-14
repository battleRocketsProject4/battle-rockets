const RocketData = (props) => {
    return( 
        <section className="RocketNames">
            <ul>
                <li className="rocket">
                    <img src={props.rocketPic} alt="" />
                    <h2>{props.rocketName}</h2>
                    <p>{props.rocketInfo}</p>
                </li>
            </ul>
        </section>
    )
}

export default RocketData