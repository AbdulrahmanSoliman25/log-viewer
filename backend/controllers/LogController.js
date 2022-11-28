/**
 * Log Controller
 */

const { validationResult } = require("express-validator");

/**
 * create a text from an array of strings each of string in a new line
 * @param {Array} logs - Array of strings
 * @param {number} start - Start line number
 * @param {number} end -  End line number
 * @returns {string} - string of seprated string lines
 */
function buildContent(logs, start, end) {
  let content = "";
  for (var i = start - 1; i <= end - 1; i++) {
    if (logs[i]) content += logs[i] + "\r\n";
  }
  return content;
}

/**
 * create an array of strings from a specified file
 * @param {Array} logs - Array to fill with lines
 * @param {string} path - path to the file
 * @param {number} end -  End line number
 * @returns {Array} - the array of strings
 */
async function generateLinesArray(logs, path, end) {
  var lineReader = require("readline").createInterface({
    input: require("fs").createReadStream(
      require("path").join(__dirname, "../logs", path + ".log")
    ),
  });

  for await (const line of lineReader) {
    logs.push(line);
    if (logs.length == end) break;
  }
  return logs;
}

/**
 * fetchLogs
 * @param {Request} req - user request
 * @param {Response} res - response to a user request
 * @returns {Response} - response
 */
exports.fetchLogs = async (req, res) => {
  try {
    // Validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    // define variables
    let logs = [];
    let { start, path } = req.body;
    let end = start + 9;

    // generate the array of strings
    await generateLinesArray(logs, path, end);

    // recalculate start and end variables
    start = start != undefined ? start : Math.floor(logs.length / 10) * 10 + 1;
    end = start + 9;

    // const used = process.memoryUsage();
    // for (let key in used) {
    //   console.log(
    //     `${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`
    //   );
    // }

    // response
    res.status(200).json({
      status: 200,
      data: { content: buildContent(logs, start, end), start: start },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
};
