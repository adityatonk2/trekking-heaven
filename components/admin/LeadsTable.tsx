'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, Mail, Phone, RefreshCw, Trash2 } from 'lucide-react';

interface TripRequirements {
  startDate?: string;
  endDate?: string;
  duration?: string;
  location?: string;
  participants?: string;
  ageGroup?: string;
  budget?: string;
  serviceType?: string;
  extra?: string;
}

interface Lead {
  _id: string;
  source: 'contact' | 'customize' | 'popup';
  name: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  trekInterest?: string;
  tripRequirements?: TripRequirements;
  status: 'new' | 'contacted' | 'closed';
  createdAt: string;
}

type FetchState = 'loading' | 'ready' | 'error';

const SOURCE_LABEL: Record<Lead['source'], string> = {
  contact: 'Contact Form',
  customize: 'Customize Trek',
  popup: 'Quick Query',
};

const STATUS_OPTIONS: Lead['status'][] = ['new', 'contacted', 'closed'];

export default function LeadsTable() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [state, setState] = useState<FetchState>('loading');
  const [sourceFilter, setSourceFilter] = useState<'all' | Lead['source']>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | Lead['status']>('all');
  const [pendingId, setPendingId] = useState<string | null>(null);

  const fetchLeads = useCallback(async () => {
    setState('loading');
    try {
      const params = new URLSearchParams();
      if (sourceFilter !== 'all') params.set('source', sourceFilter);
      if (statusFilter !== 'all') params.set('status', statusFilter);

      const res = await fetch(`/api/admin/leads?${params.toString()}`);
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      if (!res.ok) throw new Error('Failed to load leads');
      const data = await res.json();
      setLeads(data.leads);
      setState('ready');
    } catch {
      setState('error');
    }
  }, [sourceFilter, statusFilter, router]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const handleStatusChange = async (id: string, status: Lead['status']) => {
    setPendingId(id);
    setLeads((prev) => prev.map((l) => (l._id === id ? { ...l, status } : l)));
    try {
      await fetch(`/api/admin/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
    } finally {
      setPendingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this lead? This cannot be undone.')) return;
    setPendingId(id);
    try {
      const res = await fetch(`/api/admin/leads/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l._id !== id));
      }
    } finally {
      setPendingId(null);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  const counts = useMemo(
    () => ({
      total: leads.length,
      new: leads.filter((l) => l.status === 'new').length,
    }),
    [leads]
  );

  return (
    <div className="admin-leads">
      <header className="admin-leads-header">
        <div>
          <h1 className="admin-leads-title">Leads</h1>
          <p className="admin-leads-subtitle">
            {state === 'ready'
              ? `${counts.total} lead${counts.total === 1 ? '' : 's'} · ${counts.new} new`
              : 'Loading…'}
          </p>
        </div>
        <div className="admin-leads-header-actions">
          <button type="button" className="btn btn-secondary" onClick={fetchLeads} aria-label="Refresh">
            <RefreshCw size={16} /> Refresh
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleLogout}>
            <LogOut size={16} /> Log Out
          </button>
        </div>
      </header>

      <div className="admin-leads-filters">
        <label>
          Source
          <select value={sourceFilter} onChange={(e) => setSourceFilter(e.target.value as typeof sourceFilter)}>
            <option value="all">All</option>
            <option value="contact">Contact Form</option>
            <option value="customize">Customize Trek</option>
            <option value="popup">Quick Query</option>
          </select>
        </label>
        <label>
          Status
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}>
            <option value="all">All</option>
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      {state === 'loading' && <p className="admin-leads-empty">Loading leads…</p>}
      {state === 'error' && (
        <p className="admin-leads-empty admin-leads-error">
          Couldn&apos;t load leads. <button type="button" onClick={fetchLeads}>Try again</button>
        </p>
      )}
      {state === 'ready' && leads.length === 0 && (
        <p className="admin-leads-empty">No leads match these filters yet.</p>
      )}

      {state === 'ready' && leads.length > 0 && (
        <div className="admin-leads-list">
          {leads.map((lead) => (
            <article key={lead._id} className={`admin-lead-card admin-lead-status-${lead.status}`}>
              <div className="admin-lead-card-top">
                <div>
                  <span className="admin-lead-source">{SOURCE_LABEL[lead.source]}</span>
                  <h2 className="admin-lead-name">{lead.name}</h2>
                </div>
                <time className="admin-lead-date" dateTime={lead.createdAt}>
                  {new Date(lead.createdAt).toLocaleString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </time>
              </div>

              <div className="admin-lead-contact">
                {lead.email && (
                  <a href={`mailto:${lead.email}`}>
                    <Mail size={14} /> {lead.email}
                  </a>
                )}
                {lead.phone && (
                  <a href={`tel:${lead.phone}`}>
                    <Phone size={14} /> {lead.phone}
                  </a>
                )}
              </div>

              {lead.source === 'contact' ? (
                <div className="admin-lead-details">
                  {lead.subject && <p><strong>Subject:</strong> {lead.subject}</p>}
                  {lead.message && <p className="admin-lead-message">{lead.message}</p>}
                </div>
              ) : lead.source === 'popup' ? (
                <div className="admin-lead-details">
                  {lead.trekInterest && <p><strong>Interested in:</strong> {lead.trekInterest}</p>}
                  {lead.message && <p className="admin-lead-message">{lead.message}</p>}
                </div>
              ) : (
                <dl className="admin-lead-trip-grid">
                  {lead.tripRequirements?.serviceType && (
                    <div><dt>Service</dt><dd>{lead.tripRequirements.serviceType}</dd></div>
                  )}
                  {lead.tripRequirements?.duration && (
                    <div><dt>Duration</dt><dd>{lead.tripRequirements.duration}</dd></div>
                  )}
                  {lead.tripRequirements?.location && (
                    <div><dt>Location</dt><dd>{lead.tripRequirements.location}</dd></div>
                  )}
                  {lead.tripRequirements?.participants && (
                    <div><dt>Participants</dt><dd>{lead.tripRequirements.participants}</dd></div>
                  )}
                  {lead.tripRequirements?.ageGroup && (
                    <div><dt>Age Group</dt><dd>{lead.tripRequirements.ageGroup}</dd></div>
                  )}
                  {lead.tripRequirements?.budget && (
                    <div><dt>Budget</dt><dd>{lead.tripRequirements.budget}</dd></div>
                  )}
                  {(lead.tripRequirements?.startDate || lead.tripRequirements?.endDate) && (
                    <div>
                      <dt>Dates</dt>
                      <dd>
                        {lead.tripRequirements?.startDate || '?'} to {lead.tripRequirements?.endDate || '?'}
                      </dd>
                    </div>
                  )}
                  {lead.tripRequirements?.extra && (
                    <div className="admin-lead-trip-extra">
                      <dt>Extra Details</dt>
                      <dd>{lead.tripRequirements.extra}</dd>
                    </div>
                  )}
                </dl>
              )}

              <div className="admin-lead-actions">
                <select
                  value={lead.status}
                  disabled={pendingId === lead._id}
                  onChange={(e) => handleStatusChange(lead._id, e.target.value as Lead['status'])}
                >
                  {STATUS_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="admin-lead-delete"
                  disabled={pendingId === lead._id}
                  onClick={() => handleDelete(lead._id)}
                  aria-label={`Delete lead from ${lead.name}`}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
