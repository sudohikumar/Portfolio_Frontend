import { Request, Response } from "express";

export class Routes {
    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.render("index")
            })
    }
}