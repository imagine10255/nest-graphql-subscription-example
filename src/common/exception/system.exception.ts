import {HttpException} from '@nestjs/common';

interface IResponse {
    message: string | undefined,
    code?: string | undefined,
}

export default class SystemException extends HttpException {
    public readonly code;
    public readonly devInfo;

    constructor(
         response: IResponse,
         status: number,
    ) {
        super(response.message, status);
        this.code = response.code;

        this.initName();
    }

    public initName(): void {
        this.name = this.constructor.name;
    }


}
