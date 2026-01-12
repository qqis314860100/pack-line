import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductDetail.css'
import HERO_IMAGE from '../assets/images/image.png'

// 关键技术圆图使用同一张占位图
const KEY_TECH_IMAGES = Array(6).fill(HERO_IMAGE)

// 基于原始图片尺寸的坐标（例如：宽 1400px，高 600px）
const IMAGE_BASE_WIDTH = 1400
const IMAGE_BASE_HEIGHT = 600

const ProductDetail = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [annotationMode, setAnnotationMode] = useState('point') // 'point' 或 'area'
  const [layoutMode, setLayoutMode] = useState('layout1') // 布局方案：layout1, layout2, layout3, layout4, layout5
  const [previewImage, setPreviewImage] = useState(null)

  const features = [
    {
      icon: '🤖',
      title: '自动化程度高',
      description: '采用大量智能机器人，使搬运、拧紧协同作业高度集成',
    },
    {
      icon: '🛡️',
      title: '高安全可靠',
      description: '20年测试技术底蕴，测试精度高，安全可靠',
    },
    {
      icon: '⚙️',
      title: '布局灵活',
      description: '全AGV调度，不受场地、工艺路径变更限制',
    },
    {
      icon: '📊',
      title: '信息智能化',
      description: '实现全过程信息智能化，提高生产线的运行效率和管理水平',
    },
  ]

  const coreDevices = [
    {
      image: 'https://via.placeholder.com/300x200?text=%E6%A8%A1%E7%BB%84%E8%87%AA%E5%8A%A8%E5%85%A5%E7%AE%B1%E5%B7%A5%E7%AB%99',
      name: '模组自动入箱工站',
    },
    {
      image: 'https://via.placeholder.com/300x200?text=%E7%AD%89%E7%A6%BB%E5%AD%90%E6%B8%85%E6%B4%97%E5%8F%8A%E6%B6%82%E8%83%B6%E5%B7%A5%E7%AB%99',
      name: '等离子清洗及涂胶工站',
    },
    {
      image: 'https://via.placeholder.com/300x200?text=%E8%87%AA%E5%8A%A8%E6%8B%A7%E7%B4%A7%E5%B7%A5%E7%AB%99',
      name: '自动拧紧工站',
    },
  ]

  const keyTechnologies = [
    '机器人搬运',
    '自动焊接',
    '等离子清洗',
    '自动涂胶',
    'EOL测试',
    'DCR测试',
  ]

  const stats = [
    { label: '产能', value: '15 JPH' },
    { label: '故障率', value: '< 1.5%' },
    { label: '良品率', value: '99.9%' },
    { label: '设备综合效率', value: '95%' },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('提交成功！我们会尽快与您联系。')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  const handleTechClick = (tech, img) => {
    console.log('点击了技术:', tech)
    setPreviewImage(img)
  }

  const closePreview = () => setPreviewImage(null)

  // 点位标注数据（第一种方式）
  const pointStations = [
    {
      id: 1,
      name: '电芯堆叠工站',
      desc: '完成电芯堆叠与预装配。',
      x: 310, // 水平方向坐标
      y: 360, // 垂直方向坐标
    },
    {
      id: 2,
      name: '激光焊接工站',
      desc: '实现高精度极耳与汇流排激光焊接。',
      x: 650,
      y: 320,
    },
    {
      id: 3,
      name: 'EOL测试工站',
      desc: '对下线电池包进行功能与安全测试。',
      x: 1020,
      y: 280,
    },
  ]

  // 区域标注数据（第二种方式）- 使用矩形区域 (x, y, width, height)
  const areaStations = [
    {
      id: 1,
      name: '电芯堆叠工站',
      desc: '完成电芯堆叠与预装配。',
      x: 200, // 区域左上角 x 坐标
      y: 300, // 区域左上角 y 坐标
      width: 220, // 区域宽度
      height: 120, // 区域高度
    },
    {
      id: 2,
      name: '激光焊接工站',
      desc: '实现高精度极耳与汇流排激光焊接。',
      x: 550,
      y: 280,
      width: 200,
      height: 100,
    },
    {
      id: 3,
      name: 'EOL测试工站',
      desc: '对下线电池包进行功能与安全测试。',
      x: 920,
      y: 240,
      width: 180,
      height: 90,
    },
  ]

  const stations = annotationMode === 'point' ? pointStations : areaStations

  return (
    <div className="product-detail">
      {/* 面包屑，支持返回首页 */}
      <section className="detail-breadcrumb">
        <div className="container">
          <nav className="breadcrumb">
            <span onClick={() => navigate('/')}>首页</span>
            <span className="separator">{'>'}</span>
            <span>产品中心</span>
            <span className="separator">{'>'}</span>
            <span>智能装备</span>
            <span className="separator">{'>'}</span>
            <span>PACK自动化生产线</span>
          </nav>
        </div>
      </section>

      {/* 布局方案切换器 */}
      <section className="layout-selector-section">
        <div className="container">
          <div className="layout-selector">
            <span className="layout-label">布局方案：</span>
            <div className="layout-options">
              {['layout1', 'layout2', 'layout3', 'layout4', 'layout5'].map((layout) => (
                <button
                  key={layout}
                  className={`layout-option ${layoutMode === layout ? 'active' : ''}`}
                  onClick={() => setLayoutMode(layout)}
                >
                  {layout === 'layout1' && '方案一：左右分栏'}
                  {layout === 'layout2' && '方案二：上下布局'}
                  {layout === 'layout3' && '方案三：环绕式'}
                  {layout === 'layout4' && '方案四：悬浮式'}
                  {layout === 'layout5' && '方案五：时间轴'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 顶部大图区域（参考 PACK 自动化生产线效果） */}
      <section className={`pack-hero pack-hero-${layoutMode}`}>
        {/* 方案一：左右分栏（默认） */}
        {layoutMode === 'layout1' && (
          <div className="container pack-hero-inner pack-hero-layout1">
            <div className="pack-hero-left">
              <h1>PACK自动化生产线</h1>
              <p className="pack-hero-desc">
                PACK自动化生产线是将成品模组组装为电池包的自动化生产线，其关键技术包括：模组入箱体、自动化上料、电池测试自动对插、激光焊接、PACK包气密性、EOL测试、箱体密封测试、电池包测试下线等。
              </p>

              <div className="pack-stats-card">
                {stats.map((item) => (
                  <div key={item.label} className="pack-stat-item">
                    <span className="pack-stat-label">{item.label}</span>
                    <span className="pack-stat-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="pack-hero-right"
              style={{ backgroundImage: `url(${HERO_IMAGE})` }}
              aria-label="PACK自动化生产线效果图占位"
            >
            {/* 标注方式切换按钮 */}
            <div className="annotation-mode-switch">
              <button
                className={`mode-btn ${annotationMode === 'point' ? 'active' : ''}`}
                onClick={() => setAnnotationMode('point')}
              >
                点位标注
              </button>
              <button
                className={`mode-btn ${annotationMode === 'area' ? 'active' : ''}`}
                onClick={() => setAnnotationMode('area')}
              >
                区域标注
              </button>
            </div>

            {/* 点位标注模式 */}
            {annotationMode === 'point' &&
              pointStations.map((station) => (
                <div
                  key={station.id}
                  className="station-marker station-point"
                  style={{
                    top: `${(station.y / IMAGE_BASE_HEIGHT) * 100}%`,
                    left: `${(station.x / IMAGE_BASE_WIDTH) * 100}%`,
                  }}
                >
                  <div className="station-pulse"></div>
                  <div className="station-dot"></div>
                  <div className="station-tooltip">
                    <div className="station-name">{station.name}</div>
                    <div className="station-desc">{station.desc}</div>
                  </div>
                </div>
              ))}

            {/* 区域标注模式 */}
            {annotationMode === 'area' &&
              areaStations.map((station) => (
                <div
                  key={station.id}
                  className="station-marker station-area"
                  style={{
                    top: `${(station.y / IMAGE_BASE_HEIGHT) * 100}%`,
                    left: `${(station.x / IMAGE_BASE_WIDTH) * 100}%`,
                    width: `${(station.width / IMAGE_BASE_WIDTH) * 100}%`,
                    height: `${(station.height / IMAGE_BASE_HEIGHT) * 100}%`,
                  }}
                >
                  <div className="station-area-border"></div>
                  <div className="station-tooltip station-area-tooltip">
                    <div className="station-name">{station.name}</div>
                    <div className="station-desc">{station.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 关键技术图标区域 */}
            <div className="container pack-tech-inner">
              <button className="pack-keytech-button">关键技术</button>
              <div className="pack-keytech-list glass-panel">
                {keyTechnologies.map((tech, index) => (
                  <div
                    key={tech}
                    className="pack-keytech-item"
                    onClick={() => handleTechClick(tech, KEY_TECH_IMAGES[index % KEY_TECH_IMAGES.length])}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        handleTechClick(tech, KEY_TECH_IMAGES[index % KEY_TECH_IMAGES.length])
                      }
                    }}
                  >
                    <div className="pack-keytech-image">
                      <img src={KEY_TECH_IMAGES[index % KEY_TECH_IMAGES.length]} alt={tech} />
                      <div className="pack-keytech-overlay"></div>
                    </div>
                    <div className="pack-keytech-text">{tech}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 方案二：上下布局 - 图片在上，内容在下 */}
        {layoutMode === 'layout2' && (
          <div className="container pack-hero-inner pack-hero-layout2">
            <div className="pack-hero-image-full">
              <div className="pack-hero-right" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
                <div className="annotation-mode-switch">
                  <button className={`mode-btn ${annotationMode === 'point' ? 'active' : ''}`} onClick={() => setAnnotationMode('point')}>点位标注</button>
                  <button className={`mode-btn ${annotationMode === 'area' ? 'active' : ''}`} onClick={() => setAnnotationMode('area')}>区域标注</button>
                </div>
                {annotationMode === 'point' && pointStations.map((station) => (
                  <div key={station.id} className="station-marker station-point" style={{ top: `${(station.y / IMAGE_BASE_HEIGHT) * 100}%`, left: `${(station.x / IMAGE_BASE_WIDTH) * 100}%` }}>
                    <div className="station-pulse"></div><div className="station-dot"></div>
                    <div className="station-tooltip"><div className="station-name">{station.name}</div><div className="station-desc">{station.desc}</div></div>
                  </div>
                ))}
                {annotationMode === 'area' && areaStations.map((station) => (
                  <div key={station.id} className="station-marker station-area" style={{ top: `${(station.y / IMAGE_BASE_HEIGHT) * 100}%`, left: `${(station.x / IMAGE_BASE_WIDTH) * 100}%`, width: `${(station.width / IMAGE_BASE_WIDTH) * 100}%`, height: `${(station.height / IMAGE_BASE_HEIGHT) * 100}%` }}>
                    <div className="station-area-border"></div>
                    <div className="station-tooltip station-area-tooltip"><div className="station-name">{station.name}</div><div className="station-desc">{station.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pack-hero-content-below">
              <div className="pack-hero-left">
                <h1>PACK自动化生产线</h1>
                <p className="pack-hero-desc">PACK自动化生产线是将成品模组组装为电池包的自动化生产线，其关键技术包括：模组入箱体、自动化上料、电池测试自动对插、激光焊接、PACK包气密性、EOL测试、箱体密封测试、电池包测试下线等。</p>
                <div className="pack-stats-card">
                  {stats.map((item) => (<div key={item.label} className="pack-stat-item"><span className="pack-stat-label">{item.label}</span><span className="pack-stat-value">{item.value}</span></div>))}
                </div>
              </div>
              <div className="pack-tech-inner">
                <button className="pack-keytech-button">关键技术</button>
                <div className="pack-keytech-list glass-panel">
                  {keyTechnologies.map((tech, index) => (
                    <div key={tech} className="pack-keytech-item" onClick={() => handleTechClick(tech, KEY_TECH_IMAGES[index % KEY_TECH_IMAGES.length])}>
                      <div className="pack-keytech-image"><img src={KEY_TECH_IMAGES[index % KEY_TECH_IMAGES.length]} alt={tech} /><div className="pack-keytech-overlay"></div></div>
                      <div className="pack-keytech-text">{tech}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 方案三：环绕式 - 图片在中间，内容环绕 */}
        {layoutMode === 'layout3' && (
          <div className="container pack-hero-inner pack-hero-layout3">
            <div className="pack-hero-left pack-hero-left-top">
              <h1>PACK自动化生产线</h1>
              <p className="pack-hero-desc">PACK自动化生产线是将成品模组组装为电池包的自动化生产线，其关键技术包括：模组入箱体、自动化上料、电池测试自动对插、激光焊接、PACK包气密性、EOL测试、箱体密封测试、电池包测试下线等。</p>
            </div>
            <div className="pack-hero-image-center">
              <div className="pack-hero-right" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
                <div className="annotation-mode-switch">
                  <button className={`mode-btn ${annotationMode === 'point' ? 'active' : ''}`} onClick={() => setAnnotationMode('point')}>点位标注</button>
                  <button className={`mode-btn ${annotationMode === 'area' ? 'active' : ''}`} onClick={() => setAnnotationMode('area')}>区域标注</button>
                </div>
                {annotationMode === 'point' && pointStations.map((station) => (
                  <div key={station.id} className="station-marker station-point" style={{ top: `${(station.y / IMAGE_BASE_HEIGHT) * 100}%`, left: `${(station.x / IMAGE_BASE_WIDTH) * 100}%` }}>
                    <div className="station-pulse"></div><div className="station-dot"></div>
                    <div className="station-tooltip"><div className="station-name">{station.name}</div><div className="station-desc">{station.desc}</div></div>
                  </div>
                ))}
                {annotationMode === 'area' && areaStations.map((station) => (
                  <div key={station.id} className="station-marker station-area" style={{ top: `${(station.y / IMAGE_BASE_HEIGHT) * 100}%`, left: `${(station.x / IMAGE_BASE_WIDTH) * 100}%`, width: `${(station.width / IMAGE_BASE_WIDTH) * 100}%`, height: `${(station.height / IMAGE_BASE_HEIGHT) * 100}%` }}>
                    <div className="station-area-border"></div>
                    <div className="station-tooltip station-area-tooltip"><div className="station-name">{station.name}</div><div className="station-desc">{station.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pack-hero-right-content">
              <div className="pack-stats-card">
                {stats.map((item) => (<div key={item.label} className="pack-stat-item"><span className="pack-stat-label">{item.label}</span><span className="pack-stat-value">{item.value}</span></div>))}
              </div>
              <div className="pack-tech-inner">
                <button className="pack-keytech-button">关键技术</button>
                <div className="pack-keytech-list glass-panel">
                  {keyTechnologies.map((tech, index) => (
                    <div key={tech} className="pack-keytech-item" onClick={() => handleTechClick(tech, KEY_TECH_IMAGES[index % KEY_TECH_IMAGES.length])}>
                      <div className="pack-keytech-image"><img src={KEY_TECH_IMAGES[index % KEY_TECH_IMAGES.length]} alt={tech} /><div className="pack-keytech-overlay"></div></div>
                      <div className="pack-keytech-text">{tech}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 方案四：悬浮式 - 内容悬浮在图片上 */}
        {layoutMode === 'layout4' && (
          <div className="container pack-hero-inner pack-hero-layout4">
            <div className="pack-hero-image-bg">
              <div className="pack-hero-right" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
                <div className="annotation-mode-switch">
                  <button className={`mode-btn ${annotationMode === 'point' ? 'active' : ''}`} onClick={() => setAnnotationMode('point')}>点位标注</button>
                  <button className={`mode-btn ${annotationMode === 'area' ? 'active' : ''}`} onClick={() => setAnnotationMode('area')}>区域标注</button>
                </div>
                {annotationMode === 'point' && pointStations.map((station) => (
                  <div key={station.id} className="station-marker station-point" style={{ top: `${(station.y / IMAGE_BASE_HEIGHT) * 100}%`, left: `${(station.x / IMAGE_BASE_WIDTH) * 100}%` }}>
                    <div className="station-pulse"></div><div className="station-dot"></div>
                    <div className="station-tooltip"><div className="station-name">{station.name}</div><div className="station-desc">{station.desc}</div></div>
                  </div>
                ))}
                {annotationMode === 'area' && areaStations.map((station) => (
                  <div key={station.id} className="station-marker station-area" style={{ top: `${(station.y / IMAGE_BASE_HEIGHT) * 100}%`, left: `${(station.x / IMAGE_BASE_WIDTH) * 100}%`, width: `${(station.width / IMAGE_BASE_WIDTH) * 100}%`, height: `${(station.height / IMAGE_BASE_HEIGHT) * 100}%` }}>
                    <div className="station-area-border"></div>
                    <div className="station-tooltip station-area-tooltip"><div className="station-name">{station.name}</div><div className="station-desc">{station.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pack-hero-overlay-content">
              <div className="pack-hero-left-overlay">
                <h1>PACK自动化生产线</h1>
                <p className="pack-hero-desc">PACK自动化生产线是将成品模组组装为电池包的自动化生产线，其关键技术包括：模组入箱体、自动化上料、电池测试自动对插、激光焊接、PACK包气密性、EOL测试、箱体密封测试、电池包测试下线等。</p>
                <div className="pack-stats-card">
                  {stats.map((item) => (<div key={item.label} className="pack-stat-item"><span className="pack-stat-label">{item.label}</span><span className="pack-stat-value">{item.value}</span></div>))}
                </div>
              </div>
              <div className="pack-tech-inner-overlay">
                <button className="pack-keytech-button">关键技术</button>
                <div className="pack-keytech-list glass-panel">
                  {keyTechnologies.map((tech, index) => (
                    <div key={tech} className="pack-keytech-item" onClick={() => handleTechClick(tech, KEY_TECH_IMAGES[index % KEY_TECH_IMAGES.length])}>
                      <div className="pack-keytech-image"><img src={KEY_TECH_IMAGES[index % KEY_TECH_IMAGES.length]} alt={tech} /><div className="pack-keytech-overlay"></div></div>
                      <div className="pack-keytech-text">{tech}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 方案五：时间轴式 - 横向流程展示 */}
        {layoutMode === 'layout5' && (
          <div className="container pack-hero-inner pack-hero-layout5">
            <div className="pack-hero-image-timeline">
              <div className="pack-hero-right" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
                <div className="annotation-mode-switch">
                  <button className={`mode-btn ${annotationMode === 'point' ? 'active' : ''}`} onClick={() => setAnnotationMode('point')}>点位标注</button>
                  <button className={`mode-btn ${annotationMode === 'area' ? 'active' : ''}`} onClick={() => setAnnotationMode('area')}>区域标注</button>
                </div>
                {annotationMode === 'point' && pointStations.map((station) => (
                  <div key={station.id} className="station-marker station-point" style={{ top: `${(station.y / IMAGE_BASE_HEIGHT) * 100}%`, left: `${(station.x / IMAGE_BASE_WIDTH) * 100}%` }}>
                    <div className="station-pulse"></div><div className="station-dot"></div>
                    <div className="station-tooltip"><div className="station-name">{station.name}</div><div className="station-desc">{station.desc}</div></div>
                  </div>
                ))}
                {annotationMode === 'area' && areaStations.map((station) => (
                  <div key={station.id} className="station-marker station-area" style={{ top: `${(station.y / IMAGE_BASE_HEIGHT) * 100}%`, left: `${(station.x / IMAGE_BASE_WIDTH) * 100}%`, width: `${(station.width / IMAGE_BASE_WIDTH) * 100}%`, height: `${(station.height / IMAGE_BASE_HEIGHT) * 100}%` }}>
                    <div className="station-area-border"></div>
                    <div className="station-tooltip station-area-tooltip"><div className="station-name">{station.name}</div><div className="station-desc">{station.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pack-hero-timeline-content">
              <div className="pack-hero-left">
                <h1>PACK自动化生产线</h1>
                <p className="pack-hero-desc">PACK自动化生产线是将成品模组组装为电池包的自动化生产线，其关键技术包括：模组入箱体、自动化上料、电池测试自动对插、激光焊接、PACK包气密性、EOL测试、箱体密封测试、电池包测试下线等。</p>
                <div className="pack-stats-card">
                  {stats.map((item) => (<div key={item.label} className="pack-stat-item"><span className="pack-stat-label">{item.label}</span><span className="pack-stat-value">{item.value}</span></div>))}
                </div>
              </div>
              <div className="pack-tech-inner">
                <button className="pack-keytech-button">关键技术</button>
                <div className="pack-keytech-list glass-panel">
                  {keyTechnologies.map((tech, index) => (
                    <div key={tech} className="pack-keytech-item" onClick={() => handleTechClick(tech, KEY_TECH_IMAGES[index % KEY_TECH_IMAGES.length])}>
                      <div className="pack-keytech-image"><img src={KEY_TECH_IMAGES[index % KEY_TECH_IMAGES.length]} alt={tech} /><div className="pack-keytech-overlay"></div></div>
                      <div className="pack-keytech-text">{tech}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 图片预览弹层 */}
      {previewImage && (
        <div className="preview-overlay" onClick={closePreview}>
          <div className="preview-dialog" onClick={(e) => e.stopPropagation()}>
            <img src={previewImage} alt="预览" />
            <button className="preview-close" onClick={closePreview} aria-label="关闭预览">
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">方案特点</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Devices Section */}
      <section className="core-devices-section">
        <div className="container">
          <h2 className="section-title">核心设备</h2>
          <div className="devices-grid">
            {coreDevices.map((device, index) => (
              <div key={index} className="device-card">
                <div className="device-image">
                  <img src={device.image} alt={device.name} />
                </div>
                <h3>{device.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">联系我们</h2>
          <p className="section-subtitle">如果您有任何的需要，请随时与我们联系</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">姓名 *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">邮箱 *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">电话 *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">留言</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                placeholder="请输入您的留言..."
              ></textarea>
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-btn">提交</button>
              <button type="button" className="reset-btn" onClick={handleReset}>重置</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail

