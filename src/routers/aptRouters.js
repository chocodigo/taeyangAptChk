import express from "express";
import {
  getAptList,
  createApt,
  updateApt,
  deleteApt,
  searchApt,
  getAptInfo,
} from "../contorllers/aptControllers";

/**
 * <pre>
 *	aptRouters.java - 아파트 관리 라우터
 * </pre>
 *
 * @author	최해림
 * @since	2021.07.15
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2021.07.15	최해림		Initial Created.
 * ====================================================
 * </pre>
 *
 */

const aptRouters = express.Router();

//아파트 목록
aptRouters.get("/", getAptList);

aptRouters.get("/create", createApt);

aptRouters.get("/update", updateApt);

aptRouters.get("/delete", deleteApt);

aptRouters.get("/search", searchApt);

aptRouters.get("/aptInfo", getAptInfo);

export default aptRouters;
