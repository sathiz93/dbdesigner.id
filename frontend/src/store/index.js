import Vue from "vue";
import Vuex from "vuex";
// import GlobalLoading from "./GlobalLoading/module";
import RightDialog from "./RightDialog/module";
import LeftDialog from "./LeftDialog/module";
import Data from "./Data/module";
import TopAlert from "./TopAlert/module";
import Utill from "./Utill/module";
import TopMenu from "./TopMenu/module"
// import diagram from "./diagram/module";
// import LeftPanel from "./LeftPanel/module";
// import Login from "./Login/module";
// import ExportDesign from "./ExportDesign/module";
// import ListProject from "./ListProject/module";
// import NewProject from "./NewProject/module";
// import UpdateProject from "./UpdateProject/module";
// import Account from "./Account/module";
// import Share from "./Share/module";
// import OpenSharedWithPassword from "./OpenSharedWithPassword/module";
// import Export from "./Export/module";
// import Project from "./Project/module";
Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  modules: {
    Utill,
    TopAlert,
    Data,
    LeftDialog,
    RightDialog,
    TopMenu,
    // GlobalLoading,
    // Project,
    // UpdateProject
    // Export,
    // OpenSharedWithPassword,
    // Login,
    // Share,
    // Account,
    // diagram,
    // LeftPanel,
    // ExportDesign,
    // ListProject,
    // NewProject,    
  }
});
