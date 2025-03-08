import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString, Length } from "class-validator";

export class SignupBodyDto {
    @ApiProperty({
        example: 'John',
        description: 'The first name of the user',
        required: true,
    })
    @IsString()
    @Length(1, 50)
    firstName: string;

    @ApiProperty({
        example: 'Doe',
        description: 'The last name of the user',
        required: true,
    })
    @IsString()
    @Length(1, 50)
    lastName: string;

    @ApiProperty({
        example: 'john.doe@example.com',
        description: 'The email address of the user',
        required: true,
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        example: '+1234567890',
        description: 'The mobile number of the user',
        required: false,
    })
    @IsOptional()
    @IsString()
    @Length(10, 15)
    mobileNumber?: string;

    @ApiProperty({
        example: 'securePassword123',
        description: 'The password for the user account',
        required: false,
    })
    @IsOptional()
    @IsString()
    @Length(8, 100)
    password?: string;
}


export class SignInDto {
    
}