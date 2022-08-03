AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/tensorflow.png",
    langName: "TensorFlow",
    langDesc: "<li>TensorFlow is a free and open-source software library for machine learning and artificial intelligence. It can be used across a range of tasks but has a particular focus on training and inference of deep neural networks</li>",
  },
  {
    langImage: "assets/images/techstack-page/pytorch.png",
    langName: "PyTorch",
    langDesc: "<li>PyTorch is an open source machine learning framework based on the Torch library, used for applications such as computer vision and natural language processing</li>",
  },
  {
    langImage: "assets/images/techstack-page/numpy.png",
    langName: "NumPy",
    langDesc: "<li>NumPy is a library for the Python programming language, adding support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays</li>",
  },
  {
    langImage: "assets/images/techstack-page/pandas.png",
    langName: "Pandas",
    langDesc: "<li>Pandas is a software library written for the Python programming language for data manipulation and analysis. In particular, it offers data structures and operations for manipulating numerical tables and time series</li>",
  },
  {
    langImage: "assets/images/techstack-page/matplotlib.png",
    langName: "Matplotlib",
    langDesc: "<li>Matplotlib is a plotting library for the Python programming language and its numerical mathematics extension NumPy.</li>",
  },
  {
    langImage: "assets/images/techstack-page/seaborn.png",
    langName: "Seaborn",
    langDesc: "<li>Seaborn is a Python data visualization library based on matplotlib. It provides a high-level interface for drawing attractive and informative statistical graphics</li>",
  },
  {
    langImage: "assets/images/techstack-page/tidyverse.png",
    langName: "Tidyverse",
    langDesc: "<li>The tidyverse is an opinionated collection of R packages designed for data science. All packages share an underlying design philosophy, grammar, and data structures</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python, the emerging high-level language for all cutting edge scientific and technical researches in data science, machine learning and deep learning as well as deployment</li>",
  },

  {
    langImage: "assets/images/techstack-page/r-logo.jpg",
    langName: "R",
    langDesc: "<li>R is a programming language for statistical computing and graphics which provides lots of statistical analysis libraries and produces highly quality data visualisations, reports, web apps and even books</li>",
  },
  {
    langImage: "assets/images/techstack-page/r-studio.png",
    langName: "RStudio",
    langDesc: "<li>RStudio is an integrated development environment for R, which is highly customisable and helps in deployment and analysis using R as well as underlying support for other languages like Python, C, CPP, HTML</li>",
  },
  {
    langImage: "assets/images/techstack-page/posit.png",
    langName: "Posit",
    langDesc: "<li>Posit, previously RStudio, provides support for both R and Python and hence brings the power to develop applications, reports utilising the power of both R and Python</li>",
  },
  {
    langImage: "assets/images/techstack-page/latex.png",
    langName: "Latex",
    langDesc: "<li>LaTeX is a software system for document preparation and helps in producing scientific papers, reports, books for journals, conferences and research works along with wide variety of templates</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage:"assets/images/techstack-page/c.png",
    langName:"C",
    langDesc:"<li>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion</li>"
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes</li>",
  }
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
