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

  const renderScreen = () => {
    if (!!bookmarks[0]) {
      return <UI.Root>{renderBookmarks}</UI.Root>;
    } else {
      return <Components.EmptyList />;
    }
  };

  return renderScreen();
};
