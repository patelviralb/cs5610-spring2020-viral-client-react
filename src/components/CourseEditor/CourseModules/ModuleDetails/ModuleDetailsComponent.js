import React from "react"
import ModuleLessons from "./ModuleTabs/ModuleLessonsComponent";
import LessonTopics from "./ModulePills/LessonTopicsComponent";
import WidgetPreviewSave from "./ModuleWidgets/WidgetPreviewSaveComponent"
import ModuleWidget from "./ModuleWidgets/ModuleWidgetComponent"

const CourseModuleDetails = ({history, match}) =>
    <div className="col-lg-9 col-12 ml-2 ml-lg-0">
      <ModuleLessons
          history={history}
          match={match}
      />
      <div>
        <LessonTopics
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