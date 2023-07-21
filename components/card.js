export const pcard = ({
     pname, image, rating, link}) => {

        return(
            <div className="card">
                <img src= {image} alt= "product" />
                <h2> {pname} </h2>
                <h3> {rating} </h3>
                <button className="save">Save</button>
                <a href= {link} >
                   <button>Visit</button>
                </a>
            </div>
        )
     }