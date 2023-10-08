// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/dynamic/interfaces/campus/v1/api.proto (package bilibili.dynamic.interfaces.campus.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 *
 *
 * @generated from enum bilibili.dynamic.interfaces.campus.v1.ActionType
 */
export const ActionType = proto3.makeEnum(
  "bilibili.dynamic.interfaces.campus.v1.ActionType",
  [
    {no: 0, name: "ACTION_NOTHING"},
    {no: 1, name: "ACTION_CLOSE_YELLOW_BAR"},
  ],
);

/**
 *
 *
 * @generated from message bilibili.dynamic.interfaces.campus.v1.ActionReportReply
 */
export const ActionReportReply = proto3.makeMessageType(
  "bilibili.dynamic.interfaces.campus.v1.ActionReportReply",
  [],
);

/**
 *
 *
 * @generated from message bilibili.dynamic.interfaces.campus.v1.ActionReportReq
 */
export const ActionReportReq = proto3.makeMessageType(
  "bilibili.dynamic.interfaces.campus.v1.ActionReportReq",
  () => [
    { no: 1, name: "identity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "action", kind: "enum", T: proto3.getEnumType(ActionType) },
    { no: 3, name: "campus_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);
