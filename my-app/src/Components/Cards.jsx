import FlowerImg from "../assets/flower.jpg"
export default function Cards() {
    let flower2 = "Lily"
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXWgGDYHAb1g8FDwx_KfAzo01FBKxHF0CBg&s" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={FlowerImg} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{flower2}</h5>
                                <p className="card-text">This is a short card.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
