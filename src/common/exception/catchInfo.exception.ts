import SystemException from './system.exception';

interface IResponse {
    message: string | undefined,
    code?: string | undefined,
    devInfo?: {
        fromSource?: string,
        sql?: string,
        time?: string,
    }
}

export default class CatchInfoException extends SystemException {
    public readonly code;
    public readonly devInfo;

    constructor(
         response: IResponse,
         status: number,
    ) {
        super(response, status);
        this.code = response.code;
        this.devInfo = response.devInfo;

        this.initName();
    }

    public initName(): void {
        this.name = this.constructor.name;
    }

}
