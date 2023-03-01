import { Module } from '@nestjs/common';
import { PlatformUtilityModule } from '@servicelabsco/nestjs-utility-services';
import es6Classes from './es6.classes';

@Module({
    imports: [PlatformUtilityModule],
    providers: [...es6Classes.services],
    exports: [...es6Classes.services],
})
export class CommonModule {}
