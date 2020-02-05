module.exports = {
    response:(res, result ,status_item,allitem,status, err)=> {
      let resultPrint = {}
      resultPrint.status = 'Success';
      resultPrint.status_code = status;
      //resultPrint.No_transaction = no_tran;
      resultPrint.Harga_total = result;
      resultPrint.status_now = status_item;
      resultPrint.items = allitem;
      resultPrint.err = err || null
      return res.status(resultPrint.status_code).json(resultPrint);
    }
  }
  