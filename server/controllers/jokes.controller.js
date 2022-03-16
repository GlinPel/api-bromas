const Broma = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
  Broma.find()
    .then( jokes => res.json({ jokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleJoke = (req, res) => {
	Broma.findOne({ _id: req.params._id })
		.then( joke => res.json({ joke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  Broma.create(req.body)
    .then( jokeCreated => res.json({ joke: jokeCreated }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
  Broma.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
    .then( joke => res.json({ joke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
  Broma.deleteOne({ _id: req.params._id })
    .then(result => res.json({ result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findRandomJoke = async (req, res) => {
  Broma.aggregate([{ $sample: { size: 1 } }])
  .then(result => res.json({ result }))
  .catch(err => res.json({ message: "Something went wrong", error: err }));
};
