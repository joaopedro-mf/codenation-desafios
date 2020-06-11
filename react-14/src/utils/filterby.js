export default (listContacts, name) => {
  return listContacts.filter((data) => {
    return data.name.toLowerCase().includes(name.toLowerCase());
  });
};
