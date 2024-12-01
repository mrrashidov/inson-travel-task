import { http, HttpResponse } from "msw";
import { contries, activities, programs } from "./data";

export const handlers = [
    http.get("/countries", () => {
        return HttpResponse.json(contries);
    }),
    http.get("/activities", () => HttpResponse.json(activities)),
    http.get("/programs", () => HttpResponse.json(programs)),
];
