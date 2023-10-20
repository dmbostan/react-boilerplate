import {LinkTypes} from "./Link.types.ts";

const Link = ({target, href, className, children}: LinkTypes) => {
  return(
    <a target={target} href={href} className={className}>{children}</a>
  );
}

export default Link;
