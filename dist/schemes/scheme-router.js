"use strict";

var _express = _interopRequireDefault(require("express"));

var _schemeModel = require("./scheme-model");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

//const Schemes = require("./scheme-model.js");
const router = _express.default.Router();

router.get("/", (req, res) => {
  (0, _schemeModel.find)()
    .then(schemes => {
      res.json(schemes);
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to get schemes"
      });
    });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  (0, _schemeModel.findById)(id)
    .then(scheme => {
      if (scheme) {
        res.json(scheme);
      } else {
        res.status(404).json({
          message: "Could not find scheme with given id."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to get schemes"
      });
    });
});
router.get("/:id/steps", (req, res) => {
  const { id } = req.params;
  (0, _schemeModel.findSteps)(id)
    .then(steps => {
      if (steps.length) {
        res.json(steps);
      } else {
        res.status(404).json({
          message: "Could not find steps for given scheme"
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to get steps"
      });
    });
});
router.post("/", (req, res) => {
  const schemeData = req.body;
  (0, _schemeModel.add)(schemeData)
    .then(scheme => {
      res.status(201).json(scheme);
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to create new scheme"
      });
    });
});
router.post("/:id/steps", (req, res) => {
  const stepData = req.body;
  const { id } = req.params;
  (0, _schemeModel.findById)(id)
    .then(scheme => {
      if (scheme) {
        (0, _schemeModel.addStep)(id, stepData).then(step => {
          res.status(201).json(step);
        });
      } else {
        res.status(404).json({
          message: "Could not find scheme with given id."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to create new step"
      });
    });
});
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  (0, _schemeModel.findById)(id)
    .then(scheme => {
      if (scheme) {
        (0, _schemeModel.update)(id, changes).then(updatedScheme => {
          res.json(updatedScheme);
        });
      } else {
        res.status(404).json({
          message: "Could not find scheme with given id"
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to update scheme"
      });
    });
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  (0, _schemeModel.remove)(id)
    .then(deleted => {
      if (deleted) {
        res.json({
          removed: deleted
        });
      } else {
        res.status(404).json({
          message: "Could not find scheme with given id"
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to delete scheme"
      });
    });
});
module.exports = router;
