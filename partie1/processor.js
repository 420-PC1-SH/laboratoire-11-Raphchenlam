function processor(transmission){
    if (transmission.indexOf("::") < 0){
        return -1
    }
    const parts = transmission.split("::");
    let rawData = parts[1];
    if(rawData.indexOf("<") < 0 || rawData.indexOf(">") < 0){
        rawData = -1;
    }
    return {
        id: Number(parts[0]),
        rawData: rawData
    };
}

module.exports = processor;