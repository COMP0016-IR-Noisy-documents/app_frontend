import Head from "../../Components/head/Head";
import Alert from "../../Components/alert/alert";

function Test() {
    return (
        <div>
            <Head isSearch={true} />
            <Alert isOpen={true} header='error' content='wrong password' buttonContent='close'/>
        </div>
    )
}

export default Test