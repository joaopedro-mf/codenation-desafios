export default (listContacts, order) => {
  return listContacts.sort(function (a, b) {
    let x = a[order];
    let y = b[order];
    return x < y ? -1 : x > y ? 1 : 0;
  });
};
