import React, {useMemo} from 'react';
import {Components} from '../../components';
import {useAppSelector} from '../../store/hooks';
import {UI} from '../../ui';
import {styles} from './styles';

export const Bookmarks: React.FC = () => {
  const bookmarks = useAppSelector(state => state.projects.bookmarks);

  const renderBookmarks = useMemo(() => {
    return bookmarks.map((item: any) => (
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
