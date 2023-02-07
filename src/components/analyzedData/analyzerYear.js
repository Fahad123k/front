var mapToYear = ["intensity", "relevance", "likelihood"];

function mapMapData(key, jsondata, mapToYear) {

  console.log("keyyyy", key)
  var resp = {};
  var initialData = {};
  for (let i = 0; i < mapToYear.length; i++) {
    initialData[mapToYear[i]] = 0;
  }
  // console.log('a',initialData);
  jsondata.forEach((item) => {
    let val = item[key];
    if (val.length === 0) {
      val = 1978;
      // mapMapData[0]=1978
    }
    if (!resp[val]) {
      resp[val] = { ...initialData, Eyear: val };
    }

    for (let i = 0; i < mapToYear.length; i++) {
      let tempKey = mapToYear[i];
      let valTempKey = Number(item[tempKey]);
      if (!Number.isNaN(valTempKey)) {
        resp[val][tempKey] = resp[val][tempKey] + valTempKey;
      }
    }
  });
  return resp;
}



module.exports.MapYearfunct = function MapYearfunct(jsondata, Year) {
  console.log("jsondata", jsondata);
  console.log("yearval", Year)
  return mapMapData(Year, jsondata, mapToYear);
};
