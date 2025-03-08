import { Body, Controller, Injectable, Post } from "@nestjs/common";
import { SignupBodyDto } from "../dto/open.api.dto";
import { ApiTags } from "@nestjs/swagger";


@ApiTags("open auth apis")
@Controller()
export class OpenAuthApis {
    constructor() { }

    @Post("signup")
    UserSignup(@Body() signupBody: SignupBodyDto) {
        console.log("Signup body", signupBody)
        return { msg: "Signup api done" }
    }

    @Post("signin")
    UserSignin(@Body() signupBody: SignupBodyDto) {
        console.log("Signup body", signupBody)
        return { msg: "Signup api done" }
    }
}