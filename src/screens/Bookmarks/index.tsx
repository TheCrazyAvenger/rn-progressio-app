import I18n from 'i18n-js';
import React, {useMemo} from 'react';
import {IProject} from '..';
import {Components} from '../../components';
import {useAppSelector} from '../../store/hooks';
import {UI} from '../../ui';

export const Bookmarks: React.FC = () => {
  const bookmarks = useAppSelector(state => state.projects.bookmarks);

  const renderBookmarks = useMemo(() => {
    return bookmarks.map((item: IProject) => (
      <Components.ProjectItem key={item.id} data={item} />
    ));
  }, [bookmarks]);

  const renderScreen = () =>
    bookmarks[0] ? (
      <UI.Root>{renderBookmarks}</UI.Root>
    ) : (
      <Components.EmptyList title={I18n.t('empty')} />
    );

  return renderScreen();
};
