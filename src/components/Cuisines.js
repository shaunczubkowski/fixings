import "./Cuisines.scss";
import { CuisineCard } from "./Cuisine-Card";

export function Cuisines() {
    const CUISINES_LIST = [
        'African',
        'American',
        'British',
        'Cajun',
        'Caribbean',
        'Chinese',
        'Eastern European',
        'European',
        'French',
        'German',
        'Greek',
        'Indian',
        'Irish',
        'Italian',
        'Japanese',
        'Jewish',
        'Korean',
        'Latin American',
        'Mediterranean',
        'Mexican',
        'Middle Eastern',
        'Nordic',
        'Southern',
        'Spanish',
        'Thai',
        'Vietnamese',
    ];

    const cuisineCards = CUISINES_LIST.map((cuisine, index) => 
         <CuisineCard key={index} cuisine={cuisine} />);

    return (
        <div className="Cuisines">
            <div className="Cuisines__title">Choose a Cuisine to get started...</div>
            <div className="Cuisines__cards">
                { cuisineCards }
            </div>
        </div>
    );
}