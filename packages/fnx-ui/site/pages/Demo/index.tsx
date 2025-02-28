import React, { FC, LazyExoticComponent, Suspense, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { ConfigProvider } from '../../../src';
import '../../../src/index.less';
import enUS from '../../../src/locale/en-US';
import zhCN from '../../../src/locale/zh-CN';
import { classnames, createBEM } from '../../../src/utils/namespace';
import { DEMO_DATA } from '../../demo-data';
import useTheme from '../../hooks/use-theme';
import { parseSearchParams } from '../../utils/history-utils';
import DemoContext from './context';
import './index.less';
import './touch';

const bem = createBEM('demo');

const Demo: FC = () => {
	const { search } = useLocation();

	const {
		demo: Cmp,
		locale,
		key,
		theme,
	} = useMemo(() => {
		const query = parseSearchParams(search);

		const key = query.component;
		const locale = query.locale === 'zh-CN' ? 'zh-CN' : 'en-US';
		const demo: LazyExoticComponent<any> | undefined = DEMO_DATA[key];
		const theme = query.theme === 'dark' ? 'dark' : 'light';

		return {
			demo,
			locale,
			key,
			theme,
		};
	}, [search]);

	useTheme(theme);

	return (
		<DemoContext.Provider value={{ locale, theme }}>
			<ConfigProvider locale={locale === 'zh-CN' ? zhCN : enUS}>
				<section
					className={classnames(
						bem({ [`${theme}`]: theme !== 'light' }),
						`demo-${key}`,
					)}
				>
					{Cmp != null && (
						<Suspense fallback={<></>}>
							<Cmp />
						</Suspense>
					)}
				</section>
			</ConfigProvider>
		</DemoContext.Provider>
	);
};

Demo.displayName = 'Demo';

export default Demo;
