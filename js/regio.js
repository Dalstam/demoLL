document.querySelector("#leagueSearch").addEventListener("click", function () {
    let urlPt1 =
        "https://services.arcgis.com/nSZVuSZjHpEZZbRo/ArcGIS/rest/services/Postcodepunten/FeatureServer/0/query?where=postcode6+%3D++%27";
    let urlPt2 =
        "%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=postcode6&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=28992&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson";
    let url2Pt1 =
        "https://services.arcgis.com/emS4w7iyWEQiulAb/ArcGIS/rest/services/KNBSB_Leaguegrenzen/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=";
    let url2Pt2 =
        "&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=League&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=";
    console.log(document.querySelector("#post").value);
    fetch(urlPt1 + document.querySelector("#post").value + urlPt2)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.features[0].geometry.x);
            console.log(data.features[0].geometry.y);
            fetch(url2Pt1 + data.features[0].geometry.x + "%2C" + data.features[0].geometry.y + url2Pt2)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.features[0].attributes.League);
                    document.querySelector('#LEAG').innerHTML ="Mijn regio is: "  + data.features[0].attributes.League;
                })
                .catch((err) => {
                    console.error(err);
                });
        })
        .catch((err) => {
            console.error(err);
            if (document.querySelector("#post").value.length == 0) {
                document.querySelector('#LEAG').innerHTML = document.querySelector("#post").value + " voer een PC in ";
            } else {
                document.querySelector('#LEAG').innerHTML = document.querySelector("#post").value + " geen geldig pc ";
            }
        });
});
