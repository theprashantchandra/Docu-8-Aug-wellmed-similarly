/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React , {useState} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import styles from './styles.module.css';
import Record from './Application.json';
import index from '../theme/CodeBlock/index'

const x=1

// {Records.map((element) => {
//  return (
//       const y = [] = {element.surname}
// })}


const features = [
  {
    // hide_title: 'Resources',
    title: 'Resources1',
    content:(
      <>
      <li><Link onClick={(event) => {event.preventDefault(); alert ("Please login first");} }  href="/docs/adding-a-stylesheet">Onboarding</Link></li>
      {/* <li><a href="https://wallpapercave.com/wp/wp2722928.jpg">Onboarding gudsi</a></li> */}
      <li><a href="https://th.bing.com/th/id/R.386b04ef43de20783cfd91c058341870?rik=a9yu2AIrdgLhSA&riu=http%3a%2f%2fwww.diyatvusa.com%2fwp-content%2fuploads%2f2017%2f01%2findian-flag-photos-hd-wallpapers-download-free.jpg&ehk=R03DM5RZTrpOZhbzjzQzwO3%2fKLpnx9%2bCvjUoQAVq6NU%3d&risl=&pid=ImgRaw&r=0">Onboarding gudsi</a></li>
      </>
    ),
  },
  {
    title: 'Resources2',
    content:(
      <>
      <li><a href="/pages">Onboarding2</a></li>
      <li><a href="#">Onboarding gudsi2</a></li>
      </>
    ),
    description:(
      <>
      <li><a href="/pages">Onboarding3</a></li>
      <li><a href="#">Onboarding gudsi3</a></li>
      </>
    ),
  },
  {
    title: 'Resources3',
    content:(
      <>
      <li><a href="/pages">Onboarding3</a></li>
      <li><a href="#">Onboarding gudsi3</a></li>
      </>
    ),
  }
  
];

function Home() {

  // const [articles, setArticles] = useState([]);
  // const fetchData = async () => {
  
  // const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f684e81c17004486bba3f79eccb8ed25`;
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // setArticles(parsedData.articles);

  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  
  return (
    <Layout
      permalink={'/'}
      description={'Set up a modern web app by running one command.'}
    >
      <div className={clsx('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            alt="Create React App logo"
            src={useBaseUrl('img/logo.svg')}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.getStarted}>
          <index/>
            <Link
              className="button button--outline button--primary button--lg"
              to={useBaseUrl('docs/getting-started')}
            >
               <div>{Record.map(records=>{
              return(
                <img  src={records.name} width="300" height="150"></img>
              )
            })}</div>
            </Link>
           {/* <div>
             {Records.map((element) => {
              return (
                <div key={element.surname}>
                   const y = [] = {element.surname}
                  console.log(y)
                </div>
              );
            })}
            </div> */}
          </div>
        </div>
      </div>
      {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title,content,description }, idx) => (
                <div key={idx} className={clsx('col col--4', styles.feature)}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className={styles.gettingStartedSection}>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <h2>Get started in seconds</h2>
              <p>
                Whether you’re using React or another library, Create React App
                lets you <strong>focus on code, not build tools</strong>.
                <br />
                <br />
                To create a project called <i>my-app</i>, run this command:
              </p>
              <CodeBlock className="language-sh">
                npx create-react-app my-app
              </CodeBlock>
              <br />
            </div>
            <div className="col col--5 col--offset-1">
              <img
                className={styles.featureImage}
                alt="Easy to get started in seconds"
                src={
                  'https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667'
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <img
                className={styles.featureImage}
                alt="Easy to update"
                src={useBaseUrl('img/update.png')}
              />
            </div>
            <div className="col col--5 col--offset-1">
              <h2>Easy to Maintain</h2>
              <p>
                Updating your build tooling is typically a daunting and
                time-consuming task. When new versions of Create React App are
                released, you can upgrade using a single command:
              </p>
              <CodeBlock className="language-sh">
                npm install react-scripts@latest
              </CodeBlock>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
