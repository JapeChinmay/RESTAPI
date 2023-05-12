exports.getTours = (req, res) => {
  const ans = {
    tours: Tours,
  };

  return res.status(200).json(ans);
};

exports.postTours = (req, res) => {
  const newID = Tours.length + 1;
  req.body.ID = newID;
  Tours.push(req.body);

  return res.status(200).json({ message: "ok" });
};

exports.patchTour = (req, res) => {
  const item = Tours.find((id) => id === req.body.ID);
  if (item) {
    item = { ...item, post: req.body };
  }

  return res.status(200).json(ans);
};

exports.deleteTour = (req, res) => {
  return res.status(200).json({ message: "null" });
};

exports.getTourbyID = (req, res) => {
  const item = Tours.find((id) => id === req.body.ID);
  if (item) {
    return res.status(200).json(item);
  } else {
    return res.status(404).json({ message: "not found" });
  }
};
