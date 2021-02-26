const response = ({type,res,data}) => {
    switch(type){
        case 'success':
            res.status(200).send({
                status : 'success',
                msg : data
            })
            break;
        case 'error' :
            res.status(500).send({
                status: 'error',
                msg: data
            })
            break;
    }
}

module.exports = response;