import {ReactNode} from "react";

export type LinkTypes = {
    rel?: string,
    target?: '_blank' | '_self' | '_parent' | '_top',
    href: string,
    children: string | ReactNode | ReactNode[] | null
}
