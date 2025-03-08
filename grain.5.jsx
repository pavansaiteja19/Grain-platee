import React from 'react';

const About = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">About GrainPalette</h1>
      
      {/* Project Overview */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-700 mb-4">
          GrainPalette is a deep learning project focused on the classification of different rice varieties using computer vision and neural networks. Our mission is to create an accessible tool that can accurately identify rice types from images, helping researchers, farmers, and food industry professionals.
        </p>
        <p className="text-gray-700">
          The project leverages convolutional neural networks (CNNs) trained on a diverse dataset of rice grain images. By extracting visual features such as grain shape, size, color, and texture, our model can distinguish between various rice varieties with high accuracy.
        </p>
      </div>
      
      {/* Technology Stack */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Technology Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium mb-3">Frontend</h3>
            <ul className="space-y-2">
              {[
                { name: 'React', description: 'JavaScript library for building user interfaces' },
                { name: 'TensorFlow.js', description: 'Machine learning framework for JavaScript' },
                { name: 'Chart.js', description: 'JavaScript charting library for data visualization' },
                { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
                { name: 'React Router', description: 'Routing library for React applications' }
              ].map((tech) => (
                <li key={tech.name} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">{tech.name}</span>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Machine Learning</h3>
            <ul className="space-y-2">
              {[
                { name: 'TensorFlow', description: 'Open-source machine learning framework' },
                { name: 'Keras', description: 'High-level neural networks API' },
                { name: 'CNN Architecture', description: 'MobileNetV2 with transfer learning' },
                { name: 'Data Augmentation', description: 'Techniques to expand training dataset' },
                { name: 'Model Optimization', description: 'Quantization for browser deployment' }
              ].map((tech) => (
                <li key={tech.name} className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">{tech.name}</span>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Model Architecture */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Model Architecture</h2>
        
        <div className="mb-6">
          <img 
            src="https://miro.medium.com/max/2000/1*vkQ0hXDaQv57sALXAJquxA.jpeg" 
            alt="CNN Architecture Diagram" 
            className="w-full h-auto rounded-lg shadow-md"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Illustration of a Convolutional Neural Network architecture similar to our model
          </p>
        </div>
        
        <p className="text-gray-700 mb-4">
          Our rice classification model is based on a modified MobileNetV2 architecture, which provides an excellent balance between accuracy and computational efficiency. We've implemented transfer learning by using pre-trained weights from ImageNet and fine-tuning the model on our rice dataset.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-3">Key Model Features</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <span className="font-medium">Transfer Learning</span>
                <p className="text-sm">Leveraging pre-trained weights to improve performance with limited data</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <span className="font-medium">Global Average Pooling</span>
                <p className="text-sm">Reducing spatial dimensions while preserving feature information</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <span className="font-medium">Dropout Regularization</span>
                <p className="text-sm">Preventing overfitting by randomly deactivating neurons during training</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <span className="font-medium">Model Quantization</span>
                <p className="text-sm">Reducing model size for efficient browser-based inference</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Team */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">Our Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              name: 'Dr. Sarah Chen', 
              role: 'Project Lead & ML Engineer',
              bio: 'Ph.D. in Computer Vision with 8+ years of experience in deep learning and agricultural applications.',
              image: 'https://randomuser.me/api/portraits/women/32.jpg'
            },
            { 
              name: 'Michael Rodriguez', 
              role: 'Full-Stack Developer',
              bio: 'Experienced web developer specializing in React and TensorFlow.js implementations.',
              image: 'https://randomuser.me/api/portraits/men/45.jpg'
            },
            { 
              name: 'Aisha Patel', 
              role: 'Data Scientist',
              bio: 'Expert in dataset curation, preprocessing, and model evaluation for computer vision tasks.',
              image: 'https://randomuser.me/api/portraits/women/65.jpg'
            }
          ].map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-white shadow-lg"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Research & Publications */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Research & Publications</h2>
        
        <div className="space-y-6">
          <p className="text-gray-700">
            Our work on rice classification has been presented at several conferences and published in peer-reviewed journals. Below are some of our key publications:
          </p>
          
          <div className="space-y-4">
            {[
              {
                title: 'Deep Learning Approaches for Rice Variety Classification: A Comparative Study',
                authors: 'Chen, S., Rodriguez, M., & Patel, A.',
                venue: 'International Conference on Computer Vision Applications in Agriculture (ICCVA 2024)',
                link: '#'
              },
              {
                title: 'Transfer Learning for Efficient Rice Grain Classification on Edge Devices',
                authors: 'Rodriguez, M., & Chen, S.',
                venue: 'Journal of Agricultural Informatics, 15(3), 78-92',
                link: '#'
              },
              {
                title: 'GrainPalette: An Open-Source Dataset for Rice Variety Classification',
                authors: 'Patel, A., Chen, S., & Rodriguez, M.',
                venue: 'Workshop on Computer Vision for Food Recognition (CVFR 2023)',
                link: '#'
              }
            ].map((publication, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-medium text-lg">{publication.title}</h3>
                <p className="text-gray-600">{publication.authors}</p>
                <p className="text-gray-500 text-sm italic">{publication.venue}</p>
                <a href={publication.link} className="text-blue-500 hover:underline text-sm">Read paper →</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;