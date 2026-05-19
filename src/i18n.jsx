import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORE_KEY = 'domanivka.lang';
const LanguageContext = createContext({ lang: 'en', setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORE_KEY);
      if (saved === 'en' || saved === 'uk') setLangState(saved);
    } catch (_) {}
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next);
    try { localStorage.setItem(STORE_KEY, next); } catch (_) {}
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

export function T({ en, uk, as: Tag = 'span', ...rest }) {
  const { lang } = useLang();
  return <Tag {...rest}>{lang === 'uk' ? uk : en}</Tag>;
}
