import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)

  const handleSubmenuToggle = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <span className="logo-icon">N</span>
            <span className="logo-text">星云股份</span>
          </Link>
        </div>
        
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/">首页</Link></li>
            <li><Link to="/">关于星云</Link></li>
            <li className="has-submenu">
              <span onClick={() => handleSubmenuToggle(0)}>研发与创新</span>
              <ul className={`submenu ${activeSubmenu === 0 ? 'active' : ''}`}>
                <li><Link to="/">研发创新</Link></li>
                <li><Link to="/">质量管控</Link></li>
                <li><Link to="/">智能制造</Link></li>
              </ul>
            </li>
            <li className="has-submenu">
              <span onClick={() => handleSubmenuToggle(1)}>产品中心</span>
              <ul className={`submenu ${activeSubmenu === 1 ? 'active' : ''}`}>
                <li><Link to="/">精密仪器</Link></li>
                <li><Link to="/power-battery-automation-solutions">智能装备</Link></li>
                <li><Link to="/">充换电</Link></li>
                <li><Link to="/">智慧能源</Link></li>
                <li><Link to="/">电池检测服务</Link></li>
                <li><Link to="/">后服务市场</Link></li>
              </ul>
            </li>
            <li className="has-submenu">
              <span onClick={() => handleSubmenuToggle(2)}>新闻资讯</span>
              <ul className={`submenu ${activeSubmenu === 2 ? 'active' : ''}`}>
                <li><Link to="/">公司新闻</Link></li>
                <li><Link to="/">行业动态</Link></li>
              </ul>
            </li>
            <li className="has-submenu">
              <span onClick={() => handleSubmenuToggle(3)}>渠道合作</span>
              <ul className={`submenu ${activeSubmenu === 3 ? 'active' : ''}`}>
                <li><Link to="/">渠道查询</Link></li>
                <li><Link to="/">渠道招募</Link></li>
                <li><Link to="/">价格公示</Link></li>
              </ul>
            </li>
            <li className="has-submenu">
              <span onClick={() => handleSubmenuToggle(4)}>投资者关系</span>
              <ul className={`submenu ${activeSubmenu === 4 ? 'active' : ''}`}>
                <li><Link to="/">公司公告</Link></li>
                <li><Link to="/">投资者教育与保护</Link></li>
                <li><Link to="/">投资者联系</Link></li>
              </ul>
            </li>
            <li className="has-submenu">
              <span onClick={() => handleSubmenuToggle(5)}>联系星云</span>
              <ul className={`submenu ${activeSubmenu === 5 ? 'active' : ''}`}>
                <li><Link to="/">联系星云</Link></li>
                <li><Link to="/">人才招聘</Link></li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <input type="text" placeholder="快速检索" />
            <button className="search-btn">🔍</button>
          </div>
          <span className="stock-code">股票代码：300648</span>
          <div className="lang-switcher">
            <span className="lang active">中文</span>
            <span className="lang-divider">/</span>
            <span className="lang">EN</span>
          </div>
          <button 
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

