# 个人网站

这是一个使用Next.js和React构建的现代个人网站。网站设计采用了简约的Apple风格，主色调为浅紫色。

## 功能特点

- 响应式设计
- 图片轮播展示
- AI对话框
- 社交媒体链接
- 现代化UI设计
- 平滑动画效果

## 技术栈

- Next.js 13
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## 安装步骤

1. 首先安装Node.js (推荐使用v16或更高版本)
   ```bash
   # 使用homebrew安装Node.js
   brew install node
   ```

2. 克隆项目并安装依赖
   ```bash
   # 安装项目依赖
   npm install
   ```

3. 运行开发服务器
   ```bash
   npm run dev
   ```

4. 构建生产版本
   ```bash
   npm run build
   npm start
   ```

## 自定义配置

1. 修改图片：
   - 将你的图片放在 `public/images` 目录下
   - 在 `src/components/ImageCarousel.tsx` 中更新图片路径

2. 更新社交媒体链接：
   - 在 `src/components/Footer.tsx` 中修改社交媒体链接

3. 自定义颜色：
   - 在 `tailwind.config.js` 中修改颜色配置

## 注意事项

- 确保所有图片都经过优化，以提高加载速度
- 在部署之前记得更新社交媒体链接
- 可以根据需要调整AI对话框的样式和功能

## 许可证

MIT 