import React from 'react';
import { cn } from '@bem-react/classname';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Button as ButtonPresenter } from 'components/Button/Button';
import { withButtonViewDefault } from 'components/Button/_view/Button_view_default';
import { compose, composeU } from '@bem-react/core';
import { withIconTypeLogo } from 'components/Icon/_type/Icon_type_logo';
import { Icon as IconPresenter } from 'components/Icon/Icon';
import { withIconTypeGear } from 'components/Icon/_type/Icon_type_gear';
import './Home.scss';
import { withButtonSizeS } from 'components/Button/_size/Button_size_s';
import { withButtonSizeM } from 'components/Button/_size/Button_size_m';
import { withButtonViewAction } from 'components/Button/_view/Button_view_action';

const cnHome = cn('HomePage');

const Icon = compose(composeU(withIconTypeLogo, withIconTypeGear))(IconPresenter);

const Button = compose(
  composeU(withButtonViewDefault, withButtonViewAction),
  composeU(withButtonSizeS, withButtonSizeM),
)(ButtonPresenter);

const Home = () => (
  <div className={cnHome()}>
    <Header className="Layout" title="School CI Server">
      <Button view="default" size="s" iconLeft={<Icon type="gear" />}>
        Settings
      </Button>
    </Header>
    <div className={cnHome('Content', ['Layout'])}>
      <Icon type="logo" />
      <p className={cnHome('Description')}>
        Configure repository connection
        <br />
        and synchronization settings
      </p>
      <Button view="action" className={cnHome('Button')} size="m">
        Open settings
      </Button>
    </div>
    <Footer className="Layout" />
  </div>
);

export default Home;
