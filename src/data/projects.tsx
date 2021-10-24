/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {difference, sortBy} from '../utils/jsUtils';

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE:
 *
 * Requirements for adding your site to our showcase:
 * - It is a marketingion-ready site with real content and decent customizations (different from the init templates)
 * - It is NOT a work-in-progress with empty pages
 * - It has a stable domain name (a Netlify/Vercel deploy preview is not allowed)
 *
 * Instructions:
 * - Add your site in the json array below
 * - Add a local image preview (decent screenshot of your Docusaurus site)
 * - Use relevant tags to qualify your site (read the tag descriptions bellow)
 * - The image MUST be added to the GitHub repository, and use `require("image")`
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/3976
 *
 * If you edit this file through the Github interface, you can:
 * - Submit first your users.js edit PR
 * - This will create a branch on your Docusaurus fork (usually "patch-1")
 * - Go to https://github.com/<username>/docusaurus/tree/<branch>/website/src/data/showcase
 * - Drag-and-drop an image here to add it to your existing PR
 *
 * Please help us maintain this showcase page data:
 * - Update sites with wrong data
 * - Ensure site tags remains correct over time
 * - Remove sites not using Docusaurus anymore
 * - Add missing Docusaurus sites (if the site owner agreed)
 *
 */

export type Tag = {
  label: string;
  description: string;
  icon: JSX.Element;
};

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'MLT'
  | 'DLFS'
  | 'GAN'
  | 'MED'
  | 'company'
  | 'DLFCV'
  | 'NLP';

export type User = {
  title: string;
  description: string;
  course: string;
  semester: string;
  participants: string;
  preview: any;
  website: string;
  source: string;
  tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your site
// Please choose widely, we'll remove unappropriate tags
export const Tags: Record<TagType, Tag> = {
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  favorite: {
    label: 'Opencampus Favorites',
    description:
      'Our favorite projects that you must absolutely check-out!',
    icon: <></>,
  },

  // For open-source sites, a link to the source code is required
  opensource: {
    label: 'Open Source',
    description: 'Open-Source Docusaurus sites can be useful for inspiration!',
    icon: <></>,
  },

  company: {
    label: 'Made with Companies',
    description: 'Open-Source Docusaurus sites can be useful for inspiration!',
    icon: <></>,
  },

  MLT: {
    label: 'Machine Learning with Tensorflow',
    description: 'Open-Source Docusaurus sites can be useful for inspiration!',
    icon: <></>,
  },

  DLFS: {
    label: 'Deep Learning from Scratch',
    description: 'Docusaurus sites associated to a commercial marketing!',
    icon: <></>,
  },

  GAN: {
    label: 'Generative Adversarial Networks',
    description:
      'Beautiful Docusaurus sites, polished and standing out from the initial template!',
    icon: <></>,
  },

  MED: {
    label: 'ML für die Medizin',
    description:
      'Translated Docusaurus sites using the internationalization support with more than 1 locale.',
    icon: <></>,
  },

  DLFCV: {
    label: 'DL for Computer Vision',
    description:
      'Translated Docusaurus sites using the internationalization support with more than 1 locale.',
    icon: <></>,
  },

  NLP: {
    label: 'NLP with Transformer',
    description:
      'Translated Docusaurus sites using the internationalization support with more than 1 locale.',
    icon: <></>,
  },
};

const PROJECT_FOLDER = 'https://github.com/opencampus-sh/ML-Projects/blob/main/src/data/nlp/code/';
// Add your site to this list
// prettier-ignore
const Users: User[] = [
  {
    title: 'Project title',
    preview: require('./img/logo_OC.png'),
    course: 'Course',
    semester: 'Semester',
    participants: 'Participants',
    description: 'Description',
    source: 'source',
    website: 'https://github.com/website.com',
    tags: ['favorite', 'opensource'],
  },
  {
    title: 'Study Recommender System with GPT-3',
    preview: require('./img/nlp/StudyRecommendationGPT3Project.png'),
    course: 'Natural Language Processing',
    semester: 'WiSe 20/21',
    participants: 'Jan Peter Prigge, Jan Deller, Erwin Smith',
    description: (
      <>
      How can we choose the best study program for us when there are so many choices?
      Jan, Jan and Erwin built a system using state of the art technology to recommend you the best choice based on what you are looking for.
      </>
    ),
    source: PROJECT_FOLDER + '/StudyRecommendationGPT3/StudyRecommenderSystemwithGPT-3.pdf',
    website: PROJECT_FOLDER + '/StudyRecommendationGPT3/StudyRecommenderSystemwithGPT-3.pdf',
    tags: ['NLP', 'opensource'],
  },
  {
    title: 'Fine-tuning GPT-2',
    preview: require('./img/nlp/gpt-2.png'),
    course: 'Natural Language Processing',
    semester: 'WiSe 20/21',
    participants: 'Steffen Brandt, Steffen Pohle, Atul Kumar Yadav, Jonas Peltner, Nicolas Steen, Philipp Seeler',
    description: (
      <>
      Can GPT-2 be fine-tuned to achieve GPT-3 like accuracies?
      The project fine-tuned different models and compared them on different tasks.
      </>
    ),
    source: 'https://github.com/steffen74/GPT-2',
    website: 'https://github.com/steffen74/GPT-2',
    tags: ['NLP', 'opensource'],
  },
  {
    title: 'Classification of illustrations in historic monographies',
    preview: require('./img/mlwt/Historic_illustrationProject.png'),
    course: 'Machine Learning with Tensorflow',
    semester: 'WiSe 20/21',
    participants: 'Irena Kampa',
    description: (
      <>
      Digitalizing old collections makes them available to a worldwide public.
      This project trains a CNN to identify illustrations in monographies from the 15th to the 18th century.
      </>
    ),
    source: PROJECT_FOLDER + 'Historic_illustration.ipynb',
    website: PROJECT_FOLDER + 'Historic_illustration.ipynb',
    tags: ['MLT', 'opensource'],
  },
  {
    title: 'Painting Classification',
    preview: require('./img/dlfs/PaintingClassificationProject.png'),
    course: 'Deep Learning from Scratch',
    semester: 'WiSe 20/21',
    participants: 'John Jay Kimani, Nils Berns',
    description: (
      <>
      Which artist painted this painting? Nils and John tried to answer this question using neural networks with different approaches, discover more in their presentation.
      </>
    ),
    source: PROJECT_FOLDER + 'PaintingClassification',
    website: PROJECT_FOLDER + 'PaintingClassification',
    tags: ['DLFS', 'opensource'],
  },
  {
    title: 'COVID-19 Detection on X-Ray Image',
    preview: require('./img/dlfs/COVID-19-Xray-Image-ClassificationProject.png'),
    course: 'Deep Learning from Scratch',semester: 'WiSe 20/21',
    participants: 'Mithun Das, Mohammad Wasif Islam, Rakibuzzaman Mahmud, Sarker Miraz Mahfuz',
    description: (
      <>
      Can we detect COVID from an X-Ray image of the lungs?
      It turns out we can, or better, a software can do that for us.
      This project achieved an accuracy of 0.9896 on this task!
      </>
    ),
    source: PROJECT_FOLDER + 'COVID-19-Xray-Image-Classification',
    website: PROJECT_FOLDER + 'COVID-19-Xray-Image-Classification',
    tags: ['DLFS', 'opensource'],
  },
  {
    title: 'Face Mask Recognition',
    preview: require('./img/dlfs/DeepLearningFaceMaskRecognitionProject.png'),
    course: 'Deep Learning from Scratch',semester: 'WiSe 20/21',
    participants: 'Adnan Nooruddin, Ravish Kumar, Christoph Eberz, Bennet Möller',
    description: (
      <>
      This project develops a detection system which tells from a picture whether the person is wearing a mask or not.
      </>
    ),
    source: PROJECT_FOLDER + 'FaceMaskRecognition',
    website: PROJECT_FOLDER + 'FaceMaskRecognition',
    tags: ['DLFS', 'opensource'],
  },
  {
    title: 'Bike Sharing Prediction (SprottenFlotte)',
    preview: require('./img/dlfs/BikeSharingPredictionProject.png'),
    course: 'Deep Learning from Scratch',semester: 'WiSe 20/21',
    participants: 'Andrej Ponomarenko, Daniel Michells',
    description: (
      <>
      Analyzing the SprottenFlotte data from Kiel, can we predict where will the next bike be borrowed? <i><b>Note</b>: the data for this project is private and cannot be shared, only the results.</i>
      </>
    ),
    source: PROJECT_FOLDER + 'BikeSharingPrediction',
    website: PROJECT_FOLDER + 'BikeSharingPrediction',
    tags: ['DLFS', 'opensource', 'company'],
  },
  {
    title: 'Disease Classification on Medical XRay Images',
    preview: require('./img/dlfs/DiseaseClassificationXRayProject.png'),
    course: 'Deep Learning from Scratch',
    semester: 'WiSe 20/21',
    participants: 'Sudesh Acharya',
    description: (
      <>
      Can a neural network distinguish different types of diseases just by looking at a single X-Ray image of the lungs?
      The project shows promising results in this direction.
      </>
    ),
    source: PROJECT_FOLDER + 'DiseaseClassificationXRay',
    website: PROJECT_FOLDER + 'DiseaseClassificationXRay',
    tags: ['DLFS', 'opensource'],
  },
  {
    title: 'Surf Spots Predictions (Windfinder)',
    preview: require('./img/dlfs/WindfinderProject.png'),
    course: 'Deep Learning from Scratch',
    semester: 'WiSe 20/21',
    participants: 'Lennart Petersen',
    description: (
      <>
      Predicting the best spot for surfing is a hard task, yet Lennart gave it a great shot and developed a model to predict it with 86% of accuracy. <i><b>Note</b>: the data for this project is private and cannot be shared, only the results.</i>
      </>
    ),
    source: PROJECT_FOLDER + 'windfinderNN.ipynb',
    website: PROJECT_FOLDER + 'windfinderNN.ipynb',
    tags: ['DLFS', 'opensource', 'company'],
  },
  {
    title: 'Image Segmentation',
    preview: require('./img/dlfs/ImageSegmentationProject.png'),
    course: 'Deep Learning from Scratch',
    semester: 'WiSe 20/21',
    participants: 'Yi-Jie Yang, Sebastian Koch, Erwin Smith, Suman Singha',
    description: (
      <>
      Segmentation is used to separate an object from the background.
      Using a U-Net the group was able to do some interesting work on a Kaggle Challenge.
      </>
    ),
    source: PROJECT_FOLDER + 'ImageSegmentation',
    website: PROJECT_FOLDER + 'ImageSegmentation',
    tags: ['DLFS', 'opensource'],
  },
  {
    title: 'Iceberg and Ship Detection in Radar Satellite Imagery',
    preview: require('./img/mlwt/ship_classification.png'),
    course: 'Machine Learning with Tensorflow',
    semester: 'WiSe 20/21',
    participants: 'Eike Schütt, Yi-Jie',
    description: (
      <>
      This project is aimed at building an algorithm able to detector for SAR imagery which finds and classifies ships, icebergs or unidentified objects.
      </>
    ),
    source: PROJECT_FOLDER + 'Ship_Iceberg_Classification.ipynb',
    website: PROJECT_FOLDER + 'Ship_Iceberg_Classification.ipynb',
    tags: ['MLT', 'opensource'],
  },
  {
    title: 'Writing System Recognition',
    preview: require('./img/mlwt/ScriptRecongitionProject.png'),
    course: 'Machine Learning with Tensorflow',
    semester: 'WiSe 20/21',
    participants: 'Manpreet Singh, Adnan Nooruddin, Rahima Akter, Sebastian Koch',
    description: (
      <>
      Can we detect different language from an image?
      Here a classifier which is able to distinguish Latin, Chines, Kyrillic and Georgian!
      </>
    ),
    source: PROJECT_FOLDER + 'ScriptRecongition',
    website: PROJECT_FOLDER + 'ScriptRecongition',
    tags: ['MLT', 'opensource'],
  },
  {
    title: 'Designing Airfoils',
    preview: require('./img/mlwt/AirfoilsDesignProject.png'),
    course: 'Machine Learning with Tensorflow',
    semester: 'WiSe 20/21',
    participants: 'Nils Berns, Violetta Germann',
    description: (
      <>
      Airfoils usually are designed using complex differential equations.
      Can we feed a NN with a set of 2D outline of airfoil profiles and let it learn?
      </>
    ),
    source: PROJECT_FOLDER + 'AirfoilsDesign/AirfoilDesign_presentation_final.ipynb',
    website: PROJECT_FOLDER + 'AirfoilsDesign/AirfoilDesign_presentation_final.ipynb',
    tags: ['MLT', 'opensource'],
  },
  {
    title: 'Music genre classification task',
    preview: require('./img/mlwt/MusicalGenreClassificationProject.png'),
    course: 'Machine Learning with Tensorflow',
    semester: 'WiSe 20/21',
    participants: 'Rakibuzzaman Mahmud, Sarker Miraz Mahfuz, Mohammad Wasif Islam',
    description: (
      <>
      Have ever had a discussion with your friends about the genre of a song?
      Here the solution: a neural network to automatically classify musical genre!
      </>
    ),
    source: PROJECT_FOLDER + 'MusicalGenreClassification',
    website: PROJECT_FOLDER + 'MusicalGenreClassification',
    tags: ['MLT', 'opensource'],
  },
  {
    title: 'Network traffic prediction',
    preview: require('./img/mlwt/NetworkTrafficPredictionProject.png'),
    course: 'Machine Learning with Tensorflow',
    semester: 'WiSe 20/21',
    participants: 'Mithra Gholami',
    description: (
      <>
      Internet traffic accounts for huge quantities of data, yet sometimes it's hard to make sense of them.
      This project aims at classifying network traffic using passive measurements of TCP connections.
      </>
    ),
    source: PROJECT_FOLDER + 'NetworkTrafficPrediction.ipynb',
    website: PROJECT_FOLDER + 'NetworkTrafficPrediction.ipynb',
    tags: ['MLT', 'opensource'],
  },
  {
    title: 'Predicting Bakery Turnover using AR-Net',
    preview: require('./img/mlwt/Predict-Bakery-Turnover-using-AR-Net-mainProject.png'),
    course: 'Machine Learning with Tensorflow',
    semester: 'WiSe 20/21',
    participants: 'Ravish Kumar, Modeus Abdelnaby',
    description: (
      <>
      How accurately can we predict the bakery turnover?
      This group got an auto-regressive neural network on this task!
      </>
    ),
    source: PROJECT_FOLDER + 'Predict-Bakery-Turnover-using-AR-Net-main/Predicting_Bakery_Turnover_AR-Net_Modelling-HyperparameterSearch.ipynb',
    website: PROJECT_FOLDER + 'Predict-Bakery-Turnover-using-AR-Net-main/Predicting_Bakery_Turnover_AR-Net_Modelling-HyperparameterSearch.ipynb',
    tags: ['MLT', 'opensource'],
  },
  {
    title: 'stock market news analysis by NLP',
    preview: require('./img/mlwt/News4MarketPredictionProject.png'),
    course: 'Machine Learning with Tensorflow',
    semester: 'WiSe 20/21',
    participants: 'Andrej Ponomarenko, Monfrared Gharibi Foorogh',
    description: (
      <>
      Are daily news correlated with the stock market?
      Can we use them to predict the market behaviour?
      Here some interesting attempts!
      </>
    ),
    source: PROJECT_FOLDER + 'News4MarketPrediction.ipynb',
    website: PROJECT_FOLDER + 'News4MarketPrediction.ipynb',
    tags: ['MLT', 'opensource'],
  },
  {
    title: 'Using containership positions (AIS) to predict export statistics',
    preview: require('./img/mlwt/AIS_predictionProject.png'),
    course: 'Machine Learning with Tensorflow',
    semester: 'WiSe 20/21',
    participants: 'Jakob Stender, Steffen Gans',
    description: (
      <>
      The project worked on training a nueral network for the prediction of unilateral export statistics using Neuralnet and AIS-Containership data
      </>
    ),
    source: PROJECT_FOLDER + 'AIS_prediction',
    website: PROJECT_FOLDER + 'AIS_prediction',
    tags: ['MLT', 'opensource'],
  },
  {
    title: 'Voice Detection (Classify Human based on Voice)',
    preview: require('./img/mlwt/voicedetection.jpg'),
    course: 'Machine Learning with Tensorflow',
    semester: 'WiSe 20/21',
    participants: 'Mutasim Fuad, Mithun Das, Rajib Chandra Das',
    description: (
      <>
      This group focused on voice detection and human classification based on the voice.
      </>
    ),
    source: PROJECT_FOLDER + 'VoiceDetection.ipynb',
    website: PROJECT_FOLDER + 'VoiceDetection.ipynb',
    tags: ['MLT', 'opensource'],
  },
  {
    title: 'Bakery Sales Prediction (G1)',
    preview: require('./img/dlfs/bakery_picture.png'),
    course: 'Deep Learning from Scratch',
    semester: 'SoSe 2021',
    participants: 'Johannes Dupont, Pavan Jethvani, Osama Alrabayah, Jannik Knopp',
    description: (
      <>
      Deep Learning project to predict future sales of a bakery store according to products.
      </>
    ),
    source: PROJECT_FOLDER + 'Bakery-Sales-project',
    website: PROJECT_FOLDER + 'Bakery-Sales-project',
    tags: ['DLFS', 'opensource'],
  },
  {
    title: 'Hydrochemistry Time Series',
    preview: require('./img/dlfs/hydro.png'),
    course: 'Deep Learning from Scratch',
    semester: 'SoSe 2021',
    participants: 'Julia Börth, Matthias Bressan, Irena Kampa, Wanja Böhme',
    description: (
      <>
      We try to predict the amount of chlorophyll-a using the Boknis Eck timeseries dataset.
      This dataset comprises a number of measurements performed in Boknis Eck, close to Eckernförde, over the course of 50 years.
      We use a three layered, dense neural network to predict our parameter.
      </>
    ),
    source: PROJECT_FOLDER + 'Hydrochemistry_TS',
    website: PROJECT_FOLDER + 'Hydrochemistry_TS',
    tags: ['DLFS', 'opensource'],
  },
  {
    title: 'Phishing Website Detection',
    preview: require('./img/dlfs/Phishing.jpg'),
    course: 'Deep Learning from Scratch',
    semester: 'SoSe 2021',
    participants: 'Anita Safi, Manikwadura Dilini Tharindika, Awais Khan Malik, Razeeb Sarker',
    description: (
      <>
      Using Natural Language Processing approach and by focusing on words in
      the address Bar, a Neural Network has been traind to detect Phishing
      and legitimate website.
      </>
    ),
    source: PROJECT_FOLDER + 'Physhing_Website_Detection',
    website: PROJECT_FOLDER + 'Physhing_Website_Detection',
    tags: ['DLFS', 'opensource'],
  },
  {
    title: 'Bakery Sales Prediction (G2)',
    preview: require('./img/dlfs/bp_g2.jpg'),
    course: 'Deep Learning from Scratch',
    semester: 'SoSe 2021',
    participants: 'Amelie Schmuecker, Samira Ferssioui, Niko Schmidt, Christopher Hansen',
    description: (
      <>
      Prediction of bakery sales based on Metolytix Dataset
      </>
    ),
    source: PROJECT_FOLDER + 'BakerySalesPrediction',
    website: PROJECT_FOLDER + 'BakerySalesPrediction',
    tags: ['DLFS', 'opensource'],
  },
  {
    title: 'Climate Change',
    preview: require('./img/dlfs/climate.png'),
    course: 'Deep Learning from Scratch',
    semester: 'SoSe 2021',
    participants: 'Vineet Shah, Shilpika Sarvepalli',
    description: (
      <>
      We try to simulate Climate Scenario Analysis using 3 different IPCC climate scenarios; RCP3PD, RCP4.5, and RCP6 and predict temperature for each scenario in the year 2100.
      </>
    ),
    source: PROJECT_FOLDER + 'Climate_Change',
    website: PROJECT_FOLDER + 'Climate_Change',
    tags: ['DLFS', 'opensource'],
  },
  {
    title: 'Fake News Detection',
    preview: require('./img/dlfs/fakenews2.png'),
    course: 'Deep Learning from Scratch',
    semester: 'SoSe 2021',
    participants: 'Farjana Islam, Junaid Abbas Mohammed, Md Majharul Islam Nayem',
    description: (
      <>
      This project uses a Fake and real news dataset from the Kaggle.  We implement a Feed Forward Neural Network and a LSTM techniques using TensorFlow to find the desired output for the project.
      </>
    ),
    source: PROJECT_FOLDER + 'FakeNewsDetector_G2',
    website: PROJECT_FOLDER + 'FakeNewsDetector_G2',
    tags: ['DLFS', 'opensource'],
  },
  {
    title: 'Surf Spot Prediction (Windfinder)',
    preview: require('./img/placeholder.png'),
    course: 'Deep Learning from Scratch',
    semester: 'SoSe 2021',
    participants: 'Kilian Köln',
    description: (
      <>
      A basic machine learning approch on predicting the pageviews for the windfinder website when provided with weatherdata. <i><b>Note</b>: the data for this project is private and cannot be shared, only the results.</i>
      </>
    ),
    source: PROJECT_FOLDER + 'Windfinder_So2021',
    website: PROJECT_FOLDER + 'Windfinder_So2021',
    tags: ['DLFS', 'opensource', 'company'],
  },
  {
    title: 'Generating Fake Chinese Characters by GAN',
    preview: require('./img/gan/Fake_Chinese_Character.png'),
    course: 'Generative Adversarial Networks',
    semester: 'SoSe 2021',
    participants: 'Anita Safi, Sebastian Koch',
    description: (
      <>
      The goal of this project was generating images of artificial / "fake" Chinese Characters by using a generative adversarial network (GAN) trained on a dataset of images containing real Chinese characters.
      </>
    ),
    source: PROJECT_FOLDER + 'Generating-Fake-Chinese-Characters-by-GAN',
    website: PROJECT_FOLDER + 'Generating-Fake-Chinese-Characters-by-GAN',
    tags: ['GAN', 'opensource'],
  },
  {
    title: 'Automated Essay Scoring',
    preview: require('./img/mlwt/ml_group_photo.jpg'),
    course: 'Machine Learning with Tensorflow',
    semester: 'SoSe 2021',
    participants: 'Sabrina Ludwig, Christopher Hansen, Christian Mayer, Kerstin Eilers',
    description: (
      <>
      Automated scoring of social study evaluation
      </>
    ),
    source: PROJECT_FOLDER + 'azubi_evaluation_ml_with_tensorflow',
    website: PROJECT_FOLDER + 'azubi_evaluation_ml_with_tensorflow',
    tags: ['MLT', 'opensource'],
  },
  {
    title: 'A Hybrid Approach to Predict Cryptocurrency Value',
    preview: require('./img/mlwt/Crypto_Price_Prediction.jpg'),
    course: 'Machine Learning with Tensorflow',
    semester: 'SoSe 2021',
    participants: 'Anita Safi, Rakeshwer Rakeshwer, Awais Khan Malik',
    description: (
      <>
      The goal of this project is to train a model which is able to classify if the value of specific cryptocurrency would rise or decline in the next day and would it be rational to buy or sell that crypto.
      </>
    ),
    source: PROJECT_FOLDER + 'Hybrid_Approach_to_Predict_Cryptocurrency_Value',
    website: PROJECT_FOLDER + 'Hybrid_Approach_to_Predict_Cryptocurrency_Value',
    tags: ['MLT', 'opensource'],
  },
  {
    title: 'Image classification for birds',
    preview: require('./img/mlwt/birds.png'),
    course: 'Machine Learning with Tensorflow',
    semester: 'SoSe 2021',
    participants: 'Esam Al Sakka, Kai Paulsen',
    description: (
      <>
      This project aimed to configure and train a network to predict the specie of a bird based on its image using different computer vision training techniques including CNN and transfer learning.
      </>
    ),
    source: PROJECT_FOLDER + 'image_classification_for_birds',
    website: PROJECT_FOLDER + 'image_classification_for_birds',
    tags: ['MLT', 'opensource'],
  },
  {
    title: 'GPT-NEO United Nations',
    preview: require('./img/placeholder.png'),
    course: 'Machine Learning with Tensorflow',
    semester: 'SoSe 2021',
    participants: 'Felix Gröner, Nils Axe',
    description: (
      <>
      The goal of this project is to finetune a generative pretrained transformer (GPT) and generate United Nations (UN) resolutions.
      </>
    ),
    source: PROJECT_FOLDER + 'UNxml_GPT-neo-main',
    website: PROJECT_FOLDER + 'UNxml_GPT-neo-main',
    tags: ['MLT', 'opensource'],
  },

  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const SortedUsers = sortUsers();

// Fail-fast on common errors
function ensureUserValid(user: User) {
  function checkFields() {
    const keys = Object.keys(user);
    const validKeys = [
      'title',
      'description',
      'course',
      'semester',
      'participants',
      'preview',
      'website',
      'source',
      'tags',
    ];
    const unknownKeys = difference(keys, validKeys);
    if (unknownKeys.length > 0) {
      throw new Error(
        `Site contains unknown attribute names=[${unknownKeys.join(',')}]`,
      );
    }
  }

  function checkTitle() {
    if (!user.title) {
      throw new Error('Site title is missing');
    }
  }

  function checkDescription() {
    if (!user.description) {
      throw new Error('Site description is missing');
    }
  }

  function checkWebsite() {
    if (!user.website) {
      throw new Error('Site website is missing');
    }
    const isHttpUrl =
      user.website.startsWith('http://') || user.website.startsWith('https://');
    if (!isHttpUrl) {
      throw new Error(
        `Site website does not look like a valid url: ${user.website}`,
      );
    }
  }

  function checkPreview() {
    if (
      !user.preview ||
      (user.preview instanceof String &&
        (user.preview.startsWith('http') || user.preview.startsWith('//')))
    ) {
      throw new Error(
        `Site has bad image preview=[${user.preview}].\nThe image should be hosted on Docusaurus site, and not use remote HTTP or HTTPS URLs`,
      );
    }
  }

  function checkTags() {
    if (
      !user.tags ||
      !(user.tags instanceof Array) ||
      (user.tags as string[]).includes('')
    ) {
      throw new Error(`Bad showcase tags=[${JSON.stringify(user.tags)}]`);
    }
    const unknownTags = difference(user.tags, TagList);
    if (unknownTags.length > 0) {
      throw new Error(
        `Unknown tags=[${unknownTags.join(
          ',',
        )}\nThe available tags are ${TagList.join(',')}`,
      );
    }
  }

  function checkML() {
    if (typeof user.source === 'undefined') {
      throw new Error(
        "The source attribute is required.\nIf your Docusaurus site is not open-source, please make it explicit with 'source: null'",
      );
    } else {
      const hasOpenSourceTag = user.tags.includes('opensource');
      if (user.source === null && hasOpenSourceTag) {
        throw new Error(
          "You can't add the opensource tag to a site that does not have a link to source code.",
        );
      } else if (user.source && !hasOpenSourceTag) {
        throw new Error(
          "For open-source sites, please add the opensource tag",
        );
      }
    }
  }

  try {
    checkFields();
    checkTitle();
    checkDescription();
    checkWebsite();
    checkPreview();
    checkTags();
    checkML();
  } catch (e) {
    throw new Error(
      `Showcase site with title=${user.title} contains errors:\n${e.message}`,
    );
  }
}

Users.forEach(ensureUserValid);
