import { request } from "./api";

export interface User {
    userID: number;
    nickname: string;
    avatar: string;
    firstName: string;
    lastName: string;
    permissions: Permission[];
}

export interface Permission {
    permissionID: number;
    name: string;
}

export enum UserRoles {
    admin = "creatorAdmin",
    superUser = "SuperUser", // ystv universal role
    moderator = "creatorModerator",
    member = "member",
}

export const UserRoleGroups = {
    admin: [UserRoles.admin, UserRoles.superUser],
    moderator: [UserRoles.admin, UserRoles.superUser, UserRoles.moderator],
    all: [UserRoles.admin, UserRoles.superUser, UserRoles.moderator, UserRoles.member],
}

export const User = {
    getUser: (): Promise<User> => request("/v1/internal/people/user"),
  };