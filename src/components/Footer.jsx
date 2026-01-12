import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>产品中心</h4>
            <ul>
              <li>精密仪器</li>
              <li>智能装备</li>
              <li>充换电</li>
              <li>智慧能源</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>新闻资讯</h4>
            <ul>
              <li>公司新闻</li>
              <li>行业动态</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>联系星云</h4>
            <ul>
              <li>联系星云</li>
              <li>人才招聘</li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>福建星云电子股份有限公司(总部)</h4>
            <p>地址：中国·福建自贸区福州片区马尾马江路7号星云科技园</p>
            <p>邮箱：market1@e-nebula.com</p>
            <p>电话：0591-28328897</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 福建星云电子股份有限公司 备案ICP证：闽ICP12015491号</p>
          <div className="footer-links">
            <a href="#">隐私政策</a>
            <span>|</span>
            <a href="#">免责声明</a>
            <span>|</span>
            <a href="#">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

