import React from 'react'
import Head from 'next/head'

const ExperimentPage = (props) => {
  return (
    <>
      <div className="experiment-page-container">
        <Head>
          <title>experiment-page - lena-cms</title>
          <meta property="og:title" content="experiment-page - lena-cms" />
        </Head>
        <div className="experiment-page-sidebar">
          <nav className="experiment-page-nav">
            <svg viewBox="0 0 1024 1024" className="experiment-page-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
            <span className="experiment-page-text">Dashboard</span>
            <span className="experiment-page-text1">Calendar</span>
            <span className="experiment-page-text2">Team</span>
            <span className="experiment-page-text3">Documents</span>
            <span>Reports</span>
          </nav>
          <div className="experiment-page-profile">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1562159278-1253a58da141?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxtYW4lMjBwb3J0dHJhaXR8ZW58MHx8fHwxNjI3MjkzNTM1&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="experiment-page-image"
            />
            <div className="experiment-page-container1">
              <span className="experiment-page-text5">John Doe</span>
              <span className="experiment-page-text6">View Profile</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .experiment-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .experiment-page-sidebar {
            width: 300px;
            height: 80vh;
            display: flex;
            padding: 32px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .experiment-page-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .experiment-page-icon {
            width: 16px;
            height: 16px;
            margin-bottom: 32px;
          }
          .experiment-page-text {
            margin-bottom: 32px;
          }
          .experiment-page-text1 {
            margin-bottom: 32px;
          }
          .experiment-page-text2 {
            margin-bottom: 32px;
          }
          .experiment-page-text3 {
            margin-bottom: 32px;
          }
          .experiment-page-profile {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            justify-content: flex-start;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .experiment-page-image {
            width: 48px;
            height: 48px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .experiment-page-container1 {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .experiment-page-text5 {
            font-size: 1.15rem;
            font-style: normal;
            font-weight: 600;
            margin-bottom: 0.25rem;
          }
          .experiment-page-text6 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
          }
          @media (max-width: 991px) {
            .experiment-page-profile {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .experiment-page-image {
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .experiment-page-icon {
              display: flex;
            }
          }
        `}
      </style>
    </>
  )
}

export default ExperimentPage
