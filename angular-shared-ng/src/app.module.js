import angular from "angular";
import {UI_ROUTER_REACT_HYBRID} from "@uirouter/react-hybrid";

// import ngexports from "./ng";
import ngexports from 'ng/ng';



const app = angular
  .module("app", ["ui.router", UI_ROUTER_REACT_HYBRID, ngexports.name], null)
  .config(($logProvider) => {
    "ngInject";
    
    $logProvider.debugEnabled(true);
  })
  .run(() => {
    "ngInject";
  });

export default app;
