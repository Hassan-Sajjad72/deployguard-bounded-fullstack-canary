import express from "express";

const app = express();
const port = Number(process.env.PORT || 3000);
app.get("/health", (_request, response) => response.json({ status: "ok" }));
app.get("/message", (_request, response) => response.json({ message: "Frontend reached the DeployGuard-managed Express backend." }));
app.listen(port, "0.0.0.0", () => console.log(`canary backend listening on ${port}`));
