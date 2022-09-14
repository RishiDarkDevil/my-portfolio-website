AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Scanned Document Classification",
    cardImage: "assets/images/project-page/doc-class.png",
    description: "Classifying scanned documents into 16 categories using CV, DL and ML for better document information retrieval.",
    tagimg: "",
    Previewlink: "https://github.com/RishiDarkDevil/Document-Classification/blob/main/EfficientNet-4Piece-Model-Embed-Visualization.ipynb",
    Githublink: "https://github.com/RishiDarkDevil/Document-Classification",
  },
  {
    title: "Neural Uncertainty Representation",
    cardImage: "assets/images/project-page/Neural-Unc-Rep.jpg",
    description: "Unraveling uncertainty as a major underlying latent variable for explaining emotional dynamics using ML, DL, Computational Neuroscience.",
    tagimg: "",
    Previewlink: "https://github.com/RishiDarkDevil/Neural-Uncertainty-Representation/blob/main/README.md",
    Githublink: "https://github.com/RishiDarkDevil/Neural-Uncertainty-Representation/",
  },
  {
    title: "Neural Machine Translation",
    cardImage: "assets/images/project-page/machine-translation.png",
    description: "Exploring baseline transformer models to translate sentences of English to Bengali.",
    tagimg: "",
    Previewlink: "https://github.com/RishiDarkDevil/Neural-Machine-Translation-English-Bengali/blob/main/README.md",
    Githublink: "https://github.com/RishiDarkDevil/Neural-Machine-Translation-English-Bengali/",
  },
  {
    title: "AI Fairness",
    cardImage: "assets/images/project-page/Fairness-Image.jpg",
    description: "Implementing ML Fairness algorithms like regularisation, re-weighting, suppression, LFR and coming up with a new definition of fairness",
    tagimg:"",
    Previewlink: "https://github.com/RishiDarkDevil/Regularization-Based-Fair-Classifier/blob/main/Fair-Classifier.ipynb",
    Githublink: "https://github.com/RishiDarkDevil/Regularization-Based-Fair-Classifier/",
  },
  {
    title: "Pro-Environmental Attitude Analysis",
    cardImage: "assets/images/project-page/pro-env.jpg",
    description: "Analysis of pro-environmental attitude among college students of India and suggesting necessary measures.",
    tagimg: "",
    Previewlink: "https://rishidarkdevil.github.io/Pro-Environmental-Attitude-Analysis/",
    Githublink: "https://github.com/RishiDarkDevil/Pro-Environmental-Attitude-Analysis",
  },
  {
    title: "Digit Span Test",
    cardImage: "assets/images/project-page/Short-Term-Memory.png",
    description: "R Shiny Webapp to conduct and provide dashboard results for Digit Span Test measuring Short-Term Memory Capacity.",
    tagimg: "",
    Previewlink: "https://rishidarkdevil.shinyapps.io/Digit-Span-Test/",
    Githublink: "https://github.com/RishiDarkDevil/Digit-Span-Test",
  },
  {
    title: "Image Segmentation",
    cardImage: "assets/images/project-page/brain_segemented-1.png",
    description: "Expectation-Maximization Algorithm with Gaussian Mixture Model for Image Segmentation.",
    tagimg: "",
    Previewlink: "https://rishidarkdevil.github.io/Image-Segmentation/Image-Segmentation.html",
    Githublink: "https://rishidarkdevil.github.io/Image-Segmentation/",
  },
  {
    title: "Video Background Subtraction",
    cardImage: "assets/images/project-page/background_sep_frame_plot-1.png",
    description: "A fast video background subtraction for surveillance videos using Kernel Density Estimation and thresholding.",
    tagimg: "",
    Previewlink: "https://rishidarkdevil.github.io/Background-Subtraction-KDE/Background-Separation.html",
    Githublink: "https://github.com/RishiDarkDevil/Background-Subtraction-KDE",
  },
  {
    title: "Alzheimer's Disease Data Analysis",
    cardImage: "assets/images/project-page/Alzheimers2.jpg",
    description: "Logistic Regression identifying genes responsible for AD with 92.8% accuracy, 94.7% sensitivity and 90.5% specificity.",
    tagimg: "",
    Previewlink: "https://rishidarkdevil.github.io/Alzheimers-Disease-Data-Analysis/Data-Analysis.html",
    Githublink: "https://rishidarkdevil.github.io/Alzheimers-Disease-Data-Analysis/",
  },
  {
    title: "Air Quality During COVID-19 in India",
    cardImage: "assets/images/project-page/AQI.jpg",
    description: "Air Quality Index data analysis of 4 major Indian cities, including inference and modelling to investigate drop in pollution.",
    tagimg: "",
    Previewlink: "https://rishidarkdevil.github.io/Stats_Project_AQI_2021/Analysis_Report.html",
    Githublink: "https://github.com/RishiDarkDevil/Stats_Project_AQI_2021",
  },
  {
    title: "Face Recognition Psychology",
    cardImage: "assets/images/project-page/face.jpg",
    description: "Psychological analysis of face recognition abilities and tendency among humans",
    tagimg: "",
    Previewlink: "https://rishidarkdevil.github.io/Face-Recognition-Psychology/",
    Githublink: "https://github.com/RishiDarkDevil/Face-Recognition-Psychology",
  },
  {
    title: "Matrix Ops & Physics Simulations",
    cardImage: "assets/images/project-page/NumAna.JPG",
    description: "Matrix Manipulations and Computational Physics simulation with advanced mathematical modelling techniques.",
    tagimg:"",
    Previewlink: "https://rishidarkdevil.github.io/Numerical_Analysis_Projects/",
    Githublink: "https://github.com/RishiDarkDevil/Numerical_Analysis_Projects",
  },
  {
    title: "Eigenvalues & Eigenvectors, PCA",
    cardImage: "assets/images/project-page/eigen.png",
    description: "Eigenvalues and Eigenvector calculation of covariance matrix using several techniques.",
    tagimg: "",
    Previewlink: "https://github.com/RishiDarkDevil/Eigenvalues/blob/main/README.md",
    Githublink: "https://github.com/RishiDarkDevil/Eigenvalues",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, tagimg, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
              </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
