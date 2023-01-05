const getSnapData = (snap) => {
  const data = [];
  for (const e of snap.docs) {
    data.push({ id: e.id, ...e.data() });
  }

  return data;
};

module.exports = getSnapData;
