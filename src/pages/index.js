import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <div className={styles.info}>
          <img
            src={require("@site/static/img/logo.png").default}
            alt="RogueWonk Logo"
          />
          <p className={styles.text}>
            Hello, I'm{" "} 
            <strong>RogueWonk</strong>. Follow along as I attempt to make Minecraft mods.
          </p>
        </div>
      </main>
    </Layout>
  );
}
