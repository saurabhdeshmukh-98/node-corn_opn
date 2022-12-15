const {db} =require('../config/db')
const userContro = require("../entity/user");

const add = async (req, res) => {
  try {
    const resp = await userContro.create(req.body);
    res.status(200).json({
      response: resp,
      message: "data inserted..",
    });
  } catch (error) {
    res.status(200).json({
      response: null,
      message: "data not inserted..",
    });
  }
};

// const deleteDetails = async (req, res) => {
//   try {
//     const resp = await userContro.destroy(req.body, {
//       where: {
//         id: req.params.id,
//         ex_id:req.params.ex_id
//       },
//     });
//     res.status(200).json({
//       result: resp,
//       message: "data deleted..",
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: " data not deleted..",
//     });
//   }
// };
module.exports={
    add,
}
