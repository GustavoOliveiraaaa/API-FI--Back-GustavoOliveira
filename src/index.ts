import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { UserGS } from "./entity/UserGS"
import { SistemaGS } from "./entity/SistemaGS"

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000)

    // insert new UsersGustavos for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserGS, {
            Nome: "Feijão Topeira",
            Tipo: "Grãos",
            Peso: 27,
            Quantidade: 30,
            Preco: 10,


        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserGS, {
            Nome: "Arroz",
            Tipo: "Grãos",
            Peso: 5,
            Quantidade: 100,
            Preco: 20,


        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserGS, {
            Nome: "Macarrão",
            Tipo: "Massas",
            Peso: 5,
            Quantidade: 50,
            Preco: 7,


        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserGS, {
            Nome: "Água",
            Tipo: "Bebidas",
            Peso: 2,
            Quantidade: 100,
            Preco: 10,

        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaGS, {
            Nome: "Gustavo",

        })
    )

    console.log("Express server has started on port 3000. Open http://localhost:3000/UserGS to see results")

}).catch(error => console.log(error))
