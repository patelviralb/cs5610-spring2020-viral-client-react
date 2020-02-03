import React from "react"
import CourseModuleTabs from "./ModuleTabs/ModuleTabComponent";
import TabPills from "./ModulePills/TabPillsComponent";

const CourseModuleDetails = () =>
    <div className="col-lg-9 col-12 ml-2 ml-lg-0">
        <CourseModuleTabs />
        <div>
          <TabPills />
        </div>
    </div>

export default CourseModuleDetails