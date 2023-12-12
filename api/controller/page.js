const { pages, rows, columns } = require("../db/db");
const crypto = require("crypto");
const Page = pages;
const Rows = rows;
const Columns = columns;

exports.getAllPages = async (req, res) => {
  let success = false;
  try {
    const allPages = await Page.findAll({});
 
    success = true;
    return res.status(200).send({
      status: 200,
      success,
      data: allPages,
    });
  } catch (err) {
    return res.status(500).send({
      err,
      status: 500,
      success,
      message: "Internal Server Error.",
    });
  }
};

exports.createPage = async (req, res) => {
  let success = false;

  try {
    const { name, shortDesc, endpoint, published, htmlCode, rows } = req.body;

    let page = await Page.findOne({
      where: {
        endpoint,
      },
    });

    if (page) {
      return res.status(400).send({
        status: 400,
        success,
        message: "Endpoint already exists.",
      });
    }

    let uniqueId = crypto.randomBytes(10).toString("hex");

    page = await Page.findOne({
      where: {
        uniqueId,
      },
    });

    if (page) {
      uniqueId += crypto.randomBytes(4).toString("hex");
    }

    const newPage = await Page.create({
      name,
      description: shortDesc,
      uniqueId,
      endpoint,
      published,
      htmlCode,
    });

    for (let i = 0; i < rows.length; i++) {
      let row = await Rows.create({
        pageId: newPage.id,
        uniqueId: rows[i].id,
        columnType: rows[i].columnType,
        margin: rows[i].margin,
        padding: rows[i].padding,
        rowIndex: i,
      });
      for (let j = 0; j < rows[i].cols.length; j++) {
        await Columns.create({
          rowId: row.id,
          pageId: newPage.id,
          uniqueId: rows[i].cols[j].id,
          content: rows[i].cols[j].content,
          width: rows[i].cols[j].width,
          colIndex: j,
        });
      }
    }

    success = true;
    return res.status(200).send({
      status: 200,
      success,
      message: "Page successfully created",
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      success,
      message: "Internal Server Error.",
    });
  }
};

exports.editPage = async (req, res) => {
  let success = false;

  try {
    const { name, shortDesc, endpoint, published, htmlCode, rows } = req.body;
    const { id } = req.params;

    const page = await Page.findOne({
      where: {
        id,
      },
    });

    if (!page) {
      return res.status(404).send({
        status: 404,
        success,
        message: "Page not found.",
      });
    }

    await Page.update(
      {
        name,
        endpoint,
        published,
        htmlCode,
        description: shortDesc,
      },
      { where: { id } }
    );

    await Rows.destroy({
      where: {
        pageId: page.id,
      },
    });
    await Columns.destroy({
      where: {
        pageId: page.id,
      },
    });

    for (let i = 0; i < rows.length; i++) {
      let row = await Rows.create({
        pageId: id,
        uniqueId: rows[i].id,
        columnType: rows[i].columnType,
        margin: rows[i].margin,
        padding: rows[i].padding,
        rowIndex: i,
      });
      for (let j = 0; j < rows[i].cols.length; j++) {
        await Columns.create({
          rowId: row.id,
          pageId: id,
          uniqueId: rows[i].cols[j].id,
          content: rows[i].cols[j].content,
          width: rows[i].cols[j].width,
          colIndex: j,
        });
      }
    }

    success = true;
    return res.status(200).send({
      status: 200,
      success,
      message: "Page successfully edited.",
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      success,
      message: "Internal Server Error.",
    });
  }
};

exports.deletePage = async (req, res) => {
  let success = false;

  try {
    const { id } = req.params;

    const page = await Page.findOne({
      where: {
        id,
      },
    });

    if (!page) {
      return res.status(404).send({
        status: 404,
        success,
        message: "Page not found.",
      });
    }
    await Rows.destroy({
      where: {
        pageId: page.id,
      },
    });
    await Columns.destroy({
      where: {
        pageId: page.id,
      },
    });
    await Page.destroy({
      where: {
        id,
      },
    });

    success = true;
    return res.status(200).send({
      status: 200,
      success,
      message: "Page successfully deleted.",
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      success,
      message: "Internal Server Error.",
    });
  }
};

exports.getSinglePage = async (req, res) => {
  let success = false;
  try {
    const { id } = req.params;

    let page = await Page.findOne({
      where: {
        id,
      },
    });

    if (!page) {
      return res.status(404).send({
        status: 404,
        success,
        message: "Page not found.",
      });
    }

    success = true;
    return res.status(200).send({
      status: 200,
      success,
      data: page,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      success,
      message: "Internal Server Error.",
    });
  }
};

exports.getSinglePageByEndpoint = async (req, res) => {
  let success = false;
  try {
    const { endpoint } = req.query;

    let page = await Page.findOne({
      where: {
        endpoint,
      },
    });

    if (!page) {
      return res.status(404).send({
        status: 404,
        success,
        message: "Page not found.",
      });
    }

    success = true;
    return res.status(200).send({
      status: 200,
      success,
      data: page,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      success,
      message: "Internal Server Error.",
    });
  }
};

exports.getPageEditorData = async (req, res) => {
  let success = false;

  try {
    const { id } = req.params;

    let page = await Page.findOne({
      where: {
        id,
      },
    });

    if (!page) {
      return res.status(404).send({
        status: 404,
        success,
        message: "Page not found.",
      });
    }

    const rows = await Rows.findAll({
      where: {
        pageId: id,
      },
      order: [["rowIndex", "ASC"]],
      raw: true,
    });

    let data = [];
    for (let i = 0; i < rows.length; i++) {
      let cols = await Columns.findAll({
        where: {
          rowId: rows[i].id,
          pageId: id,
        },
        order: [["colIndex", "ASC"]],
        raw: true,
      });
      let allCols = [];
      for (let j = 0; j < cols.length; j++) {
        allCols.push({
          id: cols[j].uniqueId,
          width: cols[j].width,
          content: cols[j].content,
        });
      }
      data.push({
        id: rows[i].uniqueId,
        margin: rows[i].margin,
        padding: rows[i].padding,
        columnType: rows[i].columnType,
        cols: allCols,
      });
    }

    success = true;
    return res.status(200).send({
      status: 200,
      success,
      data: {
        page,
        rows: data,
      },
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      success,
      message: "Internal Server Error.",
    });
  }
};

exports.changePublishedStatus = async (req, res) => {
  let success = false;
  try {
    const { published } = req.body;
    const { id } = req.params;

    const page = await Page.findOne({
      where: {
        id,
      },
    });

    if (!page) {
      return res.status(404).send({
        status: 404,
        success,
        message: "Page not found.",
      });
    }

    await Page.update(
      {
        published,
      },
      {
        where: {
          id,
        },
      }
    );

    success = true;
    return res.status(200).send({
      status: 200,
      success,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      success,
      message: "Internal Server Error.",
    });
  }
};
