import Head from "../../Components/head/Head";
import Alert from "../../Components/alert/alert";

import { useCookies } from 'react-cookie';


function Test() {
    const [cookies, setCookie] = useCookies(['name']);
  
    setCookie("abc", 6555);
    setCookie("def", 6555);
  
    return (
        <div>
            <Head isSearch={true} />
            <Alert isOpen={true} header='error' content='wrong password' buttonContent='close'/>
            <p>{cookies.abc}</p>
            <p>{cookies.def}</p>
        </div>
    )
}

export default Test