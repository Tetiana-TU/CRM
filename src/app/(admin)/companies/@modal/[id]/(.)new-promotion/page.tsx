// 'use client';

import React from 'react';
// import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';
import { redirect } from 'next/navigation';
// export interface PageProps {
//   params: { id: string };
// }

export default async function Page({ params }: { params: { id: string } }) {
  // const router = useRouter();
  return (
    <PromotionFormModal
      companyId={params.id}
      show={true}
      onClose={() => redirect('/companies')}
    />
  );
}
