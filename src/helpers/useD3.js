import React from "react";
import * as d3 from "d3";

const useD3 = (renderChartFn, dependencies) => {
    // Make a ref-object
    const ref = React.useRef();

    // Give D3 access to the DOM after React has finished rendering and let D3 use the .current property of the initial value
    React.useEffect(() => {
        renderChartFn(d3.select(ref.current));
        return () => { };
    }, dependencies);
    return ref;
};

export default useD3;