
export const log_in = () => {
    return {
        type: 'LOG_IN',
    }
} 

export const log_out = () => {
    return {
        type: 'LOG_OUT'
    }
} 

export const mod_token = (new_token) => {
    return {
        type: 'MOD_TOKEN',
        payload: new_token
    }
} 

export const reset_token = () => {
    return {
        type: 'RESET_TOKEN',
    }
} 

export const set_detail = (username, email, displayname, publicid) => {
    return {
        type: 'SET_DETAIL',
        payload: {
            username, email, displayname, publicid
        }
    }
} 

export const reset_detail = () => {
    return {
        type: 'RESET_DETAIL'
    }
} 

export const open_alert = (isOpen, header, content, buttonContent) => {
    return {
        type: 'OPEN_ALERT',
        payload: {
            isOpen, header, content, buttonContent
        }
    }
} 

export const close_alert = () => {
    return {
        type: 'CLOSE_ALERT'
    }
} 
