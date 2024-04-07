import { Routes , Route } from 'react-router-dom'

import  MainPage from '../pages/MainPage/MainPage.jsx'  //Импорт стартовой страницы
import  RatePage from '../pages/RatePage/RatePage.jsx' //Импорт страницы оценки
import  CommentPage from '../pages/CommentPage/CommentPage.jsx' //Импорт страницы комментирования
import  LastPage from '../pages/LastPage/LastPage.jsx' //Импорт прощальной страницы

import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx' //Импорт страницы ошибочного запроса
import AnalyticsMain from '../pages/Analytics/AnalyticsMain.jsx'
import AnalyticsAll from '../pages/Analytics/AnalyticsAll.jsx'
import AnalyticsAllMonth from '../pages/Analytics/AnalyticsAllMonth.jsx'
import AnalyticsAllWeek from '../pages/Analytics/AnalyticsAllWeek.jsx'
import AnalyticsAllDay from '../pages/Analytics/AnalyticsAllDay.jsx'

export default function Base() {

  return (
		<Routes>
		<Route path='/feedback/' element={<MainPage/>}> </Route>
		<Route path='/feedback/rate/' element={<RatePage/>}> </Route>
		<Route path='/feedback/comment/' element={<CommentPage/>}> </Route>
		<Route path='/feedback/last/' element={<LastPage/>}> </Route>
		<Route path='*' element={<ErrorPage/>}> </Route>
		<Route path='/analytics' element={<AnalyticsMain/>}> </Route>
		<Route path='/analytics/all' element={<AnalyticsAll/>}> </Route>
		<Route path='/analytics/all/month' element={<AnalyticsAllMonth/>}> </Route>
		<Route path='/analytics/all/week' element={<AnalyticsAllWeek/>}> </Route>
		<Route path='/analytics/all/day' element={<AnalyticsAllDay/>}> </Route>
		</Routes>
  );
}