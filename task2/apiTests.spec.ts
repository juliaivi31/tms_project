import superagent from "superagent";

describe("get-method", () => {
    it("status", async () => {
        const response = await superagent.get("https://jsonplaceholder.typicode.com/posts");
        expect(response.status).toBe(200);
    });
    it("title", async () => {
        const response = await superagent.get("https://jsonplaceholder.typicode.com/posts/2");
        const title = "qui est esse"
        expect(response.body.title).toMatch("qui est esse");
    });
    it("post-exist", async () => {
        const response = await superagent.get("https://jsonplaceholder.typicode.com/posts/1");
        expect(response.body).toBeDefined();
    });
    it("post-not-exist", async () => {
        try {
            const response = await superagent.get("https://jsonplaceholder.typicode.com/posts/200");
        } catch (error: any) {
            expect(error.status).toBe(404);
        }
    });
});
describe("post-method", () => {
    it("create-post", async () => {
        const response = await superagent
            .post("https://jsonplaceholder.typicode.com/posts")
            .send({ title: 'test', body: 'test', userId: 101 })
            .set("Content-Type", "application/json")
        expect(response.status).toBe(201);
        expect(response.body.title).toBe('test');
        expect(response.body.body).toBe('test');
        expect(response.body.userId).toBe(101);
    });
    it("create-error", async () => {
        try {
            const response = await superagent
                .post("https://jsonplaceholder.typicode.com/posts")
                .send({})
                .set("Content-Type", "application/json")
        } catch (error: any) {
            expect(error.status).toBe(404);
            expect(error.body).toEqual(undefined);
        }
    });
});
describe("put-method", () => {
    it("update-post", async () => {
        const response = await superagent
            .put("https://jsonplaceholder.typicode.com/posts/1")
            .send({ userId: 101, title: 'test1', body: 'test1' })
            .set("Content-Type", "application/json")
        expect(response.status).toBe(200);
        expect(response.body.userId).toBe(101);
        expect(response.body.title).toBe('test1');
        expect(response.body.body).toBe('test1');
    });
    it("update-comment", async () => {
        const response = await superagent
            .put("https://jsonplaceholder.typicode.com/comments/4")
            .send({ name: 'test', email: 'test@test.com' })
            .set("Content-Type", "application/json")
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('test');
        expect(response.body.email).toBe('test@test.com');
    });
    it("update-error", async () => {
        try {
            const response = await superagent
                .put("https://jsonplaceholder.typicode.com/comments/600")
                .send({ name: 'test', email: 'test@test.com' })
                .set("Content-Type", "application/json")
        } catch (error: any) {
            expect(error.status).toBe(500);
        }
    });
});
describe("patch-method", () => {
    it("update-title", async () => {
        const response = await superagent
            .patch("https://jsonplaceholder.typicode.com/albums/5")
            .send({ title: 'test-title' })
            .set("Content-Type", "application/json")
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('test-title');
    });
    it("update-todo", async () => {
        const response = await superagent
            .patch("https://jsonplaceholder.typicode.com/todos/10")
            .send({ completed: 'false' })
            .set("Content-Type", "application/json")
        expect(response.status).toBe(200);
        expect(response.body.completed).toBe('false');
    });
    it("update-error", async () => {
        try {
            const response = await superagent
                .patch("https://jsonplaceholder.typicode.com/albums/340")
                .send({ title: 'test' })
                .set("Content-Type", "application/json")
        } catch (error: any) {
            expect(error.status).toBe(500);
        }
    });
});
describe("delete-method", () => {
    it("delete-todo", async () => {
        const response = await superagent.delete("https://jsonplaceholder.typicode.com/todos/34");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
    });
    it("delete-error", async () => {
        try {
            const response = await superagent.delete("https://jsonplaceholder.typicode.com/users/15");
        } catch (error: any) {
            expect(error.status).toBe(404);
        }
    });
});