import React, { useCallback, useEffect, useState } from 'react';
import { Users, Briefcase, Megaphone, Shield, Search, Filter, X, RefreshCw } from 'lucide-react';
import { toast } from 'react-toastify';
import { usePageMeta } from '../../usePageMeta';
import API_BASE_URL from '../../config/api';
import './AdminDashboard.css';

const API_BASE = `${API_BASE_URL}/api/admin`;

const authHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('token') || ''}`
});

const formatDate = (iso) => {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
};

const StatCard = ({ icon, label, value, accent }) => (
  <div className={`stat-card stat-card-${accent}`}>
    <div className="stat-card-icon">{React.createElement(icon, { size: 20 })}</div>
    <div className="stat-card-body">
      <div className="stat-card-label">{label}</div>
      <div className="stat-card-value">{value ?? '—'}</div>
    </div>
  </div>
);

const UserDetailDrawer = ({ userId, onClose }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    setError('');
    fetch(`${API_BASE}/users/${userId}`, { headers: authHeaders() })
      .then(r => r.json())
      .then(data => {
        if (data.success) setUser(data.user);
        else setError(data.message || 'Failed to load user');
      })
      .catch(() => setError('Network error'))
      .finally(() => setLoading(false));
  }, [userId]);

  if (!userId) return null;

  return (
    <div className="admin-drawer-backdrop" onClick={onClose}>
      <div className="admin-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="admin-drawer-header">
          <h2>User Details</h2>
          <button className="admin-drawer-close" onClick={onClose}><X size={18} /></button>
        </div>

        {loading && <div className="admin-drawer-loading">Loading…</div>}
        {error && <div className="admin-drawer-error">{error}</div>}

        {user && (
          <div className="admin-drawer-body">
            <section>
              <h3>Account</h3>
              <dl>
                <dt>Name</dt><dd>{user.name}</dd>
                <dt>Email</dt><dd>{user.email}</dd>
                <dt>Role</dt><dd><span className={`role-badge role-${user.userType.replace(/\s+/g, '-').toLowerCase()}`}>{user.userType}</span></dd>
                <dt>Verified</dt><dd>{user.isVerified ? 'Yes' : 'No'}</dd>
                <dt>Active</dt><dd>{user.isActive ? 'Yes' : 'No'}</dd>
                <dt>Registered</dt><dd>{formatDate(user.createdAt)}</dd>
                <dt>Last login</dt><dd>{formatDate(user.lastLogin)}</dd>
                <dt>IP address</dt><dd>{user.ipAddress || '—'}</dd>
              </dl>
            </section>

            {user.userType === 'Join as Brand' && user.brandDetails && (() => {
              const b = user.brandDetails;
              const desired = (b.desiredInfluencerNiches && b.desiredInfluencerNiches.length)
                ? b.desiredInfluencerNiches
                : (b.desiredInfluencerNiche ? [b.desiredInfluencerNiche] : []);
              const brandNiches = (b.niches && b.niches.length)
                ? b.niches
                : (b.niche ? [b.niche] : []);
              return (
                <section>
                  <h3>Brand Details</h3>
                  <dl>
                    <dt>Product Categories</dt><dd>{(b.productTypes || []).join(', ') || '—'}</dd>
                    <dt>Looking For</dt><dd>{desired.join(', ') || '—'}</dd>
                    <dt>Brand Niches</dt><dd>{brandNiches.join(', ') || '—'}</dd>
                    <dt>Country</dt><dd>{b.country || '—'}</dd>
                    <dt>State</dt><dd>{b.state || '—'}</dd>
                    <dt>Location (IP)</dt><dd>{b.location || '—'}</dd>
                  </dl>
                </section>
              );
            })()}

            {user.userType === 'Join as Creator' && user.creatorDetails && (() => {
              const c = user.creatorDetails;
              const niches = (c.niches && c.niches.length)
                ? c.niches
                : (c.niche ? [c.niche] : []);
              const languages = (c.contentLanguages && c.contentLanguages.length)
                ? c.contentLanguages
                : (c.contentLanguage ? [c.contentLanguage] : []);
              const platforms = (c.platforms && c.platforms.length)
                ? c.platforms
                : (c.platform ? [{ name: c.platform, followers: c.followers || 0, profileLink: c.profileLink || '' }] : []);
              return (
                <section>
                  <h3>Creator Details</h3>
                  <dl>
                    <dt>Niches</dt><dd>{niches.join(', ') || '—'}</dd>
                    <dt>Content Languages</dt><dd>{languages.join(', ') || '—'}</dd>
                    <dt>Country</dt><dd>{c.country || '—'}</dd>
                    <dt>State</dt><dd>{c.state || '—'}</dd>
                    <dt>Location (IP)</dt><dd>{c.location || '—'}</dd>
                  </dl>
                  <h4>Platforms</h4>
                  {platforms.length === 0 ? (
                    <p className="admin-muted">No platforms listed.</p>
                  ) : (
                    <table className="admin-inner-table">
                      <thead>
                        <tr><th>Platform</th><th>Followers</th><th>Profile Link</th></tr>
                      </thead>
                      <tbody>
                        {platforms.map((p, i) => (
                          <tr key={i}>
                            <td>{p.name}</td>
                            <td>{p.followers?.toLocaleString?.() ?? p.followers}</td>
                            <td>{p.profileLink ? <a href={p.profileLink} target="_blank" rel="noreferrer">{p.profileLink}</a> : '—'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </section>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  usePageMeta('Admin Dashboard | SocialMelo', 'Internal admin dashboard for managing SocialMelo users.');

  const adminUser = JSON.parse(localStorage.getItem('user') || 'null');

  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const loadStats = useCallback(() => {
    fetch(`${API_BASE}/stats`, { headers: authHeaders() })
      .then(r => r.json())
      .then(data => { if (data.success) setStats(data.stats); })
      .catch(() => {});
  }, []);

  const loadUsers = useCallback((page = 1) => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page), limit: '25' });
    if (filter !== 'all') params.set('userType', filter);
    if (search.trim()) params.set('search', search.trim());

    fetch(`${API_BASE}/users?${params.toString()}`, { headers: authHeaders() })
      .then(r => r.json())
      .then(data => {
        if (data.success) {
          setUsers(data.users);
          setPagination(data.pagination);
        } else {
          toast.error(data.message || 'Failed to load users');
        }
      })
      .catch(() => toast.error('Network error loading users'))
      .finally(() => setLoading(false));
  }, [filter, search]);

  useEffect(() => { loadStats(); }, [loadStats]);
  useEffect(() => { loadUsers(1); }, [loadUsers]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    loadUsers(1);
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-header-left">
          <Shield size={24} className="admin-header-icon" />
          <div>
            <h1>Admin Dashboard</h1>
            <p>Signed in as {adminUser?.name} ({adminUser?.email})</p>
          </div>
        </div>
        <div className="admin-header-actions">
          <button className="admin-btn admin-btn-ghost" onClick={() => { loadStats(); loadUsers(pagination.page); }}>
            <RefreshCw size={16} /> Refresh
          </button>
        </div>
      </header>

      <section className="admin-stats">
        <StatCard icon={Users} label="Total Users" value={stats?.total} accent="purple" />
        <StatCard icon={Briefcase} label="Brands" value={stats?.brands} accent="orange" />
        <StatCard icon={Megaphone} label="Creators" value={stats?.creators} accent="pink" />
        <StatCard icon={Shield} label="Admins" value={stats?.admins} accent="slate" />
      </section>

      <section className="admin-controls">
        <div className="admin-filter">
          <Filter size={16} />
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All users</option>
            <option value="Join as Brand">Brands</option>
            <option value="Join as Creator">Creators</option>
            <option value="Author">Authors</option>
          </select>
        </div>
        <form className="admin-search" onSubmit={handleSearchSubmit}>
          <Search size={16} />
          <input
            type="text"
            placeholder="Search name or email…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </section>

      <section className="admin-table-wrap">
        {loading ? (
          <div className="admin-loading">Loading users…</div>
        ) : users.length === 0 ? (
          <div className="admin-empty">No users match the current filter.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Country</th>
                <th>Registered</th>
                <th>Last login</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => {
                const country = u.brandDetails?.country || u.creatorDetails?.country || '—';
                return (
                  <tr key={u._id} onClick={() => setSelectedUserId(u._id)}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td><span className={`role-badge role-${u.userType.replace(/\s+/g, '-').toLowerCase()}`}>{u.userType}</span></td>
                    <td>{country}</td>
                    <td>{formatDate(u.createdAt)}</td>
                    <td>{formatDate(u.lastLogin)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        {pagination.totalPages > 1 && (
          <div className="admin-pagination">
            <button
              disabled={pagination.page <= 1}
              onClick={() => loadUsers(pagination.page - 1)}
            >Prev</button>
            <span>Page {pagination.page} of {pagination.totalPages} · {pagination.total} users</span>
            <button
              disabled={pagination.page >= pagination.totalPages}
              onClick={() => loadUsers(pagination.page + 1)}
            >Next</button>
          </div>
        )}
      </section>

      <UserDetailDrawer userId={selectedUserId} onClose={() => setSelectedUserId(null)} />
    </div>
  );
};

export default AdminDashboard;
