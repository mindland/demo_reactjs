// jss : chỉnh javascipt trong file css

import theme from "../../theme";

const style = {
    img: {
        height: 240,  
        [theme.breakpoints.down('xl')]: {   // Nếu như màn hình  < sm
            height: 300
        }  , 
        [theme.breakpoints.down('lg')]: {   // Nếu như màn hình  < sm
            height: 300
        }  , 
        [theme.breakpoints.down('md')]: {   // Nếu như màn hình  < sm
            height: 400
        } ,
        [theme.breakpoints.down('sm')]: {   // Nếu như màn hình  < sm
            height: 450
        }  
    }, 
    header: {
        
    }, 
    footer: {

    }, 
    btnAction: {
        display: "flex", 
        justifyContent: "center"
    }, 
    card: {
        height: 400  
    }, 
    txt: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    }, 
    btn: {
        backgroundColor: theme.palette.green.main , 
        "&hover" : {
            backgroundColor: theme.palette.primary.main
        }
    }
}

export default style;