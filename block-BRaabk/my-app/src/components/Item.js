function Item(props){
    return <ul className="cards">
        {
            props.items.map((elm) => {
                console.log(elm.img)
                return (
                    <li  key={elm} className="card flex">
                        <img src={elm.img} alt=""></img>
                        <div>
                            <div>
                                <h2>{elm.title}</h2>
                                <p>$ {elm.price}</p>
                            </div>
                            <hr></hr>
                            <p>{elm.desc}</p>
                        </div>
                    </li>
                )
            })
        }
    </ul>
}

export default Item;