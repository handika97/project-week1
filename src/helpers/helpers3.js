module.exports = {
    response:(res, result, status, err)=> {
      let resultPrint = {}
      
      resultPrint.msg= result;
      resultPrint.err = err || null
      return res.status(status).json(resultPrint);
    }
  }