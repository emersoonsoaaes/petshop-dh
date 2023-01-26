const Service = require("../model/servico");

const AdminController = {
  listService: (req, res) => {
    const servicos = Service.findAll();

    return res.render("admin/servicos/index", { Service });
  },
};

module.exports = AdminController;
