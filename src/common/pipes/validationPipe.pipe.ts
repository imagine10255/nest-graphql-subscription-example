import {PipeTransform, Injectable, ArgumentMetadata, BadRequestException} from '@nestjs/common';
import {validate} from 'class-validator';
import {plainToClass, plainToClassFromExist} from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform {
    async transform(value: any, {metatype}: ArgumentMetadata) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }


        const object = plainToClass(metatype, value);

        // whitelist 刪除任何未定義的DTO屬性, skipMissingProperties: 忽略為NULL直的屬性檢查
        const errors = await validate(object, {skipMissingProperties: true, whitelist: true});
        if (errors.length > 0) {
            const {constraints} = errors[0];
            const firstKey = Object.keys(constraints)[0];

            throw new BadRequestException(constraints[firstKey]);
        }
        return object;
    }

    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
};
