import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RootPage from '@/pages/RootPage';
import FoodRecommendPage from '@/pages/FoodRecommendPage';
import FoodResultPage from '@/pages/FoodResultPage';
import SajuPage from '@/pages/SajuPage';
import PrivacyInfoPage from '@/pages/PrivacyInfoPage';
import TermsPage from '@/pages/TermsPage';
import NotFound from '@/components/error/NotFound';
import ErrorBoundary from '@/components/error/ErrorBoundary';

/**
 * 앱 라우터 설정
 * - errorElement로 에러 처리
 * - 404는 catch-all 라우트로 처리
 * - 런타임 에러는 ErrorBoundary로 처리
 */
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <RootPage /> },
      {
        path: 'food',
        children: [
          { index: true, element: <FoodRecommendPage /> },
          { path: 'result', element: <FoodResultPage /> },
        ],
      },
      { path: 'saju', element: <SajuPage /> },
      { path: 'privacy', element: <PrivacyInfoPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
