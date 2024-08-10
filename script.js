function selectAttribute(attributeType) {
    const attributeOptions = document.getElementById('attribute-options');
    attributeOptions.innerHTML = '';

    const attributeFolder = `Attributes/${attributeType}`;
    const numberOfOptions = 5; // Здесь указано количество опций (замените на актуальное число)

    for (let i = 1; i <= numberOfOptions; i++) {
        const img = document.createElement('img');
        img.src = `${attributeFolder}/${i}.png`;
        img.alt = `${attributeType} ${i}`;
        img.onclick = function() {
            changeCharacterAttribute(attributeType, i);
        };
        attributeOptions.appendChild(img);
    }
}

function changeCharacterAttribute(attributeType, optionNumber) {
    const imgElement = document.getElementById(`character-${attributeType}`);
    imgElement.src = `Attributes/${attributeType}/${optionNumber}.png`;
}
