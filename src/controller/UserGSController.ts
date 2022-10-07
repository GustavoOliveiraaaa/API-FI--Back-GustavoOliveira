import { NextFunction, Request, Response } from "express";
import { UserGS } from "../entity/UserGS";
import { AppDataSource } from "../data-source";

export class UserGSController {  
  private UserGSRepository = AppDataSource.getRepository(UserGS);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.UserGSRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
  
 
    const id = request.params
    const user = await AppDataSource.getRepository(UserGS).findOneBy(id)
    return response.json (user)    
}

  async save(request: Request, response: Response, next: NextFunction) {
    return this.UserGSRepository.save(request.body);
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const id = request.params
    const user = await AppDataSource.getRepository(UserGS).update(id,request.body)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(UserGS).findOneBy(id)
        response.json(userUpdated)
    }
} 
  
async remove(request: Request, response: Response, next: NextFunction) {

    const produto = request.params
        const user = await AppDataSource.getRepository(UserGS).delete(produto)
        if(user.affected ==1){
            const userUpdated = await AppDataSource.getRepository(UserGS).findOneBy(produto)
            response.json(userUpdated)
            }}
            
}
