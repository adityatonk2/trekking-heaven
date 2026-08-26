import { NextResponse, type NextRequest } from 'next/server';
import { listLeads, LEAD_STATUSES, type LeadStatus } from '@/lib/leads';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const source = searchParams.get('source');
  const status = searchParams.get('status');

  try {
    const leads = await listLeads({
      source:
        source === 'contact' || source === 'customize' || source === 'popup'
          ? source
          : undefined,
      status: LEAD_STATUSES.includes(status as LeadStatus) ? (status as LeadStatus) : undefined,
    });
    return NextResponse.json({ leads });
  } catch (err) {
    console.error('Failed to list leads:', err);
    return NextResponse.json({ error: 'Failed to load leads' }, { status: 500 });
  }
}
