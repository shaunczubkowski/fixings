import "./Cuisine-Card.scss";
export function CuisineCard(props) {

    function cuisineSelected() {
        console.log('selected')
    }

    return (
        <div className="Cuisine-Card" onClick={cuisineSelected}>
            <p className="Cuisine-Card__title">{props.cuisine}</p>
            <p className="Cuisine0Card__text">Anim pariatur minim veniam non laborum.</p>
        </div>
    );
}