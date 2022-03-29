import React from "react";
import { BasicTable } from './BasicTable';

function Overview() {
  return (
    <div className="overview">
      <h1 class="font-weight-bold mt-3 mb-3 text-center">Overview</h1>
      <div className="ml-5 mr-5"><div/>
        <BasicTable />
      <div/>
    </div>
    </div>
  );
}

export default Overview;
