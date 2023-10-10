function parseGroupedFloat(stringValue) {
    const float = Number(stringValue).toFixed(2)
    const remains = float.toString().split('.')[1]

    const integer = Math.round(float)
    return { remains, integer }
}

export default parseGroupedFloat