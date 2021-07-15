import express from "express";

/**
 * <pre>
 *	aptControllers.java - 아파트 관리 컨트롤러
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

// 아파트 목록
export const getAptList = (req, res) => res.send("AptList");

// 아파트 등록
export const createApt = (req, res) => res.send("create APT");

// 아파트 수정
export const updateApt = (req, res) => res.send("update APT");

// 아파트 삭제
export const deleteApt = (req, res) => res.send("delete APT");

// 아파트 검색
export const searchApt = (req, res) => res.send("search APT");

// 아파트 상세정보
export const getAptInfo = (req, res) => res.send("apt info");
