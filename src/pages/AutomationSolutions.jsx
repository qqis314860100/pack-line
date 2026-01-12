import React, { useState } from 'react'
import './AutomationSolutions.css'

const AutomationSolutions = () => {
  const [activeTab, setActiveTab] = useState('自动化产线')

  const automationProducts = [
    {
      id: 1,
      image: 'https://via.placeholder.com/400x300/2c3e50/ffffff?text=电池模组自动化生产线',
      title: '电池模组自动化生产线',
      description: '电池模组自动化生产线是将电芯组装为模组的自动化生产线，其工艺流程包括：电芯充放电测试、电芯等离子清洗、模组堆叠、激光测距、激光焊接、电芯电压及温度监控、EOL测试、BMS测试等。'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/400x300/34495e/ffffff?text=PACK自动化生产线',
      title: 'PACK自动化生产线',
      description: 'PACK自动化生产线是将成品模组组装为电池包的自动化生产线，其关键技术包括：模组入箱体、自动化上料、电池测试自动对插、激光焊接、PACK包气密性、EOL测试、箱体密封测试、电池包测试下线等。'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/400x300/2c3e50/ffffff?text=CTP自动化生产线',
      title: 'CTP自动化生产线',
      description: 'CTP自动化生产线是将电芯组装成电池包的自动化生产线，其关键技术包括：Beam成组、自动涂胶、Blcok自动入箱、整形加压、自动绝缘耐压、整包激光焊接、FPC焊接、氦检气密性测试、3D全尺寸检测、电池包EOL测试等。'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/400x300/34495e/ffffff?text=储能集装箱装配线',
      title: '储能集装箱装配线',
      description: '储能集装箱装配解决方案集成了集装箱装配线、重载搬运系统、自动入箱设备、喷淋试验、充放电测试系统等。其工艺流程包括：消防管路安装、消防及液冷主机安装、簇间线束连接、动力汇流柜安装、自动入电池箱、电池箱螺栓固定等。'
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/400x300/2c3e50/ffffff?text=动力电池包拆解返修线',
      title: '动力电池包拆解返修线',
      description: '动力电池包拆接返修线是将故障电池包进行拆解并返修的自动化线体，其工艺流程包括：拆包检查、气密测试、管路清洗、全尺寸检测、拆上盖&模组、busbar焊接/补焊、模组入箱、氦检测试、EOL测试、箱体涂胶、整包下线等。'
    }
  ]

  const testLineProducts = [
    {
      id: 1,
      image: 'https://via.placeholder.com/400x300/3498db/ffffff?text=自动测试线1',
      title: '自动测试线产品1',
      description: '自动测试线的详细描述信息...'
    }
  ]

  const formationProducts = [
    {
      id: 1,
      image: 'https://via.placeholder.com/400x300/e74c3c/ffffff?text=化成分容设备',
      title: '化成分容设备',
      description: '化成分容设备的详细描述信息...'
    }
  ]

  const stats = [
    { number: '20年', label: '专注新能源锂电装备' },
    { number: '1000+', label: '行业客户' },
    { number: '5000+', label: '项目案例' },
    { number: '3大', label: '生产制造基地' },
    { number: '16.6万㎡', label: '生产基地面积' }
  ]

  const getCurrentProducts = () => {
    switch (activeTab) {
      case '自动化产线':
        return automationProducts
      case '自动测试线':
        return testLineProducts
      case '化成分容':
        return formationProducts
      default:
        return automationProducts
    }
  }

  return (
    <div className="automation-solutions">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1>技术领先的智能装备解决方案</h1>
          <p>可为电芯、模组、PACK、储能集装箱等客户提供完整的智能制造解决方案</p>
          
          {/* Stats in Hero */}
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="hero-stat-item">
                <div className="hero-stat-number">{stat.number}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="breadcrumb-section">
        <div className="container">
          <nav className="breadcrumb">
            <span>首页</span>
            <span className="separator">></span>
            <span>产品中心</span>
            <span className="separator">></span>
            <span>智能装备</span>
          </nav>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="category-tabs">
            <button 
              className={`tab ${activeTab === '自动化产线' ? 'active' : ''}`}
              onClick={() => setActiveTab('自动化产线')}
            >
              自动化产线
            </button>
            <button 
              className={`tab ${activeTab === '自动测试线' ? 'active' : ''}`}
              onClick={() => setActiveTab('自动测试线')}
            >
              自动测试线
            </button>
            <button 
              className={`tab ${activeTab === '化成分容' ? 'active' : ''}`}
              onClick={() => setActiveTab('化成分容')}
            >
              化成分容
            </button>
          </div>

          <div className="products-grid">
            {getCurrentProducts().map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <button className="explore-btn">探索更多</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AutomationSolutions

