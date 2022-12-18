const getSnapData = (snap) => {
  const data = [];
  for (const e of snap.docs) {
    data.push(e.data());
  }

  return data;
};

module.exports = getSnapData;
