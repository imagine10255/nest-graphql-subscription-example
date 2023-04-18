import {Injectable} from '@nestjs/common';
import * as os from 'node-os-utils';
import * as v8 from 'v8';


@Injectable()
export class DashboardService {

    /**
     * 取得啟用的全部項目
   */
    async findOSInfo(): Promise<any> {

        const cpu = os.cpu;
        const mem = os.mem;

        const cpuCount = cpu.count();
        const memoryTotal = ((mem.totalMem() / 1024) / 1024) / 1024;
        // const cpuUse = await cpu.usage();

        // https://stackoverflow.com/questions/41541843/nodejs-v8-getheapstatistics-method/47768386#47768386
        const gcHeapStats = v8.getHeapStatistics();
        // console.log('gcHeapStats', gcHeapStats);

        return {
            cpuCount,
            // cpuUse,
            memoryTotal,
            gcHeapStats,
        };

    }


}
