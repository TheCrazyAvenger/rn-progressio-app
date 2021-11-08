import I18n from 'i18n-js';
import React, {useMemo} from 'react';
import {IProject} from '..';
import {EmptyList, ProjectItem} from '../../components';
import {useAppSelector} from '../../store/hooks';
import {Root} from '../../ui';

export const Bookmarks: React.FC = () => {
  const bookmarks = useAppSelector(state => state.projects.bookmarks);

  const renderBookmarks = useMemo(() => {
    return bookmarks.map((item: IProject) => (
      <ProjectItem key={item.id} data={item} />
    ));
  }, [bookmarks]);

  const renderScreen = () =>
    bookmarks[0] ? (
      <Root>{renderBookmarks}</Root>
    ) : (
      <EmptyList title={I18n.t('empty')} />
    );

  return renderScreen();
};
