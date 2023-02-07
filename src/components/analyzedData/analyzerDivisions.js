

module.exports.mapDivisions = function mapDivisions(jsondata) {
  console.log("analuyse", Array.isArray(jsondata));
  var countIndex = ["sector", "topic", "region", "country", "source", "pestle"];
  var resp = {};
  let key;
  jsondata.forEach((item, index) => {
    for (key in item) {
      if (countIndex.indexOf(key) === -1) {
        continue;
      }
      if (!resp[key]) {
        resp[key] = {};
      }
      if (!resp[key][item[key]]) {
        resp[key][item[key]] = { count: 0 };
      }
      resp[key][item[key]]["count"]++;
    }
  });
  console.log("aaa4", resp);
  return resp;
};
