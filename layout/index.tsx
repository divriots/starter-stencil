/* @jsx h */
import { h } from '@stencil/core';
import Layout from '@divriots/dockit-stencil/layout';

export default ({ __context }, children) => (
  <div style={{ '--dockit-layout-accent': 'rgb(238,82,82)' }}>
    <Layout
      __context={__context}
      logoURL="https://dam.malt.com/rebranding2020/malt-logo/malt-red"
    >
      {children}
    </Layout>
  </div>
);
