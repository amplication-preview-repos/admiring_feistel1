/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DataExtractionWhereInput } from "./DataExtractionWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class DataExtractionCountArgs {
  @ApiProperty({
    required: false,
    type: () => DataExtractionWhereInput,
  })
  @Field(() => DataExtractionWhereInput, { nullable: true })
  @Type(() => DataExtractionWhereInput)
  where?: DataExtractionWhereInput;
}

export { DataExtractionCountArgs as DataExtractionCountArgs };
