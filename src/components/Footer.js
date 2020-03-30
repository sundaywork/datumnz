import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} 达途网 版权所有. {' '}
          <a href="https://koru.kiwi/">银蕨国际</a>提供技术支持.
        </span>
      </div>
    </footer>
  </div>
)
