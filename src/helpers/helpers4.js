module.exports = {
    response:(res, nexlink,prelink,result, status, err)=> {
        let resultPrint = {}
        resultPrint.status = 'Success';
        resultPrint.NEXT = nexlink;
        //resultPrint.No_transaction = no_tran;
        resultPrint.PREV = prelink;
        resultPrint.PAGE = result;
        resultPrint.err = err || null
        return res.status(status).json(resultPrint);
      }
    }
    