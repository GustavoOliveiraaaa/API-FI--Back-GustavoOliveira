import { UserGSController } from "./controller/UserGSController";
                                

export const Routes = [
  {
    method: "get",
    route: "/UserGS",
    controller: UserGSController,
    action: "all",
  },
  {
    method: "get",
    route: "/UserGS/:id",
    controller: UserGSController,
    action: "one",
  },
  {
    method: "post",
    route: "/UserGS",
    controller: UserGSController,
    action: "save",
  },
  {
    method: "put",
    route: "/UserGS/:id",
    controller: UserGSController,
    action: "update",
  },

  {
    method: "delete",
    route: "/UserGS/:id",
    controller: UserGSController,
    action: "remove",
  },
  {
    method: "get",
    route: "/UserGS",
    controller: UserGSController,
    action: "all",
  },



  {
    method: "get",
    route: "/SistemaGS/:cod",
    controller: UserGSController,
    action: "one",
  },

  {
    method: "put",
    route: "/SistemaGS/:cod",
    controller: UserGSController,
    action: "update",
  },
  {
    method: "post",
    route: "/SitemaGS",
    controller: UserGSController,
    action: "save",
  },
  {
    method: "delete",
    route: "/SistemaGS/:usuario",
    controller: UserGSController,
    action: "remove",
  },
];