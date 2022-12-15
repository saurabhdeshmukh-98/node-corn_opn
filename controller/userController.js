const { db } = require("../config/db");
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
//   const currentDate = new Date();
//   const currentDayOfMonth = currentDate.getDate();
//   const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
//   const currentYear = currentDate.getFullYear();
//   const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
//   try {
//     const resp = await userContro.destroy(req.body, {
//       where: {
//         [Op.gte]: dateString,
//         //ex_date:Date
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
module.exports = {
  // deleteDetails,
  add
};
