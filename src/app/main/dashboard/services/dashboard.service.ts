import {Injectable} from '@nestjs/common';
import * as os from 'node-os-utils';
import * as v8 from 'v8';

@Injectable()
export class DashboardService {
    async findOSInfo(): Promise<any> {
        const cpu = os.cpu;
        const mem = os.mem;
        const cpuCount = cpu.count();
        const memoryTotal = ((mem.totalMem() / 1024) / 1024) / 1024;
        const gcHeapStats = v8.getHeapStatistics();
        return {cpuCount, memoryTotal, gcHeapStats};
    }
}
