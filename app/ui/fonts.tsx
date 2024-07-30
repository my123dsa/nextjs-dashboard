import {Inter,Lusitana} from 'next/font/google';

export const inter=Inter({subsets:['latin']})
export const lusitana = Lusitana({
    subsets: ['latin'],    // 필요한 서브셋을 설정
    weight: ['400', '700'] // 사용할 폰트 웨이트 설정
  });