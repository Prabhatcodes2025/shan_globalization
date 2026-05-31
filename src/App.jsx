import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AdminProtectedRoute from './components/admin/AdminProtectedRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const AnnouncementPage = lazy(() => import('./pages/AnnouncementPage'));
const NdaCompliancePage = lazy(() => import('./pages/NdaCompliancePage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const AdminLayout = lazy(() => import('./components/admin/AdminLayout'));
const AdminLoginPage = lazy(() => import('./pages/admin/AdminLoginPage'));
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage'));
const AdminAnnouncementsPage = lazy(() => import('./pages/admin/AdminAnnouncementsPage'));
const AdminCareersPage = lazy(() => import('./pages/admin/AdminCareersPage'));

function App() {
  return (
    <Suspense fallback={<div className="route-loading" aria-label="Loading page" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/announcement" element={<AnnouncementPage />} />
          <Route path="/nda-compliance" element={<NdaCompliancePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Route>

        <Route path="/admin/login" element={<AdminLoginPage />} />

        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="announcements" element={<AdminAnnouncementsPage />} />
            <Route path="careers" element={<AdminCareersPage />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
