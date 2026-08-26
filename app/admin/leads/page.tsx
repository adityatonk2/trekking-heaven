import type { Metadata } from 'next';
import LeadsTable from '@/components/admin/LeadsTable';

export const metadata: Metadata = {
  title: 'Admin — Leads',
};

export default function AdminLeadsPage() {
  return (
    <main className="admin-page">
      <LeadsTable />
    </main>
  );
}
