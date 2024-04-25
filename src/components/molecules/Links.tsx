import React from "react";
import Link1 from "../atoms/Links/Link1";
import Link2 from "../atoms/Links/Link2";

function Links(){
    return(
        <div className="flex flex-row gap-6 border-t border-dashed pt-8 sm:hidden">
            <Link1/>
            <Link2/>
        </div>
    )
}

export default Links;