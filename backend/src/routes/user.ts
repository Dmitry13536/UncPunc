import { FastifyInstance } from "fastify"
import { helloFunc } from "../controllers/user.js"

var helloSchema = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: {
                        type: 'array',
                        items: { type: 'string' }
                    }
                },
                required: ['hello']
            }
        }
    },
    handler: helloFunc
}

var userRoutes = ( fastify : FastifyInstance, options : any, done : any ) => {

    fastify.get('/', helloSchema)

    done()
}

export default userRoutes
