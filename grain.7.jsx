import React, { useState } from 'react';

const Dataset = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample dataset statistics
  const datasetStats = {
    totalImages: 5000,
    classes: 6,
    trainingImages: 4000,
    validationImages: 500,
    testImages: 500,
    imageSize: '224x224 pixels',
    format: 'RGB',
    augmentations: ['Rotation', 'Flip', 'Brightness', 'Contrast', 'Zoom']
  };
  
  // Sample class distribution
  const classDistribution = [
    { name: 'Arborio', count: 850, color: 'rgba(255, 99, 132, 0.6)' },
    { name: 'Basmati', count: 920, color: 'rgba(54, 162, 235, 0.6)' },
    { name: 'Jasmine', count: 780, color: 'rgba(255, 206, 86, 0.6)' },
    { name: 'Brown Rice', count: 830, color: 'rgba(75, 192, 192, 0.6)' },
    { name: 'Wild Rice', count: 760, color: 'rgba(153, 102, 255, 0.6)' },
    { name: 'Sushi Rice', count: 860, color: 'rgba(255, 159, 64, 0.6)' }
  ];
  
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Rice Classification Dataset</h1>
      
      {/* Tabs */}
      <div className="flex flex-wrap border-b border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 font-medium text-sm rounded-t-lg ${
            activeTab === 'overview'
              ? 'bg-blue-500 text-white'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('samples')}
          className={`px-4 py-2 font-medium text-sm rounded-t-lg ${
            activeTab === 'samples'
              ? 'bg-blue-500 text-white'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
          }`}
        >
          Sample Images
        </button>
        <button
          onClick={() => setActiveTab('preprocessing')}
          className={`px-4 py-2 font-medium text-sm rounded-t-lg ${
            activeTab === 'preprocessing'
              ? 'bg-blue-500 text-white'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
          }`}
        >
          Preprocessing
        </button>
      </div>
      
      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-md p-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Dataset Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-4">Dataset Statistics</h3>
                <div className="space-y-2">
                  {Object.entries(datasetStats).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Class Distribution</h3>
                <div className="space-y-4">
                  {classDistribution.map((cls) => (
                    <div key={cls.name}>
                      <div className="flex justify-between mb-1">
                        <span>{cls.name}</span>
                        <span className="font-medium">{cls.count} images</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="h-2.5 rounded-full" 
                          style={{ 
                            width: `${(cls.count / datasetStats.totalImages) * 100}%`,
                            backgroundColor: cls.color
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium mb-4">Dataset Description</h3>
              <p className="text-gray-700 mb-4">
                Our rice classification dataset consists of high-quality images of six different rice varieties: Arborio, Basmati, Jasmine, Brown Rice, Wild Rice, and Sushi Rice. The images were collected under controlled lighting conditions to ensure consistency.
              </p>
              <p className="text-gray-700 mb-4">
                Each image in the dataset contains multiple grains of a single rice variety, photographed against a neutral background to facilitate feature extraction. The dataset is balanced across all classes to prevent bias in the model training.
              </p>
              <p className="text-gray-700">
                The dataset was split into training (80%), validation (10%), and test (10%) sets, with stratified sampling to maintain class distribution across all sets.
              </p>
            </div>
          </div>
        )}
        
        {/* Samples Tab */}
        {activeTab === 'samples' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Sample Images</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {classDistribution.map((cls) => (
                <div key={cls.name} className="border rounded-lg overflow-hidden">
                  <div className="p-3 font-medium bg-gray-50 border-b">
                    {cls.name}
                  </div>
                  <div className="p-4">
                    <img 
                      src={`https://source.unsplash.com/random/300x200?rice,${cls.name.toLowerCase().replace(' ', '-')}`}
                      alt={`Sample of ${cls.name}`}
                      className="w-full h-48 object-cover rounded"
                    />
                    <p className="mt-3 text-sm text-gray-600">
                      Sample image of {cls.name.toLowerCase()} rice grains from the dataset.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Image Acquisition Process</h3>
              <p className="text-blue-700 text-sm">
                All images were captured using a standardized setup with consistent lighting and camera positioning. Multiple samples of each rice variety were photographed to capture natural variations in grain size, shape, and color.
              </p>
            </div>
          </div>
        )}
        
        {/* Preprocessing Tab */}
        {activeTab === 'preprocessing' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Data Preprocessing</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Image Preprocessing Steps</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Resize all images to 224×224 pixels to ensure uniform input size for the model</li>
                  <li>Convert images to RGB format (3 channels)</li>
                  <li>Normalize pixel values to the range [0, 1]</li>
                  <li>Apply mean subtraction and standard deviation division (using ImageNet statistics)</li>
                  <li>Apply random augmentations during training to improve model generalization</li>
                </ol>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Data Augmentation Techniques</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'Random Rotation', description: 'Rotate images by ±20 degrees', icon: '↻' },
                    { name: 'Horizontal Flip', description: 'Randomly flip images horizontally', icon: '⇄' },
                    { name: 'Vertical Flip', description: 'Randomly flip images vertically', icon: '⇅' },
                    { name: 'Brightness Adjustment', description: 'Vary brightness by ±10%', icon: '☀' },
                    { name: 'Contrast Adjustment', description: 'Vary contrast by ±10%', icon: '◐' },
                    { name: 'Random Zoom', description: 'Zoom in/out by up to 10%', icon: '🔍' }
                  ].map((technique) => (
                    <div key={technique.name} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <span className="text-xl mr-2">{technique.icon}</span>
                        <h4 className="font-medium">{technique.name}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{technique.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-3">Preprocessing Code Snippet</h3>
                <pre className="bg-gray-800 text-gray-100 p-4 rounded text-sm overflow-x-auto">
{`// Sample preprocessing code
function preprocessImage(img) {
  // Resize to 224x224
  const resized = tf.image.resizeBilinear(img, [224, 224]);
  
  // Normalize to [0,1]
  const normalized = resized.div(tf.scalar(255));
  
  // Apply ImageNet normalization
  const mean = tf.tensor([0.485, 0.456, 0.406]);
  const std = tf.tensor([0.229, 0.224, 0.225]);
  const normalized_img = normalized.sub(mean).div(std);
  
  // Add batch dimension
  return normalized_img.expandDims(0);
}`}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Additional Information */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Want to Contribute?</h2>
        <p className="text-gray-700 mb-6">
          We're continuously improving our dataset and model. If you have high-quality images of rice varieties or suggestions for improvement, we'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center"
          >
            Download Dataset
          </a>
          <a 
            href="#" 
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center"
          >
            Contribute Images
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dataset;