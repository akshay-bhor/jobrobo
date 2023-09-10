const { QueryTypes } = require("sequelize");
const sequelize = require("../utils/db");
const Categories = require("../models/categories");

const getCategoryTree = async (req, res, next) => {
  try {
    const allCategories = await sequelize.query(`SELECT * FROM categories`, {
      type: QueryTypes.SELECT,
    });

    const categoryTree = (function (data, root) {
      var t = {};
      data.forEach((o) => {
        Object.assign((t[o.category_id] = t[o.category_id] || {}), o);
        t[o.parent_id] = t[o.parent_id] || {};
        t[o.parent_id].children = t[o.parent_id].children || [];
        t[o.parent_id].children.push(t[o.category_id]);
      });
      return t[root].children;
    })(allCategories, null);

    res.status(200).json(categoryTree);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCategoryTree,
};
