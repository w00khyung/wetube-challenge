import express from "express";
import {
  home,
  movieDetail,
  filterMovie,
  getUpload,
  postUpload,
} from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.get("/:id(\\d+)", movieDetail);
movieRouter.get("/filter", filterMovie);
movieRouter.route("/upload").get(getUpload).post(postUpload);

export default movieRouter;
