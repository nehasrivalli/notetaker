import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const noteRouter = createTRPCRouter({
    delete: publicProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.note.delete({
                where: {
                    id: input.id,
                },
            });
        }),

    create: publicProcedure
        .input(
            z.object({ title: z.string(), content: z.string(), topicId: z.string() })
        )
        .mutation(async ({ ctx, input }) => {
            console.log("first name", JSON.stringify(input))
            return ctx.prisma.note.create({
                data: {
                    title: input.title,
                    topicId: "clp6xa5700001bod4c2zi5jqp",
                    content: input.content,
                },
            });
        }),

    getAll: publicProcedure
        .input(z.object({ topicId: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.note.findMany({
                where: {
                    topicId: input.topicId,
                },
            });
        }),
});