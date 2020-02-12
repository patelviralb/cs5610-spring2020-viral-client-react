import React from "react"
import ModuleLessons from "./ModuleTabs/ModuleLessonsComponent";
import TabPills from "./ModulePills/LessonTopicsComponent";
import WidgetPreviewSave from "./ModuleWidgets/WidgetPreviewSaveComponent"
import ModuleWidget from "./ModuleWidgets/ModuleWidgetComponent"
import CourseModuleComponent from "../CourseModuleComponent";

const CourseModuleDetails = ({history, match}) =>
    <div className="col-lg-9 col-12 ml-2 ml-lg-0">
      <ModuleLessons
          history={history}
          match={match}
      />
      <div>
        <TabPills
            history={history}
            match={match}
        />
      </div>
      <div>
        <WidgetPreviewSave />
      </div>
      <ModuleWidget />
    </div>

export default CourseModuleDetails