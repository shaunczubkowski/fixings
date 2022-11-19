import "./Cuisine-Card.scss";
export function CuisineCard(props) {

    function cuisineSelected(props) {
        console.log(props)
    }

    return (
        <div className="Cuisine-Card" onClick={() => cuisineSelected(props)}>
            <p className="Cuisine-Card__title">{props.cuisine}</p>
            <p className="Cuisine0Card__text">Anim pariatur minim veniam non laborum.</p>
        </div>
    );
}