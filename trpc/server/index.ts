import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const todoTypes = z.object({
  title: z.string(),
  description: z.string(),
});

const signUpType = z.object({
  email: z.string(),
  password: z.string(),
});


const appRouter = router({
  //precedures
  //procedure 1
  SignUp: publicProcedure.input(signUpType).mutation(async (opts) => {
    const username = opts.ctx.username;
    console.log(username);

    const email = opts.input.email;
    const password = opts.input.password;

    //de db calls
    //do validations
    let token = "1234";
    return {
      token,
    };
  }),

  
  //procedure 2
  createTodo: publicProcedure.input(todoTypes).mutation(async (opts) => {
    console.log("control is here");
    const { title, description } = opts.input;

    //to database calls here

    return {
      id: "1",
    };

 
  }),


  //procedure 3
  getTodo: publicProcedure.input(z.object({ id: z.string() })).query(async (opts) => {
    const { id } = opts.input;
    console.log("control is here");
    return {
      id,
    };
  }),

  
  // procedure 4
  updateTodo: publicProcedure.input(todoTypes).mutation(async (opts) => {
    const {  title, description } = opts.input;
    console.log("control is here");
    return {
      title,
      description,
    };
  }),
});



const server = createHTTPServer({
  router: appRouter,
  createContext(opts) {
    let authHeader = opts.req.headers["authorization"];
    console.log(authHeader)
    //jwt varify
    return {
      username: "dipak123",
    };
  },
});

server.listen(3000);

export type AppRouter = typeof appRouter;
