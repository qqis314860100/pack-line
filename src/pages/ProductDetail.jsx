import React, { useState } from 'react'
import './ProductDetail.css'

const ProductDetail = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const features = [
    {
      icon: '🤖',
      title: '自动化程度高',
      description: '采用大量智能机器人，使搬运、拧紧协同作业高度集成'
    },
    {
      icon: '🛡️',
      title: '高安全可靠',
      description: '20年测试技术底蕴，测试精度高，安全可靠'
    },
    {
      icon: '⚙️',
      title: '布局灵活',
      description: '全AGV调度，不受场地、工艺路径变更限制'
    },
    {
      icon: '📊',
      title: '信息智能化',
      description: '实现全过程信息智能化，提高生产线的运行效率和管理水平'
    }
  ]

  const coreDevices = [
    {
      image: 'https://via.placeholder.com/300x200?text=模组自动入箱工站',
      name: '模组自动入箱工站'
    },
    {
      image: 'https://via.placeholder.com/300x200?text=等离子清洗及涂胶工站',
      name: '等离子清洗及涂胶工站'
    },
    {
      image: 'https://via.placeholder.com/300x200?text=自动拧紧工站',
      name: '自动拧紧工站'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
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
      message: ''
    })
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <div className="product-detail">
      {/* Hero Section */}
      <section className="detail-hero">
        <div className="container">
          <h1>智能装备解决方案</h1>
        </div>
      </section>

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

