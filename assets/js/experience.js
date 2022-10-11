AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/aiisc.png",
    place: "AIISC, University of South Carolina",
    time: "(Sep, 2022 - Present)",
    desp: "<li>Working on building a pretrained model for Joint Embedding of Visual & Textual Information.</li>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/IITJ.png",
    place: "IIT, Jodhpur & NBRC",
    time: "(May, 2022 - Aug, 2022)",
    desp: "<li>Working on unraveling uncertainty as a major underlying latent variable for explaining emotional dynamics.</li> <li>Devising improved sequence models(LSTMs, CNN-LSTMs, etc.), attaining low MSE of < 5 for multivariate BOLD time series predictions for each Brain ROIs, for quantifying uncertainty.</li> <li>Implementing modified dimension reduction techniques (T-PHATE, PHATE, T-PCA, t-SNE) for Brain image data in order to capture neural uncertainty representation.</li> <li>Identifying the Brain ROIs responsible for capturing uncertainty in both young and old subjects, as well as comparing the clarity of uncertainty representation in both.</li><li>Bayesian encoding, decoding and computational uncertainty estimations in a hierarchical neural architecture.</li> ",
  },
  {
    title: "Data Science Intern",
    cardImage: "assets/images/experience-page/PACA.jpg",
    place: "People Against Cyber Abuse(PACA)",
    time: "(Dec, 2021 - Jan, 2022)",
    desp: "<li>Worked on Exploratory Data Analysis, NLP and Statistical Inference drawn from survey response data on Cyber Abuse.</li><li>Applied NLP to extract positive and negative comments and come up with features characterising abusive nature.</li><li>Clustering of people based on their knowledge about Cyber Absue, opinions or solutions and groups or platforms prone to Cyber Abuse.</li><li>The objective of this study was to come up with a social model to identify and curb the instances of cyber abuse.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Quantum Computing with IBM Quantum 2022-23",
    cardImage: "assets/images/experience-page/QxQIBMQC.png",
    description:
      "2 semester long long detailed theoretical and applied Quantum Computing with quantum algorithm development.",
    link: "https://www.qubitbyqubit.org/course-info",
    certificate: "https://drive.google.com/file/d/1caZHvdJwRPyQY7ruBHI_GRYpsrDYpcKb/view",
  },
  {
    title: "Summer School on AI: With Focus on CV and ML",
    cardImage: "assets/images/experience-page/SSAI2022.png",
    description:
      "1 month long discussions on applied ML, DL, CV and Image & Video-Processing techniques.",
    link: "http://cvit.iiit.ac.in/summerschool2022/",
    certificate: "https://drive.google.com/file/d/18R9Zj1jtMGQMaAWaV-nbY3QudKHKwXUA/view"
  },
  {
    title: "IIIT-Hyderabad Advanced Summer School on NLP 2022",
    cardImage: "assets/images/experience-page/IASNLP2022.png",
    description:
      "1 month long discussions on NLP, computational linguistic and speech-processing along with applied project on Indian Languages.",
    link: "https://ltrc.iiit.ac.in/iasnlp2022/",
    certificate: "https://drive.google.com/file/d/1Pa18JXUNgIQidlNnD36mtHH9vwBjqW86/view",
  },
  {
    title: "Winter School for Deep Learning 2022",
    cardImage: "assets/images/experience-page/WSDL22.jpg",
    description:
      "3 months long detailed mathematical and applied deep learning methods with focus on NLP, ML Theory, XAI and GANs.",
    link: "https://www.isical.ac.in/~ecsu/?q=node/106",
    certificate: "https://drive.google.com/file/d/1caZHvdJwRPyQY7ruBHI_GRYpsrDYpcKb/view",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description, link, certificate }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <a href="${link}"><h2 class="volunteerTitle">${title}</h2></a><br>
          <p class="copy">${description}</p>
      </div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

// Add when you have experience later -- UNCOMMENT BELOW 
const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Datathon@IndoML22",
    subtitle: "September-October 2022",
    image: "assets/images/experience-page/IndoML22.png",
    desp: "Secured a rank in top 20 out of more than 100 teams working on a Computer Vision problem of classifying scanned document images into 16 categories as a part of IndoML22 conference's Datathon challenge.",
    link: "https://sites.google.com/view/datathonindoml/home"
  },
  {
    title: "To Be Updated...",
    subtitle: "Working on it...",
    image: "assets/images/experience-page/experience.svg",
    desp: "More stuffs coming soon...",
    link: "#"
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, link}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${link}" class="blog-slider__button" target="_blank">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
