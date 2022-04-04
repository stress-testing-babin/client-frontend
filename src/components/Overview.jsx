import React from "react";
import { BasicTable } from './BasicTable';

{/* Overview to do:
    TestDaten anpassen wenn erhalten
    evtl. Filterung??
    
*/}
function Overview() {
  return (
    <div className="overview">
      <h1 className="font-weight-bold mt-3 mb-3 text-center">Overview</h1>
      <div className="ml-5 mr-5"><div/>
        <BasicTable />
      <div/>
    </div>
    </div>
  );
}

export default Overview;
