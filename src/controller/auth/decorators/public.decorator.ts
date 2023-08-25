import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'oxygen2023';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
