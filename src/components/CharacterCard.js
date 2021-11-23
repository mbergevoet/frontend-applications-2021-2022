function CharacterCard({ name, height, mass, eye_color, birth_year }) {
    return (
        <div class="character-card">
            <div class="character-icon"></div>
            <ul>
                <li>{name}</li>
                <li>{height}</li>
                <li>{mass}</li>
                <li>{eye_color}</li>
                <li>{birth_year}</li>
            </ul>
        </div>
    );
}

export default CharacterCard;