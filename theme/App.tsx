import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { pages } from '../utils/pageData';
// Code highlighting
import 'prismjs/themes/prism.css';
import 'normalize.css';
import './App.css';

import { Layout } from './Layout';
import { Pages } from './Pages';
import { Page } from './Page';
import { Tags } from './Tags';

export default function App() {
  useScrollToTop();
  useScrollToAnchor();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Pages pages={pages} />}></Route>
        <Route path="/tags" element={<Tags />}></Route>
        <Route path="/tags/:tagSlug" element={<Tags />}></Route>
        {pages.map((page) => {
          return (
            <Route
              key={page.slug}
              path={`/${page.slug}`}
              element={<Page page={page}></Page>}
            ></Route>
          );
        })}
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Route>
    </Routes>
  );
}

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function useScrollToAnchor() {
  const { hash } = useLocation();
  useEffect(() => {
    const anchor = document.getElementById(hash.slice(1));
    anchor?.scrollIntoView({ behavior: 'smooth' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
