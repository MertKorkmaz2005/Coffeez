import "./Card.css";

const Card = (props) => {
    let cardImage = <img src={"/img/" + props.image} alt={props.image ? props.image : "Default Image"} />;
    if (!props.image) {
        cardImage = <img src={"/img/pic3.jpg"} alt="Default Image" />;
    }

    return (
        <article className="card">
            <figure className="card__figure">
                {cardImage}
            </figure>
            <section className="card__section">
                <p>{props.text}</p>
            </section>
        </article>
    );
};

export default Card;
