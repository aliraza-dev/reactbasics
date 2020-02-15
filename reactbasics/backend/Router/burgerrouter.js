// Express provides with router;
const router = require("express").Router();

let burgetAdd = require("../Models/BurgerAdd.model");

router.route("/").get((req, res) => {
  burgetAdd
    .find()
    .then(res => res.json(res))
    .catch(err => console.log("Some Error Occured"));
});

router.route("/add").post((req, res) => {
  const salad = String(req.body.salad);
  const bacon = String(req.body.bacon);
  const cheese = String(req.body.cheese);
  const meat = String(req.body.meat);
  const ingredients = new burgetAdd({ salad, bacon, cheese, meat });
  ingredients
    .save()
    .then(() => res.json("Exercise Added"))
    .catch(er => err.status(400).json("Error" + er));
});

module.exports = router;
