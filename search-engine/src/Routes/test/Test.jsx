import Head from "../../Components/head/Head";
import Load from "../../Components/load/Load";

import { useSelector, useDispatch } from "react-redux";
import { load } from "../../redux/action";

function Test() {
    const buttonContent = useSelector(state => state.AlertReducer.buttonContent );
    const dispatch = useDispatch();

    dispatch(load());
  
    return (
        <div>
            <Head isSearch={true} />
            <Load />
        </div>
    )
}

export default Test