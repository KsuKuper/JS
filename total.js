function total(shoplist, nds) {
  const result = [];
  for (let i = 0; i < shoplist.length; i++) {
    result.push(nds(shoplist[i]));
  }
  return result;
}
module.exports = total;
