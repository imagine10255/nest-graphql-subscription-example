import {
    ArrayNotEmpty,
    IsArray,
    IsDefined,
    IsNotEmpty,
    IsNumber,
    IsObject,
    IsString,
    Length, Matches,
    Max,
    Min
} from 'class-validator';
import {Transform, Type} from 'class-transformer';
import {toNumber, toNumberOrNull} from '../../utils/transform';

export class DeleteDataDto {
    @IsDefined()
    @IsArray()
    @ArrayNotEmpty()
    @Matches(/^[\d+]+$/, undefined, { each: true })
    readonly ids: number[];

}


export class PaginationDto {
    @IsNotEmpty({message: 'number of pages must be specified'})
    @IsNumber()
    @Transform(toNumber)
    readonly currentPage: number;

    @IsNotEmpty({message: 'Must provide a page to display the number of strokes'})
    @IsNumber()
    @Min(8)
    @Max(200)
    @Transform(toNumber)
    readonly pageLimit: number;

    @IsString()
    readonly keyword: string;

    @IsObject()
    readonly order: {
        readonly orderField: string;
        readonly orderBy: 'DESC'|'ASC';
    };
}
