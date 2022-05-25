import Especialista from "@/assets/Dtos/EspecialistaDto";
import {
  getModule,
  Module,
  VuexModule,
  Mutation,
  Action,
} from "vuex-module-decorators";
// import store from "@/assets/Store";

@Module({
  dynamic: true,
  namespaced: true,
  // store,
  name: "UsuarioModule",
})
class UsuarioModule extends VuexModule {
  public usuarioActual!: Especialista;
  public logged: boolean = true;

  @Action({ commit: "login" })
  public async login(showLoading: boolean = false) {
    // return await ssmHttpService.get(
    //   API.Usuario + "/GetAllUsuarios",
    //   null,
    //   showLoading
    // );
  }



  @Mutation
  public getLogin(res: Especialista) {
    this.usuarioActual = res ? res : null;
  }

}
export default getModule(UsuarioModule);









//******************************************************
// import usuarioModule from "@/store/modules/usuario-module";

// await usuarioModule.getUsuarioLoginName(UsuarioSession.UserName);
//  149  
// Proyecto/ClientRes/request.http