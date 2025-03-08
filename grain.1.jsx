import React, { useState, useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { loadModel, preprocessImage, classifyImage } from '../ml/model';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Classify = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modelLoading, setModelLoading] = useState(true);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const canvasRef = useRef(null);

  // Rice varieties
  const riceVarieties = [
    'Arborio', 
    'Basmati', 
    'Jasmine', 
    'Brown Rice', 
    'Wild Rice', 
    'Sushi Rice'
  ];

  // Load model on component mount
  useEffect(() => {
    async function initModel() {
      try {
        const loadedModel = await loadModel();
        setModel(loadedModel);
        setModelLoading(false);
      } catch (err) {
        console.error('Failed to load model:', err);
        setError('Failed to load the classification model. Please try again later.');
        setModelLoading(false);
      }
    }

    initModel();
  }, []);

  // Handle file drop
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file.');
        return;
      }
      
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResults(null);
      setError('');
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    maxFiles: 1
  });

  // Handle classification
  const handleClassify = async () => {
    if (!image) {
      setError('Please upload an image first.');
      return;
    }

    if (!model) {
      setError('Model is not loaded yet. Please wait or refresh the page.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Create an image element from the file
      const img = new Image();
      img.src = preview;
      
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      // Preprocess the image
      const processedImage = await preprocessImage(img, canvasRef.current);
      
      // Classify the image
      const predictions = await classifyImage(model, processedImage);
      
      // Format results
      setResults(predictions);
    } catch (err) {
      console.error('Classification error:', err);
      setError('An error occurred during classification. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Chart data and options
  const chartData = results ? {
    labels: riceVarieties,
    datasets: [
      {
        label: 'Confidence (%)',
        data: results.map(r => r.confidence * 100),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  } : null;

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Classification Results',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Confidence (%)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Rice Variety'
        }
      }
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Rice Classification</h1>
      
      {modelLoading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-xl">Loading classification model...</p>
          <p className="text-gray-500 mt-2">This may take a moment depending on your connection.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Upload Rice Image</h2>
            
            <div 
              {...getRootProps()} 
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
              }`}
            >
              <input {...getInputProps()} />
              
              {preview ? (
                <div className="space-y-4">
                  <img 
                    src={preview} 
                    alt="Preview" 
                    className="max-h-64 mx-auto rounded"
                  />
                  <p className="text-sm text-gray-500">
                    Click or drag to replace the image
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-16 w-16 mx-auto text-gray-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                    />
                  </svg>
                  <p className="text-lg font-medium">
                    Drag & drop an image here, or click to select
                  </p>
                  <p className="text-sm text-gray-500">
                    Supports JPG, PNG, GIF (max 10MB)
                  </p>
                </div>
              )}
            </div>
            
            {error && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}
            
            <button 
              onClick={handleClassify}
              disabled={!image || loading}
              className={`mt-6 w-full py-3 px-4 rounded-lg font-medium ${
                !image || loading
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              } transition-colors`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Classifying...
                </span>
              ) : (
                'Classify Image'
              )}
            </button>
            
            {/* Hidden canvas for image processing */}
            <canvas ref={canvasRef} style={{ display: 'none' }} />
          </div>
          
          {/* Results Section */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Classification Results</h2>
            
            {results ? (
              <div className="space-y-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">
                    Top Prediction: <span className="font-bold">{results[0].className}</span>
                  </h3>
                  <p className="text-green-700">
                    Confidence: {(results[0].confidence * 100).toFixed(2)}%
                  </p>
                </div>
                
                <div className="h-64">
                  <Bar data={chartData} options={chartOptions} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">All Predictions:</h3>
                  <div className="divide-y">
                    {results.map((result, index) => (
                      <div key={index} className="py-2 flex justify-between">
                        <span>{result.className}</span>
                        <span className="font-medium">{(result.confidence * 100).toFixed(2)}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-lg">Upload and classify an image to see results</p>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* How It Works Section */}
      <div className="mt-16 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold">1</span>
            </div>
            <h3 className="font-medium mb-2">Upload Image</h3>
            <p className="text-gray-600 text-sm">
              Upload a clear image of rice grains. For best results, use well-lit images with good contrast.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold">2</span>
            </div>
            <h3 className="font-medium mb-2">AI Processing</h3>
            <p className="text-gray-600 text-sm">
              Our deep learning model analyzes the image, extracting key features to identify the rice variety.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold">3</span>
            </div>
            <h3 className="font-medium mb-2">Get Results</h3>
            <p className="text-gray-600 text-sm">
              View the classification results with confidence scores for each rice variety.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classify;