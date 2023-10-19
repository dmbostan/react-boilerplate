import {ButtonTypes} from "./Button.types.ts";

const Button = ({clickHandler, className, children}: ButtonTypes) => {
    return(
        <button onClick={clickHandler} className={className}>
            {children}
        </button>
    );
};

export default Button;
