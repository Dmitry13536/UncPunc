import { FastifyReply, FastifyRequest } from "fastify";

export var helloFunc = async ( req : FastifyRequest, reply : FastifyReply ) => {
    reply.send('helloWorld')
} 
