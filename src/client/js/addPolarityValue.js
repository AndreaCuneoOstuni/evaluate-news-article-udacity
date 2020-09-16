function addPolarityValue(score){
    let value;
    switch (score){
        case "P+":
            value = "Strong positive";
            break;
        case "P":
            value = "Positive";
            break;
        case "NEU":
            value = "Neutral";
            break;
        case "N":
            value = "Negative";
            break;
        case "N+":
            value = "Strong negative";
            break;
        case "NONE":
            value = "No sentiment";
    }
    return value;
}

export { addPolarityValue }