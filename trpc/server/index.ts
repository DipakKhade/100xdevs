import { publicProcedure, router } from "./trpc";
import {z} from 'zod'
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const todoTypes=z.object({
    title:z.string(),
    description:z.string()
})
const appRouter=router({
    //precedures
    
    createTodo:publicProcedure
    .input(todoTypes)
    .mutation(async (opts)=>{
        console.log('control is here')
        const title = opts.input.title
        const desc =opts.input.description

        //to database calls here

        return{
            id:"1"
        }
    })
})

const server = createHTTPServer({
    router: appRouter,
  });
   
  server.listen(3000);


export type AppRouter = typeof appRouter