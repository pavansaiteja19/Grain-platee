# GrainPalette - Rice Classification Project

GrainPalette is a deep learning project focused on the classification of different rice varieties using computer vision and neural networks. This web application allows users to upload images of rice grains and receive instant classification results.

## Features

- Upload and classify rice grain images
- View classification results with confidence scores
- Explore the dataset used for training
- Learn about the model architecture and technology stack

## Rice Varieties

The model can classify the following rice varieties:
- Arborio
- Basmati
- Jasmine
- Brown Rice
- Wild Rice
- Sushi Rice

## Technology Stack

### Frontend
- React
- TensorFlow.js
- Chart.js
- Tailwind CSS
- React Router

### Machine Learning
- TensorFlow
- Keras
- CNN Architecture (MobileNetV2)
- Data Augmentation
- Model Optimization

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```
git clone https://github.com/yourusername/grainpalette.git
cd grainpalette
```

2. Install dependencies
```
npm install
```

3. Start the development server
```
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
grainpalette/
├── public/
├── src/
│   ├── assets/         # Static assets
│   ├── components/     # Reusable UI components
│   ├── ml/             # Machine learning code
│   ├── pages/          # Application pages
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global styles
│   └── main.jsx        # Application entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Machine Learning Model

The rice classification model is based on a modified MobileNetV2 architecture with transfer learning. The model was trained on a dataset of rice grain images and optimized for browser-based inference using TensorFlow.js.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Rice images sourced from various agricultural databases
- TensorFlow.js team for their excellent documentation and examples
- The open-source community for their invaluable resources and tools