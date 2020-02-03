import React from "react"
import CourseModuleTabs from "./ModuleTabs/ModuleTabComponent";
import TabPills from "./ModulePills/TabPillsComponent";
import WidgetPreviewSave from "./ModuleWidgets/WidgetPreviewSaveComponent"
import ModuleWidget from "./ModuleWidgets/ModuleWidgetComponent"

const CourseModuleDetails = () =>
    <div className="col-lg-9 col-12 ml-2 ml-lg-0">
      <CourseModuleTabs/>
      <div>
        <TabPills/>
      </div>
      <div>
        <WidgetPreviewSave />
      </div>
      <ModuleWidget />
    </div>

export default CourseModuleDetails