import { useLocation, useParams } from "react-router-dom";

const Description = ({ data }) => {
    let { marca } = useParams(); // name is the name of the movie or series
    const type = useLocation().pathname.split("/")[1]; // type is the type of the movie or series
    const items = data[type]; // items is the array of movies or series
    const item = items.find((item) => item.name === marca); // item is the movie or series with the name
    return (
        <>
            <div className="CardProds">
                <img src={item.foto}/>
                <h2>{item.marca}</h2>
                <p>{item.modelo}</p>
                <p>{item.description}</p>
                <p>{item.precio}</p>
            </div>
        </>
    );
};

export default Description;