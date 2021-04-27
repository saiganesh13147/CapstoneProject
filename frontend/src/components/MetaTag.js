import React from 'react'
import { Helmet } from 'react-helmet'

const MetaTag = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

MetaTag.defaultProps = {
  title: 'Welcome To Sello MarketPlace',
  description: 'Where Buyers Meet Sellers',
  keywords: 'electronics, buy electronics, sell electroincs, best electronics',
}

export default MetaTag
