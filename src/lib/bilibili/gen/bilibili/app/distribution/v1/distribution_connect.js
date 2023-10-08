// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=js"
// @generated from file bilibili/app/distribution/v1/distribution.proto (package bilibili.app.distribution.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetUserPreferenceReply, GetUserPreferenceReq, SetUserPreferenceReply, SetUserPreferenceReq, UserPreferenceReply, UserPreferenceReq } from "./distribution_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * APP配置
 *
 * @generated from service bilibili.app.distribution.v1.Distribution
 */
export const Distribution = {
  typeName: "bilibili.app.distribution.v1.Distribution",
  methods: {
    /**
     * 获取云端储存的用户偏好
     *
     * @generated from rpc bilibili.app.distribution.v1.Distribution.GetUserPreference
     */
    getUserPreference: {
      name: "GetUserPreference",
      I: GetUserPreferenceReq,
      O: GetUserPreferenceReply,
      kind: MethodKind.Unary,
    },
    /**
     * 设定用户偏好
     *
     * @generated from rpc bilibili.app.distribution.v1.Distribution.SetUserPreference
     */
    setUserPreference: {
      name: "SetUserPreference",
      I: SetUserPreferenceReq,
      O: SetUserPreferenceReply,
      kind: MethodKind.Unary,
    },
    /**
     * 获取云控配置
     *
     * @generated from rpc bilibili.app.distribution.v1.Distribution.UserPreference
     */
    userPreference: {
      name: "UserPreference",
      I: UserPreferenceReq,
      O: UserPreferenceReply,
      kind: MethodKind.Unary,
    },
  }
};
