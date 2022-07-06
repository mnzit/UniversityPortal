import { Gender } from "../genderType";

export interface UserDetail {
    id: number,
    firstName: string,
    lastName: string,
    genderType: Gender,
    address: string,
    contactNo: string,
    emailAddress: string,
    password: string,
    role: string,
}